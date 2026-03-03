import { d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, g as createAstro, j as renderComponent, k as Fragment } from '../../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_voo7Tuos.mjs';
import { $ as $$ImgPb, a as formatAnnee, b as formatPays, c as formatProfessions } from '../../chunks/ImgPb_ggtGv_Bq.mjs';
import 'clsx';
import slug from 'slug';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$LinkPersonneSimple = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkPersonneSimple;
  const { personne } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/personnes/${personne.id}-${slug((personne.prenom ? personne.prenom + " " : "") + (personne.nom ?? "Inconnu"))}`, "href")} class="text-blue-600 hover:text-blue-800 hover:underline"> ${personne.prenom} ${personne.nom} </a>`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/LinkPersonneSimple.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$idnomSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idnomSlug;
  const { id } = Astro2.params;
  const film = await Astro2.locals.pb.collection("Film").getOne(id, {
    expand: "realisateur,producteur,scenariste,Role_via_film.acteur"
  });
  return renderTemplate`<!-- <Debug {film}/> -->${renderComponent($$result, "Layout", $$Layout, { "titre": film.titre }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto"> <a href="/films" class="inline-flex items-center text-slate-600 hover:text-blue-600 mb-8 transition-colors font-medium">
← Retour aux films
</a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-10"> <div class="lg:col-span-1"> <div class="rounded-lg overflow-hidden shadow-xl bg-slate-200"> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": film, "field": "affiche", "classPicture": "w-full h-full", "classImg": "w-full h-auto object-cover", "thumb": "400x600" })} </div> ${Astro2.locals.pb.authStore.record?.id === film.user && renderTemplate`<div class="mt-6 space-y-3 mx-auto"> <a${addAttribute(`/films/edit/${film.id}`, "href")} class="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors">
Modifier le film
</a> <a${addAttribute(`/films/roles/${id}`, "href")} class="flex items-center justify-center gap-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors">
Ajouter un rôle
</a> <a${addAttribute(`/films/supprimer-film/${id}`, "href")} class="flex items-center justify-center gap-2 w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
Supprimer le film
</a> </div>`} </div> <div class="lg:col-span-2"> <h1 class="text-5xl font-bold mb-8 text-slate-900"> ${film.titre} </h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"> ${film.date_sortie && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Année de sortie
</p> <p class="text-slate-900 font-medium"> ${formatAnnee(film.date_sortie)} </p> </div>`} ${film.pays_origine && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Pays d'origine
</p> <p class="text-slate-900 font-medium"> ${formatPays(film.pays_origine)} </p> </div>`} ${film.duree_min && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Durée
</p> <p class="text-slate-900 font-medium"> ${film.duree_min} minutes
</p> </div>`} ${film.genres && film.genres.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Genre${film.genres.length > 1 ? "s" : ""} </p> <p class="text-slate-900 font-medium"> ${formatProfessions(film.genres)} </p> </div>`} ${film.expand?.realisateur && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Réalisateur
</p> <p class="text-slate-900 font-medium"> ${renderComponent($$result2, "LinkPersonneSimple", $$LinkPersonneSimple, { "personne": film.expand.realisateur })} </p> </div>`} ${film.expand?.scenariste && film.expand.scenariste.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Scénariste${film.expand.scenariste.length > 1 ? "s" : ""} </p> <p class="text-slate-900 font-medium"> ${film.expand.scenariste.map(
    (scenariste, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "LinkPersonneSimple", $$LinkPersonneSimple, { "personne": scenariste })} ${index < film.expand.scenariste.length - 1 && (index === film.expand.scenariste.length - 2 ? " et " : ", ")}` })}`
  )} </p> </div>`} ${film.expand?.producteur && film.expand.producteur.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Producteur${film.expand.producteur.length > 1 ? "s" : ""} </p> <p class="text-slate-900 font-medium"> ${film.expand.producteur.map(
    (producteur, index) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "LinkPersonneSimple", $$LinkPersonneSimple, { "personne": producteur })} ${index < film.expand.producteur.length - 1 && (index === film.expand.producteur.length - 2 ? " et " : ", ")}` })}`
  )} </p> </div>`} </div> ${film.expand?.Role_via_film && film.expand.Role_via_film.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200 mb-10"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Distribution
</p> <ul class="text-slate-900 font-medium space-y-2"> ${film.expand.Role_via_film.map((role) => renderTemplate`<li class="flex items-center justify-between"> <div> ${role.expand?.acteur && renderTemplate`${renderComponent($$result2, "LinkPersonneSimple", $$LinkPersonneSimple, { "personne": role.expand.acteur })}`} - <span class="text-slate-600">${role.nom}</span> </div> ${Astro2.locals.pb.authStore.record?.id === film.user && renderTemplate`<a${addAttribute(`/films/supprimer-role/${film.id}-${role.id}`, "href")} class="ml-4 text-red-600 hover:text-red-800 text-sm font-medium transition-colors">
Supprimer
</a>`} </li>`)} </ul> </div>`} ${film.synopsis && renderTemplate`<div class="bg-white p-8 rounded-lg shadow-md border border-slate-200"> <h2 class="text-2xl font-bold text-slate-900 mb-4">
Synopsis
</h2> <div class="prose prose-slate max-w-none prose-p:text-slate-700"> <p>${film.synopsis}</p> </div> </div>`} </div> </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/[id]-[nom_slug].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/[id]-[nom_slug].astro";
const $$url = "/films/[id]-[nom_slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$idnomSlug,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
