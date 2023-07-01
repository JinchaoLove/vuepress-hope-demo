import { defineUserConfig } from "vuepress";
import { getDirname, path } from "@vuepress/utils";

import theme from "./theme.js";

import { popperPlugin } from "./plugins/vuepress-plugin-popper";
import { PopperShape } from "@moefy-canvas/theme-popper";
import { searchProPlugin } from "vuepress-plugin-search-pro";

const __dirname = getDirname(import.meta.url);
const base = <"/" | `/${string}/`>process.env["BASE"] || "/";

export default defineUserConfig({
  base,

  dest: path.resolve(__dirname, "./dist"),
  // port: 8080,
  shouldPrefetch: false,

  locales: {
    "/": {
      lang: "en-US",
      title: "Blog Demo",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "博客演示",
      description: "vuepress-theme-hope 的博客演示",
    },
  },

  theme,
  // add or override theme `components`, `layouts`, `modules`, etc. (*.ts files, not *.d.ts)
  // in [@theme-hope](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/packages/theme/src/client),
  // see the [guide](https://theme-hope.vuejs.press/guide/advanced/replace.html)
  alias: {
    "@theme-hope/modules/blog/components/BloggerInfo": path.resolve(
      __dirname,
      "./components/BloggerInfo"
    ),
    "@theme-hope/modules/blog/components/CommonWrapper": path.resolve(
      __dirname,
      "./components/CommonWrapper"
    ),
  },

  plugins: [
    // Click effects
    popperPlugin({
      config: {
        shape: PopperShape.Star,
        size: 1.95,
        numParticles: 10,
      },
    }),
    // Search
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
