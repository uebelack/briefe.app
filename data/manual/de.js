// German user manual — localized from en.js (source of truth).
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

const de = {
  locale: "de",
  appName: "Briefe",
  homeUrl: "https://briefe.app/de",
  canonical: "https://briefe.app/de/hilfe",
  metaTitle: "Briefe App Handbuch — Briefe schreiben & drucken",
  metaDescription:
    "Das komplette Handbuch zur Briefe App: Briefe schreiben und formatieren, Logo oder Briefkopf einfügen, KI-Assistent nutzen, Absender und Vorlagen verwalten, Unterschrift hinzufügen und als druckfertiges PDF teilen oder drucken.",
  keywords: [
    "briefe app handbuch",
    "brief schreiben anleitung",
    "brief drucken",
    "logo in brief einfügen",
    "briefkopf pdf",
    "brief vorlagen",
    "brief unterschrift",
    "briefe app hilfe",
  ],

  title: "Handbuch",
  tagline:
    "Alles, was die Briefe App kann — echte Briefe schreiben, formatieren und drucken und anschließend als druckfertiges PDF teilen.",
  proNote:
    "Einige Funktionen gehören zum Abonnement **Briefe PRO** (nachfolgend mit PRO gekennzeichnet). Wenn Sie zum ersten Mal auf eine PRO-Funktion tippen, zeigt die App den Upgrade-Bildschirm mit einer kostenlosen Testphase. Alles Übrige — einen Brief schreiben, in der Vorschau ansehen, teilen und drucken — ist kostenlos.",
  tocTitle: "Inhalt",

  sections: [
    {
      id: "getting-around",
      title: "Zurechtfinden",
      screenshot: "overview",
      screenshotAlt: "Die Liste der Briefe",
      blocks: [
        { type: "p", text: "Wenn Sie die App öffnen, landen Sie in Ihrer **Briefliste**." },
        {
          type: "ul",
          items: [
            "**Suche** — filtern Sie Briefe über das Feld oben nach Betreff oder Inhalt.",
            "**Neuer Brief** — tippen Sie auf die Schaltfläche **+**, um einen neuen Brief zu beginnen.",
            "**Brief öffnen** — tippen Sie auf einen beliebigen Brief in der Liste, um ihn in der Vorschau anzusehen.",
            "**Einstellungen** — tippen Sie auf das Zahnradsymbol, um die App-Einstellungen zu öffnen.",
          ],
        },
        {
          type: "p",
          text: "Auf größeren Bildschirmen — einem Tablet oder einem Computer wie einem Mac oder Chromebook — bleibt die Liste links und die Vorschau des ausgewählten Briefs erscheint rechts.",
        },
      ],
    },
    {
      id: "writing-a-letter",
      title: "Einen Brief schreiben",
      screenshot: "edit",
      screenshotAlt: "Der Brief-Editor",
      blocks: [
        {
          type: "p",
          text: "Tippen Sie auf **+**, um einen Brief zu erstellen, oder öffnen Sie einen bestehenden und tippen Sie auf **Bearbeiten** (Stiftsymbol). Der Editor umfasst die Kopffelder, den Textkörper und einen Unterschriftsbereich:",
        },
        {
          type: "ul",
          items: [
            "**Absender** — Ihre eigene Adresse (das „Von“). Tippen Sie sie ein, wählen Sie ein gespeichertes Absenderprofil oder importieren Sie einen Kontakt.",
            "**Empfänger** — an wen der Brief geht (das „An“).",
            "**Betreff** — die Betreffzeile. Hier können Sie auch eine gespeicherte Vorlage anwenden.",
            "**Textkörper** — der eigentliche Brieftext.",
            "**Unterschriftsfeld** — unterschreiben Sie den Brief, indem Sie Ihre Unterschrift zeichnen.",
            "**Namenszeile** — geben Sie Ihren Namen ein, der unter der Unterschrift erscheinen soll.",
          ],
        },
        {
          type: "p",
          text: "Tippen Sie oben rechts auf die Schaltfläche **✓ Speichern**, um zu speichern. Neue Briefe werden Ihrer Liste hinzugefügt; Bearbeitungen aktualisieren den Brief und bringen Sie zurück in die Vorschau.",
        },
        {
          type: "note",
          text: "Verlassen Sie den Editor mit ungespeicherten Änderungen, erscheint die Frage **„Änderungen verwerfen?“** — wählen Sie **Verwerfen**, um sie zu löschen, oder **Weiter bearbeiten**, um zurückzukehren. Um einen Brief zu löschen, öffnen Sie ihn, tippen Sie in der Vorschau auf das Papierkorbsymbol und bestätigen Sie.",
        },
      ],
    },
    {
      id: "formatting-text",
      title: "Text formatieren",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Im Editor können Sie mit einer Formatierungsleiste ausgewählten Text gestalten. Markieren Sie den gewünschten Text und tippen Sie auf die Schaltfläche — oder nutzen Sie das Tastenkürzel, wenn Sie eine physische Tastatur haben.",
        },
        {
          type: "table",
          head: ["Schaltfläche", "Tastenkürzel", "Effekt"],
          rows: [
            ["Fett", "Strg + B", "Fetter Text"],
            ["Kursiv", "Strg + I", "Kursiver Text"],
            ["Unterstrichen", "Strg + U", "Unterstrichener Text"],
          ],
        },
        {
          type: "tip",
          text: "Sie möchten lieber einen schlichten Brief ganz ohne Formatierung? Aktivieren Sie **Nur Text** in den Brief-Einstellungen.",
        },
      ],
    },
    {
      id: "ai-assistant",
      title: "Der KI-Schreibassistent",
      pro: true,
      screenshot: "ai",
      screenshotAlt: "Der KI-Schreibassistent",
      blocks: [
        {
          type: "p",
          text: "Wenn aktiviert, erscheint im Editor eine **Funkel-Schaltfläche (✨)**. Sie entwirft für Sie einen Betreff und einen Brieftext.",
        },
        {
          type: "steps",
          items: [
            "Geben Sie zumindest eine kurze Notiz dazu ein, was Sie möchten — einen Betreff und/oder ein paar Anweisungen im Textkörper.",
            "Tippen Sie auf die Schaltfläche **✨**.",
            "**Nur beim ersten Mal:** Stimmen Sie der *Datenverarbeitung* zu — Ihr Betreff und Ihre Nachricht werden an einen KI-Dienst gesendet, um den Entwurf zu erstellen. Wählen Sie **Akzeptieren**, **Datenschutz** oder **Ablehnen**.",
            "Der Assistent zeigt eine Animation *„Ihr Brief wird geschrieben…“* und präsentiert anschließend einen vorgeschlagenen Betreff und Textkörper.",
            "Tippen Sie auf **Übernehmen**, um den Vorschlag in Ihren Editor zu übernehmen, oder auf **Abbrechen**, um Ihren bisherigen Text zu behalten.",
          ],
        },
      ],
    },
    {
      id: "preview-share-print",
      title: "Vorschau, Teilen & Drucken",
      screenshot: "detail",
      screenshotAlt: "Die Live-PDF-Vorschau",
      blocks: [
        {
          type: "p",
          text: "Beim Öffnen eines Briefs sehen Sie eine **Live-PDF-Vorschau** davon, wie er genau gedruckt wird. Die Vorschau aktualisiert sich, sobald Sie den Brief bearbeiten. Über die obere Leiste können Sie:",
        },
        {
          type: "ul",
          items: [
            "**Teilen** — das PDF über eine beliebige App versenden (E-Mail, Drive, Messenger…).",
            "**Drucken** — über den Standard-Druckdialog drucken (Drucker, Papierformat, Kopien).",
            "**Einstellungen** — die Layout-Einstellungen dieses Briefs öffnen.",
            "**Bearbeiten** — zum Editor zurückkehren.",
            "**Löschen** — den Brief entfernen.",
          ],
        },
      ],
    },
    {
      id: "layout-settings",
      title: "Brief-Layout & Einstellungen",
      pro: true,
      screenshot: "letter_settings",
      screenshotAlt: "Brief-Layout-Einstellungen",
      blocks: [
        {
          type: "p",
          text: "Öffnen Sie einen Brief und tippen Sie auf das **Zahnradsymbol**, um genau zu steuern, wie er auf dem Papier erscheint. Tippen Sie zum Schluss auf **✓ Speichern**.",
        },
        {
          type: "ul",
          items: [
            "**Allgemein** — Ihre „Von“-Adresse auf der Seite ein- oder ausblenden.",
            "**Briefpapier** — laden Sie ein **PDF** hoch, das als Briefkopf hinter Ihrem Text verwendet wird.",
            "**Format** — Papierformat (**A4** oder **Letter**) und die für das Datum verwendete Sprache.",
            "**Datum** — wählen Sie das Datum, einen optionalen Zusatz (z. B. einen Ortsnamen) und ein Format (Kurz → Vollständig).",
            "**Ausrichtung** — positionieren Sie die Blöcke für Absender, Datum, Empfänger und Unterschrift.",
            "**Optionen** — Faltmarken, Seitenzahlen, Absender im Fensterumschlag und Nur-Text-Modus.",
            "**Schrift** — Schriftart (Serifenlos, Serif, Monospace, Schreibschrift) und Größe.",
            "**Ränder** — legen Sie den oberen, rechten, unteren und linken Rand fest.",
          ],
        },
        {
          type: "p",
          text: "**Ein Logo oder einen Briefkopf hinzufügen:** Die App gestaltet kein Logo für Sie, aber Sie können jedes beliebige Logo oder jeden Briefkopf mit der Option **Briefpapier** hinter Ihren Text legen:",
        },
        {
          type: "steps",
          items: [
            "Erstellen Sie in Ihrer bevorzugten App — Pages, Word oder einer beliebigen App, die **PDF** exportiert — eine Seite mit Ihrem Logo (oder vollständigen Briefkopf) genau dort, wo es erscheinen soll.",
            "Öffnen Sie den Brief und tippen Sie auf das **Einstellungssymbol** (Zahnrad).",
            "Laden Sie unter **Briefpapier** dieses PDF hoch. Es liegt als Hintergrund hinter Ihrem Text, sodass Ihr Logo auf dem gedruckten Brief erscheint.",
          ],
        },
        {
          type: "tip",
          text: "Um Ihr Logo automatisch zu jedem neuen Brief hinzuzufügen, erstellen Sie ein Absenderprofil und laden Sie Ihr Briefpapier-PDF dort hoch — dann enthält jeder Brief, den Sie beginnen, das Logo. Sie können auch die übrigen Einstellungen in diesem Profil speichern, damit neue Briefe gleich mit Ihrem bevorzugten Layout starten.",
        },
      ],
    },
    {
      id: "signatures",
      title: "Unterschriften",
      blocks: [
        {
          type: "p",
          text: "Sie können eine Unterschrift auf zwei Arten hinzufügen, die sich auch kombinieren lassen:",
        },
        {
          type: "ul",
          items: [
            "**Gezeichnete Unterschrift (PRO)** — tippen Sie auf die Unterschrift-Schaltfläche, um eine Zeichenfläche zu öffnen. Unterschreiben Sie mit dem Finger oder einem Stift, nutzen Sie **Löschen**, um neu zu beginnen, und bestätigen Sie anschließend. Sie wird als Bild eingebettet.",
            "**Textunterschrift** — geben Sie eine Schluss-/Signaturzeile ein (z. B. Ihren Namen).",
          ],
        },
        {
          type: "p",
          text: "Nutzen Sie die **Ausrichtung der Unterschrift** in den Brief-Einstellungen, um sie links oder rechts zu platzieren.",
        },
      ],
    },
    {
      id: "senders",
      title: "Absender / Identitäten",
      pro: true,
      screenshot: "sender",
      screenshotAlt: "Absenderprofile verwalten",
      blocks: [
        {
          type: "p",
          text: "Ein **Absender** ist eine gespeicherte „Von“-Adresse zusammen mit Ihrem bevorzugten Layout — so müssen Sie nicht jedes Mal alles neu eingeben. Verwalten Sie sie unter **Einstellungen → Absender**: Tippen Sie auf **+**, um einen hinzuzufügen, suchen Sie zum Filtern oder tippen Sie auf einen Absender, um ihn zu bearbeiten.",
        },
        {
          type: "p",
          text: "Ein Absender speichert die Von-Adresse, den Schalter zum Anzeigen des Absenders, eine Unterschrift (gezeichnet und/oder als Text), alle Layout-Optionen sowie eine Markierung **Standardabsender**, die automatisch auf neue Briefe angewendet wird.",
        },
        {
          type: "note",
          text: "Nutzen Sie beim Schreiben die Aktion **Absender auswählen** neben dem Feld *Absender*, um ein gespeichertes Profil in Ihren Brief zu übernehmen.",
        },
      ],
    },
    {
      id: "templates",
      title: "Vorlagen",
      pro: true,
      screenshot: "templates",
      screenshotAlt: "Die Vorlagenliste",
      blocks: [
        {
          type: "p",
          text: "Eine **Vorlage** ist ein wiederverwendbarer Betreff samt Textkörper, den Sie auf jeden Brief anwenden können — praktisch für wiederkehrende Briefe. Verwalten Sie sie unter **Einstellungen → Vorlagen**: Tippen Sie auf **+**, um eine hinzuzufügen, suchen Sie zum Filtern oder tippen Sie auf eine Vorlage, um sie mit demselben Rich-Text-Editor zu bearbeiten.",
        },
        {
          type: "note",
          text: "Nutzen Sie beim Schreiben die Aktion **Vorlage auswählen** neben dem Feld *Betreff*, um Betreff und Textkörper auszufüllen. Die App enthält außerdem einige **integrierte Vorlagen** für den Einstieg.",
        },
      ],
    },
    {
      id: "contacts",
      title: "Adressen aus Kontakten importieren",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Neben den Feldern **Absender** und **Empfänger** können Sie eine Adresse direkt aus dem Adressbuch Ihres Telefons übernehmen:",
        },
        {
          type: "steps",
          items: [
            "Tippen Sie auf die **Kontakt-Aktion** neben dem Feld.",
            "Erteilen Sie beim ersten Mal die Berechtigung für **Kontakte**, wenn Sie dazu aufgefordert werden. (Falls Sie zuvor abgelehnt haben, aktivieren Sie sie in den Systemeinstellungen der App.)",
            "Wählen Sie einen Kontakt aus; dessen Adresse füllt das Feld.",
          ],
        },
      ],
    },
    {
      id: "app-settings",
      title: "App-Einstellungen & Hilfe",
      screenshot: "settings",
      screenshotAlt: "App-Einstellungen",
      blocks: [
        {
          type: "p",
          text: "Öffnen Sie die **Einstellungen** (Zahnradsymbol) aus der Briefliste. Von hier aus erreichen Sie:",
        },
        {
          type: "ul",
          items: [
            "**Absender** — Absenderprofile verwalten.",
            "**Vorlagen** — Vorlagen verwalten.",
            "**Hilfe** — öffnet die Online-Hilfeseiten.",
            "**FAQ** — häufig gestellte Fragen.",
            "**Support kontaktieren** — dem Support-Team eine E-Mail schreiben.",
            "**Datenschutzerklärung** — öffnet die Datenschutzerklärung in Ihrem Browser.",
          ],
        },
      ],
    },
    {
      id: "pro-subscription",
      title: "Abonnement Briefe PRO",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "**Briefe PRO** schaltet die erweiterten Funktionen frei. Wenn Sie ohne Abonnement auf eine PRO-Funktion tippen, erscheint der Upgrade-Bildschirm. PRO schaltet frei:",
        },
        {
          type: "ul",
          items: [
            "**Absender**-Profile — geben Sie Ihre Absenderdaten einmal ein und verwenden Sie sie wieder.",
            "**Kontakte** — Adressen aus Ihrem Adressbuch importieren.",
            "**Vorlagen** — wiederverwendbare Briefe für jeden Anlass.",
            "**Unterschriften** — handschriftliche/persönliche Unterschriften hinzufügen.",
            "**Layout** — volle Kontrolle über das Aussehen Ihrer Briefe.",
            "Zusätzlich Rich-Text-Formatierung, den KI-Assistenten und Briefpapier.",
          ],
        },
        {
          type: "p",
          text: "Der Upgrade-Bildschirm bietet Tarife (wöchentlich, monatlich, jährlich oder einen einmaligen Kauf) und in der Regel eine **kostenlose Testphase**, alles in Ihrer lokalen Währung. Bereits auf einem anderen Gerät abonniert? Tippen Sie auf **Käufe wiederherstellen**.",
        },
        {
          type: "note",
          text: "Falls die Meldung *„Abrechnung ist derzeit nicht verfügbar“* erscheint, prüfen Sie Ihre Internetverbindung und stellen Sie sicher, dass Sie in Ihrem App-Store-Konto angemeldet sind.",
        },
      ],
    },
    {
      id: "languages",
      title: "Sprachen",
      blocks: [
        {
          type: "p",
          text: "Die App ist in **7 Sprachen** verfügbar: Englisch, Deutsch, Spanisch, Französisch, Italienisch, Portugiesisch und Niederländisch. Sie richtet sich automatisch nach der Systemsprache Ihres Geräts, einschließlich einer regionsgerechten Datumsformatierung.",
        },
      ],
    },
    {
      id: "phones-tablets",
      title: "Telefone, Tablets & Computer",
      blocks: [
        { type: "p", text: "Das Layout passt sich an die Größe Ihres Bildschirms an:" },
        {
          type: "ul",
          items: [
            "**Telefon** — jeweils ein Bildschirm. Beim Tippen auf einen Brief öffnet sich seine Vorschau im Vollbild; Bearbeitung und Einstellungen öffnen sich als eigene Bildschirme.",
            "**Tablet & Computer** — auf einem Tablet oder einem Computer wie einem Mac oder Chromebook erhalten Sie eine zweispaltige Ansicht: Ihre Briefliste links und die Vorschau rechts. Bearbeitung, Einstellungen, Absender, Vorlagen und der Upgrade-Bildschirm öffnen sich als Dialoge über der Vorschau, sodass Sie nie den Überblick verlieren.",
          ],
        },
      ],
    },
    {
      id: "syncing",
      title: "Geräteübergreifende Synchronisierung (iPhone & iPad)",
      blocks: [
        {
          type: "note",
          text: "Dieser Abschnitt gilt nur für die **iPhone-/iPad**-Version.",
        },
        {
          type: "p",
          text: "Auf iPhone und iPad werden Ihre Briefe, Absender und Vorlagen **automatisch über iCloud synchronisiert**. Melden Sie sich auf jedem Gerät mit demselben iCloud-Konto an, und Ihre Inhalte bleiben überall auf dem neuesten Stand — ganz ohne manuellen Export oder Backup.",
        },
        {
          type: "ul",
          items: [
            "Die Synchronisierung erfolgt im Hintergrund; es gibt keine Schaltfläche dafür.",
            "Änderungen auf einem Gerät erscheinen kurze Zeit später auf Ihren anderen Geräten.",
            "Für die Synchronisierung muss iCloud auf dem Gerät verfügbar und aktiviert sein.",
          ],
        },
        {
          type: "p",
          text: "Falls die Synchronisierung Probleme macht, prüfen Sie, ob:",
        },
        {
          type: "steps",
          items: [
            "Sie auf beiden Geräten mit derselben Apple-ID angemeldet sind.",
            "iCloud auf beiden Geräten aktiviert ist.",
            "die Briefe App auf beiden Geräten Daten in iCloud speichern darf (siehe auch [Apples iCloud-Support-Leitfaden](https://support.apple.com/en-us/118225)).",
            "die neueste iOS-Version auf beiden Geräten installiert ist.",
            "die neueste Version der Briefe App auf beiden Geräten installiert ist.",
          ],
        },
      ],
    },
  ],
};

export default de;
