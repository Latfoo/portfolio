# Personal Portfolio

Personal portfolio website built with Vue 3, TypeScript, and Vite. Deployed on Vercel.

## Stack

| Tool | Role |
| --- | --- |
| Vue 3 | UI framework, single-file components with `<script setup>` |
| TypeScript | Type safety across components and data |
| Vue Router | Client-side routing |
| Vite | Dev server and production bundler |
| Vercel | Hosting and deployment |

## File Structure

```text
src/
├── main.ts              # App entry point
├── router.ts            # Route definitions
├── style.css            # Global styles
├── App.vue              # Root component (layout shell)
│
├── components/
│   ├── AppNav.vue       # Top navigation bar
│   ├── AppFooter.vue    # Footer
│   ├── SidePanel.vue    # About/education sidebar on the home page
│   ├── ProjectCard.vue  # Single project card with media and tags
│   └── ProjectGrid.vue  # Grid layout rendering all project cards
│
├── views/
│   ├── HomeView.vue         # Landing page
│   ├── PortfolioView.vue    # Projects overview
│   ├── AuvThesisView.vue    # Project detail: underwater robot thesis
│   ├── GravitySimView.vue   # Project detail: gravity simulator
│   └── ImpressumView.vue    # Legal notice
│
└── data/
    └── projects.ts      # Project metadata array and Project interface

public/
├── icons.svg            # Icon sprite
└── portfolio_screen.png # Screenshot used in the portfolio project card
```

## Development

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + build to dist/
npm run preview  # preview production build locally
```
