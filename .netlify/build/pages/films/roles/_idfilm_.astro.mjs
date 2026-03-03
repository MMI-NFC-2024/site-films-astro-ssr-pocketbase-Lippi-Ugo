import { d as createComponent, j as renderComponent, r as renderTemplate, g as createAstro, m as maybeRenderHead, f as addAttribute } from '../../../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import slug from 'slug';
import { $ as $$Layout } from '../../../chunks/Layout_voo7Tuos.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$idFilm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idFilm;
  const { idFilm } = Astro2.params;
  if (!idFilm) {
    return Astro2.redirect("/films");
  }
  const personnesList = await Astro2.locals.pb.collection("Personne").getFullList({
    sort: "nom"
  });
  let message = "";
  let role = {};
  let film = {};
  if (idFilm) {
    film = await Astro2.locals.pb.collection("Film").getOne(idFilm);
  }
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const roleCree = await Astro2.locals.pb.collection("Role").create(data).catch((error) => {
      console.error("Erreur lors de la cr\xE9ation du r\xF4le :", error);
      message = error.message;
    });
    if (roleCree) {
      return Astro2.redirect(
        `/films/${film.id}-${slug(film.titre ?? "Inconnu")}`
      );
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "\xC9dition d'un r\xF4le" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-8 px-4"> <h1 class="text-4xl font-bold mb-8 text-gray-900">Ajouter un rôle</h1> ${message && renderTemplate`<p class="text-red-600 mb-4 bg-red-50 border border-red-200 rounded-lg p-4">${message}</p>`} <div class="bg-white rounded-lg shadow-md p-8"> <form method="post" class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-6 gap-y-4"> <input name="film" type="hidden"${addAttribute(idFilm, "value")}> <input name="user" type="hidden"${addAttribute(Astro2.locals.pb.authStore.record?.id, "value")}> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Nom du rôle :</span> <input name="nom" type="text" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder="Ex: James Bond, Indiana Jones..."${addAttribute(role.nom, "value")}> </label> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Acteur/Actrice :</span> <select name="acteur" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> <option> Choisir un acteur </option> ${personnesList.map(
    ({ nom, prenom, id }) => renderTemplate`<option${addAttribute(role.acteur === id, "selected")}${addAttribute(id, "value")}> ${prenom} ${nom} </option>`
  )} </select> </label> <div class="md:col-start-2 flex gap-4 mt-6"> <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">Ajouter</button> <a${addAttribute(`/films/${film.id}-${slug(film.titre ?? "Inconnu")}`, "href")} class="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
Annuler
</a> </div> </form> </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/roles/[idFilm].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/roles/[idFilm].astro";
const $$url = "/films/roles/[idFilm]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$idFilm,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
