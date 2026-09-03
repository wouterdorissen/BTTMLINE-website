# BTTMLINE website — oplevering & aandachtspunten

Korte gids voor wie de site host en beheert.

## Wat het is

Een **statische website** gebouwd met Astro. Geen server, database of backend nodig. Na het bouwen krijg je een map met gewone HTML/CSS/JS die je op om het even welke statische host kan zetten.

## Bouwen en hosten

Vereist: Node 20 of hoger.

```bash
npm install      # eenmalig, installeert dependencies
npm run dev      # lokaal bekijken op http://localhost:4321
npm run build    # bouwt de site naar de map dist/
npm run preview  # de gebouwde site lokaal testen
```

`npm run build` levert de map **`dist/`** op. Dat zijn statische bestanden. Je kan die hosten op:

- Vercel, Netlify of Cloudflare Pages (koppel de GitHub-repo, build-commando `npm run build`, output-map `dist`). Deze detecteren Astro meestal automatisch.
- Of een gewone webserver (nginx, Apache, ...): upload gewoon de inhoud van `dist/`.

Er zijn **geen geheime sleutels of environment variabelen** nodig. De aanwezige id's (PageSense, ElevenLabs) zijn publieke embed-id's, geen secrets.

## Domein koppelen

Pas in `astro.config.mjs` de regel `site: 'https://www.bttmline.be'` aan naar het definitieve domein. Die waarde bepaalt de canonical-URL's, de sitemap en de structured data (SEO/GEO). `public/robots.txt` verwijst ook naar de sitemap-URL; check die na een domeinwijziging.

## Belangrijkste aandachtspunten (nog af te werken)

### 1. Formulieren zijn nog niet productieklaar
Het contactformulier en het open-sollicitatieformulier werken via `mailto`: ze openen de mailapp van de bezoeker met een klaargezette mail die hij zelf nog moet verzenden. Dat werkt niet betrouwbaar (geen ingestelde mailclient = geen mail, geen opslag, geen spam-bescherming, geen bevestiging).
**Te doen:** vervang dit door een echt formulier-endpoint — bijvoorbeeld een Zoho-formulier, Formspree, Basin of een serverless functie. Zolang dat niet gebeurt, komen leads niet gegarandeerd binnen.

### 2. Cookie-consent is een basis, geen volledige CMP
De cookiemelding blokkeert de analytics (Zoho PageSense) correct tot de bezoeker toestemming geeft. Maar de **AI-spraakassistent (ElevenLabs)** en het **boekingsvenster (Cal.com)** laden nu nog vóór toestemming.
**Te doen voor volledige GDPR-conformiteit:** ofwel die twee ook pas laden na toestemming, ofwel een consent-tool zoals **Cookiebot** inschakelen (blokkeert automatisch alle niet-essentiële scripts en houdt consent-logs bij).

### 3. Privacybeleid nog juridisch nakijken
`/privacy` is een degelijke basis, maar laat ze nakijken en vul het ondernemings-/BTW-nummer aan.

### 4. Externe diensten die actief moeten blijven
- **Cal.com** — het boekingsvenster op /contact wijst naar `cal.com/bttmline`. Dat account moet bestaan en actief blijven.
- **ElevenLabs** — de spraakassistent (agent-id in `src/layouts/Base.astro`). Wil je die (voorlopig) niet, verwijder dan het `<elevenlabs-convai>`-blok onderaan `Base.astro`.
- **Zoho PageSense** — analytics-script in `Base.astro`. Vervang of verwijder als je een andere analytics gebruikt.

### 5. GitHub Pages
Als de repo op GitHub staat, kan GitHub Pages een (falende) build proberen. Er staat een `.nojekyll` in de repo om dat te neutraliseren. Zet GitHub Pages anders gewoon uit; de site draait via de gekozen host, niet via Pages.

## Nog te bezorgen content
- Persoonlijke bio's voor Ben en Tom (staan nu op placeholder in `src/pages/team.astro`).
- Eventuele extra cases en beeldmateriaal.
- Bevestiging dat BTTMLINE formeel geregistreerd is als **Start AI-partner** (staat zo vermeld op /start-ai).

## Structuur (kort)
- `src/pages/` — de pagina's (home = `index.astro`, plus diensten, cases, situaties, team, faq, contact, start-ai, privacy).
- `src/pages/cases/[slug].astro` + `src/data/cases.js` — de cases (tekst staat centraal in `cases.js`).
- `src/layouts/Base.astro` — gedeelde head, analytics, cookiemelding, chat-widget.
- `src/components/` — Header en Footer.
- `src/styles/global.css` — thema (licht/donker), kleuren, fonts.
- `public/assets/` — logo's en foto's.
