/** Mock metrics/clients — keep false until real numbers replace placeholders. */
export const SHOW_HOME_PROOF = false;

export const HOME_METRICS = [
  { valueKey: "proof.m1", labelKey: "proof.m1l", value: "12+", label: "Teslim edilen ürün" },
  { valueKey: "proof.m2", labelKey: "proof.m2l", value: "4", label: "Ürün hattı" },
  { valueKey: "proof.m3", labelKey: "proof.m3l", value: "%98", label: "Crash-free hedef" },
  { valueKey: "proof.m4", labelKey: "proof.m4l", value: "6 hf", label: "Tipik MVP süresi" },
] as const;

export const HOME_CLIENTS = [
  { key: "proof.c1", name: "Helix Gıda" },
  { key: "proof.c2", name: "Ardent Health" },
  { key: "proof.c3", name: "Lumen Retail" },
  { key: "proof.c4", name: "Orbit Labs" },
  { key: "proof.c5", name: "Northline" },
] as const;

export const HOME_PROCESS = [
  {
    step: "01",
    titleKey: "process.s1t",
    bodyKey: "process.s1",
    title: "Keşif",
    body: "İhtiyacı, kullanıcıyı ve başarı metriğini netleştiririz.",
  },
  {
    step: "02",
    titleKey: "process.s2t",
    bodyKey: "process.s2",
    title: "Prototip",
    body: "Akışı ve teknik riski erken görünür kılarız.",
  },
  {
    step: "03",
    titleKey: "process.s3t",
    bodyKey: "process.s3",
    title: "Yapım",
    body: "Production kalitesinde geliştirir, test eder, ölçeriz.",
  },
  {
    step: "04",
    titleKey: "process.s4t",
    bodyKey: "process.s4",
    title: "Yayın",
    body: "Store / web yayını, izleme ve büyüme döngüsü.",
  },
] as const;

export const CONTACT_TOPICS = [
  { value: "saas", key: "contact.topic.saas" },
  { value: "mobile", key: "contact.topic.mobile" },
  { value: "game", key: "contact.topic.game" },
  { value: "web", key: "contact.topic.web" },
  { value: "digital", key: "contact.topic.digital" },
  { value: "product", key: "contact.topic.product" },
  { value: "other", key: "contact.topic.other" },
] as const;
