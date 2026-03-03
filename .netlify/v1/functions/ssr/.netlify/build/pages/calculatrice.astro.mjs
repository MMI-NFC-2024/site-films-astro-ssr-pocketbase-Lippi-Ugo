import { d as createComponent, j as renderComponent, r as renderTemplate } from '../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_voo7Tuos.mjs';
import { useSSRContext, defineComponent, useModel, mergeModels, mergeProps, ref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_pcqpp-6-.mjs';
export { renderers } from '../renderers.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "BtnCalc",
  props: /* @__PURE__ */ mergeModels({
    chiffre: {},
    modeDecimal: { type: Boolean },
    rang: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const nombre = useModel(__props, "modelValue");
    const __returned__ = { props, nombre };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ class: "bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold py-6 rounded-lg" }, _attrs))}>${ssrInterpolate($props.chiffre)}</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/BtnCalc.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BtnCalc = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ComponentCalculatrice",
  setup(__props, { expose: __expose }) {
    __expose();
    const nombre = ref(0);
    const modeDecimal = ref(false);
    const rang = ref(0);
    const __returned__ = { nombre, modeDecimal, rang, BtnCalc };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-sm mx-auto mt-8 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl" }, _attrs))}><h1 class="text-3xl font-bold text-white mb-6 text-center">Calculatrice</h1><div class="bg-gray-950 border-2 border-gray-700 rounded-lg p-6 mb-6"><p class="text-5xl font-mono font-bold text-green-400 text-right">${ssrInterpolate($setup.nombre)}</p></div><div class="grid grid-cols-3 gap-4"><!--[-->`);
  ssrRenderList(9, (chiffre) => {
    _push(ssrRenderComponent($setup["BtnCalc"], {
      key: chiffre,
      modelValue: $setup.nombre,
      "onUpdate:modelValue": ($event) => $setup.nombre = $event,
      chiffre,
      modeDecimal: $setup.modeDecimal,
      rang: $setup.rang
    }, null, _parent));
  });
  _push(`<!--]--><button class="bg-red-600 hover:bg-red-500 text-white py-6 rounded-lg font-bold">AC</button><button class="bg-orange-600 hover:bg-orange-500 text-white py-6 rounded-lg font-bold">DEL</button>`);
  _push(ssrRenderComponent($setup["BtnCalc"], {
    modelValue: $setup.nombre,
    "onUpdate:modelValue": ($event) => $setup.nombre = $event,
    chiffre: 0
  }, null, _parent));
  _push(`<button class="bg-gray-700 hover:bg-gray-600 text-white text-2xl font-bold py-6 rounded-lg">.</button></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ComponentCalculatrice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ComponentCalculatrice = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Calculatrice = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Calculatrice" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ComponentCalculatrice", ComponentCalculatrice, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/ComponentCalculatrice.vue", "client:component-export": "default" })} ` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/calculatrice.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/calculatrice.astro";
const $$url = "/calculatrice";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Calculatrice,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
