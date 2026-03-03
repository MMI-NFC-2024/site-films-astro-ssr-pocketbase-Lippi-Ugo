import { d as createComponent, m as maybeRenderHead, f as addAttribute, r as renderTemplate, g as createAstro } from './astro/server_Cq9nmc9H.mjs';
import 'piccolore';
import 'clsx';

function formatDate(date) {
  return date ? new Date(date).toISOString().split("T")[0] : "";
}
function formatDateLong(date) {
  if (!date) return "";
  const d = new Date(date);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  return d.toLocaleDateString("fr-FR", options);
}
function formatAnnee(date) {
  return date ? new Date(date).getFullYear().toString() : "";
}
function formatProfessions(professions) {
  if (!professions || professions.length === 0) return "";
  if (professions.length === 1) return professions[0];
  if (professions.length === 2) return professions.join(" et ");
  return professions.slice(0, -1).join(", ") + " et " + professions[professions.length - 1];
}
function formatPays(pays) {
  const paysMap = {
    "FR": "France",
    "US": "États-Unis",
    "GB": "Royaume-Uni",
    "CA": "Canada",
    "AT": "Autriche"
  };
  return paysMap[pays] || pays;
}
function formatNationalite(nationalite) {
  const nationaliteMap = {
    "FR": "Française",
    "US": "Américaine",
    "GB": "Britannique",
    "CA": "Canadienne",
    "AT": "Autrichienne"
  };
  return nationaliteMap[nationalite] || nationalite;
}
function calculerAge(dateNaissance, dateDeces) {
  const debut = new Date(dateNaissance);
  const fin = dateDeces ? new Date(dateDeces) : /* @__PURE__ */ new Date();
  let age = fin.getFullYear() - debut.getFullYear();
  const m = fin.getMonth() - debut.getMonth();
  if (m < 0 || m === 0 && fin.getDate() < debut.getDate()) {
    age--;
  }
  return age;
}

const $$Astro = createAstro();
const $$ImgPb = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ImgPb;
  const { record, field = "photo", alt, classPicture, classImg, thumb = "1024x1024" } = Astro2.props;
  const pb = Astro2.locals.pb;
  const imageUrl = record?.[field] ? pb.files.getURL(record, record[field], { thumb }) : null;
  return renderTemplate`${imageUrl ? renderTemplate`${maybeRenderHead()}<div${addAttribute(classPicture, "class")}><img${addAttribute(classImg, "class")}${addAttribute(alt || "Image", "alt")}${addAttribute(imageUrl, "src")}></div>` : renderTemplate`<div${addAttribute(classPicture + " w-full h-full flex items-center justify-center bg-gray-200", "class")}><span class="text-gray-500">Image non disponible</span></div>`}`;
}, "C:/Users/ugoli/Documents/GitHub/site-films-pocketbase/src/components/ImgPb.astro", void 0);

export { $$ImgPb as $, formatAnnee as a, formatPays as b, formatProfessions as c, formatDateLong as d, calculerAge as e, formatDate as f, formatNationalite as g };
