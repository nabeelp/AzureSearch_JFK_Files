import * as React from 'react';
const styles = require('./style.scss');

interface Props {
  className: string;
}

export const SBSASvg: React.StatelessComponent<Props> = (props) => (

	<svg className={`${styles.logo} ${props.className}`} xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192.756 192.756"><g fill-rule="evenodd" clip-rule="evenodd"><path fill="#fff" fill-opacity="0" d="M0 0h192.756v192.756H0V0z"/><path fill="#fff" d="M8.504 69.771h175.748v53.214H8.504V69.771z"/><path fill="#276fb3" d="M9.588 70.938h173.58v50.881H9.588V70.938z"/><path d="M76.762 106.132h3.814c1.496 0 2.521.647 2.521 2.275 0 1.65-1.204 2.096-2.587 2.096h-3.748v-4.371zm-3.501 7.094h7.717c2.878 0 5.622-1.384 5.622-4.618 0-1.984-.982-3.479-2.922-4.038 1.382-.669 2.162-1.762 2.162-3.322 0-2.969-2.052-3.949-5.087-3.949h-7.492v15.927zm3.501-13.206h3.278c1.249 0 2.409.312 2.409 1.828 0 1.34-.914 1.896-2.142 1.896h-3.546v-3.724h.001zM95.802 108.765c0 .691-.089 2.653-2.564 2.653-1.027 0-1.942-.29-1.942-1.473 0-1.161.892-1.493 1.874-1.695.981-.178 2.098-.2 2.633-.668v1.183h-.001zm-4.149-3.526c.111-1.249.892-1.738 2.097-1.738 1.115 0 2.052.201 2.052 1.559 0 1.295-1.807 1.229-3.747 1.518-1.963.269-3.926.893-3.926 3.503 0 2.362 1.739 3.456 3.926 3.456 1.405 0 2.876-.379 3.88-1.427.023.38.112.759.224 1.116h3.212c-.289-.469-.402-1.518-.402-2.566v-5.999c0-2.767-2.766-3.278-5.063-3.278-2.588 0-5.241.892-5.42 3.857h3.167v-.001zM101.42 113.226h3.166v-6.047c0-2.341.738-3.3 2.457-3.3 1.471 0 2.029.937 2.029 2.833v6.514h3.166v-7.094c0-2.855-.846-4.75-4.215-4.75-1.338 0-2.723.623-3.525 1.917h-.066v-1.606h-3.012v11.533zM114.93 113.226h3.166v-3.971l1.228-1.183 3.166 5.154h3.836l-4.84-7.296 4.35-4.238h-3.748l-3.992 4.151v-8.545h-3.166v15.928zM72.256 86.704c-.045 3.926 3.256 5.665 6.781 5.665 4.327 0 6.624-2.185 6.624-5.108 0-3.613-3.569-4.349-4.729-4.638-3.992-1.026-4.749-1.183-4.749-2.409 0-1.339 1.293-1.808 2.409-1.808 1.672 0 3.033.49 3.144 2.409h3.39c0-3.681-3.054-5.131-6.378-5.131-2.879 0-5.956 1.562-5.956 4.819 0 2.99 2.387 3.905 4.75 4.529 2.343.625 4.729.913 4.729 2.631 0 1.629-1.874 1.986-3.101 1.986-1.874 0-3.524-.825-3.524-2.944h-3.39v-.001zM91.415 77.001h-3.167v3.458h-1.919v2.119h1.919v6.803c0 2.297 1.696 2.744 3.636 2.744.625 0 1.315-.023 1.852-.113v-2.475a5.011 5.011 0 0 1-.982.089c-1.071 0-1.338-.268-1.338-1.339v-5.71h2.32v-2.119h-2.32v-3.457h-.001zM102.426 87.529c0 .691-.092 2.655-2.566 2.655-1.027 0-1.939-.29-1.939-1.473 0-1.16.891-1.494 1.871-1.695.982-.179 2.098-.2 2.635-.668v1.181h-.001zm-4.149-3.525c.109-1.25.891-1.739 2.094-1.739 1.117 0 2.055.2 2.055 1.561 0 1.295-1.809 1.227-3.75 1.518-1.962.268-3.925.892-3.925 3.502 0 2.363 1.741 3.457 3.925 3.457 1.406 0 2.881-.379 3.881-1.428.023.38.113.758.225 1.115h3.213c-.289-.467-.402-1.517-.402-2.564v-5.999c0-2.767-2.768-3.281-5.064-3.281-2.586 0-5.241.892-5.419 3.859h3.167v-.001zM108.043 91.989h3.166v-6.045c0-2.34.736-3.301 2.455-3.301 1.471 0 2.031.938 2.031 2.834v6.512h3.164v-7.093c0-2.855-.848-4.751-4.215-4.751-1.338 0-2.721.625-3.523 1.919h-.066v-1.606h-3.012v11.531zM129.492 91.989h3.012V76.063h-3.166v5.799h-.047.021c-.736-1.137-2.074-1.718-3.434-1.718-3.389 0-5.109 2.878-5.109 5.978 0 3.189 1.695 6.18 5.176 6.18 1.471 0 2.768-.535 3.502-1.784h.045v1.471zm-.045-5.799c0 1.896-.625 3.726-2.721 3.726-1.963 0-2.789-1.896-2.789-3.704 0-1.895.713-3.68 2.789-3.68 2.051 0 2.721 1.785 2.721 3.658zM142.062 87.529c0 .691-.088 2.655-2.564 2.655-1.025 0-1.941-.29-1.941-1.473 0-1.16.895-1.494 1.875-1.695.982-.179 2.096-.2 2.631-.668v1.181h-.001zm-4.148-3.525c.113-1.25.895-1.739 2.096-1.739 1.117 0 2.053.2 2.053 1.561 0 1.295-1.805 1.227-3.744 1.518-1.965.268-3.928.892-3.928 3.502 0 2.363 1.74 3.457 3.928 3.457 1.404 0 2.875-.379 3.879-1.428.023.38.113.758.223 1.115h3.211c-.289-.467-.398-1.517-.398-2.564v-5.999c0-2.767-2.766-3.281-5.064-3.281-2.588 0-5.242.892-5.42 3.859h3.164v-.001zM147.68 91.989h3.17v-5.196c0-2.029.803-3.703 3.123-3.703.379 0 .846.045 1.137.112v-2.945a2.36 2.36 0 0 0-.689-.112c-1.541 0-3.102 1.003-3.684 2.455h-.043v-2.141h-3.014v11.53zM164.182 91.989h3.01V76.063h-3.166v5.799h-.045.021c-.736-1.137-2.072-1.718-3.434-1.718-3.391 0-5.109 2.878-5.109 5.978 0 3.189 1.695 6.18 5.176 6.18 1.471 0 2.766-.535 3.502-1.784h.045v1.471zm-.045-5.799c0 1.896-.625 3.726-2.721 3.726-1.963 0-2.787-1.896-2.787-3.704 0-1.895.713-3.68 2.787-3.68 2.051 0 2.721 1.785 2.721 3.658zM29.32 109.378a7.951 7.951 0 0 1-3.82-6.79V81.342c0-2.935 2.398-5.305 5.33-5.305h21.224a5.311 5.311 0 0 1 5.312 5.312l-.01 21.244a7.941 7.941 0 0 1-3.791 6.776l-6.188 3.761-8.427-16.555a6.043 6.043 0 0 1 3.366-1.019c.697 0 1.365.123 1.989.336l3.141 1.061a6.214 6.214 0 0 0 6.384-1.533l.002-9.27a10.587 10.587 0 0 1-5.295 1.411c-1.085 0-2.133-.162-3.12-.464l-2.908-.9a9.718 9.718 0 0 0-2.814-.414 9.65 9.65 0 0 0-5.396 1.651l-.666-1.309-.005-1.764a.872.872 0 0 0-.343-.712l-3.529-2.661a.463.463 0 0 0-.263-.078.442.442 0 0 0-.442.441v4.421c0 .292.146.542.364.704l1.432 1.062 13.859 27.201-3.263 1.993-12.123-7.354zm-.262-17.534l9.798 19.228-7.707-4.724a4.427 4.427 0 0 1-2.095-3.763l.004-10.741zm19.751 16.267l2.908-1.759a4.41 4.41 0 0 0 2.104-3.767v-2.808a9.699 9.699 0 0 1-4.4 1.048 9.695 9.695 0 0 1-5.037-1.401l4.425 8.687zm5.018-26.464a7.065 7.065 0 0 1-7.383 2.051l-2.911-.886a13.318 13.318 0 0 0-6.76-.248 4.432 4.432 0 0 0-1.385-1.726l-1.682-1.267 18.344.002c.977 0 1.773.798 1.773 1.776v.319l.004-.021z" fill="#fff"/></g></svg>
)
