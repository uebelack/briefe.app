// Fake example sender/recipient addresses used to render template detail pages
// as an actual letter. One localized pair per language.
const addresses = {
  en: {
    dateLocale: "en-US",
    city: "Springfield",
    sender: { name: "James Miller", lines: ["742 Evergreen Terrace", "Springfield, IL 62704"] },
    recipient: {
      name: "Northwind Services Inc.",
      lines: ["Customer Care Department", "500 Oak Avenue", "Chicago, IL 60601"],
    },
  },
  de: {
    dateLocale: "de-DE",
    city: "Berlin",
    sender: { name: "Max Mustermann", lines: ["Musterstraße 12", "10115 Berlin"] },
    recipient: {
      name: "Musterfirma GmbH",
      lines: ["Kundenservice", "Beispielallee 34", "20095 Hamburg"],
    },
  },
  fr: {
    dateLocale: "fr-FR",
    city: "Paris",
    sender: { name: "Jean Dupont", lines: ["12 rue de la Paix", "75002 Paris"] },
    recipient: {
      name: "Société Exemple SARL",
      lines: ["Service Client", "34 avenue des Champs", "69002 Lyon"],
    },
  },
  it: {
    dateLocale: "it-IT",
    city: "Roma",
    sender: { name: "Mario Rossi", lines: ["Via Roma 12", "00184 Roma"] },
    recipient: {
      name: "Azienda Esempio S.r.l.",
      lines: ["Servizio Clienti", "Via Milano 34", "20121 Milano"],
    },
  },
  es: {
    dateLocale: "es-ES",
    city: "Madrid",
    sender: { name: "Juan Pérez", lines: ["Calle Mayor 12", "28013 Madrid"] },
    recipient: {
      name: "Empresa Ejemplo S.L.",
      lines: ["Atención al Cliente", "Avenida Diagonal 34", "08019 Barcelona"],
    },
  },
  pt: {
    dateLocale: "pt-PT",
    city: "Lisboa",
    sender: { name: "João Silva", lines: ["Rua Augusta 12", "1100-053 Lisboa"] },
    recipient: {
      name: "Empresa Exemplo, Lda.",
      lines: ["Apoio ao Cliente", "Avenida da Boavista 34", "4100-112 Porto"],
    },
  },
  nl: {
    dateLocale: "nl-NL",
    city: "Amsterdam",
    sender: { name: "Jan Jansen", lines: ["Herengracht 12", "1015 BN Amsterdam"] },
    recipient: {
      name: "Voorbeeld B.V.",
      lines: ["Klantenservice", "Coolsingel 34", "3011 AD Rotterdam"],
    },
  },
};

export default addresses;
