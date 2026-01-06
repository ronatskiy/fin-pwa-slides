import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup(() => {
  return {
    themes: {
      dark: "min-dark",
      light: "light-plus",
    },
    // transformers: [], // Commented out to allow default transformers (line numbers, etc)
  };
});
