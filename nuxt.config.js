export default {
  target: "server",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "원철",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/oneiron.png" },
      {
        rel: "stylesheet",
        href: "https://hangeul.pstatic.net/hangeul_static/css/nanum-square.css",
      },
      {rel:"preconnect", href:"https://fonts.googleapis.com"},
      {rel:"preconnect", href:"https://fonts.gstatic.com"},
      {rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,800;1,900&display=swap"},

      // font-family: 'NanumSquareLight';
      // font-family: 'NanumSquare';
      // font-family: 'NanumSquareBold';
      // font-family: 'NanumSquareExtraBold';
      // font-family: 'NanumSquareAcb';
      // font-family: 'NanumSquareAceb';
      // font-family: 'NanumSquareAcl';
      // font-family: 'NanumSquareAcr';
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxt/content"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  content: {
    // Disable for security reason on CodeSandBox
    liveEdit: false,
  },

  // server: {
  //   host: "0.0.0.0"
  // },
};
