# Portfolio

[flx-sta.github.io](https://flx-sta.github.io/)

Use the Node.js version pinned in `package.json`. Volta selects it
automatically, and GitHub Actions uses the same pin.

```sh
npm ci
npm run dev
npm run build
npm run serve # Preview the production build
```

English and German copy live in the relevant Vue component under `src/components/`:
`AboutMeSection.vue`, `ExperienceSection.vue`, `ProjectsSection.vue`, and
`SkillsSection.vue`. The contact URL is shared by the intro and footer in
`src/contact.ts`.

Astro renders the Vue components during the build. The routes in
`src/pages/[...locale].astro` generate `dist/index.html` and `dist/de/index.html`.
Language links navigate between the generated pages, and CSS follows the system
theme. The output does not include a client-side Vue runtime.

The deployment workflow builds `dist/` from `main` and publishes it to the
`gh-pages` branch. GitHub Pages serves the static build and runs no application
server.
