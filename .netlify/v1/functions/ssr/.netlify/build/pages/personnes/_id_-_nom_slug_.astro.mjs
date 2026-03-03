import { d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, g as createAstro, j as renderComponent, k as Fragment } from '../../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_voo7Tuos.mjs';
import { $ as $$ImgPb, d as formatDateLong, e as calculerAge, g as formatNationalite, c as formatProfessions } from '../../chunks/ImgPb_ggtGv_Bq.mjs';
import 'clsx';
import slug from 'slug';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$LinkListeFilm = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkListeFilm;
  const { films } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul> ${films.map((film) => renderTemplate`<li> <a${addAttribute(`/films/${film.id}-${slug(film.titre ?? "Inconnu")}`, "href")}> ${film.titre} </a> </li>`)} </ul>`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/LinkListeFilm.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$idnomSlug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idnomSlug;
  const { id } = Astro2.params;
  const personne = await Astro2.locals.pb.collection("Personne").getOne(id, {
    expand: "Film_via_realisateur,Film_via_producteur,Film_via_scenariste,Role_via_acteur.film"
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": personne.nom }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-6xl mx-auto"> <a href="/personnes" class="inline-flex items-center text-slate-600 hover:text-blue-600 mb-8 transition-colors font-medium">
← Retour aux artistes
</a> <div class="grid grid-cols-1 lg:grid-cols-3 gap-10"> <div class="lg:col-span-1"> <div class="rounded-lg overflow-hidden shadow-xl bg-slate-200"> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": personne, "field": "photo", "classPicture": "w-full h-full", "classImg": "w-full h-auto object-cover", "thumb": "400x600" })} </div> ${Astro2.locals.pb.authStore.record?.id === personne.user && renderTemplate`<div class="mt-6 space-y-3 mx-auto"> <a${addAttribute(`/personnes/edit/${personne.id}`, "href")} class="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition-colors">
Modifier l'artiste
</a> <a${addAttribute(`/personnes/supprimer-personne/${id}`, "href")} class="flex items-center justify-center gap-2 w-full border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors">
Supprimer l'artiste
</a> </div>`} </div> <div class="lg:col-span-2"> <h1 class="text-5xl font-bold mb-8 text-slate-900"> ${personne.prenom} ${personne.nom} </h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10"> ${personne.date_naissance && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Naissance
</p> <p class="text-slate-900 font-medium"> ${formatDateLong(personne.date_naissance)} ${!personne.date_deces && renderTemplate`<span class="text-blue-600 text-sm ml-2">(${calculerAge(personne.date_naissance)} ans)</span>`} </p> </div>`} ${personne.date_deces && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Décès
</p> <p class="text-slate-900 font-medium"> ${formatDateLong(personne.date_deces)} ${personne.date_naissance && renderTemplate`<span class="text-blue-600 text-sm ml-2">(${calculerAge(personne.date_naissance, personne.date_deces)} ans)</span>`} </p> </div>`} ${personne.nationalite && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Nationalité
</p> <p class="text-slate-900 font-medium"> ${formatNationalite(personne.nationalite)} </p> </div>`} ${personne.profession && personne.profession.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Profession${personne.profession.length > 1 ? "s" : ""} </p> <p class="text-slate-900 font-medium"> ${formatProfessions(personne.profession)} </p> </div>`} ${personne.expand?.Film_via_realisateur && personne.expand.Film_via_realisateur.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Films réalisés
</p> <div class="text-slate-900 font-medium"> ${renderComponent($$result2, "LinkListeFilm", $$LinkListeFilm, { "films": personne.expand.Film_via_realisateur })} </div> </div>`} ${personne.expand?.Film_via_producteur && personne.expand.Film_via_producteur.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Films produits
</p> <div class="text-slate-900 font-medium"> ${renderComponent($$result2, "LinkListeFilm", $$LinkListeFilm, { "films": personne.expand.Film_via_producteur })} </div> </div>`} ${personne.expand?.Film_via_scenariste && personne.expand.Film_via_scenariste.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Films scénarisés
</p> <div class="text-slate-900 font-medium"> ${renderComponent($$result2, "LinkListeFilm", $$LinkListeFilm, { "films": personne.expand.Film_via_scenariste })} </div> </div>`} </div> ${personne.expand?.Role_via_acteur && personne.expand.Role_via_acteur.length > 0 && renderTemplate`<div class="bg-white p-5 rounded-lg shadow-md border border-slate-200 mb-10"> <p class="text-slate-500 text-xs uppercase tracking-wide mb-2">
Rôles joués
</p> <ul class="text-slate-900 font-medium space-y-1"> ${personne.expand.Role_via_acteur.map(
    (role) => renderTemplate`<li> ${role.expand?.film && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate` <a${addAttribute(`/films/${role.expand.film.id}-${slug(role.expand.film.titre ?? "Inconnu")}`, "href")} class="text-blue-600 hover:text-blue-800 transition-colors"> ${role.expand.film.titre} </a> <span class="text-slate-600"> - ${role.nom}</span> ` })}`} </li>`
  )} </ul> </div>`} </div> </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/[id]-[nom_slug].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/[id]-[nom_slug].astro";
const $$url = "/personnes/[id]-[nom_slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$idnomSlug,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
