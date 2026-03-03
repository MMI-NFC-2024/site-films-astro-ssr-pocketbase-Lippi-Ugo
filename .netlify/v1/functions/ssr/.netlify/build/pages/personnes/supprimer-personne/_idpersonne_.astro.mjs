import { d as createComponent, j as renderComponent, r as renderTemplate, g as createAstro, m as maybeRenderHead, f as addAttribute } from '../../../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_voo7Tuos.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$idPersonne = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idPersonne;
  const { idPersonne } = Astro2.params;
  if (!idPersonne) {
    return Astro2.redirect("/personnes");
  }
  let message = "";
  let personne = {};
  if (idPersonne) {
    personne = await Astro2.locals.pb.collection("Personne").getOne(idPersonne);
  }
  if (Astro2.request.method === "POST") {
    const filmSuppr = await Astro2.locals.pb.collection("Personne").delete(idPersonne).catch((error) => {
      console.error("Erreur lors de la suppression de la personne :", error);
      message = error.message;
    });
    if (filmSuppr) {
      return Astro2.redirect("/personnes");
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Supprimer un artiste" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl mb-12 text-gray-900">Supprimer un artiste</h1> ${message && renderTemplate`<p class="text-red-600">${message}</p>`}<form method="post"> <input name="personne" type="hidden"${addAttribute(idPersonne, "value")}> <input name="user" type="hidden"${addAttribute(Astro2.locals.pb.authStore.record?.id, "value")}> <label> <span class="text-gray-700">Nom de la personne :</span> ${personne.prenom} ${personne.nom} </label> <button type="submit" class="items-center gap-2 mt-8 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors block!">Supprimer</button> </form> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/supprimer-personne/[idPersonne].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/supprimer-personne/[idPersonne].astro";
const $$url = "/personnes/supprimer-personne/[idPersonne]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$idPersonne,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
