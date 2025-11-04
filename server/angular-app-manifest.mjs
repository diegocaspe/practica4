
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://diegocaspe.github.io/practica4/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/practica4"
  },
  {
    "renderMode": 2,
    "route": "/practica4/about"
  },
  {
    "renderMode": 2,
    "route": "/practica4/products"
  },
  {
    "renderMode": 2,
    "route": "/practica4/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/practica4",
    "route": "/practica4/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1264, hash: '641a6b91cc7fbe5d1ff5f2c338c7ea8c3b9205bb73985418c8b1b3261a3cdb80', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1515, hash: 'e886db1facfbfbde3b44915bf513516a722e8a4719cdf312dcf53af80186caea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6424, hash: '0c890660a558a55fc403507a7d9458752e4c0b8ec699e8c55d88fe950480f427', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 4229, hash: 'a6a4328050799afdc26c93b3f732c684902c931b9de75fabf593f780d1d38269', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 4232, hash: 'ac8ee6fb3527cac8ce1589e53edcba6ecebfd6b2b8fc5080eeae4665ef500e14', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 4223, hash: 'f669735803b5035f2b0fe5f7783b2d56033c8952a2a938d17cc6960003096416', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-J5VKUGND.css': {size: 152, hash: 'MZxK7nUqm6k', text: () => import('./assets-chunks/styles-J5VKUGND_css.mjs').then(m => m.default)}
  },
};
