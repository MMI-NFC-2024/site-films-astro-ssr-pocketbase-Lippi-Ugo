import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_3O-NvYJL.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/authpassword.astro.mjs');
const _page2 = () => import('./pages/calculatrice.astro.mjs');
const _page3 = () => import('./pages/films/edit/_---id_.astro.mjs');
const _page4 = () => import('./pages/films/roles/_idfilm_.astro.mjs');
const _page5 = () => import('./pages/films/supprimer-film/_idfilm_.astro.mjs');
const _page6 = () => import('./pages/films/supprimer-role/_idfilm_-_idrole_.astro.mjs');
const _page7 = () => import('./pages/films/_id_-_nom_slug_.astro.mjs');
const _page8 = () => import('./pages/films.astro.mjs');
const _page9 = () => import('./pages/personnes/edit/_---id_.astro.mjs');
const _page10 = () => import('./pages/personnes/supprimer-personne/_idpersonne_.astro.mjs');
const _page11 = () => import('./pages/personnes/_id_-_nom_slug_.astro.mjs');
const _page12 = () => import('./pages/personnes.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/authPassword.astro", _page1],
    ["src/pages/calculatrice.astro", _page2],
    ["src/pages/films/edit/[...id].astro", _page3],
    ["src/pages/films/roles/[idFilm].astro", _page4],
    ["src/pages/films/supprimer-film/[idFilm].astro", _page5],
    ["src/pages/films/supprimer-role/[idFilm]-[idRole].astro", _page6],
    ["src/pages/films/[id]-[nom_slug].astro", _page7],
    ["src/pages/films/index.astro", _page8],
    ["src/pages/personnes/edit/[...id].astro", _page9],
    ["src/pages/personnes/supprimer-personne/[idPersonne].astro", _page10],
    ["src/pages/personnes/[id]-[nom_slug].astro", _page11],
    ["src/pages/personnes/index.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "068e84b2-ea7f-4c13-ac1d-647252e839ea"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
