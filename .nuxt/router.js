import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a316062 = () => interopDefault(import('..\\pages\\calendar\\index.vue' /* webpackChunkName: "pages/calendar/index" */))
const _b29081f0 = () => interopDefault(import('..\\pages\\chat\\index.vue' /* webpackChunkName: "pages/chat/index" */))
const _1248004c = () => interopDefault(import('..\\pages\\account\\forgot-password.vue' /* webpackChunkName: "pages/account/forgot-password" */))
const _2bd5037e = () => interopDefault(import('..\\pages\\account\\login.vue' /* webpackChunkName: "pages/account/login" */))
const _f01b06c4 = () => interopDefault(import('..\\pages\\account\\register.vue' /* webpackChunkName: "pages/account/register" */))
const _f1490e98 = () => interopDefault(import('..\\pages\\auth\\lock-screen.vue' /* webpackChunkName: "pages/auth/lock-screen" */))
const _8f33b09a = () => interopDefault(import('..\\pages\\auth\\login-1.vue' /* webpackChunkName: "pages/auth/login-1" */))
const _260979e3 = () => interopDefault(import('..\\pages\\auth\\recoverpwd.vue' /* webpackChunkName: "pages/auth/recoverpwd" */))
const _7d98e6a6 = () => interopDefault(import('..\\pages\\auth\\register.vue' /* webpackChunkName: "pages/auth/register" */))
const _3ce1ef11 = () => interopDefault(import('..\\pages\\auth\\register-1.vue' /* webpackChunkName: "pages/auth/register-1" */))
const _caf50944 = () => interopDefault(import('..\\pages\\calendar\\data-calendar.js' /* webpackChunkName: "pages/calendar/data-calendar" */))
const _609805c9 = () => interopDefault(import('..\\pages\\charts\\apex\\index.vue' /* webpackChunkName: "pages/charts/apex/index" */))
const _2d21383f = () => interopDefault(import('..\\pages\\charts\\chartist\\index.vue' /* webpackChunkName: "pages/charts/chartist/index" */))
const _544243fc = () => interopDefault(import('..\\pages\\charts\\chartjs\\index.vue' /* webpackChunkName: "pages/charts/chartjs/index" */))
const _6ecff3b2 = () => interopDefault(import('..\\pages\\charts\\echart\\index.vue' /* webpackChunkName: "pages/charts/echart/index" */))
const _0cec43aa = () => interopDefault(import('..\\pages\\chat\\data.js' /* webpackChunkName: "pages/chat/data" */))
const _2d1b1cbb = () => interopDefault(import('..\\pages\\contacts\\grid.vue' /* webpackChunkName: "pages/contacts/grid" */))
const _6a5ad613 = () => interopDefault(import('..\\pages\\contacts\\list.vue' /* webpackChunkName: "pages/contacts/list" */))
const _aafbb678 = () => interopDefault(import('..\\pages\\contacts\\profile.vue' /* webpackChunkName: "pages/contacts/profile" */))
const _3fa46236 = () => interopDefault(import('..\\pages\\ecommerce\\add-product.vue' /* webpackChunkName: "pages/ecommerce/add-product" */))
const _44a99224 = () => interopDefault(import('..\\pages\\ecommerce\\cart.vue' /* webpackChunkName: "pages/ecommerce/cart" */))
const _377afb14 = () => interopDefault(import('..\\pages\\ecommerce\\checkout.vue' /* webpackChunkName: "pages/ecommerce/checkout" */))
const _a70c9612 = () => interopDefault(import('..\\pages\\ecommerce\\customers.vue' /* webpackChunkName: "pages/ecommerce/customers" */))
const _14c093a6 = () => interopDefault(import('..\\pages\\ecommerce\\data-products.js' /* webpackChunkName: "pages/ecommerce/data-products" */))
const _17a73eb3 = () => interopDefault(import('..\\pages\\ecommerce\\orders.vue' /* webpackChunkName: "pages/ecommerce/orders" */))
const _1dd04032 = () => interopDefault(import('..\\pages\\ecommerce\\products.vue' /* webpackChunkName: "pages/ecommerce/products" */))
const _51505ddf = () => interopDefault(import('..\\pages\\ecommerce\\shops.vue' /* webpackChunkName: "pages/ecommerce/shops" */))
const _02386dbc = () => interopDefault(import('..\\pages\\email\\data-inbox.js' /* webpackChunkName: "pages/email/data-inbox" */))
const _07c49dcc = () => interopDefault(import('..\\pages\\email\\inbox.vue' /* webpackChunkName: "pages/email/inbox" */))
const _4cac43d3 = () => interopDefault(import('..\\pages\\email\\sidepanel.vue' /* webpackChunkName: "pages/email/sidepanel" */))
const _c4255e7e = () => interopDefault(import('..\\pages\\email\\toolbar.vue' /* webpackChunkName: "pages/email/toolbar" */))
const _85890670 = () => interopDefault(import('..\\pages\\form\\advanced.vue' /* webpackChunkName: "pages/form/advanced" */))
const _3d6e0413 = () => interopDefault(import('..\\pages\\form\\editor.vue' /* webpackChunkName: "pages/form/editor" */))
const _123b39c6 = () => interopDefault(import('..\\pages\\form\\elements.vue' /* webpackChunkName: "pages/form/elements" */))
const _792e5d92 = () => interopDefault(import('..\\pages\\form\\mask.vue' /* webpackChunkName: "pages/form/mask" */))
const _ac359da4 = () => interopDefault(import('..\\pages\\form\\repeater.vue' /* webpackChunkName: "pages/form/repeater" */))
const _e894f2b2 = () => interopDefault(import('..\\pages\\form\\upload.vue' /* webpackChunkName: "pages/form/upload" */))
const _4bd0ce1f = () => interopDefault(import('..\\pages\\form\\validation.vue' /* webpackChunkName: "pages/form/validation" */))
const _4d24f911 = () => interopDefault(import('..\\pages\\form\\wizard.vue' /* webpackChunkName: "pages/form/wizard" */))
const _f11ce052 = () => interopDefault(import('..\\pages\\icons\\boxicons.vue' /* webpackChunkName: "pages/icons/boxicons" */))
const _38c73236 = () => interopDefault(import('..\\pages\\icons\\data-fontawesome.js' /* webpackChunkName: "pages/icons/data-fontawesome" */))
const _07ea6b46 = () => interopDefault(import('..\\pages\\icons\\data-material.js' /* webpackChunkName: "pages/icons/data-material" */))
const _1a8d278d = () => interopDefault(import('..\\pages\\icons\\dripicons.vue' /* webpackChunkName: "pages/icons/dripicons" */))
const _79036988 = () => interopDefault(import('..\\pages\\icons\\fontawesome.vue' /* webpackChunkName: "pages/icons/fontawesome" */))
const _29c2ea4d = () => interopDefault(import('..\\pages\\icons\\materialdesign.vue' /* webpackChunkName: "pages/icons/materialdesign" */))
const _13ea13a9 = () => interopDefault(import('..\\pages\\icons\\unicons.vue' /* webpackChunkName: "pages/icons/unicons" */))
const _2c5aa719 = () => interopDefault(import('..\\pages\\invoices\\detail.vue' /* webpackChunkName: "pages/invoices/detail" */))
const _c8308634 = () => interopDefault(import('..\\pages\\invoices\\list.vue' /* webpackChunkName: "pages/invoices/list" */))
const _5305d032 = () => interopDefault(import('..\\pages\\maps\\google.vue' /* webpackChunkName: "pages/maps/google" */))
const _7eef0bae = () => interopDefault(import('..\\pages\\maps\\leaflet\\index.vue' /* webpackChunkName: "pages/maps/leaflet/index" */))
const _91cd13ae = () => interopDefault(import('..\\pages\\tables\\advanced.vue' /* webpackChunkName: "pages/tables/advanced" */))
const _3cbb71b7 = () => interopDefault(import('..\\pages\\tables\\basic.vue' /* webpackChunkName: "pages/tables/basic" */))
const _559966c4 = () => interopDefault(import('..\\pages\\tables\\dataAdvancedtable.js' /* webpackChunkName: "pages/tables/dataAdvancedtable" */))
const _3c7996e6 = () => interopDefault(import('..\\pages\\ui\\alerts.vue' /* webpackChunkName: "pages/ui/alerts" */))
const _16f3bb0a = () => interopDefault(import('..\\pages\\ui\\buttons.vue' /* webpackChunkName: "pages/ui/buttons" */))
const _14234c46 = () => interopDefault(import('..\\pages\\ui\\cards.vue' /* webpackChunkName: "pages/ui/cards" */))
const _d157b154 = () => interopDefault(import('..\\pages\\ui\\carousel.vue' /* webpackChunkName: "pages/ui/carousel" */))
const _87a18a34 = () => interopDefault(import('..\\pages\\ui\\colors.vue' /* webpackChunkName: "pages/ui/colors" */))
const _c2376cf2 = () => interopDefault(import('..\\pages\\ui\\dropdown.vue' /* webpackChunkName: "pages/ui/dropdown" */))
const _de893f3c = () => interopDefault(import('..\\pages\\ui\\general.vue' /* webpackChunkName: "pages/ui/general" */))
const _1c0d6588 = () => interopDefault(import('..\\pages\\ui\\grid.vue' /* webpackChunkName: "pages/ui/grid" */))
const _19513bee = () => interopDefault(import('..\\pages\\ui\\images.vue' /* webpackChunkName: "pages/ui/images" */))
const _1d401c6b = () => interopDefault(import('..\\pages\\ui\\lightbox.vue' /* webpackChunkName: "pages/ui/lightbox" */))
const _192feddc = () => interopDefault(import('..\\pages\\ui\\modals.vue' /* webpackChunkName: "pages/ui/modals" */))
const _64385e6d = () => interopDefault(import('..\\pages\\ui\\placeholder.vue' /* webpackChunkName: "pages/ui/placeholder" */))
const _43b6e640 = () => interopDefault(import('..\\pages\\ui\\progressbar.vue' /* webpackChunkName: "pages/ui/progressbar" */))
const _298c7bd8 = () => interopDefault(import('..\\pages\\ui\\rangeslider.vue' /* webpackChunkName: "pages/ui/rangeslider" */))
const _2a335eda = () => interopDefault(import('..\\pages\\ui\\rating.vue' /* webpackChunkName: "pages/ui/rating" */))
const _e8a3298e = () => interopDefault(import('..\\pages\\ui\\sweet-alert.vue' /* webpackChunkName: "pages/ui/sweet-alert" */))
const _7431a358 = () => interopDefault(import('..\\pages\\ui\\tabs-accordions.vue' /* webpackChunkName: "pages/ui/tabs-accordions" */))
const _06565c25 = () => interopDefault(import('..\\pages\\ui\\typography.vue' /* webpackChunkName: "pages/ui/typography" */))
const _52f13af5 = () => interopDefault(import('..\\pages\\ui\\video.vue' /* webpackChunkName: "pages/ui/video" */))
const _351a68ae = () => interopDefault(import('..\\pages\\utility\\404.vue' /* webpackChunkName: "pages/utility/404" */))
const _69c845eb = () => interopDefault(import('..\\pages\\utility\\500.vue' /* webpackChunkName: "pages/utility/500" */))
const _b8600514 = () => interopDefault(import('..\\pages\\utility\\comingsoon.vue' /* webpackChunkName: "pages/utility/comingsoon" */))
const _44020717 = () => interopDefault(import('..\\pages\\utility\\faqs.vue' /* webpackChunkName: "pages/utility/faqs" */))
const _276a6f09 = () => interopDefault(import('..\\pages\\utility\\maintenance.vue' /* webpackChunkName: "pages/utility/maintenance" */))
const _341ca93c = () => interopDefault(import('..\\pages\\utility\\pricing.vue' /* webpackChunkName: "pages/utility/pricing" */))
const _f2e084f6 = () => interopDefault(import('..\\pages\\utility\\starter.vue' /* webpackChunkName: "pages/utility/starter" */))
const _69e0103b = () => interopDefault(import('..\\pages\\utility\\timeline.vue' /* webpackChunkName: "pages/utility/timeline" */))
const _249ee12c = () => interopDefault(import('..\\pages\\charts\\apex\\data.js' /* webpackChunkName: "pages/charts/apex/data" */))
const _98c38dbc = () => interopDefault(import('..\\pages\\charts\\chartist\\data.js' /* webpackChunkName: "pages/charts/chartist/data" */))
const _4e5fc62b = () => interopDefault(import('..\\pages\\charts\\chartjs\\BarChart.vue' /* webpackChunkName: "pages/charts/chartjs/BarChart" */))
const _f4ae9c08 = () => interopDefault(import('..\\pages\\charts\\chartjs\\DonutChart.vue' /* webpackChunkName: "pages/charts/chartjs/DonutChart" */))
const _10bced5a = () => interopDefault(import('..\\pages\\charts\\chartjs\\LineChart.vue' /* webpackChunkName: "pages/charts/chartjs/LineChart" */))
const _0cfcae5c = () => interopDefault(import('..\\pages\\charts\\chartjs\\PieChart.vue' /* webpackChunkName: "pages/charts/chartjs/PieChart" */))
const _fb8bfd40 = () => interopDefault(import('..\\pages\\charts\\chartjs\\PolarChart.vue' /* webpackChunkName: "pages/charts/chartjs/PolarChart" */))
const _0583e2d0 = () => interopDefault(import('..\\pages\\charts\\chartjs\\RadarChart.vue' /* webpackChunkName: "pages/charts/chartjs/RadarChart" */))
const _409b3555 = () => interopDefault(import('..\\pages\\charts\\echart\\data.js' /* webpackChunkName: "pages/charts/echart/data" */))
const _49c9a90a = () => interopDefault(import('..\\pages\\maps\\leaflet\\basic.vue' /* webpackChunkName: "pages/maps/leaflet/basic" */))
const _c0345404 = () => interopDefault(import('..\\pages\\maps\\leaflet\\boundary.vue' /* webpackChunkName: "pages/maps/leaflet/boundary" */))
const _072cdb74 = () => interopDefault(import('..\\pages\\maps\\leaflet\\geometry.vue' /* webpackChunkName: "pages/maps/leaflet/geometry" */))
const _5d3bd1f6 = () => interopDefault(import('..\\pages\\maps\\leaflet\\icons.vue' /* webpackChunkName: "pages/maps/leaflet/icons" */))
const _7ce0e9d5 = () => interopDefault(import('..\\pages\\maps\\leaflet\\markers.vue' /* webpackChunkName: "pages/maps/leaflet/markers" */))
const _5c1d91cd = () => interopDefault(import('..\\pages\\ecommerce\\product-detail\\_id.vue' /* webpackChunkName: "pages/ecommerce/product-detail/_id" */))
const _770362de = () => interopDefault(import('..\\pages\\email\\reademail\\_id.vue' /* webpackChunkName: "pages/email/reademail/_id" */))
const _0181f540 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calendar",
    component: _1a316062,
    name: "calendar"
  }, {
    path: "/chat",
    component: _b29081f0,
    name: "chat"
  }, {
    path: "/account/forgot-password",
    component: _1248004c,
    name: "account-forgot-password"
  }, {
    path: "/account/login",
    component: _2bd5037e,
    name: "account-login"
  }, {
    path: "/account/register",
    component: _f01b06c4,
    name: "account-register"
  }, {
    path: "/auth/lock-screen",
    component: _f1490e98,
    name: "auth-lock-screen"
  }, {
    path: "/auth/login-1",
    component: _8f33b09a,
    name: "auth-login-1"
  }, {
    path: "/auth/recoverpwd",
    component: _260979e3,
    name: "auth-recoverpwd"
  }, {
    path: "/auth/register",
    component: _7d98e6a6,
    name: "auth-register"
  }, {
    path: "/auth/register-1",
    component: _3ce1ef11,
    name: "auth-register-1"
  }, {
    path: "/calendar/data-calendar",
    component: _caf50944,
    name: "calendar-data-calendar"
  }, {
    path: "/charts/apex",
    component: _609805c9,
    name: "charts-apex"
  }, {
    path: "/charts/chartist",
    component: _2d21383f,
    name: "charts-chartist"
  }, {
    path: "/charts/chartjs",
    component: _544243fc,
    name: "charts-chartjs"
  }, {
    path: "/charts/echart",
    component: _6ecff3b2,
    name: "charts-echart"
  }, {
    path: "/chat/data",
    component: _0cec43aa,
    name: "chat-data"
  }, {
    path: "/contacts/grid",
    component: _2d1b1cbb,
    name: "contacts-grid"
  }, {
    path: "/contacts/list",
    component: _6a5ad613,
    name: "contacts-list"
  }, {
    path: "/contacts/profile",
    component: _aafbb678,
    name: "contacts-profile"
  }, {
    path: "/ecommerce/add-product",
    component: _3fa46236,
    name: "ecommerce-add-product"
  }, {
    path: "/ecommerce/cart",
    component: _44a99224,
    name: "ecommerce-cart"
  }, {
    path: "/ecommerce/checkout",
    component: _377afb14,
    name: "ecommerce-checkout"
  }, {
    path: "/ecommerce/customers",
    component: _a70c9612,
    name: "ecommerce-customers"
  }, {
    path: "/ecommerce/data-products",
    component: _14c093a6,
    name: "ecommerce-data-products"
  }, {
    path: "/ecommerce/orders",
    component: _17a73eb3,
    name: "ecommerce-orders"
  }, {
    path: "/ecommerce/products",
    component: _1dd04032,
    name: "ecommerce-products"
  }, {
    path: "/ecommerce/shops",
    component: _51505ddf,
    name: "ecommerce-shops"
  }, {
    path: "/email/data-inbox",
    component: _02386dbc,
    name: "email-data-inbox"
  }, {
    path: "/email/inbox",
    component: _07c49dcc,
    name: "email-inbox"
  }, {
    path: "/email/sidepanel",
    component: _4cac43d3,
    name: "email-sidepanel"
  }, {
    path: "/email/toolbar",
    component: _c4255e7e,
    name: "email-toolbar"
  }, {
    path: "/form/advanced",
    component: _85890670,
    name: "form-advanced"
  }, {
    path: "/form/editor",
    component: _3d6e0413,
    name: "form-editor"
  }, {
    path: "/form/elements",
    component: _123b39c6,
    name: "form-elements"
  }, {
    path: "/form/mask",
    component: _792e5d92,
    name: "form-mask"
  }, {
    path: "/form/repeater",
    component: _ac359da4,
    name: "form-repeater"
  }, {
    path: "/form/upload",
    component: _e894f2b2,
    name: "form-upload"
  }, {
    path: "/form/validation",
    component: _4bd0ce1f,
    name: "form-validation"
  }, {
    path: "/form/wizard",
    component: _4d24f911,
    name: "form-wizard"
  }, {
    path: "/icons/boxicons",
    component: _f11ce052,
    name: "icons-boxicons"
  }, {
    path: "/icons/data-fontawesome",
    component: _38c73236,
    name: "icons-data-fontawesome"
  }, {
    path: "/icons/data-material",
    component: _07ea6b46,
    name: "icons-data-material"
  }, {
    path: "/icons/dripicons",
    component: _1a8d278d,
    name: "icons-dripicons"
  }, {
    path: "/icons/fontawesome",
    component: _79036988,
    name: "icons-fontawesome"
  }, {
    path: "/icons/materialdesign",
    component: _29c2ea4d,
    name: "icons-materialdesign"
  }, {
    path: "/icons/unicons",
    component: _13ea13a9,
    name: "icons-unicons"
  }, {
    path: "/invoices/detail",
    component: _2c5aa719,
    name: "invoices-detail"
  }, {
    path: "/invoices/list",
    component: _c8308634,
    name: "invoices-list"
  }, {
    path: "/maps/google",
    component: _5305d032,
    name: "maps-google"
  }, {
    path: "/maps/leaflet",
    component: _7eef0bae,
    name: "maps-leaflet"
  }, {
    path: "/tables/advanced",
    component: _91cd13ae,
    name: "tables-advanced"
  }, {
    path: "/tables/basic",
    component: _3cbb71b7,
    name: "tables-basic"
  }, {
    path: "/tables/dataAdvancedtable",
    component: _559966c4,
    name: "tables-dataAdvancedtable"
  }, {
    path: "/ui/alerts",
    component: _3c7996e6,
    name: "ui-alerts"
  }, {
    path: "/ui/buttons",
    component: _16f3bb0a,
    name: "ui-buttons"
  }, {
    path: "/ui/cards",
    component: _14234c46,
    name: "ui-cards"
  }, {
    path: "/ui/carousel",
    component: _d157b154,
    name: "ui-carousel"
  }, {
    path: "/ui/colors",
    component: _87a18a34,
    name: "ui-colors"
  }, {
    path: "/ui/dropdown",
    component: _c2376cf2,
    name: "ui-dropdown"
  }, {
    path: "/ui/general",
    component: _de893f3c,
    name: "ui-general"
  }, {
    path: "/ui/grid",
    component: _1c0d6588,
    name: "ui-grid"
  }, {
    path: "/ui/images",
    component: _19513bee,
    name: "ui-images"
  }, {
    path: "/ui/lightbox",
    component: _1d401c6b,
    name: "ui-lightbox"
  }, {
    path: "/ui/modals",
    component: _192feddc,
    name: "ui-modals"
  }, {
    path: "/ui/placeholder",
    component: _64385e6d,
    name: "ui-placeholder"
  }, {
    path: "/ui/progressbar",
    component: _43b6e640,
    name: "ui-progressbar"
  }, {
    path: "/ui/rangeslider",
    component: _298c7bd8,
    name: "ui-rangeslider"
  }, {
    path: "/ui/rating",
    component: _2a335eda,
    name: "ui-rating"
  }, {
    path: "/ui/sweet-alert",
    component: _e8a3298e,
    name: "ui-sweet-alert"
  }, {
    path: "/ui/tabs-accordions",
    component: _7431a358,
    name: "ui-tabs-accordions"
  }, {
    path: "/ui/typography",
    component: _06565c25,
    name: "ui-typography"
  }, {
    path: "/ui/video",
    component: _52f13af5,
    name: "ui-video"
  }, {
    path: "/utility/404",
    component: _351a68ae,
    name: "utility-404"
  }, {
    path: "/utility/500",
    component: _69c845eb,
    name: "utility-500"
  }, {
    path: "/utility/comingsoon",
    component: _b8600514,
    name: "utility-comingsoon"
  }, {
    path: "/utility/faqs",
    component: _44020717,
    name: "utility-faqs"
  }, {
    path: "/utility/maintenance",
    component: _276a6f09,
    name: "utility-maintenance"
  }, {
    path: "/utility/pricing",
    component: _341ca93c,
    name: "utility-pricing"
  }, {
    path: "/utility/starter",
    component: _f2e084f6,
    name: "utility-starter"
  }, {
    path: "/utility/timeline",
    component: _69e0103b,
    name: "utility-timeline"
  }, {
    path: "/charts/apex/data",
    component: _249ee12c,
    name: "charts-apex-data"
  }, {
    path: "/charts/chartist/data",
    component: _98c38dbc,
    name: "charts-chartist-data"
  }, {
    path: "/charts/chartjs/BarChart",
    component: _4e5fc62b,
    name: "charts-chartjs-BarChart"
  }, {
    path: "/charts/chartjs/DonutChart",
    component: _f4ae9c08,
    name: "charts-chartjs-DonutChart"
  }, {
    path: "/charts/chartjs/LineChart",
    component: _10bced5a,
    name: "charts-chartjs-LineChart"
  }, {
    path: "/charts/chartjs/PieChart",
    component: _0cfcae5c,
    name: "charts-chartjs-PieChart"
  }, {
    path: "/charts/chartjs/PolarChart",
    component: _fb8bfd40,
    name: "charts-chartjs-PolarChart"
  }, {
    path: "/charts/chartjs/RadarChart",
    component: _0583e2d0,
    name: "charts-chartjs-RadarChart"
  }, {
    path: "/charts/echart/data",
    component: _409b3555,
    name: "charts-echart-data"
  }, {
    path: "/maps/leaflet/basic",
    component: _49c9a90a,
    name: "maps-leaflet-basic"
  }, {
    path: "/maps/leaflet/boundary",
    component: _c0345404,
    name: "maps-leaflet-boundary"
  }, {
    path: "/maps/leaflet/geometry",
    component: _072cdb74,
    name: "maps-leaflet-geometry"
  }, {
    path: "/maps/leaflet/icons",
    component: _5d3bd1f6,
    name: "maps-leaflet-icons"
  }, {
    path: "/maps/leaflet/markers",
    component: _7ce0e9d5,
    name: "maps-leaflet-markers"
  }, {
    path: "/ecommerce/product-detail/:id?",
    component: _5c1d91cd,
    name: "ecommerce-product-detail-id"
  }, {
    path: "/email/reademail/:id?",
    component: _770362de,
    name: "email-reademail-id"
  }, {
    path: "/",
    component: _0181f540,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
