import { d as createComponent, j as renderComponent, r as renderTemplate, g as createAstro, m as maybeRenderHead, f as addAttribute } from '../../../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import slug from 'slug';
import { f as formatDate, $ as $$ImgPb } from '../../../chunks/ImgPb_ggtGv_Bq.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_voo7Tuos.mjs';
import { P as PersonneNationaliteOptions, b as PersonneProfessionOptions } from '../../../chunks/pocketbase-types_DCdjGhlg.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { id } = Astro2.params;
  let message = "";
  let personne = {};
  if (id) {
    personne = await Astro2.locals.pb.collection("Personne").getOne(id);
  }
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const photoFile = data.get("photo");
    if (photoFile && photoFile.size === 0) {
      data.delete("photo");
    }
    const personneCree = await (id ? Astro2.locals.pb.collection("Personne").update(id, data) : Astro2.locals.pb.collection("Personne").create(data).catch((error) => {
      console.error(
        "Erreur lors de la cr\xE9ation de l'artiste :",
        error
      );
      message = error.message;
    }));
    if (personneCree) {
      return Astro2.redirect(
        `/personnes/${personneCree.id}-${slug(personneCree.nom ?? "Inconnu")}`
      );
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "\xC9dition d'un artiste" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto"> <h1 class="text-4xl font-bold mb-8 text-slate-900"> ${id ? "Modifier l'artiste" : "Ajouter un nouvel artiste"} </h1> ${message && renderTemplate`<p class="text-red-600 mb-4 p-4 bg-red-50 rounded-lg">${message}</p>`} <form method="post" enctype="multipart/form-data" class="bg-white p-8 rounded-lg shadow-md border border-slate-200"> ${id && renderTemplate`<input name="id" type="hidden"${addAttribute(id, "value")}>`} <input name="user" type="hidden"${addAttribute(Astro2.locals.pb.authStore.record?.id, "value")}> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <label class="block"> <span class="text-slate-700 font-medium mb-2 block">Nom :</span> <input name="nom" type="text" required class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Dupont"${addAttribute(personne.nom, "value")}> </label> <label class="block"> <span class="text-slate-700 font-medium mb-2 block">Prénom :</span> <input name="prenom" type="text" required class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors" placeholder="Jean"${addAttribute(personne.prenom, "value")}> </label> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"> <label class="block"> <span class="text-slate-700 font-medium mb-2 block">Date de naissance :</span> <input name="date_naissance" type="date" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"${addAttribute(formatDate(personne.date_naissance), "value")}> </label> <label class="block"> <span class="text-slate-700 font-medium mb-2 block">Date de décès :</span> <input name="date_deces" type="date" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"${addAttribute(formatDate(personne.date_deces), "value")}> </label> </div> <div class="mb-6"> <label class="block"> <span class="text-slate-700 font-medium mb-2 block">Nationalité :</span> <select name="nationalite" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"> <option value="">Choisir une nationalité</option> ${Object.entries(PersonneNationaliteOptions).map(([key, value]) => renderTemplate`<option${addAttribute(personne.nationalite === key, "selected")}${addAttribute(key, "value")}>${value}</option>`)} </select> </label> </div> <fieldset class="mb-6"> <legend class="text-slate-700 font-medium mb-3 block">Profession(s) :</legend> <div class="grid grid-cols-2 gap-3"> ${Object.entries(PersonneProfessionOptions).map(([key, value]) => renderTemplate`<label class="flex items-center space-x-2 p-3 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"> <input type="checkbox" name="profession"${addAttribute(value, "value")}${addAttribute(personne.profession?.includes(value), "checked")} class="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500"> <span class="text-slate-700">${key}</span> </label>`)} </div> </fieldset> <div class="mb-6"> <label class="block"> <span class="text-slate-700 font-medium mb-2 block">Photo :</span> <input name="photo" type="file" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"> ${id && personne.photo && renderTemplate`<div class="mt-4"> <p class="text-sm text-slate-600 mb-2">Photo actuelle :</p> <div class="w-48"> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": personne, "field": "photo", "classPicture": "w-full h-full", "classImg": "w-full h-auto rounded-lg shadow-md", "thumb": "400x600" })} </div> </div>`} </label> </div> <div class="flex gap-4 pt-4"> <button type="submit" class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"> ${id ? "Mettre \xE0 jour" : "Ajouter"} </button> <a${addAttribute(id ? `/personnes/${id}-${slug(personne.nom ?? "Inconnu")}` : "/personnes", "href")} class="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
Annuler
</a> </div> </form> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/edit/[...id].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/edit/[...id].astro";
const $$url = "/personnes/edit/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
