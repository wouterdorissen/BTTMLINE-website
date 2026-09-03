// Alle klantcases, gedeeld tussen de overzichtspagina (/cases) en de
// detailpagina's (/cases/[slug]). Tekst volgt de aangeleverde case-documenten.

export const caseOrder = [
  'coenegrachts',
  'precitool',
  'house-of-finance',
  'zorgdelen',
  'net-is-net',
  'vecollal-orders',
  'vecollal-salesteam',
];

export const cases = {
  'coenegrachts': {
    naam: 'Coenegrachts Substraat',
    logo: '/assets/logos/coenegrachts.svg',
    tags: ['RPA', 'Integraties', 'Nauwelijks AI'],
    result: 'Administratie meer dan gehalveerd',
    title: 'De administratie meer dan gehalveerd, zonder aan compliance te raken',
    subtitle: 'Wettelijk verplichte transportdocumentatie die grotendeels vanzelf verloopt.',
    meta: [
      { k: 'Sector', v: 'Agrarische logistiek en meststoffendistributie' },
      { k: 'Omvang', v: 'Meer dan 15 medewerkers' },
      { k: 'Waarmee we hielpen', v: 'Procesanalyse, TMS-selectie en -integratie, cross-platform automatisatie op Qargo, VLM en TRACES' },
    ],
    situatie: [
      `Coenegrachts Substraat verwerkt mest- en substraattransporten in een markt waar elke rit een papieren spoor vereist. Elke stroom heeft zijn eigen verplichte documenten via VLM en TRACES: inkomend of uitgaand, eigen of extern vervoer, Vlaanderen, Wallonië of buitenland. Welk document nodig is, hangt af van de vervoerder, het producttype en de route.`,
      `Die documenten werden met de hand aangemaakt en ingegeven in overheidsportalen. Tientallen keren per dag, telkens opnieuw dezelfde gegevens overtypen uit een systeem dat ze al bevatte. Uren per dag, en elke overtypfout raakte rechtstreeks aan compliance.`,
    ],
    waarom: [
      `De voor de hand liggende vraag was: hoe maken we die ingave sneller?`,
      `Wij stelden een andere vraag. Waarom typt hier nog iemand gegevens over die het systeem al kent?`,
      `Op die vraag was geen goed antwoord meer. Het werk is dus niet versneld maar grotendeels weggehaald, en wat overblijft is een pak minder foutgevoelig.`,
    ],
    hertekendIntro: `We begonnen bij het proces, niet bij de technologie. Elke transportstroom in kaart, elke documentvereiste gekoppeld aan de regels die haar bepalen, elke plek waar data van het ene systeem naar het andere werd overgetypt. Daaruit bleek dat de digitale basis eerst moest kloppen. We adviseerden Coenegrachts bij de selectie van hun nieuwe TMS en bouwden de integratie ermee. Automatiseren bovenop een wankele basis levert alleen snellere chaos op.`,
    hertekend: [
      { kop: 'Qargo als bron', tekst: 'Transportdata uit het TMS is de trigger voor documentaanmaak. Geen aparte invoer meer.' },
      { kop: 'Beslisregels die uit hoofden komen', tekst: 'Vervoerder, product en route bepalen welk document vereist is. Die logica zat bij medewerkers en ligt nu vast in het systeem. Geen AI, gewoon regels die eindelijk ergens staan in plaats van in iemands ervaring.' },
      { kop: 'Digitale medewerkers op de portalen', tekst: 'VLM en TRACES hebben geen API. RPA-robots loggen in, maken de documenten aan, vullen de velden in en finaliseren.' },
      { kop: 'Uitzonderingen als eigen categorie', tekst: 'Wat menselijke beoordeling vraagt, wordt herkend, geflagd en apart aangeboden. De rest passeert zonder tussenkomst.' },
      { kop: 'Een dashboard ter opvolging', tekst: 'Eén plek om de volledige documentenstroom op te volgen.' },
    ],
    ai: [
      `In dit traject zit vandaag nauwelijks AI in de operationele flow, en dat is een bewuste keuze. Het probleem was regelgebonden en repetitief. Daar is deterministische automatisatie betrouwbaarder dan een taalmodel. AI is vooral aan onze kant ingezet, om de ontwikkeling van de RPA-flows te versnellen.`,
    ],
    extra: null,
    oplevert: [
      { kop: '', items: [
        'Tientallen transportdossiers per dag worden grotendeels automatisch aangemaakt en ingediend',
        'De administratieve tijd op deze stroom is meer dan gehalveerd',
        'Duidelijk minder overtypfouten op wettelijk verplichte documenten, en dus minder risico op boetes en vertragingen',
        'Wat niet automatisch kan, wordt herkend en apart aangeboden in plaats van tussen de mazen te vallen',
        'Transportvolume kan stijgen zonder dat de administratie evenredig meegroeit',
      ] },
    ],
    kern: `Het werk is niet sneller gemaakt. Het grootste deel ervan is verdwenen, en wat overblijft is precies het deel waar een mens naar moet kijken.`,
  },

  'precitool': {
    naam: 'Precitool',
    logo: '/assets/logos/precitool.svg',
    tags: ['Maatwerk', 'Integraties', 'Geen AI'],
    result: 'Offertes zonder opzoeken of overtypen',
    title: 'Een offerteproces dat niet meer uit opzoeken en overtypen bestaat',
    subtitle: 'Prijzen, kortingen en historiek op één plek, in plaats van verspreid over leveranciers, Excel en het boekhoudpakket.',
    meta: [
      { k: 'Sector', v: 'Technische groothandel en distributie' },
      { k: 'Wat we bouwden', v: 'Maatplatform met leverancierskoppelingen, centrale prijs- en kortingslogica en ExactOnline-integratie' },
    ],
    situatie: [
      `Precitool verkoopt gereedschap tussen producenten en de bedrijven die de onderdelen nodig hebben. Elke offerte betekende zoeken op verschillende plekken: prijzen ophalen op websites van leveranciers, nieuwe prijslijsten via Excel-imports bijhouden, de juiste artikelen terugvinden, aankoopprijzen ingeven in ExactOnline en kortingsafspraken per klant uit een bestand of uit iemands hoofd halen.`,
      `Daar kwam een tweede probleem bovenop. Omdat de offerte uiteindelijk in ExactOnline moest belanden, konden verkopers hem niet zelf afwerken. Ofwel gaf je verkopers toegang tot het boekhoudpakket, ofwel liep elke offerte via administratie. Precitool koos het tweede, wat betekende dat een verkoper die om acht uur 's avonds een klant aan de lijn had, tot de volgende ochtend moest wachten.`,
    ],
    waarom: [
      `De voor de hand liggende vraag was: hoe maken we dat opzoekwerk sneller?`,
      `Wij vroegen: waarom moet iemand prijzen opzoeken die de leverancier gewoon kan doorgeven, en waarom bestaat dit proces nog uit tien stappen over vier bronnen?`,
      `Toen we die stappen één voor één naliepen, bleek er nog iets anders in te zitten. De offerte moest langs de boekhouding omdat ze in ExactOnline terecht moest komen. Ook daar was geen inhoudelijke reden voor.`,
    ],
    hertekendIntro: `We bouwden een platform dat rechtstreeks koppelt met de API's van hun leveranciers en dat prijslijsten inleest waar geen API bestaat. Prijzen zijn daardoor altijd actueel zonder dat iemand ze gaat opzoeken of importeren. Kortingsafspraken zitten in het systeem in plaats van in mensen en bestanden. De zoekfunctie en de flow zijn afgestemd op hoe hun verkopers werkelijk werken, niet op hoe een standaardpakket denkt dat ze werken. Historische offertes zijn doorzoekbaar en dupliceerbaar. De integratie met ExactOnline zorgt ervoor dat de offerte automatisch doorstroomt naar de facturatie, zonder dat die facturatie herbouwd moest worden. Een gerichte ingreep die meteen rendeert, in plaats van een groot project dat maanden duurt voor het iets oplevert.`,
    hertekend: [],
    ai: [],
    extra: null,
    oplevert: [
      { kop: 'Repetitief werk dat verdwenen is', items: [
        'Prijslijsten hoeven niet meer manueel via Excel geïmporteerd en bijgewerkt te worden',
        'Prijzen zijn altijd actueel, zonder opzoekwerk op leverancierswebsites',
        'Geen copy-paste tussen bronnen, en dus geen prijsfouten uit die hoek',
        'Historische offertes zijn terug te vinden, te dupliceren en aan te passen in plaats van opnieuw op te bouwen',
      ] },
      { kop: 'Kennis die niet meer in mensen hoeft te zitten', items: [
        'Nieuwe medewerkers zijn sneller inzetbaar: minder stappen, minder systemen, minder voorkennis',
        'Alles staat op één plek in plaats van verspreid over pakketten, mails en bestanden',
        'Kortingsafspraken kloppen ook wanneer degene die ze maakte er niet is',
      ] },
      { kop: 'Verkopers die niet meer afhankelijk zijn', items: [
        'Sales maakt zelf offertes, zonder tussenkomst van administratie of boekhouding',
        'Geen ExactOnline-toegang meer nodig voor het verkoopteam',
        'Offertes kunnen ook buiten de kantooruren de deur uit, op het moment dat de klant erom vraagt',
      ] },
    ],
    kern: `Het proces is niet sneller gemaakt, het is veel korter geworden. Elke stap die verdwijnt, is een stap die niemand nog fout kan doen en die niemand nog hoeft aan te leren.`,
  },

  'house-of-finance': {
    naam: 'House of Finance',
    logo: '/assets/logos/houseoffinance.png',
    tags: ['AI-classificatie', 'Validatie', 'Salesforce'],
    result: '30+ minuten winst per dossier',
    title: 'De voorbereiding van een financieel plan bestaat niet meer uit documenten najagen',
    subtitle: 'Van ongestructureerde aanlevering via elk mogelijk kanaal naar dossiers die volledig binnenkomen.',
    meta: [
      { k: 'Sector', v: 'Financiële dienstverlening, vermogensopbouw en -bescherming' },
      { k: 'Omvang', v: 'Ongeveer 20 medewerkers' },
      { k: 'Wat we bouwden', v: 'Procesanalyse, uploadmodules met validatie bij ontvangst, inbox-classificatie en koppeling met Salesforce' },
    ],
    situatie: [
      `House of Finance stelt voor elke klant een persoonlijk financieel plan op, gebaseerd op vermogen, vastgoed, inkomen en pensioen. Zo'n plan kan pas gemaakt worden als het beeld compleet is: beleggingsoverzichten, mypension-uittreksels, eigendomsdocumenten, verzekeringen.`,
      `Die documenten kwamen binnen via elk kanaal dat de klant koos. Los van elkaar, op verschillende momenten, in wisselende kwaliteit. Elk ontbrekend of onleesbaar stuk betekende een nieuwe mail, een nieuw wachtmoment en opnieuw uitzoeken wat er nu precies nog miste. Wat overbleef werd met de hand overgezet naar het juiste dossier.`,
      `Het resultaat: medewerkers waren meer tijd kwijt aan het verzamelen en sorteren van documenten dan aan het advies waarvoor de klant kwam. En de klant voelde die vertraging, zonder te begrijpen waar ze vandaan kwam.`,
    ],
    waarom: [
      `De voor de hand liggende vraag was: hoe volgen we sneller op welke documenten nog ontbreken?`,
      `Wij vroegen iets anders. Waarom bestaat het opstellen van een financieel plan in de praktijk grotendeels uit het verzamelen van documenten?`,
    ],
    hertekendIntro: '',
    hertekend: [
      { kop: 'Aanlevering op één plek', tekst: 'De klant levert gestructureerd aan per documenttype, in plaats van via een mailwissel die niemand overziet.' },
      { kop: 'Validatie op het moment van binnenkomst', tekst: 'Volledigheid, leesbaarheid en conformiteit worden meteen gecontroleerd. Ontbreekt er iets, dan weet je dat bij ontvangst en niet drie dagen later bij het openen van het dossier.' },
      { kop: 'Automatische koppeling aan het klantdossier', tekst: 'Documenten en interacties belanden vanzelf op de juiste plek in Salesforce. Geen copy-paste, geen schakelen tussen schermen.' },
      { kop: 'Inkomende mail die zichzelf sorteert', tekst: 'Aanleveringen, vragen en klachten worden geclassificeerd en gerouteerd naar de juiste persoon, zodat ze niet meer in één ongesorteerde stroom belanden.' },
      { kop: 'Signalen naar de juiste medewerker', tekst: 'Bij een onvolledig of incorrect document gaat er een melding naar wie het dossier opvolgt, in plaats van dat het pas opvalt wanneer het plan gemaakt moet worden.' },
    ],
    ai: [],
    extra: {
      kop: 'Wat er nu komt',
      paras: [
        `Met de aanlevering op orde verschuift de vraag. Niet meer hoe je documenten binnenkrijgt, maar hoe je de manier van denken die achter een goed advies zit beschikbaar maakt voor iedereen.`,
        `House of Finance heeft jaren gebouwd aan een eigen methodiek rond financieel advies en vermogensopbouw. Die methodiek is hun sterkste troef, maar ze zit grotendeels in de hoofden van enkele mensen, waardoor elk topdossier langs dezelfde flessenhals loopt. Daar werken we nu aan: eerst een kennisfundament, daarna die kennis beschikbaar voor elke relatiebeheerder bij elk dossier. Vendor-neutraal opgebouwd, zodat House of Finance zelf beslist wat er nadien op aangesloten wordt.`,
      ],
    },
    oplevert: [
      { kop: '', items: [
        'Minstens 30 minuten winst per dossier op de voorbereiding, bij tien of meer dossiers per week',
        'Fors minder heen-en-weer met de klant, en dus kortere doorlooptijd van intake tot plan',
        'Adviseurs starten met een volledig en gevalideerd dossier in plaats van met een half dossier en een lijst openstaande vragen',
        'Salesforce is altijd actueel, met een volledig klantbeeld op één plek',
        'Het volume kan stijgen zonder dat er iemand bij moet voor triage',
      ] },
    ],
    kern: `Eerst het verzamelen weghalen, dan pas de kennis schalen. In die volgorde, want expertise beschikbaar maken bovenop een proces dat vastloopt op ontbrekende documenten verandert niets.`,
  },

  'zorgdelen': {
    naam: 'ZorgDelen',
    logo: '/assets/logos/zorgdelen.png',
    tags: ['Platform op maat', 'Integraties', 'Geen AI'],
    result: 'Maandelijkse facturatie volledig automatisch',
    title: 'Een platform overgenomen, en meteen de vraag gesteld waarom er nog zoveel naast gebeurde',
    subtitle: 'Maandelijkse facturatie die vanzelf verloopt, in plaats van elke maand opnieuw met de hand.',
    meta: [
      { k: 'Sector', v: 'Zorg, platform dat zorgvragers en zorgdelers verbindt' },
      { k: 'Omvang', v: 'Klein team, groeiende gebruikersbasis' },
      { k: 'Waarmee we hielpen', v: 'Overname en herbouw van het platform op maat, procesanalyse van de facturatie, integratie met Billit, meedenken over functionaliteit' },
    ],
    situatie: [
      `ZorgDelen brengt mensen met een zorgbehoefte samen met mensen die zorg kunnen bieden. Daar hangt een platform aan dat die werking moet dragen.`,
      `Toch gebeurde een groot deel van dat werk nog met de hand. De maandelijkse facturatie op kop: gegevens die het platform allemaal al bevatte, werden elke maand opnieuw manueel tot facturen verwerkt.`,
      `Bij een team van twee is dat geen ongemak. Maar elk stuk handwerk dat meegroeit met het aantal gebruikers is een plafond op de groei zelf.`,
      `De vorige leverancier bouwde wat gevraagd werd. ZorgDelen zocht geen andere uitvoerder, wel een partner die meedenkt, schakelt en werk helpt wegnemen in plaats van het enkel te ondersteunen.`,
    ],
    waarom: [
      `De vraag aan ons was: kunnen jullie dit platform overnemen?`,
      `Wij stelden eerst een andere vraag. Wat moet er verbeteren? En daarachter: waarom gebeurt de facturatie nog elke maand met de hand, terwijl het platform de gegevens al heeft? Hadden we de overname gedaan zonder ze te stellen, dan had ZorgDelen hetzelfde platform gehad met een andere naam op de factuur.`,
    ],
    hertekendIntro: `We namen het platform over en bouwden het op maat opnieuw op. Niet als doel op zich, wel omdat de basis moest kloppen voordat er iets bovenop kon.`,
    hertekend: [
      { kop: 'Facturatie uit het platform zelf', tekst: 'De gegevens die er al in zitten, worden de bron voor de maandelijkse facturen. Via de koppeling met Billit verloopt dat automatisch. Geen aparte maandelijkse ronde meer.' },
      { kop: 'Koppelen van zorgvragers en zorgdelers', tekst: 'Het hart van het platform is de match tussen wie zorg nodig heeft en wie ze kan geven. Die logica is doordacht en ondersteund in plaats van elke keer opnieuw uitgezocht.' },
      { kop: 'Functionaliteit uit gesprek, niet uit een ticket', tekst: 'We denken samen met ZorgDelen na over wat het platform moet doen en hoe het moet werken. Dat is de manier van werken die het verschil maakt tegenover de vorige situatie.' },
    ],
    ai: [
      `Generatieve AI was hier niet nodig, en dat is een bewuste keuze. De winst zat in slim koppelen: gegevens doorduwen die er al zijn, en zorgvragers en zorgdelers correct aan elkaar hangen. Dat vraagt goede logica en degelijke integraties, geen taalmodel.`,
    ],
    extra: null,
    oplevert: [
      { kop: '', items: [
        'De maandelijkse facturatie verloopt volledig automatisch en vlot',
        'Een klein team kan een groeiende gebruikersbasis bedienen zonder dat het handwerk evenredig meegroeit',
        'Het platform staat bij een partner die meedenkt over wat het moet doen, niet enkel over hoe het gebouwd wordt',
        'De basis is klaar om verder op uit te breiden',
      ] },
    ],
    kern: `De vraag was of we het platform konden overnemen. Het antwoord was ja, maar pas nadat duidelijk was waarom er naast dat platform nog zoveel met de hand gebeurde.`,
  },

  'net-is-net': {
    naam: 'Net = Net',
    logo: '/assets/logos/net-is-net.svg',
    tags: ['AI-agent', 'Integraties', 'WhatsApp Business'],
    result: 'Communicatie die vanzelf kan, gebeurt vanzelf',
    title: 'De communicatie die vanzelf kan, gebeurt vanzelf. De rest krijgt weer tijd.',
    subtitle: 'Planning die het kantoor verlaat zonder dat iemand ze doorbelt, en inkomende berichten die niet meer overgetypt moeten worden.',
    meta: [
      { k: 'Sector', v: 'Dienstencheques en huishoudhulp' },
      { k: 'Omvang', v: 'Meerdere kantoren' },
      { k: 'Waarmee we hielpen', v: 'Procesanalyse, koppeling met Prato en Cheqpoint, automatische berichtgeving via WhatsApp Business, AI-agent op inkomende berichten' },
    ],
    situatie: [
      `Net = Net beheert de planning van huishoudhulpen in een softwarepakket. Dat pakket doet wat het moet doen voor de planning zelf, maar het doet niets aan communicatie.`,
      `Alles wat tussen kantoor, huishoudhulp en klant moet passeren, gebeurt met de hand. Een ziekmelding, een verplaatsing, een vraag over een afspraak. Dat komt binnen via telefoon, mail of WhatsApp, bij de kantoormedewerker. Wat daarvan in het systeem hoort, wordt daarna overgetypt.`,
      `De huishoudhulp en de klant zitten ondertussen aan de andere kant van diezelfde medewerker. Ze hebben geen eigen zicht op hun planning en krijgen informatie pas wanneer iemand tijd heeft om ze door te geven.`,
    ],
    waarom: [
      `De voor de hand liggende vraag was: hoe krijgen we die communicatie sneller georganiseerd?`,
      `Wij stelden een andere vraag. Waarom typt hier iemand informatie over die al doorgegeven is? En, minstens even belangrijk: welke van al die berichten voegt eigenlijk iets toe?`,
      `Dat onderscheid bleek de kern. Een deel van de communicatie is louter het doorgeven van wat het systeem al weet. Een ander deel vraagt een mens die luistert en beslist. Die twee waren tot dan door elkaar aan het lopen bij dezelfde persoon.`,
    ],
    hertekendIntro: `We begonnen bij het proces, niet bij de technologie. Welke berichten passeren er, tussen wie, via welk kanaal, en wat is er voorspelbaar aan.`,
    hertekend: [
      { kop: 'De planning blijft waar ze hoort', tekst: 'Prato en Cheqpoint blijven de bron. We vervangen dat niet, we koppelen erop.' },
      { kop: 'Uitgaande berichtgeving automatisch', tekst: 'Wat volgt uit de planning, vertrekt zonder tussenkomst naar klant en huishoudhulp via WhatsApp Business. Geen AI, gewoon een koppeling die doet wat een medewerker anders manueel deed.' },
      { kop: 'Inkomende berichten door AI gelezen', tekst: 'Wat binnenkomt van klanten en huishoudhulpen is ongestructureerd: vragen, planningswijzigingen, ziektemeldingen, in eigen bewoordingen. Een AI-agent analyseert die berichten en brengt ze naar de juiste plek in plaats van naar de wachtrij van een medewerker.' },
      { kop: 'Klant en huishoudhulp krijgen zicht', tekst: 'Informatie komt bij hen terecht op het moment dat ze bestaat, niet wanneer iemand tijd vindt om ze door te geven.' },
    ],
    ai: [
      `Uitgaande planningscommunicatie is voorspelbaar en regelgebonden. Daar is deterministische automatisatie betrouwbaarder dan een taalmodel, en dus zit er geen AI in.`,
      `Inkomende communicatie is dat net niet. Mensen schrijven wat ze willen, op het moment dat het hen uitkomt. Dat gestructureerd krijgen is precies waar AI sterk in is. Hetzelfde traject, twee soorten taken, twee verschillende oplossingen.`,
    ],
    extra: null,
    oplevert: [
      { kop: '', items: [
        'De kantoormedewerker kan opnieuw focussen op de communicatie die meerwaarde geeft, in plaats van op doorgeven en overtypen',
        'Huishoudhulp en klant zijn meer in controle over hun eigen informatie',
        'Informatie die binnenkomt via telefoon, mail of WhatsApp moet niet meer manueel in het systeem gezet worden',
        'Het aantal berichten kan stijgen zonder dat er evenredig meer kantoortijd nodig is',
      ] },
    ],
    kern: `Niet alle communicatie is gelijk. Het deel dat enkel doorgeeft wat het systeem al weet, hoort niet bij een mens. Het deel dat luisteren vraagt, hoort nergens anders.`,
  },

  'vecollal-orders': {
    naam: 'Vecollal',
    logo: '/assets/logos/vecollal.png',
    tags: ['AI-agent', 'Process shadowing', 'Integraties'],
    result: 'Orders niet meer uit de mailbox reconstrueren',
    title: 'De verkoopsafspraken liggen niet meer in de mailbox',
    subtitle: 'Een AI-agent leest het order, toetst het aan wat er eerder is afgesproken en legt die afspraak vast voor de volgende keer.',
    meta: [
      { k: 'Sector', v: 'Supplementen, salesgericht team' },
      { k: 'Omvang', v: 'Klein team met een sterke salesfocus' },
      { k: 'Waarmee we hielpen', v: 'Procesanalyse via process shadowing, AI-agent op inkomende orders per mail en bijlage, vastleggen van verkoopsafspraken, koppeling met de transport- en warehousingpartner' },
    ],
    situatie: [
      `Bij Vecollal komen orders binnen zoals ze in veel salesorganisaties binnenkomen: per mail, vaak met een bijlage, in de bewoordingen van de klant.`,
      `Wat er met die klant precies was afgesproken, over prijs, volume en leveringsvoorwaarden, stond nergens centraal. Het lag verspreid over jaren mailverkeer, en voor de rest in de ervaring van wie die mails destijds geschreven had.`,
      `Om één nieuw order te kunnen aanmaken moest iemand dus eerst op zoek. Historische mails doorlopen, vorige orders ernaast leggen, nagaan of de afspraak nog gold. Dat is voorbereidend werk dat bij elk order opnieuw begon, en dat volledig steunde op wie het geheugen van de klantrelatie in handen had.`,
    ],
    waarom: [
      `De voor de hand liggende vraag was: hoe krijgen we die orderingave sneller?`,
      `Wij stelden een andere vraag. Waarom is de mailbox hier het afsprakenregister? Zolang dat zo blijft, begint elk order met het reconstrueren van kennis die al bestond maar nergens vastlag. Dan kan je het zoeken versnellen, maar je zoekt nog altijd.`,
    ],
    hertekendIntro: `We begonnen met process shadowing: het proces volgen zoals het echt liep, inclusief de beslisregels die niemand had opgeschreven omdat ze vanzelfsprekend leken.`,
    hertekend: [
      { kop: 'De agent leest de mail en de bijlage', tekst: 'Wat de klant vraagt wordt eruit gehaald, ongeacht in welke vorm het binnenkomt.' },
      { kop: 'Toetsen aan de historiek', tekst: 'De agent legt het order naast vorige orders en de afspraken die daarbij hoorden. Klopt het beeld, dan loopt het door.' },
      { kop: 'Terugkoppeling naar de vertegenwoordiger', tekst: 'Is er twijfel of wijkt iets af, dan gaat het terug naar de salesmedewerker met de vraag erbij. Die krijgt geen orderlijst te controleren, wel de gevallen waar iets aan de hand is.' },
      { kop: 'De bevestigde afspraak wordt vastgelegd', tekst: 'Wat de vertegenwoordiger bevestigt, wordt opgeslagen als afspraak voor de toekomst. Elke twijfel die één keer wordt uitgeklaard, komt niet terug. De mailbox verliest zo stilaan haar rol als kennisbron.' },
      { kop: 'De mens geeft de go', tekst: 'Voor een order vertrekt, gaat er nog een korte controle overheen. Geen volledige herwerking, wel een laatste blik.' },
      { kop: 'Na goedkeuring loopt het door', tekst: 'Het order wordt automatisch ingeboekt richting de warehousing- en transportpartner. Geen tweede ingave, geen overtypen.' },
    ],
    ai: [
      `De inkomende kant is ongestructureerd. Klanten schrijven wat ze willen, in mail of in bijlage. Dat interpreteren is precies waar een taalmodel thuishoort.`,
      `De uitgaande kant is dat net niet. Een goedgekeurd order doorgeven aan warehousing en transport is een vaste stap met vaste velden. Daar is een gewone koppeling betrouwbaarder dan AI. En de afspraak zelf is geen AI-resultaat: zodra een mens ze bevestigt, is het een vastgelegd gegeven waar het systeem later gewoon naar kijkt.`,
    ],
    extra: null,
    oplevert: [
      { kop: '', items: [
        'Een nieuw order begint niet meer met een zoektocht door mailhistoriek',
        'Verkoopsafspraken staan vast in plaats van verspreid over mailverkeer en ervaring',
        'De salesmedewerker krijgt enkel wat afwijkt, niet alles wat binnenkomt',
        'Na goedkeuring loopt het order zonder tussenkomst door naar warehousing en transport',
        'De organisatie is minder afhankelijk van wie de klantgeschiedenis in het hoofd heeft',
      ] },
    ],
    kern: `Het order aanmaken was nooit het echte werk. Het echte werk was uitzoeken wat er ooit was afgesproken. Dat is nu geen zoektocht meer maar een gegeven, en het wordt met elk order dat passeert een beetje vollediger.`,
  },

  'vecollal-salesteam': {
    naam: 'Vecollal',
    logo: '/assets/logos/vecollal.png',
    tags: ['AI-assistent', 'CRM', 'Werkwijze'],
    result: 'CRM bijhouden zonder dat het administratie is',
    title: 'Het CRM was niet het probleem. De weg ernaartoe wel.',
    subtitle: 'Verkopers die hun CRM bijhouden zonder dat het aanvoelt als administratie, met een AI-assistent die meedenkt in plaats van een formulier dat wacht.',
    meta: [
      { k: 'Sector', v: 'Supplementen, salesgericht team' },
      { k: 'Omvang', v: 'Klein team met een sterke salesfocus' },
      { k: 'Waarmee we hielpen', v: 'Analyse van hoe het salesteam werkt, skills opgezet in hun AI-assistent, de koppeling met hun CRM uitgelegd, tools en werkwijze aangeleverd' },
    ],
    situatie: [
      `Bij Vecollal ontstaat commerciële informatie waar sales gebeurt: in online meetings, op beurzen, in mailverkeer en aan de telefoon.`,
      `Daarna moest die informatie nog ergens terechtkomen. Contactgegevens, bezoekverslagen, orderregels, opvolgtaken, statussen, allemaal met de hand in het CRM. Na de meeting, na de beursdag, tussen twee gesprekken door.`,
      `Het gevolg is bekend in elke salesorganisatie. Het CRM loopt achter, niet omdat het niet werkt, maar omdat bijhouden altijd concurreert met verkopen. En bij een team dat vooral commercieel is, verliest het CRM die concurrentie.`,
    ],
    waarom: [
      `De voor de hand liggende vraag was: hoe krijgen we het salesteam zover dat ze het CRM correct bijhouden?`,
      `Wij stelden een andere vraag. Waarom moeten zij dit allemaal zelf intypen?`,
      `De informatie bestond namelijk al. Ze zat in het gesprek dat net gevoerd was, in de mail die net verstuurd was, in de meeting die net was afgelopen. Wat ontbrak, was niet discipline. Wat ontbrak, was een korte weg tussen waar informatie ontstaat en waar ze hoort te staan.`,
    ],
    hertekendIntro: `Hier is bewust niets gebouwd. Er was geen nieuw systeem nodig en geen ontwikkeltraject. Wat nodig was, was de manier van werken.`,
    hertekend: [
      { kop: 'Skills in hun AI-assistent', tekst: 'De taken die een verkoper telkens opnieuw doet, zijn vastgelegd als herbruikbare skills. De assistent maakt van wat er gebeurd is iets dat rechtstreeks in het CRM kan, in plaats van dat de verkoper het achteraf reconstrueert.' },
      { kop: 'De koppeling met het CRM uitgelegd', tekst: 'Niet gebouwd, wel duidelijk gemaakt. Wat het systeem al kon, werd zichtbaar en bruikbaar voor de mensen die ermee moeten werken.' },
      { kop: 'De tools in handen van het team zelf', tekst: 'Verkopers hebben de werkwijze en de middelen gekregen om er zelf mee verder te kunnen, niet enkel een oplevering om te gebruiken.' },
      { kop: 'De assistent is proactief', tekst: 'Niet een leeg veld dat wacht tot iemand tijd heeft, maar iets dat het werk aanreikt.' },
    ],
    ai: [
      `Wat een verkoper meemaakt is ongestructureerd. Een gesprek, een mail, een beursnotitie, allemaal in vrije vorm. Dat omzetten naar iets bruikbaars is precies waar een taalmodel sterk in is.`,
      `Maar het CRM blijft de bron van waarheid en de verkoper blijft beslissen wat erin gaat. De assistent bereidt voor, de mens bevestigt. AI mag hier het schrijfwerk overnemen, niet de commerciële beoordeling.`,
    ],
    extra: null,
    oplevert: [
      { kop: '', items: [
        'Minder weerstand om het CRM bij te houden, omdat de drempel om het te doen kleiner is geworden',
        'Informatie uit meetings, beurzen, mails en telefoongesprekken komt vlotter op de juiste plek terecht',
        'Een assistent die het werk aanreikt in plaats van erop te wachten',
        'Geen nieuw systeem, geen bouwtraject, geen migratie',
        'Het team kan er zelf mee verder en de werkwijze uitbreiden',
      ] },
    ],
    kern: `Soms is het antwoord niet iets bouwen. Het CRM was niet stuk en het team was niet ongedisciplineerd. De afstand tussen waar het werk gebeurt en waar het moest worden vastgelegd, was gewoon te groot.`,
  },
};
