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

English and German copy live in the relevant React component under `src/components/`:
`AboutMeSection.tsx`, `ExperienceSection.tsx`, `ProjectsSection.tsx`, and
`SkillsSection.tsx`. The contact URL is shared by the intro and footer in
`src/contact.ts`.

Astro renders the React components during the build. The routes in
`src/pages/[...locale].astro` generate `dist/index.html` and `dist/de/index.html`.
The site follows the system color theme by default. Visitors can choose Light,
Dark, or System in the header, and the browser remembers the choice across both
languages. The output does not include a client-side React runtime.

The deployment workflow builds `dist/` from `main` and publishes it to the
`gh-pages` branch. GitHub Pages serves the static build and runs no application
server.
