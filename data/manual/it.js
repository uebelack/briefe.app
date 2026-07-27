// Italian user manual — localized version.
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

const it = {
  locale: "it",
  appName: "Lettere",
  homeUrl: "https://letter-app.com/it",
  canonical: "https://letter-app.com/it/aiuto",
  metaTitle: "Manuale App Lettere — Scrivi, Formatta e Stampa Lettere",
  metaDescription:
    "La guida completa all'app Lettere: scrivi e formatta una lettera, aggiungi logo o carta intestata, usa l'assistente AI, gestisci mittenti e modelli, poi condividi o stampa un PDF pronto da spedire.",
  keywords: [
    "manuale app lettere",
    "come scrivere una lettera",
    "stampare una lettera",
    "aggiungere un logo a una lettera",
    "PDF carta intestata",
    "modelli di lettere",
    "firma nella lettera",
    "guida app lettere",
  ],

  title: "Manuale utente",
  tagline:
    "Tutto quello che l'app Lettere può fare — scrivi, formatta e stampa vere lettere, poi condividile come PDF pronto per la stampa.",
  proNote:
    "Alcune funzioni fanno parte dell'abbonamento **Lettere PRO** (contrassegnate con PRO qui sotto). La prima volta che tocchi una funzione PRO, l'app mostra la schermata di upgrade con una prova gratuita. Tutto il resto — scrivere una lettera, vederne l'anteprima, condividerla e stamparla — è gratis.",
  tocTitle: "Contenuti",

  sections: [
    {
      id: "getting-around",
      title: "Orientarsi nell'app",
      screenshot: "overview",
      screenshotAlt: "L'elenco delle lettere",
      blocks: [
        { type: "p", text: "Quando apri l'app arrivi al tuo **elenco delle lettere**." },
        {
          type: "ul",
          items: [
            "**Cerca** — filtra le lettere per oggetto o contenuto usando il campo in alto.",
            "**Nuova lettera** — tocca il pulsante **+** per iniziare una nuova lettera.",
            "**Apri una lettera** — tocca una qualsiasi lettera nell'elenco per vederne l'anteprima.",
            "**Impostazioni** — tocca l'icona dell'ingranaggio per aprire le impostazioni dell'app.",
          ],
        },
        {
          type: "p",
          text: "Sugli schermi più grandi — un tablet, o un computer come un Mac o un Chromebook — l'elenco resta a sinistra e l'anteprima della lettera selezionata compare a destra.",
        },
      ],
    },
    {
      id: "writing-a-letter",
      title: "Scrivere una lettera",
      screenshot: "edit",
      screenshotAlt: "L'editor delle lettere",
      blocks: [
        {
          type: "p",
          text: "Tocca **+** per creare una lettera, oppure apri una lettera esistente e tocca **Modifica** (icona della matita). L'editor contiene i campi dell'intestazione, il corpo e un'area per la firma:",
        },
        {
          type: "ul",
          items: [
            "**Mittente** — il tuo indirizzo (il “Da”). Digitalo, scegli un profilo mittente salvato oppure importa un contatto.",
            "**Destinatario** — a chi è diretta la lettera (il “A”).",
            "**Oggetto** — la riga dell'oggetto. Qui puoi anche applicare un modello salvato.",
            "**Corpo** — il testo vero e proprio della lettera.",
            "**Riquadro della firma** — firma la lettera disegnando la tua firma.",
            "**Campo della firma** — digita il tuo nome perché compaia sotto la firma.",
          ],
        },
        {
          type: "p",
          text: "Tocca il pulsante **✓ Salva** in alto a destra per salvare. Le nuove lettere vengono aggiunte al tuo elenco; le modifiche aggiornano la lettera e ti riportano all'anteprima.",
        },
        {
          type: "note",
          text: "Se esci con modifiche non salvate compare **“Annullare le modifiche?”** — scegli **Annulla** per eliminarle oppure **Continua a modificare** per tornare indietro. Per eliminare una lettera, aprila e tocca l'icona del cestino nell'anteprima, poi conferma.",
        },
      ],
    },
    {
      id: "formatting-text",
      title: "Formattare il testo",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Nell'editor, una barra di formattazione ti permette di dare uno stile al testo selezionato. Seleziona il testo che vuoi modificare, poi tocca il pulsante — oppure usa la scorciatoia da tastiera se hai una tastiera fisica.",
        },
        {
          type: "table",
          head: ["Pulsante", "Scorciatoia", "Effetto"],
          rows: [
            ["Grassetto", "Ctrl + B", "Testo in grassetto"],
            ["Corsivo", "Ctrl + I", "Testo in corsivo"],
            ["Sottolineato", "Ctrl + U", "Testo sottolineato"],
          ],
        },
        {
          type: "tip",
          text: "Preferisci una lettera semplice senza stili? Attiva **Solo testo** nelle impostazioni della lettera.",
        },
      ],
    },
    {
      id: "ai-assistant",
      title: "L'assistente di scrittura AI",
      pro: true,
      screenshot: "ai",
      screenshotAlt: "L'assistente di scrittura AI",
      blocks: [
        {
          type: "p",
          text: "Se abilitato, nell'editor compare un pulsante a **scintilla (✨)**. Prepara per te una bozza dell'oggetto e del corpo della lettera.",
        },
        {
          type: "steps",
          items: [
            "Scrivi almeno una breve nota su ciò che desideri — un oggetto e/o qualche indicazione nel corpo.",
            "Tocca il pulsante **✨**.",
            "**Solo la prima volta:** accetta il *Trattamento dei dati* — l'oggetto e il messaggio vengono inviati a un servizio AI per generare la bozza. Scegli **Accetta**, **Privacy** o **Rifiuta**.",
            "L'assistente mostra un'animazione *“Sto scrivendo la tua lettera…”*, poi propone un oggetto e un corpo suggeriti.",
            "Tocca **Usa** per inserire il suggerimento nel tuo editor, oppure **Annulla** per mantenere quello che avevi.",
          ],
        },
      ],
    },
    {
      id: "preview-share-print",
      title: "Anteprima, condivisione e stampa",
      screenshot: "detail",
      screenshotAlt: "L'anteprima PDF in tempo reale",
      blocks: [
        {
          type: "p",
          text: "Aprendo una lettera vedi un'**anteprima PDF in tempo reale** di come verrà stampata esattamente. L'anteprima si aggiorna ogni volta che modifichi la lettera. Dalla barra in alto puoi:",
        },
        {
          type: "ul",
          items: [
            "**Condividi** — invia il PDF tramite qualsiasi app (email, Drive, messaggistica…).",
            "**Stampa** — stampa tramite la finestra di stampa standard (stampante, formato carta, copie).",
            "**Impostazioni** — apri le impostazioni di impaginazione di questa lettera.",
            "**Modifica** — torna all'editor.",
            "**Elimina** — rimuovi la lettera.",
          ],
        },
      ],
    },
    {
      id: "layout-settings",
      title: "Impaginazione e impostazioni della lettera",
      pro: true,
      screenshot: "letter_settings",
      screenshotAlt: "Impostazioni di impaginazione della lettera",
      blocks: [
        {
          type: "p",
          text: "Apri una lettera e tocca l'**icona dell'ingranaggio** per controllare esattamente come appare sulla carta. Tocca **✓ Salva** quando hai finito.",
        },
        {
          type: "ul",
          items: [
            "**Generale** — mostra o nascondi il tuo indirizzo “Da” sulla pagina.",
            "**Carta intestata** — carica un **PDF** da usare come carta intestata dietro il testo.",
            "**Formato** — formato carta (**A4** o **Letter**) e la lingua usata per la data.",
            "**Data** — scegli la data, un prefisso facoltativo (ad es. un luogo) e un formato (da Breve a Completo).",
            "**Allineamento** — posiziona i blocchi di mittente, data, destinatario e firma.",
            "**Opzioni** — segni di piega, numeri di pagina, mittente nella finestra della busta e modalità solo testo.",
            "**Font** — tipo di carattere (Sans, Serif, Monospace, Corsivo) e dimensione.",
            "**Margini** — imposta i margini superiore, destro, inferiore e sinistro.",
          ],
        },
        {
          type: "p",
          text: "**Aggiungere un logo o una carta intestata:** l'app non disegna un logo al posto tuo, ma puoi collocare qualsiasi logo o carta intestata dietro il testo con l'opzione **Carta intestata**:",
        },
        {
          type: "steps",
          items: [
            "Nell'app che preferisci — Pages, Word o qualsiasi programma che esporti in **PDF** — crea una pagina con il tuo logo (o l'intera carta intestata) esattamente dove vuoi che compaia.",
            "Apri la lettera e tocca l'icona delle **impostazioni** (ingranaggio).",
            "Sotto **Carta intestata**, carica quel PDF. Si posiziona dietro il testo come sfondo, così il tuo logo compare sulla lettera stampata.",
          ],
        },
        {
          type: "tip",
          text: "Per aggiungere automaticamente il tuo logo a ogni nuova lettera, crea un profilo mittente e carica lì il tuo PDF di carta intestata — così ogni lettera che inizi lo includerà. Nel profilo puoi salvare anche il resto di queste preferenze, così le nuove lettere partono con l'impaginazione che preferisci.",
        },
      ],
    },
    {
      id: "signatures",
      title: "Firme",
      blocks: [
        {
          type: "p",
          text: "Puoi aggiungere una firma in due modi, che possono anche essere combinati:",
        },
        {
          type: "ul",
          items: [
            "**Firma disegnata (PRO)** — tocca il pulsante della firma per aprire un'area di disegno. Firma con il dito o con lo stilo, usa **Cancella** per ricominciare, poi conferma. Viene inserita come immagine.",
            "**Firma testuale** — digita una riga di chiusura/firma (ad es. il tuo nome).",
          ],
        },
        {
          type: "p",
          text: "Usa **Allineamento firma** nelle impostazioni della lettera per posizionarla a sinistra o a destra.",
        },
      ],
    },
    {
      id: "senders",
      title: "Mittenti / identità",
      pro: true,
      screenshot: "sender",
      screenshotAlt: "Gestione dei profili mittente",
      blocks: [
        {
          type: "p",
          text: "Un **Mittente** è un indirizzo “Da” salvato insieme all'impaginazione che preferisci — così non devi reinserire tutto ogni volta. Gestiscili in **Impostazioni → Mittenti**: tocca **+** per aggiungere, cerca per filtrare oppure tocca un mittente per modificarlo.",
        },
        {
          type: "p",
          text: "Un mittente memorizza l'indirizzo Da, l'interruttore mostra-mittente, una firma (disegnata e/o testuale), tutte le opzioni di impaginazione e un'impostazione **Mittente predefinito** che viene applicata automaticamente alle nuove lettere.",
        },
        {
          type: "note",
          text: "Mentre scrivi, usa l'azione **seleziona mittente** accanto al campo *Mittente* per inserire un profilo salvato nella lettera.",
        },
      ],
    },
    {
      id: "templates",
      title: "Modelli",
      pro: true,
      screenshot: "templates",
      screenshotAlt: "L'elenco dei modelli",
      blocks: [
        {
          type: "p",
          text: "Un **Modello** è un oggetto + corpo riutilizzabile che puoi applicare a qualsiasi lettera — comodo per le lettere ricorrenti. Gestiscili in **Impostazioni → Modelli**: tocca **+** per aggiungere, cerca per filtrare oppure tocca un modello per modificarlo con lo stesso editor di testo formattato.",
        },
        {
          type: "note",
          text: "Mentre scrivi, usa l'azione **seleziona modello** accanto al campo *Oggetto* per compilare oggetto e corpo. L'app include anche alcuni **modelli predefiniti** per iniziare subito.",
        },
      ],
    },
    {
      id: "contacts",
      title: "Importare indirizzi dai contatti",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Accanto ai campi **Mittente** e **Destinatario** puoi prelevare un indirizzo direttamente dalla rubrica del telefono:",
        },
        {
          type: "steps",
          items: [
            "Tocca l'azione **contatto** accanto al campo.",
            "La prima volta, concedi l'autorizzazione ai **Contatti** quando richiesto. (Se l'avevi rifiutata prima, abilitala nelle impostazioni di sistema dell'app.)",
            "Scegli un contatto; il suo indirizzo compila il campo.",
          ],
        },
      ],
    },
    {
      id: "app-settings",
      title: "Impostazioni dell'app e aiuto",
      screenshot: "settings",
      screenshotAlt: "Impostazioni dell'app",
      blocks: [
        {
          type: "p",
          text: "Apri le **Impostazioni** (icona dell'ingranaggio) dall'elenco delle lettere. Da qui puoi raggiungere:",
        },
        {
          type: "ul",
          items: [
            "**Mittenti** — gestisci i profili mittente.",
            "**Modelli** — gestisci i modelli.",
            "**Aiuto** — apre le pagine di aiuto online.",
            "**FAQ** — domande frequenti.",
            "**Contatta l'assistenza** — scrivi al team di supporto via email.",
            "**Informativa sulla privacy** — apre l'informativa sulla privacy nel browser.",
          ],
        },
      ],
    },
    {
      id: "pro-subscription",
      title: "Abbonamento Lettere PRO",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "**Lettere PRO** sblocca le funzioni avanzate. Quando tocchi una funzione PRO senza abbonamento, compare la schermata di upgrade. PRO sblocca:",
        },
        {
          type: "ul",
          items: [
            "Profili **Mittente** — inserisci i tuoi dati una volta e riutilizzali.",
            "**Contatti** — importa indirizzi dalla rubrica.",
            "**Modelli** — lettere riutilizzabili per ogni occasione.",
            "**Firme** — aggiungi firme personali/scritte a mano.",
            "**Impaginazione** — controllo completo sull'aspetto delle lettere.",
            "In più, formattazione del testo, l'assistente AI e la carta intestata.",
          ],
        },
        {
          type: "p",
          text: "La schermata di upgrade offre diversi piani (settimanale, mensile, annuale o un acquisto una tantum) e in genere una **prova gratuita**, tutti mostrati nella tua valuta locale. Sei già abbonato su un altro dispositivo? Tocca **Ripristina acquisti**.",
        },
        {
          type: "note",
          text: "Se vedi *“La fatturazione non è al momento disponibile”*, controlla la connessione a internet e assicurati di aver effettuato l'accesso al tuo account dell'app store.",
        },
      ],
    },
    {
      id: "languages",
      title: "Lingue",
      blocks: [
        {
          type: "p",
          text: "L'app è disponibile in **7 lingue**: inglese, tedesco, spagnolo, francese, italiano, portoghese e olandese. Segue automaticamente la lingua di sistema del tuo dispositivo, inclusa la formattazione delle date in base alla lingua.",
        },
      ],
    },
    {
      id: "phones-tablets",
      title: "Telefoni, tablet e computer",
      blocks: [
        { type: "p", text: "L'impaginazione si adatta alle dimensioni del tuo schermo:" },
        {
          type: "ul",
          items: [
            "**Telefono** — una schermata alla volta. Toccando una lettera si apre la sua anteprima a schermo intero; la modifica e le impostazioni si aprono come schermate a sé.",
            "**Tablet e computer** — su un tablet, o un computer come un Mac o un Chromebook, hai una vista a due riquadri: l'elenco delle lettere a sinistra e l'anteprima a destra. Modifica, impostazioni, mittenti, modelli e la schermata di upgrade si aprono come finestre di dialogo sopra l'anteprima, così non perdi mai il segno.",
          ],
        },
      ],
    },
    {
      id: "syncing",
      title: "Sincronizzazione tra dispositivi (iPhone e iPad)",
      blocks: [
        {
          type: "note",
          text: "Questa sezione riguarda solo la versione **iPhone/iPad**.",
        },
        {
          type: "p",
          text: "Su iPhone e iPad, le tue lettere, i mittenti e i modelli si **sincronizzano automaticamente tramite iCloud**. Accedi allo stesso account iCloud su ogni dispositivo e i tuoi contenuti restano aggiornati ovunque — senza bisogno di esportazioni o backup manuali.",
        },
        {
          type: "ul",
          items: [
            "La sincronizzazione avviene in background; non c'è alcun pulsante da premere.",
            "Le modifiche fatte su un dispositivo compaiono sugli altri poco dopo.",
            "Perché la sincronizzazione funzioni, iCloud deve essere disponibile e abilitato sul dispositivo.",
          ],
        },
        {
          type: "p",
          text: "Se hai problemi con la sincronizzazione, verifica che:",
        },
        {
          type: "steps",
          items: [
            "Hai effettuato l'accesso con lo stesso ID Apple su entrambi i dispositivi.",
            "iCloud è abilitato su entrambi i dispositivi.",
            "L'app Lettere è autorizzata a memorizzare dati su iCloud su entrambi i dispositivi (vedi anche la [guida di supporto iCloud di Apple](https://support.apple.com/en-us/118225)).",
            "L'ultima versione di iOS è installata su entrambi i dispositivi.",
            "L'ultima versione dell'app Lettere è installata su entrambi i dispositivi.",
          ],
        },
      ],
    },
  ],
};

export default it;
