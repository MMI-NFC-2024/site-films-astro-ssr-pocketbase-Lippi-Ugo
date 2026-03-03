import { d as createComponent, m as maybeRenderHead, r as renderTemplate, g as createAstro, f as addAttribute, l as renderHead, j as renderComponent, n as renderSlot } from './astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import 'clsx';
/* empty css                                */

const $$Astro$1 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow-sm border-b border-slate-200"> <nav class="container mx-auto px-6 py-4"> <div class="flex items-center justify-between"> <a href="/" class="text-2xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
Cinémathèque
</a> <div class="flex gap-8 items-center"> <a href="/" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Accueil</a> <a href="../../personnes" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Artistes</a> <a href="../../films" class="text-slate-600 hover:text-blue-600 font-medium transition-colors">Films</a> <a href="/authPassword" class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors">${Astro2.locals.pb.authStore.isValid ? "Mon compte" : "Se connecter"}</a> </div> </div> </nav> </header>`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t border-slate-200 mt-20"> <div class="container mx-auto px-6 py-8 text-center text-slate-500 text-sm"> <p>&copy; 2026 Cinémathèque. Tous droits réservés.</p> </div> </footer>`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titre } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${titre} | Site de films</title>${renderHead()}</head> <body class="bg-slate-50 min-h-screen"> ${renderComponent($$result, "Header", $$Header, {})} <main class="container mx-auto px-6 py-12"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
