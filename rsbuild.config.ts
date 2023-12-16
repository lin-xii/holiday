import { defineConfig } from "@rsbuild/core";
import { pluginVue } from "@rsbuild/plugin-vue";

export default defineConfig({
  plugins: [pluginVue()],
  output: {
    assetPrefix: "./",
  },
  html: {
    title: "假期膨胀日历",
    favicon: "./favicon.ico",
  },
});
