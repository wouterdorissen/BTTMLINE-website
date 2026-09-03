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

### 1. Formulieren

**Webinar-inschrijving (/inzichten) — werkt.** Dit formulier stuurt de inschrijving rechtstreeks naar een **Zapier-webhook** (catch hook). Zapier verwerkt de lead daarna verder (bevestigingsmail, Verse Vlaai nieuwsbrief-opt-in, CRM, ...).
- Webhook-URL staat in `src/pages/inzichten.astro` (constante `WEBHOOK`): `https://hooks.zapier.com/hooks/catch/3860734/4hfwms1/`. Wil je de bestemming wijzigen, pas daar de URL aan (en de Zap in Zapier).
- Verstuurde velden: `voornaam`, `naam`, `email`, `bedrijf`, `gsm`, `postcode`, `sessie_1_mensentaal` / `sessie_2_fouten` / `sessie_3_automatisering` (ja/nee), `sessies` (samenvatting), `nieuwsbrief` (ja/nee), `bron`.
- Er zit een verborgen honeypot-veld (`website`) in tegen botspam. De privacy-akkoordlink wijst naar `/privacy` (BTTMLINE).
- Let op: de webhook-URL staat in de client-side code (onvermijdelijk bij een statische site). Wie de URL kent, kan er in theorie naar posten. De honeypot vangt simpele bots; voor meer bescherming kan je in Zapier een filter/validatie of captcha toevoegen.

**Contact- en sollicitatieformulier — nog `mailto`.** Deze twee openen de mailapp van de bezoeker met een klaargezette mail die hij zelf nog moet verzenden. Dat is niet betrouwbaar (geen ingestelde mailclient = geen mail, geen opslag, geen bevestiging).
**Te doen:** zet ze op dezelfde manier op een webhook (Zapier) of een echt endpoint (Zoho/Formspree/serverless).

### 2. Cookie-consent
De cookiemelding blokkeert nu **alle** niet-essentiële derde partijen tot de bezoeker aanvaardt: de analytics (Zoho PageSense), de AI-spraakassistent (ElevenLabs) en het boekingsvenster (Cal.com, dat op de contactpagina pas laadt na een extra klik). Weigert de bezoeker, dan laadt niets daarvan.
**Optioneel voor strikte conformiteit:** een tool als Cookiebot voegt granulaire categorieën en consent-logging toe. Voor deze schaal is de huidige aanpak een nette, verdedigbare basis.

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
