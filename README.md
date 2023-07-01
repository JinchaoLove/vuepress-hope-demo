# Blog Demo

Developed based on the [vuepress2.x](https://v2.vuepress.vuejs.org) framework and [vuepress-theme-hope](https://theme-hope.vuejs.press) theme.

## File Structure

```sh
workspace
├── src # Blog sources
│   ├── .vuepress # Vuepress related configurations
│   │   ├── theme.ts # Theme configuration
│   │   ├── config.ts # User configuration
│   │   ├── client.ts # Client configuration
│   │   ...
│   └── posts, demo, etc. # Blog dirs or files
│       ├── xxx.md
│       ...
├── package.json # Defined scripts and imported packages
└── tsconfig.json # TypeScript configurations
```

## Usage

Clone or fork this repo, modify to your favorite styles. [More demos](https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/demo)

1. Install [Node.js LTS](https://nodejs.org) and [pnpm](https://pnpm.io), then run (in the workspace):

   ```sh
   # pnpm src:update  # upgrade the versions in `package.json`
   pnpm install
   ```

2. Run scripts (view in `scripts` of `package.json`)

   ```sh
   pnpm src:clean-dev  # clean-cache and develop
   # pnpm src:build  # build into `src/.vuepress/dist/`
   # pnpm src:update-package  # upgrade package
   ```

3. View on local `http://localhost:8080/` or website `http://xx.xxx.xxx.xx:8080/`.

4. Deploy

   For deployment on `Github Pages`, `Vercel` and others, view the [deployment](https://vuejs.press/guide/deployment.html).

   (Note that `build command` is `pnpm src:build`, `publish directory` is `src/.vuepress/dist` here.)

5. Other Plugins

   For enhancements of `comment`, `search` and others, view the [plugins](https://theme-hope.vuejs.press/config/plugins/intro.html)

## Authors

Please give me a 🌟 if this repository helps you 🤗

If you have any questions, please feel free to issue here, engage in a discussion on the website, or reach out to me directly ([Jinchao](http://jinchaoli.com)).
