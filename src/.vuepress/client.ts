import { defineClientConfig } from "@vuepress/client";
import { setupRunningTimeFooter } from "vuepress-theme-hope/presets/footerRunningTime.js";

import "vuepress-theme-hope/presets/bounce-icon.scss";
import "vuepress-theme-hope/presets/left-blog-info.scss";

// import CustomBlogHome from "./layouts/CustomBlogHome.vue";

export default defineClientConfig({
  // add new layouts: we delete `Hero` components in `BlogHome`, which is
  // same as setting `hero: false` in `frontmatter` of `README.md`
  // layouts: {
  //   CustomBlogHome
  // },
  setup() {
    setupRunningTimeFooter(
      new Date("2023-01-01"),
      {
        "/": "Running time: :day days :hour hours :minute minutes :second seconds",
      },
      true
    );
  },
});
