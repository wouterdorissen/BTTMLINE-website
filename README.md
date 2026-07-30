# BTTMLINE Website

Marketing website voor BTTMLINE — automatisering en AI voor Vlaamse bedrijven.
Geïmplementeerd vanuit het Claude Design–handoff (`BTTMLINE Website.dc.html`) als
een statische [Astro](https://astro.build) site met echte routes per pagina.

## Stack

- **Astro 5** — static site generation, componenten voor gedeelde chrome.
- **Plain CSS** — de designtokens en per-sectie styling staan 1:1 zoals in het
  handoff. Geen CSS-framework, zodat de exacte waarden (clamps, hairline-borders,
  1px-gap grids) behouden blijven.
- Google Fonts: **Archivo** (display + body) en **JetBrains Mono** (labels/meta).

## Structuur

```
src/
  layouts/Base.astro          Achtergrondanimatie, cursor-grid, <head>/SEO/OG, main, script
  components/
    Header.astro              Vaste header + mobiel hamburgermenu, actieve-pagina highlight
    Footer.astro              Gedeelde footer
  pages/
    index.astro               /                       Home
    diensten.astro            /diensten               Diensten en trajecten
    cases.astro               /cases                  Cases
    inzichten.astro           /inzichten              Inzichten (overzicht, leest de blog-collectie)
    inzichten/[...slug].astro /inzichten/<slug>       Losse artikelpagina met prose-styling
    team.astro                /team                   Team
    contact.astro             /contact                Contact + werkend contactformulier
    404.astro                 (fallback)              Gebrande 404
  content/inzichten/*.md      Blogartikelen (één .md = één artikel + route)
  content.config.ts           Schema van de blog-collectie
  styles/global.css           Tokens, reset, keyframes, hover-states, responsive
public/
  assets/bttmline-logo-white.png
  favicon.svg
  og-image.png                1200x630 social-preview
  robots.txt
netlify.toml / vercel.json    Deploy-config (build: npm run build, output: dist/)
```

## Een blogartikel toevoegen

Maak een nieuw `.md`-bestand in `src/content/inzichten/`. De bestandsnaam wordt de URL
(`/inzichten/<bestandsnaam>`) en de kaart verschijnt automatisch op `/inzichten`.
Frontmatter:

```yaml
---
title: Titel van het artikel
category: Demystifying AI    # of: Praktijk | Niet alles is AI
summary: Eén zin voor de kaart en de meta-description.
date: 2026-06-18
readingTime: 4 min           # optioneel
draft: false                 # true = niet publiceren
---
```

## Deployen

Statische output, host waar je wil. Netlify en Vercel pikken de meegeleverde config
vanzelf op (`npm run build` → `dist/`). Zet `site` in `astro.config.mjs` op je
uiteindelijke domein zodat canonicals, sitemap en OG-URL's kloppen.

## Ontwikkelen

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # statische output in dist/
npm run preview  # bekijk de productie-build lokaal
```

## Implementatiekeuzes t.o.v. het prototype

- Clientside `state.page` uit het prototype is vervangen door **echte routes** met
  eigen URL's (`/`, `/diensten`, ...), zoals gevraagd in het handoff.
- De `style-hover` interacties zijn echte CSS `:hover`-regels geworden
  (zie `global.css`), inclusief de nav-, button-, card-, case-, tile- en logo-hovers.
- De **cursor-spotlight-grid** en de achtergrondanimatie schrijven CSS-variabelen
  rechtstreeks naar het element (geen re-render), en staan uit bij
  `prefers-reduced-motion` en op touch devices.
- **Responsive**: tweekolomsgrids klappen naar één kolom < 1024px, de dienstentegels
  gaan van 4 → 2 → 1 kolom, cases stapelen (metakolom onder de tekst), en de hoofdnav
  wordt < 768px een hamburgermenu met full-screen paneel (de CTA blijft zichtbaar).

## Wat werkt en wat nog aangeleverd wordt

**Werkt:** alle zes pagina's, de blog met vijf artikelen (bewerkbare startteksten),
een werkend contactformulier (opent een voorgevulde mail naar `hallo@bttmline.be`,
zonder backend), sitemap, robots.txt, OG-image, en een gebrande 404.

**Nog aan te leveren door BTTMLINE (bewust als placeholder gelaten):**

- Echte klantlogo's (monochroom wit) voor de logobalk op Home.
- Foto's van Ben en Tom (echte foto's, geen stock) op Team. Nu een monogram met "Foto volgt".
- Casebeelden/screenshots en definitieve klantnamen + cijfers.
- Boekingswidget (Cal.com / HubSpot / Google) op Contact, plus telefoonnummer.
  Het contactformulier is de werkende tussenoplossing; swap de `mailto`-submit
  in `contact.astro` voor een Formspree/HubSpot-endpoint zodra dat er is.
- Webinar-inschrijfsysteem (Inzichten). De vijf blogartikelen zijn startteksten,
  klaar om te herzien in jullie eigen stem.
- Een SVG-versie van het logo voor scherpte.
