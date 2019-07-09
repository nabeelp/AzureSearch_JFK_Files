using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;

namespace ProxyBlobFile
{
    public class ProxyBlobFileMiddleware
    {
        private readonly RequestDelegate _next;
        private readonly ILogger<ProxyBlobFileMiddleware> _logger;
        private readonly IHostingEnvironment _env;
        private readonly IMemoryCache _memoryCache;
        IConfiguration _config;

        public ProxyBlobFileMiddleware(RequestDelegate next, IHostingEnvironment env, ILogger<ProxyBlobFileMiddleware> logger, IMemoryCache memoryCache, IConfiguration config)
        {
            _next = next;
            _env = env;
            _logger = logger;
            _memoryCache = memoryCache;
            _config = config;
        }

        public async Task Invoke(HttpContext context)
        {
            // hand to next middleware if we are not dealing with an image
            if (context.Request.Path.Value.StartsWith("/api/"))
            {
                await _next.Invoke(context);
                return;
            }
            else
            {
                try
                {
                    // Get the blob path being requested and remove the first "/"
                    string blobPath = context.Request.Path.Value.Remove(0, 1);

                    // Get the blob from blob storage.
                    // TODO: Change this to use AD auth instead
                    var blobConnection = _config.GetValue<string>("BlobConnectionString");
                    CloudStorageAccount.TryParse(blobConnection, out var storageAccount);
                    var blobStorage = storageAccount.CreateCloudBlobClient();
                    ICloudBlob blob = blobStorage.GetBlobReferenceFromServer(new Uri(blobStorage.BaseUri.OriginalString + blobPath));

                    // Read blob content to response.
                    context.Response.Clear();
                    blob.FetchAttributes();

                    context.Response.ContentType = blob.Properties.ContentType;
                    blob.DownloadToStream(context.Response.Body);
                }
                catch (Exception ex)
                {
                    Debug.WriteLine(ex.ToString());
                    throw new HttpResponseException(System.Net.HttpStatusCode.NotFound);
                }
                //context.Response.End();
            }
        }
    }
}
