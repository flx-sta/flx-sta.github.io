# Portfolio

[flx-sta.github.io](https://flx-sta.github.io/)

```sh
npm ci
npm run dev
npm run build
npm run serve # Preview the production build
```

English and German copy live in the relevant Vue component under `src/components/`:
`AboutMeSection.vue`, `ExperienceSection.vue`, `ProjectsSection.vue`, and
`SkillsSection.vue`. The contact URL is shared by the intro and footer in
`src/contact.ts`; the HTML fallback in `index.html` uses the same address and subject.

The deployment workflow builds `dist/` from `main` and publishes it to the
`gh-pages` branch. GitHub Pages serves the static build and runs no application
server.
