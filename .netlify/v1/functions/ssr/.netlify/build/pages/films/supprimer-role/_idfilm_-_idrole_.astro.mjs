import { d as createComponent, j as renderComponent, r as renderTemplate, g as createAstro, m as maybeRenderHead, f as addAttribute } from '../../../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import slug from 'slug';
import { $ as $$Layout } from '../../../chunks/Layout_voo7Tuos.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$idFilmidRole = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$idFilmidRole;
  const { idFilm, idRole } = Astro2.params;
  if (!idFilm) {
    return Astro2.redirect("/films");
  }
  await Astro2.locals.pb.collection("Personne").getFullList({
    sort: "nom"
  });
  let message = "";
  let role = {};
  let film = {};
  if (idFilm) {
    film = await Astro2.locals.pb.collection("Film").getOne(idFilm);
  }
  if (idRole) {
    role = await Astro2.locals.pb.collection("Role").getOne(idRole);
  }
  if (Astro2.request.method === "POST") {
    const roleSuppr = await Astro2.locals.pb.collection("Role").delete(idRole).catch((error) => {
      console.error("Erreur lors de la cr\xE9ation du r\xF4le :", error);
      message = error.message;
    });
    if (roleSuppr) {
      return Astro2.redirect(
        `/films/${film.id}-${slug(film.titre ?? "Inconnu")}`
      );
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "\xC9dition d'un r\xF4le" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-4xl mb-12 text-gray-900">Supprimer un rôle</h1> ${message && renderTemplate`<p class="text-red-600">${message}</p>`}<form method="post"> <input name="film" type="hidden"${addAttribute(idFilm, "value")}> <input name="user" type="hidden"${addAttribute(Astro2.locals.pb.authStore.record?.id, "value")}> <label> <span class="text-gray-700">Nom du rôle :</span> ${role.nom} </label> <button type="submit" class="items-center gap-2 mt-8 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors block!">Supprimer</button> </form> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/supprimer-role/[idFilm]-[idRole].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/supprimer-role/[idFilm]-[idRole].astro";
const $$url = "/films/supprimer-role/[idFilm]-[idRole]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$idFilmidRole,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
