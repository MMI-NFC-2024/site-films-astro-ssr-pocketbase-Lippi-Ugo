import { d as createComponent, m as maybeRenderHead, f as addAttribute, j as renderComponent, r as renderTemplate, g as createAstro } from '../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import slug from 'slug';
import { $ as $$ImgPb, g as formatNationalite } from '../chunks/ImgPb_ggtGv_Bq.mjs';
import { $ as $$Layout } from '../chunks/Layout_voo7Tuos.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$LinkPersonne = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LinkPersonne;
  const { personne } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/personnes/${personne.id}-${slug(personne.nom ?? "Inconnu")}`, "href")} class="group relative block"> <div class="relative overflow-hidden rounded-lg"> <div class="aspect-2/3 bg-slate-900"> ${renderComponent($$result, "ImgPb", $$ImgPb, { "record": personne, "field": "photo", "classPicture": "w-full h-full", "classImg": "w-full h-full object-cover", "thumb": "400x600" })} </div> <div class="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-4 translate-y-2 group-hover:translate-y-0 transition-transform"> <h2 class="font-bold text-white text-sm leading-tight mb-1"> ${personne.prenom} ${personne.nom} </h2> <p class="text-[11px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2"> ${personne.profession ? personne.profession.join(", ") + " \xB7 " : ""} ${personne.nationalite ? formatNationalite(personne.nationalite) : ""} </p> </div> </div> </a>`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/LinkPersonne.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const personnes = await Astro2.locals.pb.collection("Personne").getFullList();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Artistes" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mb-10"> <h1 class="text-4xl font-bold mb-2 text-slate-900">Artistes</h1> <p class="text-slate-600">${personnes.length} personnalités</p> </div> <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"> ${personnes.map((personne) => renderTemplate`${renderComponent($$result2, "LinkPersonne", $$LinkPersonne, { "personne": personne })}`)} </div> ${Astro2.locals.pb.authStore.isValid && renderTemplate`<a href="/personnes/edit" class="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path> </svg>
Ajouter un nouvel artiste
</a>`}` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/index.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/personnes/index.astro";
const $$url = "/personnes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
