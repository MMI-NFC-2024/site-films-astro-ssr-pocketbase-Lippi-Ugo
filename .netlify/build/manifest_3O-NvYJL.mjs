import 'piccolore';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_Cq9nmc9H.mjs';
import 'clsx';
import './chunks/shared_B6bdXPNh.mjs';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/","cacheDir":"file:///C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/node_modules/.astro/","outDir":"file:///C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/dist/","srcDir":"file:///C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/","publicDir":"file:///C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/public/","buildClientDir":"file:///C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/dist/","buildServerDir":"file:///C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/authpassword","isIndex":false,"type":"page","pattern":"^\\/authPassword\\/?$","segments":[[{"content":"authPassword","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/authPassword.astro","pathname":"/authPassword","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/calculatrice","isIndex":false,"type":"page","pattern":"^\\/calculatrice\\/?$","segments":[[{"content":"calculatrice","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/calculatrice.astro","pathname":"/calculatrice","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"},{"type":"external","src":"/_astro/_id_.DHc6NpEv.css"}],"routeData":{"route":"/films/edit/[...id]","isIndex":false,"type":"page","pattern":"^\\/films\\/edit(?:\\/(.*?))?\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"edit","dynamic":false,"spread":false}],[{"content":"...id","dynamic":true,"spread":true}]],"params":["...id"],"component":"src/pages/films/edit/[...id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/films/roles/[idfilm]","isIndex":false,"type":"page","pattern":"^\\/films\\/roles\\/([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"roles","dynamic":false,"spread":false}],[{"content":"idFilm","dynamic":true,"spread":false}]],"params":["idFilm"],"component":"src/pages/films/roles/[idFilm].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/films/supprimer-film/[idfilm]","isIndex":false,"type":"page","pattern":"^\\/films\\/supprimer-film\\/([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"supprimer-film","dynamic":false,"spread":false}],[{"content":"idFilm","dynamic":true,"spread":false}]],"params":["idFilm"],"component":"src/pages/films/supprimer-film/[idFilm].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/films/supprimer-role/[idfilm]-[idrole]","isIndex":false,"type":"page","pattern":"^\\/films\\/supprimer-role\\/([^/]+?)-([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"supprimer-role","dynamic":false,"spread":false}],[{"content":"idFilm","dynamic":true,"spread":false},{"content":"-","dynamic":false,"spread":false},{"content":"idRole","dynamic":true,"spread":false}]],"params":["idFilm","idRole"],"component":"src/pages/films/supprimer-role/[idFilm]-[idRole].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/films/[id]-[nom_slug]","isIndex":false,"type":"page","pattern":"^\\/films\\/([^/]+?)-([^/]+?)\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false},{"content":"-","dynamic":false,"spread":false},{"content":"nom_slug","dynamic":true,"spread":false}]],"params":["id","nom_slug"],"component":"src/pages/films/[id]-[nom_slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/films","isIndex":true,"type":"page","pattern":"^\\/films\\/?$","segments":[[{"content":"films","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/films/index.astro","pathname":"/films","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/personnes/edit/[...id]","isIndex":false,"type":"page","pattern":"^\\/personnes\\/edit(?:\\/(.*?))?\\/?$","segments":[[{"content":"personnes","dynamic":false,"spread":false}],[{"content":"edit","dynamic":false,"spread":false}],[{"content":"...id","dynamic":true,"spread":true}]],"params":["...id"],"component":"src/pages/personnes/edit/[...id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/personnes/supprimer-personne/[idpersonne]","isIndex":false,"type":"page","pattern":"^\\/personnes\\/supprimer-personne\\/([^/]+?)\\/?$","segments":[[{"content":"personnes","dynamic":false,"spread":false}],[{"content":"supprimer-personne","dynamic":false,"spread":false}],[{"content":"idPersonne","dynamic":true,"spread":false}]],"params":["idPersonne"],"component":"src/pages/personnes/supprimer-personne/[idPersonne].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/personnes/[id]-[nom_slug]","isIndex":false,"type":"page","pattern":"^\\/personnes\\/([^/]+?)-([^/]+?)\\/?$","segments":[[{"content":"personnes","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false},{"content":"-","dynamic":false,"spread":false},{"content":"nom_slug","dynamic":true,"spread":false}]],"params":["id","nom_slug"],"component":"src/pages/personnes/[id]-[nom_slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/personnes","isIndex":true,"type":"page","pattern":"^\\/personnes\\/?$","segments":[[{"content":"personnes","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/personnes/index.astro","pathname":"/personnes","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/authPassword.D9pks6zX.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/authPassword.astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/calculatrice.astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/[id]-[nom_slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/edit/[...id].astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/roles/[idFilm].astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/supprimer-film/[idFilm].astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/supprimer-role/[idFilm]-[idRole].astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/[id]-[nom_slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/edit/[...id].astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/supprimer-personne/[idPersonne].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/authPassword@_@astro":"pages/authpassword.astro.mjs","\u0000@astro-page:src/pages/calculatrice@_@astro":"pages/calculatrice.astro.mjs","\u0000@astro-page:src/pages/films/edit/[...id]@_@astro":"pages/films/edit/_---id_.astro.mjs","\u0000@astro-page:src/pages/films/roles/[idFilm]@_@astro":"pages/films/roles/_idfilm_.astro.mjs","\u0000@astro-page:src/pages/films/supprimer-film/[idFilm]@_@astro":"pages/films/supprimer-film/_idfilm_.astro.mjs","\u0000@astro-page:src/pages/films/supprimer-role/[idFilm]-[idRole]@_@astro":"pages/films/supprimer-role/_idfilm_-_idrole_.astro.mjs","\u0000@astro-page:src/pages/films/[id]-[nom_slug]@_@astro":"pages/films/_id_-_nom_slug_.astro.mjs","\u0000@astro-page:src/pages/films/index@_@astro":"pages/films.astro.mjs","\u0000@astro-page:src/pages/personnes/edit/[...id]@_@astro":"pages/personnes/edit/_---id_.astro.mjs","\u0000@astro-page:src/pages/personnes/supprimer-personne/[idPersonne]@_@astro":"pages/personnes/supprimer-personne/_idpersonne_.astro.mjs","\u0000@astro-page:src/pages/personnes/[id]-[nom_slug]@_@astro":"pages/personnes/_id_-_nom_slug_.astro.mjs","\u0000@astro-page:src/pages/personnes/index@_@astro":"pages/personnes.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_3O-NvYJL.mjs","C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/node_modules/unstorage/drivers/netlify-blobs.mjs":"chunks/netlify-blobs_DM36vZAS.mjs","C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/ComponentCalculatrice.vue":"_astro/ComponentCalculatrice.BOc3Ovtd.js","C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/SelectPersonne.vue":"_astro/SelectPersonne.DMHfqD1i.js","@astrojs/vue/client.js":"_astro/client.CU2zmaCT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/authPassword.D9pks6zX.css","/_astro/_id_.DHc6NpEv.css","/favicon.ico","/favicon.svg","/_astro/client.CU2zmaCT.js","/_astro/ComponentCalculatrice.BOc3Ovtd.js","/_astro/runtime-core.esm-bundler.CYUOulZS.js","/_astro/runtime-dom.esm-bundler.oCfMLgEl.js","/_astro/SelectPersonne.DMHfqD1i.js","/_astro/_plugin-vue_export-helper.DlAUqK2U.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"V2f/zvOfgX3ShaRigL6FucSB/KSkQAFHnRXJs0pcFwA=","sessionConfig":{"driver":"netlify-blobs","options":{"name":"astro-sessions","consistency":"strong"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/netlify-blobs_DM36vZAS.mjs');

export { manifest };
