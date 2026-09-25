# TerraWatt

Corporate website for a fictional multinational renewable energy company.

## 🌍 Live demo

[https://terrawatt-kappa.vercel.app](https://terrawatt-kappa.vercel.app)

## ✨ Features

- Multiidioma (ES / EN / PT) con next-intl y rutas localizadas
- 6 proyectos con filtros por tipo y estado
- Páginas de sostenibilidad, sobre nosotros y contacto
- Formulario con validación cliente
- Contadores animados con IntersectionObserver
- SEO multiidioma (hreflang, sitemap, robots)
- Dark mode ready con Tailwind v4 tokens

## 🛠 Stack

- Next.js 16 (App Router + Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- next-intl
- Vercel (deploy)

## 📁 Estructura

\`\`\`
app/
├── [locale]/           → rutas multiidioma
│   ├── page.tsx        → home
│   ├── proyectos/      → grid + detalle
│   ├── sostenibilidad/ → ESG
│   ├── nosotros/       → about + timeline
│   └── contacto/       → formulario
├── sitemap.ts
└── robots.ts

components/
├── layout/             → Header, Footer, LocaleSwitcher
├── sections/           → Hero, Stats, Featured, Sustainability, FinalCta
└── ui/                 → ProjectCard, ProjectsGrid, ContactForm, AnimatedCounter

data/
└── projects.ts         → datos mock de proyectos

messages/
├── es.json
├── en.json
└── pt.json

i18n/
├── routing.ts
├── request.ts
└── navigation.ts
\`\`\`

## 🚀 Correr localmente

\`\`\`bash
npm install
npm run dev
\`\`\`

Abrir [http://localhost:3000](http://localhost:3000)

## 🌐 Idiomas

- 🇪🇸 Español → `/es`
- 🇬🇧 English → `/en`
- 🇧🇷 Português → `/pt`

## 📝 Licencia

Proyecto de portafolio. TerraWatt y todo su contenido son ficticios.