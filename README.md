<p align="center">
  <a href="https://matixvc.github.io/portafolio-web/"><img src="https://img.shields.io/badge/Visit_My_Portfolio-20D58F?style=for-the-badge&amp;logo=githubpages&amp;logoColor=0B1015" alt="Visit My Portfolio" height="40"></a><br>
  <a href="https://matixvc.github.io/portafolio-web/">https://matixvc.github.io/portafolio-web/</a>
</p>
<p align="center"><img src="assets/brand/mv-spatial.svg" width="84" alt="MV Spatial logo"></p>
<h1 align="center">MV Spatial · Matías Villalobos</h1>
<p align="center"><strong>Unity Developer | XR / VR Developer</strong></p>
<p align="center">Personal and academic projects in Unity, gameplay and interactive 3D, with a focus on XR exploration.</p>
<p align="center"><a href="README.md" lang="en">English</a> · <a href="README.es.md" lang="es">Spanish</a></p>
<p align="center"><img alt="HTML5" src="https://img.shields.io/badge/HTML5-static-E34F26"> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-vanilla-F7DF1E"> <img alt="Tailwind CSS 3" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4"></p>

## About

My personal portfolio presents personal and academic projects in game development, Unity, C#, interactive 3D and XR. It brings together project summaries, source repositories, bilingual CV downloads and professional contact details.

The locally verified repository state includes the approved work through phase 9.4A on `main`: the MV Spatial visual system, the interactive Project Archive with four projects, and the redesigned About section. Phase 9.4.0 consolidates documentation before further development.

