export default {
  theme: "default",
  title: "PWA Workshop",
  info: 'Проєкт: Веб-додаток "Фінансова грамотність"',
  author: "Роман Онацький",

  layout: "cover",

  fonts: {
    sans: "Roboto, system-ui, sans-serif",
    serif: "Roboto Slab",
    mono: "Fira Code",
  },

  lineNumbers: true,
  codeCopy: true,

  shiki: {
    theme: "light-plus",
  },

  exportFilename: "PWA-workshop-presentation",

  drawing: {
    enabled: true,
    persist: false,
    presenterOnly: false,
    syncAll: true,
  },

  css: "unocss",

  colorSchema: "light",

  transition: "slide-left",

  defaults: {
    layout: "default",
    transition: "slide-left",
    lineNumbers: true,
  },
};
