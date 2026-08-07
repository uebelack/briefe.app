import {
  SquarePen,
  AlignJustify,
  Printer,
  ExternalLink,
  Search,
  Cloud,
  WandSparkles,
  Signature,
  IdCard,
  BookUser,
  LayoutTemplate,
  Settings,
} from "lucide-react";

const features = {
  "en-US": {
    overview: "Create and print perfectly formatted letters in no time.",
    edit: "Minimalistic editor, so you can focus on the content.",
    features: {
      title: "Features",
      features: [
        {
          title: "Write Letter",
          description: "Create, write and edit your letters with ease",
          icon: SquarePen,
        },
        {
          title: "Auto Format",
          description:
            "Letters and addresses are automatically formatted in a professional, country-specific way",
          icon: AlignJustify,
        },
        {
          title: "Print",
          description: "Easily print your letters directly from the app",
          icon: Printer,
        },
        {
          title: "Share & Export",
          description: "Share your letters digitally or export them as PDF files",
          icon: ExternalLink,
        },
        {
          title: "Search",
          description: "The search function makes it easy to find letters quickly and conveniently",
          icon: Search,
        },
        {
          title: "Storage*",
          description: "Your letters are synchronized across devices using iCloud",
          icon: Cloud,
        },
      ],
    },
    proFeatures: {
      title: "PRO Features",
      features: [
        {
          title: "AI Assistant**",
          description: "Refine or create professional letters with the AI Assistant",
          icon: WandSparkles,
        },
        {
          title: "Signatures",
          description: "Add personal signatures directly within the app",
          icon: Signature,
        },
        {
          title: "Sender",
          description: "Enter your sender information once",
          icon: IdCard,
        },
        {
          title: "Contacts",
          description: "Easily incorporate contact addresses from your address book",
          icon: BookUser,
        },
        {
          title: "Templates",
          description: "Utilize a wide range of templates for various occasions",
          icon: LayoutTemplate,
        },
        {
          title: "Layout & Formatting",
          description:
            "Customize the layout of your letters and emphasize what matters with bold, italic and underline",
          icon: Settings,
        },
      ],
    },
  },
  "de-DE": {
    overview: "Im Handumdrehen professionell formatierte Briefe erstellen und drucken.",
    edit: "Einfacher Editor – Fokussiert auf das Wesentliche.",
    features: {
      title: "Funktionen",
      features: [
        {
          title: "Brief schreiben",
          description: "Erstellen, schreiben und bearbeiten Sie Ihre Briefe mit Leichtigkeit",
          icon: SquarePen,
        },
        {
          title: "Autoformat",
          description:
            "Briefe und Adressen werden automatisch professionell und länderspezifisch formatiert",
          icon: AlignJustify,
        },
        {
          title: "Drucken",
          description: "Drucken Sie Ihre Briefe bequem direkt aus der App",
          icon: Printer,
        },
        {
          title: "Teilen & Exportieren",
          description: "Teilen Sie Ihre Briefe digital oder exportieren Sie sie als PDF-Dateien",
          icon: ExternalLink,
        },
        {
          title: "Suche",
          description: "Mit der Suchfunktion finden Sie Ihre Briefe schnell und einfach wieder",
          icon: Search,
        },
        {
          title: "Speicherung*",
          description: "Ihre Briefe werden über die iCloud geräteübergreifend synchronisiert",
          icon: Cloud,
        },
      ],
    },
    proFeatures: {
      title: "PRO Funktionen",
      features: [
        {
          title: "KI-Assistent**",
          description: "Verbessern oder erstellen Sie professionelle Briefe mit dem KI-Assistenten",
          icon: WandSparkles,
        },
        {
          title: "Unterschriften",
          description: "Fügen Sie persönliche Unterschriften direkt in der App hinzu",
          icon: Signature,
        },
        {
          title: "Absender",
          description: "Erfassen Sie einmalig Ihre Absenderinformationen",
          icon: IdCard,
        },
        {
          title: "Kontakte",
          description: "Verwenden Sie Ihre Kontaktadressen direkt aus Ihrem Adressbuch",
          icon: BookUser,
        },
        {
          title: "Templates",
          description: "Nutzen Sie viele Vorlagen für verschiedene Gelegenheiten",
          icon: LayoutTemplate,
        },
        {
          title: "Layout & Formatierung",
          description:
            "Passen Sie das Layout Ihrer Briefe an und heben Sie Wichtiges mit Fett, Kursiv und Unterstreichung hervor",
          icon: Settings,
        },
      ],
    },
  },
  "nl-NL": {
    overview: "Maak en print perfect opgemaakte brieven in no-time.",
    edit: "Minimalistische editor, zodat je je kunt concentreren op de inhoud.",
    features: {
      title: "Functies",
      features: [
        {
          title: "Brief schrijven",
          description: "Maak, schrijf en bewerk je brieven met gemak",
          icon: SquarePen,
        },
        {
          title: "Automatische Opmaak",
          description:
            "Brieven en adressen worden automatisch professioneel en landspecifiek opgemaakt",
          icon: AlignJustify,
        },
        {
          title: "Afdrukken",
          description: "Print eenvoudig je brieven rechtstreeks vanuit de app",
          icon: Printer,
        },
        {
          title: "Delen en Exporteren",
          description: "Deel je brieven digitaal of exporteer ze als PDF-bestanden",
          icon: ExternalLink,
        },
        {
          title: "Zoeken",
          description: "Met de zoekfunctie vind je brieven snel en handig",
          icon: Search,
        },
        {
          title: "Opslag*",
          description: "Je brieven worden gesynchroniseerd over apparaten met iCloud",
          icon: Cloud,
        },
      ],
    },
    proFeatures: {
      title: "PRO Functies",
      features: [
        {
          title: "AI-assistent**",
          description: "Verfijn of creëer professionele brieven met de AI-assistent",
          icon: WandSparkles,
        },
        {
          title: "Handtekeningen",
          description: "Voeg persoonlijke handtekeningen rechtstreeks toe in de app",
          icon: Signature,
        },
        {
          title: "Afzender",
          description: "Voer je afzenderinformatie eenmalig in",
          icon: IdCard,
        },
        {
          title: "Contacten",
          description: "Incorporeren van contactadressen uit je adresboek is eenvoudig",
          icon: BookUser,
        },
        {
          title: "Sjablonen",
          description:
            "Maak gebruik van een breed scala aan sjablonen voor verschillende gelegenheden",
          icon: LayoutTemplate,
        },
        {
          title: "Indeling & Opmaak",
          description:
            "Pas de indeling van je brieven aan en benadruk wat belangrijk is met vet, cursief en onderstreping",
          icon: Settings,
        },
      ],
    },
  },
  "fr-FR": {
    overview: "Créez et imprimez des lettres parfaitement formatées en un rien de temps.",
    edit: "Éditeur minimaliste pour que vous puissiez vous concentrer sur le contenu.",
    features: {
      title: "Fonctionnalités",
      features: [
        {
          title: "Écrire une lettre",
          description: "Créez, rédigez et modifiez vos lettres en toute simplicité",
          icon: SquarePen,
        },
        {
          title: "Formatage Automatique",
          description:
            "Les lettres et les adresses sont automatiquement formatées de manière professionnelle et selon le pays",
          icon: AlignJustify,
        },
        {
          title: "Impression",
          description: "Imprimez facilement vos lettres directement depuis l'application",
          icon: Printer,
        },
        {
          title: "Partage et Exportation",
          description: "Partagez vos lettres numériquement ou exportez-les au format PDF",
          icon: ExternalLink,
        },
        {
          title: "Recherche",
          description:
            "La fonction de recherche facilite la recherche rapide et pratique des lettres",
          icon: Search,
        },
        {
          title: "Stockage*",
          description: "Vos lettres sont synchronisées sur tous vos appareils grâce à iCloud",
          icon: Cloud,
        },
      ],
    },
    proFeatures: {
      title: "Fonctionnalités PRO",
      features: [
        {
          title: "Assistant IA**",
          description: "Affinez ou créez des lettres professionnelles avec l'assistant IA",
          icon: WandSparkles,
        },
        {
          title: "Signatures",
          description: "Ajoutez des signatures personnelles directement dans l'application",
          icon: Signature,
        },
        {
          title: "Expéditeur",
          description: "Entrez vos informations d'expéditeur une seule fois",
          icon: IdCard,
        },
        {
          title: "Contacts",
          description: "Intégrez facilement les adresses de votre carnet de contacts",
          icon: BookUser,
        },
        {
          title: "Modèles",
          description: "Utilisez une large gamme de modèles pour différentes occasions",
          icon: LayoutTemplate,
        },
        {
          title: "Mise en page & Format",
          description:
            "Personnalisez la mise en page de vos lettres et mettez en valeur l'essentiel en gras, italique et souligné",
          icon: Settings,
        },
      ],
    },
  },
  "it-IT": {
    overview: "Crea e stampa lettere perfettamente formattate in pochissimo tempo.",
    edit: "Editor minimalista, in modo da poterti concentrare sul contenuto.",
    features: {
      title: "Caratteristiche",
      features: [
        {
          title: "Scrivi lettera",
          description: "Crea, scrivi e modifica le tue lettere con facilità",
          icon: SquarePen,
        },
        {
          title: "Formattazione Auto",
          description:
            "Lettere e indirizzi vengono formattati automaticamente in modo professionale e specifico per paese",
          icon: AlignJustify,
        },
        {
          title: "Stampa",
          description: "Stampa facilmente le tue lettere direttamente dall'app",
          icon: Printer,
        },
        {
          title: "Condividi ed Esporta",
          description: "Condividi digitalmente le tue lettere o esportale in formato PDF",
          icon: ExternalLink,
        },
        {
          title: "Ricerca",
          description: "La funzione di ricerca facilita la ricerca delle lettere",
          icon: Search,
        },
        {
          title: "Archiviazione*",
          description: "Le tue lettere sono sincronizzate su tutti i dispositivi tramite iCloud",
          icon: Cloud,
        },
      ],
    },
    proFeatures: {
      title: "Funzionalità PRO",
      features: [
        {
          title: "Assistente IA**",
          description: "Affina o crea lettere professionali con l'assistente IA",
          icon: WandSparkles,
        },
        {
          title: "Firme",
          description: "Aggiungi firme personali direttamente dall'app",
          icon: Signature,
        },
        {
          title: "Mittente",
          description: "Inserisci le tue informazioni come mittente una sola volta",
          icon: IdCard,
        },
        {
          title: "Contatti",
          description: "Incorpora facilmente gli indirizzi dei contatti dalla tua rubrica",
          icon: BookUser,
        },
        {
          title: "Modelli",
          description: "Utilizza una vasta gamma di modelli per diverse occasioni",
          icon: LayoutTemplate,
        },
        {
          title: "Layout e Formattazione",
          description:
            "Personalizza il layout delle tue lettere ed evidenzia ciò che conta con grassetto, corsivo e sottolineato",
          icon: Settings,
        },
      ],
    },
  },
  "es-ES": {
    overview: "Crea e imprime cartas perfectamente formate en muy poco tiempo.",
    edit: "Editor minimalista para que puedas centrarte en el contenido.",
    features: {
      title: "Características",
      features: [
        {
          title: "Escribir carta",
          description: "Crea, escribe y edita tus cartas con facilidad",
          icon: SquarePen,
        },
        {
          title: "Formato Automático",
          description:
            "Las cartas y las direcciones se formatean automáticamente de forma profesional y según el país",
          icon: AlignJustify,
        },
        {
          title: "Imprimir",
          description: "Imprime fácilmente tus cartas directamente desde la aplicación",
          icon: Printer,
        },
        {
          title: "Compartir y Exportar",
          description: "Comparte tus cartas digitalmente o exportalas como archivos PDF",
          icon: ExternalLink,
        },
        {
          title: "Buscar",
          description: "La función de búsqueda facilita encontrar cartas rápidamente",
          icon: Search,
        },
        {
          title: "Almacenamiento*",
          description: "Tus cartas se sincronizan en todos tus dispositivos mediante iCloud",
          icon: Cloud,
        },
      ],
    },
    proFeatures: {
      title: "Funciones PRO",
      features: [
        {
          title: "Asistente IA**",
          description: "Refina o crea cartas profesionales con el asistente IA",
          icon: WandSparkles,
        },
        {
          title: "Firmas",
          description: "Agrega firmas personales directamente dentro de la aplicación",
          icon: Signature,
        },
        {
          title: "Remitente",
          description: "Ingresa tu información como remitente una sola vez",
          icon: IdCard,
        },
        {
          title: "Contactos",
          description: "Utiliza los contactos de tu agenda.",
          icon: BookUser,
        },
        {
          title: "Plantillas",
          description: "Utiliza una amplia gama de plantillas para diferentes ocasiones",
          icon: LayoutTemplate,
        },
        {
          title: "Diseño y Formato",
          description:
            "Personaliza el diseño de tus cartas y destaca lo importante con negrita, cursiva y subrayado",
          icon: Settings,
        },
      ],
    },
  },
  "pt-PT": {
    overview: "Crie e imprima cartas perfeitamente formatadas em pouco tempo.",
    edit: "Editor minimalista, para que possa focar no conteúdo.",
    features: {
      title: "Funcionalidades",
      features: [
        {
          title: "Escrever carta",
          description: "Crie, escreva e edite as suas cartas com facilidade",
          icon: SquarePen,
        },
        {
          title: "Formatação Automática",
          description:
            "As cartas e os endereços são automaticamente formatados de forma profissional e específica do país",
          icon: AlignJustify,
        },
        {
          title: "Imprimir",
          description: "Imprima facilmente as suas cartas diretamente a partir da aplicação",
          icon: Printer,
        },
        {
          title: "Partilhar e Exportar",
          description: "Partilhe as suas cartas digitalmente ou exporte-as como ficheiros PDF",
          icon: ExternalLink,
        },
        {
          title: "Pesquisa",
          description: "A função de pesquisa facilita a localização rápida e conveniente de cartas",
          icon: Search,
        },
        {
          title: "Armazenamento*",
          description: "As suas cartas são sincronizadas entre dispositivos através do iCloud",
          icon: Cloud,
        },
      ],
    },
    proFeatures: {
      title: "Funcionalidades PRO",
      features: [
        {
          title: "Assistente IA**",
          description: "Refine ou crie cartas profissionais com o assistente IA",
          icon: WandSparkles,
        },
        {
          title: "Assinaturas",
          description: "Adicione assinaturas pessoais diretamente na aplicação",
          icon: Signature,
        },
        {
          title: "Remetente",
          description: "Introduza as informações do remetente uma vez",
          icon: IdCard,
        },
        {
          title: "Contactos",
          description: "Incorpore facilmente endereços de contactos da sua lista de contactos",
          icon: BookUser,
        },
        {
          title: "Modelos",
          description: "Utilize uma ampla gama de modelos para diversas ocasiões",
          icon: LayoutTemplate,
        },
        {
          title: "Layout e Formatação",
          description:
            "Personalize o layout das suas cartas e realce o que importa com negrito, itálico e sublinhado",
          icon: Settings,
        },
      ],
    },
  },
};

export default features;
