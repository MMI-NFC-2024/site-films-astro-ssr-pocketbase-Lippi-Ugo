import { d as createComponent, j as renderComponent, r as renderTemplate, g as createAstro, m as maybeRenderHead, f as addAttribute } from '../../../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import slug from 'slug';
import { f as formatDate, $ as $$ImgPb } from '../../../chunks/ImgPb_ggtGv_Bq.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_voo7Tuos.mjs';
import { F as FilmGenresOptions, a as FilmPaysOrigineOptions } from '../../../chunks/pocketbase-types_DCdjGhlg.mjs';
import { useSSRContext, defineComponent, ref } from 'vue';
import Multiselect from '@vueform/multiselect';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
/* empty css                                      */
import { _ as _export_sfc } from '../../../chunks/_plugin-vue_export-helper_pcqpp-6-.mjs';
export { renderers } from '../../../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SelectPersonne",
  props: {
    personnes: {},
    name: {},
    value: {},
    multiple: { type: Boolean },
    placeholder: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const personneListId = ref(props.value);
    const personnesWithLabel = props.personnes.map((p) => ({
      ...p,
      label: `${p.prenom} ${p.nom}`
    }));
    const __returned__ = { props, personneListId, personnesWithLabel, get Multiselect() {
      return Multiselect;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent($setup["Multiselect"], {
    modelValue: $setup.personneListId,
    "onUpdate:modelValue": ($event) => $setup.personneListId = $event,
    options: $setup.personnesWithLabel,
    label: "label",
    "value-prop": "id",
    placeholder: $props.placeholder,
    mode: $props.multiple ? "tags" : "single",
    searchable: ""
  }, null, _parent));
  if ($props.multiple) {
    _push(`<!--[-->`);
    ssrRenderList($setup.personneListId, (p) => {
      _push(`<input type="hidden"${ssrRenderAttr("value", p)}${ssrRenderAttr("name", $props.name)}>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<input type="hidden"${ssrRenderAttr("value", $setup.personneListId)}${ssrRenderAttr("name", $props.name)}>`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SelectPersonne.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SelectPersonne = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro = createAstro();
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { id } = Astro2.params;
  const personnesList = await Astro2.locals.pb.collection("Personne").getFullList({
    sort: "nom"
  });
  let message = "";
  let film = {};
  if (id) {
    film = await Astro2.locals.pb.collection("Film").getOne(id);
  }
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    const afficheFile = data.get("affiche");
    if (afficheFile && afficheFile.size === 0) {
      data.delete("affiche");
    }
    const filmCree = await (id ? Astro2.locals.pb.collection("Film").update(id, data) : Astro2.locals.pb.collection("Film").create(data).catch((error) => {
      console.error("Erreur lors de la cr\xE9ation du film :", error);
      message = error.message;
    }));
    if (filmCree) {
      return Astro2.redirect(
        `/films/${filmCree.id}-${slug(filmCree.titre ?? "Inconnu")}`
      );
    }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "\xC9dition d'un film" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-4xl mx-auto py-8 px-4"> <h1 class="text-4xl font-bold mb-8 text-gray-900">${id ? "\xC9dition d'un film" : "Ajout d'un film"}</h1> ${message && renderTemplate`<p class="text-red-600 mb-4 bg-red-50 border border-red-200 rounded-lg p-4">${message}</p>`} <div class="bg-white rounded-lg shadow-md p-8"> <form method="post" enctype="multipart/form-data" class="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-x-6 gap-y-4"> ${id && renderTemplate`<input name="id" type="hidden"${addAttribute(id, "value")}>`} <input name="user" type="hidden"${addAttribute(Astro2.locals.pb.authStore.record?.id, "value")}> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Titre :</span> <input name="titre" type="text" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder=""${addAttribute(film.titre, "value")}> </label> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Synopsis :</span> <input name="synopsis" type="text" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder=""${addAttribute(film.synopsis, "value")}> </label> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Date de sortie :</span> <input name="date_sortie" type="date" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder=""${addAttribute(formatDate(film.date_sortie), "value")}> </label> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Durée (min) :</span> <input name="duree_min" type="number" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" placeholder=""${addAttribute(film.duree_min, "value")}> </label> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Affiche :</span> <div> <input name="affiche" type="file" class="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"> ${id && film.affiche && renderTemplate`<div class="mt-4 p-4 bg-gray-50 rounded-lg"> <p class="text-sm text-gray-600 mb-2 font-medium">Affiche actuelle :</p> <div class="w-48"> ${renderComponent($$result2, "ImgPb", $$ImgPb, { "record": film, "field": "affiche", "classPicture": "w-full h-full", "classImg": "w-full h-auto rounded-lg shadow-md", "thumb": "400x600" })} </div> </div>`} </div> </label> <div class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Genres :</span> <div class="grid grid-cols-2 gap-3"> ${Object.entries(FilmGenresOptions).map(([key, value]) => renderTemplate`<label class="flex items-center gap-2 cursor-pointer"> <input type="checkbox" name="genres"${addAttribute(value, "value")}${addAttribute(film.genres?.includes(value), "checked")} class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"> <span class="text-gray-700">${key}</span> </label>`)} </div> </div> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Pays d'origine :</span> <select name="pays_origine" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"> <option> Choisir un pays d'origine </option> ${Object.entries(FilmPaysOrigineOptions).map(
    ([key, value]) => renderTemplate`<option${addAttribute(film.pays_origine === key, "selected")}${addAttribute(key, "value")}> ${value} </option>`
  )} </select> </label> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Réalisateur :</span> ${renderComponent($$result2, "SelectPersonne", SelectPersonne, { "personnes": personnesList, "name": "realisateur", "value": film.realisateur, "placeholder": "Choisissez un r\xE9alisateur", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/SelectPersonne.vue", "client:component-export": "default" })} <!-- <select name="realisateur" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                        <option> Choisir un réalisateur </option>
                        {
                            personnesList.map(
                                ({nom,prenom,id}) => (
                                    <option
                                        selected={film.realisateur === id}
                                        value={id}
                                    >
                                        {prenom} {nom}
                                    </option>
                                ),
                            )
                        }
                    </select> --> </label> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Producteur(s) :</span> ${renderComponent($$result2, "SelectPersonne", SelectPersonne, { "personnes": personnesList, "name": "producteur", "value": film.producteur, "multiple": true, "placeholder": "Choisissez un ou des producteur(s)", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/SelectPersonne.vue", "client:component-export": "default" })} <!-- <select name="producteur" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-30" multiple>
                        <option> Choisir des producteurs </option>
                        {
                            personnesList.map(
                                ({nom,prenom,id}) => (
                                    <option
                                        selected={film.producteur?.includes(id)}
                                        value={id}
                                    >
                                        {prenom} {nom}
                                    </option>
                                ),
                            )
                        }
                    </select> --> </label> <label class="contents"> <span class="font-semibold text-gray-700 md:text-right md:pt-2">Scénariste(s) :</span> ${renderComponent($$result2, "SelectPersonne", SelectPersonne, { "personnes": personnesList, "name": "scenariste", "value": film.scenariste, "multiple": true, "placeholder": "Choisissez un ou des sc\xE9nariste(s)", "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/SelectPersonne.vue", "client:component-export": "default" })} <!-- <select name="scenariste" class="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all min-h-30" multiple>
                        <option> Choisir des scénaristes </option>
                        {
                            personnesList.map(
                                ({nom,prenom,id}) => (
                                    <option
                                        selected={film.scenariste?.includes(id)}
                                        value={id}
                                    >
                                        {prenom} {nom}
                                    </option>
                                ),
                            )
                        }
                    </select> --> </label> <div class="md:col-start-2 flex gap-4 mt-6"> <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">${id ? "Mettre \xE0 jour" : "Ajouter"}</button> <a${addAttribute(id ? `/films/${id}-${slug(film.titre ?? "Inconnu")}` : "/films", "href")} class="inline-flex items-center gap-2 bg-slate-600 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all">
Annuler
</a> </div> </form> </div> </div> ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/edit/[...id].astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/films/edit/[...id].astro";
const $$url = "/films/edit/[...id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
