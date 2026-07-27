// Dutch user manual — localized from en.js (source of truth).
//
// Each section may carry a `screenshot` (a PhoneScreenshot `name`) which the
// Help component lays out beside the text, alternating sides down the page.
//
// Block types understood by components/Help.js:
//   { type: "p", text }               paragraph (supports **bold**, *italic*, [text](url))
//   { type: "ul", items: [] }         bullet list
//   { type: "steps", items: [] }      numbered steps
//   { type: "tip", text }             highlighted tip callout
//   { type: "note", text }            neutral note callout
//   { type: "table", head, rows }     small table

const nl = {
  locale: "nl",
  appName: "Brieven",
  homeUrl: "https://letter-app.com/nl",
  canonical: "https://letter-app.com/nl/help",
  metaTitle: "Brieven App handleiding — brieven schrijven & printen",
  metaDescription:
    "De complete handleiding van de Brieven app: schrijf en opmaak een brief, voeg een logo of briefhoofd toe, gebruik de AI-assistent, beheer afzenders en sjablonen, en print of deel een kant-en-klare PDF.",
  keywords: [
    "brieven app handleiding",
    "hoe schrijf ik een brief",
    "brief printen",
    "logo aan brief toevoegen",
    "briefhoofd PDF",
    "brief sjablonen",
    "handtekening in brief",
    "brieven app help",
  ],

  title: "Handleiding",
  tagline:
    "Alles wat de Brieven app kan — echte brieven schrijven, opmaken en printen, en ze vervolgens delen als een printklare PDF.",
  proNote:
    "Sommige functies horen bij het **Brieven PRO**-abonnement (hieronder gemarkeerd met PRO). De eerste keer dat je op een PRO-functie tikt, toont de app het upgradescherm met een gratis proefperiode. Al het andere — een brief schrijven, bekijken, delen en printen — is gratis.",
  tocTitle: "Inhoud",

  sections: [
    {
      id: "getting-around",
      title: "De weg vinden",
      screenshot: "overview",
      screenshotAlt: "De lijst met brieven",
      blocks: [
        { type: "p", text: "Als je de app opent, kom je terecht op je **lijst met brieven**." },
        {
          type: "ul",
          items: [
            "**Zoeken** — filter brieven op onderwerp of inhoud met het veld bovenaan.",
            "**Nieuwe brief** — tik op de **+**-knop om een nieuwe brief te beginnen.",
            "**Een brief openen** — tik op een brief in de lijst om hem te bekijken.",
            "**Instellingen** — tik op het tandwielpictogram om de app-instellingen te openen.",
          ],
        },
        {
          type: "p",
          text: "Op grotere schermen — een tablet of een computer zoals een Mac of Chromebook — blijft de lijst links staan en verschijnt de voorvertoning van de geselecteerde brief rechts.",
        },
      ],
    },
    {
      id: "writing-a-letter",
      title: "Een brief schrijven",
      screenshot: "edit",
      screenshotAlt: "De brieveneditor",
      blocks: [
        {
          type: "p",
          text: "Tik op **+** om een brief te maken, of open een bestaande brief en tik op **Bewerken** (potloodpictogram). De editor bestaat uit de kopvelden, de tekst en een handtekeninggedeelte:",
        },
        {
          type: "ul",
          items: [
            "**Afzender** — je eigen adres (de “Van”). Typ het in, kies een opgeslagen afzenderprofiel of importeer een contact.",
            "**Ontvanger** — naar wie de brief gaat (de “Aan”).",
            "**Onderwerp** — de onderwerpregel. Je kunt hier ook een opgeslagen sjabloon toepassen.",
            "**Tekst** — de brieftekst zelf.",
            "**Handtekeningvak** — onderteken de brief door je handtekening te tekenen.",
            "**Handtekeningveld** — typ je naam die onder de handtekening verschijnt.",
          ],
        },
        {
          type: "p",
          text: "Tik rechtsboven op de knop **✓ Bewaren** om op te slaan. Nieuwe brieven worden aan je lijst toegevoegd; bewerkingen werken de brief bij en brengen je terug naar de voorvertoning.",
        },
        {
          type: "note",
          text: "Als je weggaat met niet-opgeslagen wijzigingen, verschijnt **“Wijzigingen negeren?”** — kies **Negeren** om ze weg te gooien of **Blijven bewerken** om terug te gaan. Om een brief te verwijderen, open je hem, tik je op het prullenbakpictogram in de voorvertoning en bevestig je.",
        },
      ],
    },
    {
      id: "formatting-text",
      title: "Tekst opmaken",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "In de editor kun je met een opmaakwerkbalk geselecteerde tekst een stijl geven. Selecteer de tekst die je wilt wijzigen en tik op de knop — of gebruik de sneltoets als je een fysiek toetsenbord hebt.",
        },
        {
          type: "table",
          head: ["Knop", "Sneltoets", "Effect"],
          rows: [
            ["Vet", "Ctrl + B", "Vette tekst"],
            ["Cursief", "Ctrl + I", "Cursieve tekst"],
            ["Onderstreept", "Ctrl + U", "Onderstreepte tekst"],
          ],
        },
        {
          type: "tip",
          text: "Liever een gewone brief zonder opmaak? Zet **Alleen tekst** aan in de briefinstellingen.",
        },
      ],
    },
    {
      id: "ai-assistant",
      title: "De AI-schrijfassistent",
      pro: true,
      screenshot: "ai",
      screenshotAlt: "De AI-schrijfassistent",
      blocks: [
        {
          type: "p",
          text: "Als deze functie is ingeschakeld, verschijnt er een **glinster (✨)**-knop in de editor. Die stelt een onderwerp en brieftekst voor je op.",
        },
        {
          type: "steps",
          items: [
            "Typ minstens een kort notitie over wat je wilt — een onderwerp en/of een paar aanwijzingen in de tekst.",
            "Tik op de **✨**-knop.",
            "**Alleen de eerste keer:** ga akkoord met de *Gegevensverwerking* — je onderwerp en bericht worden naar een AI-dienst gestuurd om het concept te maken. Kies **Accepteren**, **Privacy** of **Weigeren**.",
            "De assistent toont een *“Je brief wordt geschreven…”*-animatie en presenteert vervolgens een voorgesteld onderwerp en tekst.",
            "Tik op **Gebruiken** om het voorstel in je editor te zetten, of op **Annuleren** om te houden wat je had.",
          ],
        },
      ],
    },
    {
      id: "preview-share-print",
      title: "Bekijken, delen en printen",
      screenshot: "detail",
      screenshotAlt: "De live PDF-voorvertoning",
      blocks: [
        {
          type: "p",
          text: "Als je een brief opent, zie je een **live PDF-voorvertoning** van precies hoe hij wordt geprint. De voorvertoning wordt bijgewerkt zodra je de brief bewerkt. In de bovenbalk kun je:",
        },
        {
          type: "ul",
          items: [
            "**Delen** — verstuur de PDF via elke app (e-mail, Drive, berichten…).",
            "**Printen** — print via het standaard printvenster (printer, papierformaat, aantal exemplaren).",
            "**Instellingen** — open de lay-outinstellingen van deze brief.",
            "**Bewerken** — ga terug naar de editor.",
            "**Verwijderen** — verwijder de brief.",
          ],
        },
      ],
    },
    {
      id: "layout-settings",
      title: "Lay-out en instellingen van de brief",
      pro: true,
      screenshot: "letter_settings",
      screenshotAlt: "Lay-outinstellingen van de brief",
      blocks: [
        {
          type: "p",
          text: "Open een brief en tik op het **tandwielpictogram** om precies te bepalen hoe hij op papier verschijnt. Tik op **✓ Bewaren** als je klaar bent.",
        },
        {
          type: "ul",
          items: [
            "**Algemeen** — toon of verberg je “Van”-adres op de pagina.",
            "**Briefpapier** — upload een **PDF** die als briefhoofd achter je tekst wordt gebruikt.",
            "**Formaat** — papierformaat (**A4** of **Letter**) en de taal die voor de datum wordt gebruikt.",
            "**Datum** — kies de datum, een optioneel voorvoegsel (bijv. een plaatsnaam) en een notatie (Kort → Volledig).",
            "**Uitlijning** — plaats de blokken voor afzender, datum, ontvanger en handtekening.",
            "**Opties** — vouwlijnen, paginanummers, afzender in vensterenvelop en modus met alleen tekst.",
            "**Lettertype** — lettertype (Schreefloos, Schreef, Monospace, Cursief) en grootte.",
            "**Marges** — stel de boven-, rechter-, onder- en linkermarge in.",
          ],
        },
        {
          type: "p",
          text: "**Een logo of briefhoofd toevoegen:** de app ontwerpt geen logo voor je, maar je kunt met de optie **Briefpapier** elk logo of briefhoofd achter je tekst plaatsen:",
        },
        {
          type: "steps",
          items: [
            "Maak in de app van je voorkeur — Pages, Word of iets anders dat naar **PDF** exporteert — een pagina met je logo (of volledig briefhoofd) precies waar je het wilt hebben.",
            "Open de brief en tik op het **instellingen**-pictogram (tandwiel).",
            "Upload die PDF bij **Briefpapier**. Hij staat als achtergrond achter je tekst, zodat je logo op de geprinte brief verschijnt.",
          ],
        },
        {
          type: "tip",
          text: "Wil je je logo automatisch aan elke nieuwe brief toevoegen? Maak dan een afzenderprofiel aan en upload je briefpapier-PDF daar — dan bevat elke brief die je begint het logo. Je kunt ook de rest van deze voorkeuren in dat profiel opslaan, zodat nieuwe brieven starten met jouw favoriete lay-out.",
        },
      ],
    },
    {
      id: "signatures",
      title: "Handtekeningen",
      blocks: [
        {
          type: "p",
          text: "Je kunt op twee manieren een handtekening toevoegen, en die kun je combineren:",
        },
        {
          type: "ul",
          items: [
            "**Getekende handtekening (PRO)** — tik op de handtekeningknop om een tekenvlak te openen. Onderteken met je vinger of stylus, gebruik **Wissen** om opnieuw te beginnen en bevestig daarna. Hij wordt als afbeelding ingesloten.",
            "**Teksthandtekening** — typ een afsluitings- of handtekeningregel (bijv. je naam).",
          ],
        },
        {
          type: "p",
          text: "Gebruik **Uitlijning handtekening** in de briefinstellingen om hem links of rechts te plaatsen.",
        },
      ],
    },
    {
      id: "senders",
      title: "Afzenders / identiteiten",
      pro: true,
      screenshot: "sender",
      screenshotAlt: "Afzenderprofielen beheren",
      blocks: [
        {
          type: "p",
          text: "Een **Afzender** is een opgeslagen “Van”-adres in combinatie met je favoriete lay-out — zodat je niet telkens alles opnieuw hoeft in te voeren. Beheer ze via **Instellingen → Afzenders**: tik op **+** om er een toe te voegen, zoek om te filteren, of tik op een afzender om te bewerken.",
        },
        {
          type: "p",
          text: "Een afzender bewaart het Van-adres, de schakelaar om de afzender te tonen, een handtekening (getekend en/of tekst), alle lay-outopties en een markering **Standaardafzender** die automatisch op nieuwe brieven wordt toegepast.",
        },
        {
          type: "note",
          text: "Gebruik tijdens het schrijven de actie **afzender selecteren** naast het veld *Afzender* om een opgeslagen profiel in je brief te zetten.",
        },
      ],
    },
    {
      id: "templates",
      title: "Sjablonen",
      pro: true,
      screenshot: "templates",
      screenshotAlt: "De lijst met sjablonen",
      blocks: [
        {
          type: "p",
          text: "Een **Sjabloon** is een herbruikbaar onderwerp + tekst dat je op elke brief kunt toepassen — handig voor terugkerende brieven. Beheer ze via **Instellingen → Sjablonen**: tik op **+** om er een toe te voegen, zoek om te filteren, of tik op een sjabloon om het te bewerken met dezelfde tekstverwerker.",
        },
        {
          type: "note",
          text: "Gebruik tijdens het schrijven de actie **sjabloon selecteren** naast het veld *Onderwerp* om het onderwerp en de tekst in te vullen. De app bevat ook enkele **ingebouwde sjablonen** om je op weg te helpen.",
        },
      ],
    },
    {
      id: "contacts",
      title: "Adressen importeren uit contacten",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Naast de velden **Afzender** en **Ontvanger** kun je een adres rechtstreeks uit het adresboek van je telefoon halen:",
        },
        {
          type: "steps",
          items: [
            "Tik op de actie **contact** naast het veld.",
            "Verleen de eerste keer toestemming voor **Contacten** wanneer daarom wordt gevraagd. (Heb je dit eerder geweigerd, schakel het dan in bij de systeeminstellingen van de app.)",
            "Kies een contact; hun adres wordt in het veld ingevuld.",
          ],
        },
      ],
    },
    {
      id: "app-settings",
      title: "App-instellingen en help",
      screenshot: "settings",
      screenshotAlt: "App-instellingen",
      blocks: [
        {
          type: "p",
          text: "Open **Instellingen** (tandwielpictogram) vanuit de brievenlijst. Van hieruit kun je bij:",
        },
        {
          type: "ul",
          items: [
            "**Afzenders** — beheer afzenderprofielen.",
            "**Sjablonen** — beheer sjablonen.",
            "**Help** — opent de online helppagina's.",
            "**Veelgestelde vragen** — veelgestelde vragen.",
            "**Contact met support** — mail het supportteam.",
            "**Privacybeleid** — opent het privacybeleid in je browser.",
          ],
        },
      ],
    },
    {
      id: "pro-subscription",
      title: "Brieven PRO-abonnement",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "**Brieven PRO** ontgrendelt de geavanceerde functies. Als je op een PRO-functie tikt zonder abonnement, verschijnt het upgradescherm. PRO ontgrendelt:",
        },
        {
          type: "ul",
          items: [
            "**Afzender**profielen — voer je afzendergegevens één keer in en hergebruik ze.",
            "**Contacten** — importeer adressen uit je adresboek.",
            "**Sjablonen** — herbruikbare brieven voor elke gelegenheid.",
            "**Handtekeningen** — voeg handgeschreven/persoonlijke handtekeningen toe.",
            "**Lay-out** — volledige controle over hoe brieven eruitzien.",
            "Plus tekstopmaak, de AI-assistent en briefpapier.",
          ],
        },
        {
          type: "p",
          text: "Het upgradescherm biedt abonnementen (wekelijks, maandelijks, jaarlijks of een eenmalige aankoop) en meestal een **gratis proefperiode**, allemaal getoond in je lokale valuta. Al geabonneerd op een ander apparaat? Tik op **Aankopen herstellen**.",
        },
        {
          type: "note",
          text: "Zie je *“Betalen is momenteel niet beschikbaar”*, controleer dan je internetverbinding en zorg dat je bent ingelogd bij je app store-account.",
        },
      ],
    },
    {
      id: "languages",
      title: "Talen",
      blocks: [
        {
          type: "p",
          text: "De app is beschikbaar in **7 talen**: Engels, Duits, Spaans, Frans, Italiaans, Portugees en Nederlands. Hij volgt automatisch de systeemtaal van je apparaat, inclusief datumnotatie die is aangepast aan je regio.",
        },
      ],
    },
    {
      id: "phones-tablets",
      title: "Telefoons, tablets en computers",
      blocks: [
        { type: "p", text: "De lay-out past zich aan de grootte van je scherm aan:" },
        {
          type: "ul",
          items: [
            "**Telefoon** — één scherm tegelijk. Als je op een brief tikt, opent de voorvertoning schermvullend; bewerken en instellingen openen als eigen schermen.",
            "**Tablet en computer** — op een tablet of een computer zoals een Mac of Chromebook krijg je een weergave met twee panelen: je lijst met brieven links en de voorvertoning rechts. Bewerken, instellingen, afzenders, sjablonen en het upgradescherm openen als dialoogvensters over de voorvertoning, zodat je nooit je plek kwijtraakt.",
          ],
        },
      ],
    },
    {
      id: "syncing",
      title: "Synchroniseren tussen apparaten (iPhone en iPad)",
      blocks: [
        {
          type: "note",
          text: "Dit gedeelte geldt alleen voor de **iPhone/iPad**-versie.",
        },
        {
          type: "p",
          text: "Op iPhone en iPad worden je brieven, afzenders en sjablonen **automatisch gesynchroniseerd via iCloud**. Log op elk apparaat in met dezelfde iCloud-account en je inhoud blijft overal up-to-date — zonder handmatig exporteren of back-ups maken.",
        },
        {
          type: "ul",
          items: [
            "De synchronisatie gebeurt op de achtergrond; er is geen knop om op te drukken.",
            "Wijzigingen op één apparaat verschijnen even later op je andere apparaten.",
            "iCloud moet beschikbaar en ingeschakeld zijn op het apparaat om te kunnen synchroniseren.",
          ],
        },
        {
          type: "p",
          text: "Als het synchroniseren niet lukt, controleer dan of:",
        },
        {
          type: "steps",
          items: [
            "Je op beide apparaten met dezelfde Apple ID bent ingelogd.",
            "iCloud op beide apparaten is ingeschakeld.",
            "De Brieven app op beide apparaten gegevens in iCloud mag opslaan (zie ook [de iCloud-supportgids van Apple](https://support.apple.com/en-us/118225)).",
            "De nieuwste iOS-versie op beide apparaten is geïnstalleerd.",
            "De nieuwste versie van de Brieven app op beide apparaten is geïnstalleerd.",
          ],
        },
      ],
    },
  ],
};

export default nl;
