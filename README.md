# Tiger Dong Portfolio

[中文说明](README.zh-CN.md)

This repository contains the public source for Tiger Dong's bilingual personal portfolio. It presents selected work in embedded systems, applied AI, scientific computing, science education, and community engagement.

The website is designed for academic reviewers, collaborators, and employers who want a concise introduction to Tiger's technical direction, representative projects, and public evidence of the work.

## Portfolio Focus

- **Embedded systems and accessible experiments** - a voice- and text-controlled Michelson interferometer prototype.
- **Applied AI tools** - a local-model workflow for weather, geocoding, and practical planning suggestions.
- **Scientific simulation interfaces** - frontend and modeling work that makes technical workflows easier to explore.

## Website Pages

- [`index.html`](index.html) - professional introduction, academic and technical direction, and three representative outcomes.
- [`about.html`](about.html) - personal profile, skills, and working approach.
- [`project_interface.html`](project_interface.html) - structured project case studies organized by problem, role, technical approach, public evidence, and result.
- [`activities.html`](activities.html) - bilingual timeline of engineering, science education, community service, and cultural exchange activities.
- [`history_update.html`](history_update.html) - brief website update log; intentionally kept out of the main navigation and search indexing.

## Public Project Evidence

The project pages link only to public materials:

- Arduino + Michelson Interferometer: [system demonstration](https://youtu.be/soUNO5ICLBM) and [component demonstration](https://youtu.be/Xa32R2NpT-M)
- Weather & Location Planning Assistant: [agent_service repository](https://github.com/Tiger-Dong/agent_service)
- Polyurethane Simulation Platform: [lab-frontend repository](https://github.com/Tiger-Dong/lab-frontend)
- Wolf-Sheep Collective Behavior Simulation: [source repository](https://github.com/Tiger-Dong/wolf_sheep) and [reference paper](https://harvest.aps.org/v2/journals/articles/10.1103/PhysRevLett.109.118104/fulltext)

## Local Preview

This is a static site with no build step. From the repository root, start a local web server and open the address it provides:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/` in a browser.

## Privacy and Publication Rules

This is a public portfolio repository. Add only materials that are intended for public viewing and that you have the right to publish.

Do not add internal documents, collaboration agreements, registration files, identity documents, private contact records, unpublished research data, or partner materials. The repository's [`.gitignore`](.gitignore) blocks common document formats and internal folders, but every file should still be reviewed before publication.

## Deployment Notes

The site is prepared for GitHub Pages deployment from the repository root. It includes a custom [`404.html`](404.html), [`robots.txt`](robots.txt), [`sitemap.xml`](sitemap.xml), canonical URLs, social-sharing metadata, and an SVG favicon.

The current canonical URLs assume the GitHub Pages address `https://tiger-dong.github.io/personal_webpage_TD/`. If the site later moves to a custom domain, update the canonical URLs and sitemap before publishing.

## Repository Structure

```text
assets/       Styles, language-switching script, and favicon
images/       Public website imagery
*.html        Bilingual portfolio pages
robots.txt    Search-crawler instructions
sitemap.xml   Public page index for search engines
```
