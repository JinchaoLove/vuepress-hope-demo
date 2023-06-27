import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";

import theme from "./theme.js";

import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";

const __dirname = getDirname(import.meta.url);
const base = <"/" | `/${string}/`>process.env["BASE"] || "/";

export default defineUserConfig({
  base,

  dest: path.resolve(__dirname, "./dist"),
  // port: 6666,
  shouldPrefetch: false,

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
  },

  theme,
  // add or override theme `components`, `layouts`, `modules`, etc.
  // https://theme-hope.vuejs.press/guide/advanced/replace.html
  alias: {
    "@theme-hope/modules/blog/components/BloggerInfo": path.resolve(
      __dirname,
      "./components/BloggerInfo"
    ),
  },

  plugins: [
    // Code highlight
    shikiPlugin({
      theme: "one-dark-pro",
    }),
    // Click effects
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 10,
      },
    }),
    searchProPlugin({
      // index all content
      indexContent: true,
      // add supports for category and tags
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "Category: $content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "Tag: $content",
        },
      ],
    }),
  ]
});
