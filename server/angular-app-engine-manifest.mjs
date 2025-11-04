
export default {
  basePath: 'https://diegocaspe.github.io/practica4',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
