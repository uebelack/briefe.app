// French user manual — localized from en.js (source of truth).
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

const fr = {
  locale: "fr",
  appName: "Lettres",
  homeUrl: "https://letter-app.com/fr",
  canonical: "https://letter-app.com/fr/aide",
  metaTitle: "Application Lettres — Manuel et guide pour écrire vos lettres",
  metaDescription:
    "Le guide complet de l'application Lettres : rédigez et mettez en forme une lettre, ajoutez un logo ou un en-tête, utilisez l'assistant IA, gérez expéditeurs et modèles, puis partagez ou imprimez un PDF prêt à envoyer.",
  keywords: [
    "manuel application lettres",
    "comment écrire une lettre",
    "imprimer une lettre",
    "ajouter un logo à une lettre",
    "en-tête PDF",
    "modèles de lettres",
    "signature de lettre",
    "aide application lettres",
  ],

  title: "Manuel d'utilisation",
  tagline:
    "Tout ce que l'application Lettres sait faire : écrire, mettre en forme et imprimer de vraies lettres, puis les partager sous forme de PDF prêt à imprimer.",
  proNote:
    "Certaines fonctionnalités font partie de l'abonnement **Lettres PRO** (indiquées par PRO ci-dessous). La première fois que vous appuyez sur une fonctionnalité PRO, l'application affiche l'écran de mise à niveau avec un essai gratuit. Tout le reste — écrire une lettre, la prévisualiser, la partager et l'imprimer — est gratuit.",
  tocTitle: "Sommaire",

  sections: [
    {
      id: "getting-around",
      title: "Se repérer dans l'application",
      screenshot: "overview",
      screenshotAlt: "La liste des lettres",
      blocks: [
        {
          type: "p",
          text: "Lorsque vous ouvrez l'application, vous arrivez sur votre **liste de lettres**.",
        },
        {
          type: "ul",
          items: [
            "**Rechercher** — filtrez les lettres par objet ou par contenu à l'aide du champ situé en haut.",
            "**Nouvelle lettre** — appuyez sur le bouton **+** pour commencer une nouvelle lettre.",
            "**Ouvrir une lettre** — appuyez sur n'importe quelle lettre de la liste pour la prévisualiser.",
            "**Réglages** — appuyez sur l'icône d'engrenage pour ouvrir les réglages de l'application.",
          ],
        },
        {
          type: "p",
          text: "Sur les grands écrans — une tablette, ou un ordinateur tel qu'un Mac ou un Chromebook — la liste reste à gauche et l'aperçu de la lettre sélectionnée s'affiche à droite.",
        },
      ],
    },
    {
      id: "writing-a-letter",
      title: "Écrire une lettre",
      screenshot: "edit",
      screenshotAlt: "L'éditeur de lettre",
      blocks: [
        {
          type: "p",
          text: "Appuyez sur **+** pour créer une lettre, ou ouvrez-en une existante et appuyez sur **Modifier** (icône de crayon). L'éditeur comporte les champs d'en-tête, le corps et une zone de signature :",
        },
        {
          type: "ul",
          items: [
            "**Expéditeur** — votre propre adresse (le « De »). Saisissez-la, choisissez un profil d'expéditeur enregistré ou importez un contact.",
            "**Destinataire** — la personne à qui la lettre est adressée (le « À »).",
            "**Objet** — la ligne d'objet. Vous pouvez également appliquer un modèle enregistré ici.",
            "**Corps** — le texte de la lettre lui-même.",
            "**Zone de signature** — signez la lettre en dessinant votre signature.",
            "**Champ de signature** — saisissez votre nom pour qu'il apparaisse sous la signature.",
          ],
        },
        {
          type: "p",
          text: "Appuyez sur le bouton **✓ Enregistrer** en haut à droite pour enregistrer. Les nouvelles lettres sont ajoutées à votre liste ; les modifications mettent la lettre à jour et vous ramènent à l'aperçu.",
        },
        {
          type: "note",
          text: "Quitter avec des modifications non enregistrées affiche **« Abandonner les modifications ? »** — choisissez **Abandonner** pour les supprimer ou **Continuer à modifier** pour revenir en arrière. Pour supprimer une lettre, ouvrez-la et appuyez sur l'icône de corbeille dans l'aperçu, puis confirmez.",
        },
      ],
    },
    {
      id: "formatting-text",
      title: "Mettre en forme le texte",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Dans l'éditeur, une barre d'outils de mise en forme vous permet de styliser le texte sélectionné. Sélectionnez le texte à modifier, puis appuyez sur le bouton — ou utilisez le raccourci clavier si vous disposez d'un clavier physique.",
        },
        {
          type: "table",
          head: ["Bouton", "Raccourci", "Effet"],
          rows: [
            ["Gras", "Ctrl + B", "Texte en gras"],
            ["Italique", "Ctrl + I", "Texte en italique"],
            ["Souligné", "Ctrl + U", "Texte souligné"],
          ],
        },
        {
          type: "tip",
          text: "Vous préférez une lettre simple, sans mise en forme ? Activez **Texte seul** dans les réglages de la lettre.",
        },
      ],
    },
    {
      id: "ai-assistant",
      title: "L'assistant de rédaction IA",
      pro: true,
      screenshot: "ai",
      screenshotAlt: "L'assistant de rédaction IA",
      blocks: [
        {
          type: "p",
          text: "S'il est activé, un bouton **étincelle (✨)** apparaît dans l'éditeur. Il rédige pour vous un objet et un corps de lettre.",
        },
        {
          type: "steps",
          items: [
            "Saisissez au moins une brève note sur ce que vous souhaitez — un objet et/ou quelques instructions dans le corps.",
            "Appuyez sur le bouton **✨**.",
            "**La première fois uniquement :** acceptez le *Traitement des données* — votre objet et votre message sont envoyés à un service d'IA pour générer le brouillon. Choisissez **Accepter**, **Confidentialité** ou **Refuser**.",
            "L'assistant affiche une animation *« Rédaction de votre lettre… »*, puis présente un objet et un corps suggérés.",
            "Appuyez sur **Utiliser** pour insérer la suggestion dans votre éditeur, ou sur **Annuler** pour conserver ce que vous aviez.",
          ],
        },
      ],
    },
    {
      id: "preview-share-print",
      title: "Prévisualiser, partager et imprimer",
      screenshot: "detail",
      screenshotAlt: "L'aperçu PDF en direct",
      blocks: [
        {
          type: "p",
          text: "L'ouverture d'une lettre affiche un **aperçu PDF en direct** de la façon exacte dont elle sera imprimée. L'aperçu se met à jour à chaque modification de la lettre. Depuis la barre supérieure, vous pouvez :",
        },
        {
          type: "ul",
          items: [
            "**Partager** — envoyez le PDF via n'importe quelle application (e-mail, Drive, messagerie…).",
            "**Imprimer** — imprimez via la boîte de dialogue d'impression standard (imprimante, format de papier, copies).",
            "**Réglages** — ouvrez les réglages de mise en page de cette lettre.",
            "**Modifier** — revenez à l'éditeur.",
            "**Supprimer** — supprimez la lettre.",
          ],
        },
      ],
    },
    {
      id: "layout-settings",
      title: "Mise en page et réglages de la lettre",
      pro: true,
      screenshot: "letter_settings",
      screenshotAlt: "Réglages de mise en page de la lettre",
      blocks: [
        {
          type: "p",
          text: "Ouvrez une lettre et appuyez sur l'**icône d'engrenage** pour contrôler exactement son apparence sur le papier. Appuyez sur **✓ Enregistrer** une fois terminé.",
        },
        {
          type: "ul",
          items: [
            "**Général** — affichez ou masquez votre adresse « De » sur la page.",
            "**Papier à en-tête** — importez un **PDF** à utiliser comme en-tête derrière votre texte.",
            "**Format** — format de papier (**A4** ou **Letter**) et langue utilisée pour la date.",
            "**Date** — choisissez la date, un préfixe facultatif (p. ex. un nom de lieu) et un format (Court → Complet).",
            "**Alignement** — positionnez les blocs expéditeur, date, destinataire et signature.",
            "**Options** — marques de pliage, numéros de page, expéditeur dans l'enveloppe à fenêtre et mode texte seul.",
            "**Police** — type de police (Sans, Serif, Monospace, Cursive) et taille.",
            "**Marges** — définissez les marges haut, droite, bas et gauche.",
          ],
        },
        {
          type: "p",
          text: "**Ajouter un logo ou un en-tête :** l'application ne conçoit pas de logo à votre place, mais vous pouvez placer n'importe quel logo ou en-tête derrière votre texte grâce à l'option **Papier à en-tête** :",
        },
        {
          type: "steps",
          items: [
            "Dans l'application de votre choix — Pages, Word ou tout ce qui exporte en **PDF** — créez une page avec votre logo (ou votre en-tête complet) exactement là où vous voulez qu'il apparaisse.",
            "Ouvrez la lettre et appuyez sur l'icône des **réglages** (engrenage).",
            "Sous **Papier à en-tête**, importez ce PDF. Il se place derrière votre texte en arrière-plan, afin que votre logo apparaisse sur la lettre imprimée.",
          ],
        },
        {
          type: "tip",
          text: "Pour ajouter automatiquement votre logo à chaque nouvelle lettre, créez un profil d'expéditeur et importez-y votre PDF de papier à en-tête — ainsi, chaque lettre que vous commencez l'inclut. Vous pouvez également enregistrer le reste de ces préférences dans ce profil pour que les nouvelles lettres démarrent avec votre mise en page préférée.",
        },
      ],
    },
    {
      id: "signatures",
      title: "Signatures",
      blocks: [
        {
          type: "p",
          text: "Vous pouvez ajouter une signature de deux manières, qui peuvent être combinées :",
        },
        {
          type: "ul",
          items: [
            "**Signature dessinée (PRO)** — appuyez sur le bouton de signature pour ouvrir une zone de dessin. Signez avec votre doigt ou un stylet, utilisez **Effacer** pour recommencer, puis confirmez. Elle est intégrée sous forme d'image.",
            "**Signature texte** — saisissez une ligne de conclusion/signature (p. ex. votre nom).",
          ],
        },
        {
          type: "p",
          text: "Utilisez **Alignement de la signature** dans les réglages de la lettre pour la placer à gauche ou à droite.",
        },
      ],
    },
    {
      id: "senders",
      title: "Expéditeurs / identités",
      pro: true,
      screenshot: "sender",
      screenshotAlt: "Gestion des profils d'expéditeur",
      blocks: [
        {
          type: "p",
          text: "Un **Expéditeur** est une adresse « De » enregistrée, associée à votre mise en page préférée — pour ne pas tout ressaisir à chaque fois. Gérez-les dans **Réglages → Expéditeurs** : appuyez sur **+** pour en ajouter un, effectuez une recherche pour filtrer, ou appuyez sur un expéditeur pour le modifier.",
        },
        {
          type: "p",
          text: "Un expéditeur mémorise l'adresse « De », l'option d'affichage de l'expéditeur, une signature (dessinée et/ou texte), toutes les options de mise en page ainsi qu'un indicateur **Expéditeur par défaut** appliqué automatiquement aux nouvelles lettres.",
        },
        {
          type: "note",
          text: "Pendant la rédaction, utilisez l'action **sélectionner un expéditeur** à côté du champ *Expéditeur* pour insérer un profil enregistré dans votre lettre.",
        },
      ],
    },
    {
      id: "templates",
      title: "Modèles",
      pro: true,
      screenshot: "templates",
      screenshotAlt: "La liste des modèles",
      blocks: [
        {
          type: "p",
          text: "Un **Modèle** est un objet + corps réutilisable que vous pouvez appliquer à n'importe quelle lettre — pratique pour les lettres récurrentes. Gérez-les dans **Réglages → Modèles** : appuyez sur **+** pour en ajouter un, effectuez une recherche pour filtrer, ou appuyez sur un modèle pour le modifier avec le même éditeur de texte enrichi.",
        },
        {
          type: "note",
          text: "Pendant la rédaction, utilisez l'action **sélectionner un modèle** à côté du champ *Objet* pour remplir l'objet et le corps. L'application inclut également quelques **modèles intégrés** pour vous aider à démarrer.",
        },
      ],
    },
    {
      id: "contacts",
      title: "Importer des adresses depuis les contacts",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "À côté des champs **Expéditeur** et **Destinataire**, vous pouvez récupérer une adresse directement depuis le carnet d'adresses de votre téléphone :",
        },
        {
          type: "steps",
          items: [
            "Appuyez sur l'action **contact** à côté du champ.",
            "La première fois, accordez l'autorisation d'accès aux **Contacts** lorsque vous y êtes invité. (Si vous avez refusé auparavant, activez-la dans les réglages système de l'application.)",
            "Choisissez un contact ; son adresse remplit le champ.",
          ],
        },
      ],
    },
    {
      id: "app-settings",
      title: "Réglages de l'application et aide",
      screenshot: "settings",
      screenshotAlt: "Réglages de l'application",
      blocks: [
        {
          type: "p",
          text: "Ouvrez les **Réglages** (icône d'engrenage) depuis la liste des lettres. De là, vous pouvez accéder à :",
        },
        {
          type: "ul",
          items: [
            "**Expéditeurs** — gérez les profils d'expéditeur.",
            "**Modèles** — gérez les modèles.",
            "**Aide** — ouvre les pages d'aide en ligne.",
            "**FAQ** — foire aux questions.",
            "**Contacter le support** — envoyez un e-mail à l'équipe d'assistance.",
            "**Politique de confidentialité** — ouvre la politique de confidentialité dans votre navigateur.",
          ],
        },
      ],
    },
    {
      id: "pro-subscription",
      title: "Abonnement Lettres PRO",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "**Lettres PRO** débloque les fonctionnalités avancées. Lorsque vous appuyez sur une fonctionnalité PRO sans abonnement, l'écran de mise à niveau apparaît. PRO débloque :",
        },
        {
          type: "ul",
          items: [
            "Les profils **Expéditeur** — saisissez vos informations d'expéditeur une fois et réutilisez-les.",
            "Les **Contacts** — importez des adresses depuis votre carnet d'adresses.",
            "Les **Modèles** — des lettres réutilisables pour toutes les occasions.",
            "Les **Signatures** — ajoutez des signatures manuscrites/personnelles.",
            "La **Mise en page** — un contrôle total sur l'apparence des lettres.",
            "Ainsi que la mise en forme du texte enrichi, l'assistant IA et le papier à en-tête.",
          ],
        },
        {
          type: "p",
          text: "L'écran de mise à niveau propose des formules (hebdomadaire, mensuelle, annuelle ou un achat unique) et généralement un **essai gratuit**, le tout affiché dans votre devise locale. Déjà abonné sur un autre appareil ? Appuyez sur **Restaurer les achats**.",
        },
        {
          type: "note",
          text: "Si vous voyez *« La facturation n'est actuellement pas disponible »*, vérifiez votre connexion Internet et assurez-vous d'être connecté à votre compte de boutique d'applications.",
        },
      ],
    },
    {
      id: "languages",
      title: "Langues",
      blocks: [
        {
          type: "p",
          text: "L'application est disponible en **7 langues** : anglais, allemand, espagnol, français, italien, portugais et néerlandais. Elle suit automatiquement la langue système de votre appareil, y compris le formatage des dates adapté à votre région.",
        },
      ],
    },
    {
      id: "phones-tablets",
      title: "Téléphones, tablettes et ordinateurs",
      blocks: [
        {
          type: "p",
          text: "La mise en page s'adapte à la taille de votre écran :",
        },
        {
          type: "ul",
          items: [
            "**Téléphone** — un écran à la fois. Appuyer sur une lettre ouvre son aperçu en plein écran ; la modification et les réglages s'ouvrent dans leurs propres écrans.",
            "**Tablette et ordinateur** — sur une tablette, ou un ordinateur tel qu'un Mac ou un Chromebook, vous bénéficiez d'une vue à deux volets : votre liste de lettres à gauche et l'aperçu à droite. La modification, les réglages, les expéditeurs, les modèles et l'écran de mise à niveau s'ouvrent sous forme de boîtes de dialogue au-dessus de l'aperçu, pour ne jamais perdre votre place.",
          ],
        },
      ],
    },
    {
      id: "syncing",
      title: "Synchronisation entre appareils (iPhone et iPad)",
      blocks: [
        {
          type: "note",
          text: "Cette section s'applique uniquement à la version **iPhone/iPad**.",
        },
        {
          type: "p",
          text: "Sur iPhone et iPad, vos lettres, expéditeurs et modèles se **synchronisent automatiquement via iCloud**. Connectez-vous au même compte iCloud sur chaque appareil et votre contenu reste à jour partout — aucune exportation ni sauvegarde manuelle n'est nécessaire.",
        },
        {
          type: "ul",
          items: [
            "La synchronisation se fait en arrière-plan ; il n'y a aucun bouton sur lequel appuyer.",
            "Les modifications effectuées sur un appareil apparaissent sur vos autres appareils peu de temps après.",
            "iCloud doit être disponible et activé sur l'appareil pour que la synchronisation fonctionne.",
          ],
        },
        {
          type: "p",
          text: "Si vous rencontrez des difficultés de synchronisation, vérifiez que :",
        },
        {
          type: "steps",
          items: [
            "Vous êtes connecté avec le même identifiant Apple sur les deux appareils.",
            "iCloud est activé sur les deux appareils.",
            "L'application Lettres est autorisée à stocker des données dans iCloud sur les deux appareils (voir aussi le [guide d'assistance iCloud d'Apple](https://support.apple.com/en-us/118225)).",
            "La dernière version d'iOS est installée sur les deux appareils.",
            "La dernière version de l'application Lettres est installée sur les deux appareils.",
          ],
        },
      ],
    },
  ],
};

export default fr;