`main` is the stable branch and the configured GitHub Pages source is `main` → `/ (root)`. The portfolio URL is [matixvc.github.io/portafolio-web](https://matixvc.github.io/portafolio-web/). During phase 9.4.0, commit `dd271b3` was verified locally across `main`, `feature/portfolio-consolidation` and their local remote-tracking references; the live remote commit and deployed page were not independently revalidated because network access was unavailable. Evidence and limitations: [PROJECT_STATUS.md](docs/PROJECT_STATUS.md).

## Features

- Responsive layouts for mobile, tablet and desktop.
- Light, Dark and System themes; System is the default. Explicit preferences persist when browser storage is available.
- MV Spatial SVG identity and a favicon that follows the system color scheme.
- Semantic sections, keyboard navigation, visible focus, a mobile menu, project dialogs and reduced-motion support.
- Project cards with details and repository links.
- Separate Spanish and English CV downloads.
- Web3Forms contact integration, field validation, duplicate submission prevention, email copying and email fallback.
- Static site prepared for GitHub Pages, with compiled CSS and the icon sprite committed to Git.

Real contact delivery is not tested during consolidation; no form submissions are authorized for QA.

## Projects and professional scope

| Project | Current scope | Source |
| --- | --- | --- |
| PhysicsVR Prototype | Unity/C# physical interaction prototype in development, intended for future VR integration. **Not yet functional with a VR headset.** | [Repository](https://github.com/Matixvc/PhysicsVR_Prototype) |
| Basura Fighters | Browser recycling roguelike with JavaScript and Canvas 2D. | [Repository](https://github.com/Matixvc/Trash-Roguelike) · [Demo](https://trash-rogelike.netlify.app) |
| App Mobile / NexusDay | Mobile project built with React Native and Expo. | [Repository](https://github.com/Matixvc/App-Mobile) |
| Jefferson Motel | 3D recreation in progress with Blender. It has no public repository or demo; possible future Unity integration is not a completed feature. | Not public |

The academic XR collaboration under NDA is separate from PhysicsVR. Its public description is limited to functional testing on Meta Quest 3 and issue reporting. Project illustrations currently use SVG mockups; real screenshots and media remain planned.

## Technologies

**Website:** static HTML, vanilla JavaScript and Tailwind CSS 3. Font Awesome supplies SVG sources for a local icon sprite. npm dependencies are development tools; the site requires no frontend framework or runtime npm bundle. Contact submission uses Web3Forms.

**Professional profile:** Unity and C# are the main focus, alongside gameplay, physical interaction, 3D and XR exploration. Unreal Engine, Python, Git/GitHub, Blender and Photoshop appear as complementary tools. They are not website dependencies. Expo, React Native and TypeScript belong to App Mobile.

## Project structure

```text
portafolio-web/
├── index.html
├── js/                     # main.js: interactions; theme.js: theme preferences
├── src/                    # input.css and historical CV/OG/icon templates
├── scripts/                # Icon generation, rendering and URL updates
├── assets/
│   ├── brand/              # MV Spatial SVGs, favicon and references/
│   ├── icons.svg           # Generated sprite
│   ├── Matias_Villalobos_CV_Unity_XR_ES.pdf
│   └── Matias_Villalobos_CV_Unity_XR_EN.pdf
├── dist/styles.css         # Generated CSS
├── docs/PROJECT_STATUS.md
├── AGENTS.md
├── README.md / README.es.md
├── package.json / package-lock.json
├── tailwind.config.js
└── site.webmanifest / robots.txt / sitemap.xml
```

## Local development

Requires Node.js and npm. Clone the stable version from `main`:

```sh
git clone --branch main https://github.com/Matixvc/portafolio-web.git
cd portafolio-web
npm ci
npm run build
npm run serve
```

The stable version lives on `main`; `feature/portfolio-consolidation` is preserved as the consolidation branch. See [PROJECT_STATUS.md](docs/PROJECT_STATUS.md) for integration evidence. `npm ci` installs locked versions. `npm run serve` uses `npx --yes serve .` and may download the server; use the URL printed in the terminal, normally `http://localhost:3000`. Stop with Ctrl+C. Use `npm.cmd` if PowerShell blocks `npm.ps1`.

| Command | Purpose |
| --- | --- |
| `npm run build` | Regenerate the icon sprite and minified CSS. |
| `npm run watch` | Recompile CSS while editing `src/input.css`. |
| `npm run icons` | Regenerate only `assets/icons.svg` from `scripts/build-icons.mjs`. |
| `npm run serve` | Serve the project locally. |
| `npm run set-url -- --dry https://example.com` | Preview metadata URL changes; remove `--dry` only for an intentional domain change. |
| `npm run og` | Render existing OG artwork through Microsoft Edge; overwrites generated resources. |
| `npm run cv` | Export historical `src/cv.html` to `assets/cv-matias-villalobos.pdf` through Edge. Does **not** update current ES/EN PDFs. |

Edit CSS/icon sources and regenerate outputs. Do not manually edit `dist/styles.css` or `assets/icons.svg`. Run OG/CV exports only within an approved resource update.

Basic checks: `node --check js/main.js`, `node --check js/theme.js`, `node --check tailwind.config.js`, `git diff --check`. There is no configured `npm test` or lint script. Browser QA should cover themes, reload/persistence, keyboard controls, menus, dialogs, CV links and responsive widths 390/768/1440. Do not submit the contact form without authorization.

## Git and publication

- **Configured Pages branch:** `main`, with `/ (root)` and HTTPS recorded from the previously verified deployment. Keep Pages settings intact.
- **Stable branch:** `main`, locally verified with the approved portfolio through phase 9.4A at `dd271b3`.
- **Development workflow:** temporary `feature/*` branches from `main`; no permanent `develop`. Preserve `feature/portfolio-consolidation` and existing branches/history.
- Review diffs and staging, create focused commits, and version generated CSS/icons with their sources.
- Pushes to `main` trigger the Pages build and publication. Require explicit authorization before pushing; verify Pages/Actions triggers before pushing a feature branch.
- **Recorded hosting:** Deploy from a branch → `main` → `/ (root)`. This configuration was confirmed in an earlier phase but was not revalidated during phase 9.4.0; no configuration change is part of this phase.

GitHub is the primary backup after verifying the remote commit. Use temporary recovery resources only when necessary. Existing permanent backups, recovery references and stash require explicit approval before removal.

## MV Spatial identity

The approved mark combines an upper M, lower V and open hexagonal geometry. Reusable resources in [`assets/brand/`](assets/brand/): `mv-spatial.svg`, `mv-spatial-dark.svg`, `mv-spatial-light.svg`, `mv-spatial-monochrome.svg`, `favicon.svg`; original images are in `references/`.

Principal/dark emerald: `#20D58F`; light variant: `#07844F`; monochrome: `currentColor`. The header selects the effective theme variant. The Spatial Instrument Panel design system uses semantic light/dark tokens in `src/input.css`; project illustrations preserve their own colors.

## Status and roadmap

The locally verified `main` state at `dd271b3` contains the approved work through phase 9.4A. Phase 9.4.0 aligns the project documentation with that state. This is a repository statement, not a fresh verification of the live deployment. Evidence and limitations: [PROJECT_STATUS.md](docs/PROJECT_STATUS.md).

Planned:

- Phase 9.4B: redesign Skills and Technologies.
- Phase 9.4C: integrate Career Path into the About section.
- Phase 9.4D: visual reorganization, navigation and validation.
- Phase 9.5: add real project media.
- Phase 9.6: quality, accessibility and performance.
- Phase 9.7: interactive experiences.

This roadmap describes planned work, not completed functionality.

Existing ES/EN PDFs are preserved. Their PhysicsVR description needs a separately approved correction. They also mention 40 Days of Light, whose scope and evidence must be prepared before adding it to the website. Additional contact protection, broader browser/accessibility testing, an English website and case studies remain pending. No new AI banners are included.

## Contact

[Portfolio](https://matixvc.github.io/portafolio-web/) · [GitHub](https://github.com/Matixvc) · [LinkedIn](https://www.linkedin.com/in/matias-vc-dev) · [Email](mailto:Matias.villalobos.dev@gmail.com)

[CV · Spanish](assets/Matias_Villalobos_CV_Unity_XR_ES.pdf) · [CV · English](assets/Matias_Villalobos_CV_Unity_XR_EN.pdf)
