import { d as createComponent, j as renderComponent, r as renderTemplate, g as createAstro, m as maybeRenderHead } from '../chunks/astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_voo7Tuos.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$AuthPassword = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AuthPassword;
  if (Astro2.request.method === "POST") {
    const data = await Astro2.request.formData();
    if (data.has("deconnexion")) {
      Astro2.locals.pb.authStore.clear();
      Astro2.response.headers.append(
        "set-cookie",
        Astro2.locals.pb.authStore.exportToCookie()
      );
    } else
      try {
        const email = data.get("email");
        const password = data.get("password");
        console.log({ email, password });
        await Astro2.locals.pb.collection("users").authWithPassword(email, password);
        Astro2.response.headers.append(
          "set-cookie",
          Astro2.locals.pb.authStore.exportToCookie()
        );
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
      }
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": Astro2.locals.pb.authStore.isValid ? "Mon compte" : "Connexion" }, { "default": async ($$result2) => renderTemplate`${Astro2.locals.pb.authStore.isValid ? renderTemplate`${maybeRenderHead()}<h1>Est Connecté</h1>
      <form method="post"> <input type="hidden" value="1" name="deconnexion"> <button>Se déconnecter</button> </form>` : renderTemplate`<form method="post"> <label>
Email : <input type="email" name="email"> </label> <label>
Mot de passe : <input type="password" name="password" minlength="5"> </label> <button>Submit</button> </form>`}` })}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/authPassword.astro", void 0);

const $$file = "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/pages/authPassword.astro";
const $$url = "/authPassword";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AuthPassword,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
