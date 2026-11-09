# Portafolio de Michael Zapata

Portafolio estático hecho con Astro y Tailwind CSS, con español como idioma raíz y rutas `/en/` y `/fr/`.

## Estructura

```text
.
├── astro.config.mjs
├── tailwind.config.mjs
├── postcss.config.mjs
├── package.json
└── src/
    ├── components/
    │   ├── Footer.astro
    │   ├── Header.astro
    │   ├── HomePage.astro
    │   ├── ShowcaseCard.astro
    │   ├── TechBadge.astro
    │   └── ThemeToggle.astro
    ├── content.config.ts
    ├── content/
    │   └── guides/
    │       ├── es/
    │       ├── en/
    │       └── fr/
    ├── data/site.ts
    ├── i18n/ui.ts
    ├── layouts/Layout.astro
    ├── pages/
    │   ├── index.astro
    │   ├── guias/[slug].astro
    │   ├── en/index.astro
    │   ├── en/guias/[slug].astro
    │   ├── fr/index.astro
    │   └── fr/guias/[slug].astro
    └── styles/global.css
```

## Ejecutar

```sh
bun install
bun run dev
```

Compilación estática para Cloudflare Pages:

```sh
bun run build
```

El resultado queda en `dist/`. En Cloudflare Pages, configura el comando de compilación `bun run build` y el directorio de salida `dist`.

## Personalización pendiente

- Actualiza `github` en `src/data/site.ts` cuando tengas la URL del perfil. El enlace se oculta mientras esté vacío.
- Configura el dominio del sitio en `astro.config.mjs` al desplegar; no se añade canonical mientras se desconoce el dominio.
- Las tres guías incluidas son ejemplos editoriales editables, no afirmaciones de proyectos ya realizados.
- La miniatura de cada guía es un diagrama esquemático CSS/texto. Añade `cover` al frontmatter y coloca la imagen correspondiente en `public/` para usar una miniatura propia.
- En Astro 5, la configuración de colecciones vive en `src/content.config.ts`; `src/content/config.ts` es la ubicación usada por Astro 4.
