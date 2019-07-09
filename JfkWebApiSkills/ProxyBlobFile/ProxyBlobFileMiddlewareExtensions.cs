using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProxyBlobFile
{
    public static class ProxyBlobFileMiddlewareExtensions
    {
        public static IServiceCollection AddProxyBlobFile(this IServiceCollection services)
        {
            return services.AddMemoryCache();
        }

        public static IApplicationBuilder UseProxyBlobFile (this IApplicationBuilder builder)
        {
            return builder.UseMiddleware<ProxyBlobFileMiddleware>();
        }
    }
}
