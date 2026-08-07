// English user manual — source of truth for all localized versions.
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

const es = {
  locale: "es",
  appName: "Cartas",
  homeUrl: "https://letter-app.com/es",
  canonical: "https://letter-app.com/es/ayuda",
  metaTitle: "Manual de la app Cartas — Escribir e imprimir cartas",
  metaDescription:
    "Guía completa de la app Cartas: escriba y dé formato a una carta, añada un logotipo o membrete, use el asistente de IA, gestione remitentes y plantillas, añada una firma y comparta o imprima un PDF listo para enviar.",
  keywords: [
    "manual app cartas",
    "cómo escribir una carta",
    "imprimir una carta",
    "añadir logotipo a una carta",
    "membrete PDF",
    "plantillas de cartas",
    "firma en una carta",
    "ayuda app cartas",
  ],

  title: "Manual de usuario",
  tagline:
    "Todo lo que la app Cartas puede hacer: escribir, dar formato e imprimir cartas de verdad, y luego compartirlas como un PDF listo para imprimir.",
  proNote:
    "Algunas funciones forman parte de la suscripción **Cartas PRO** (marcadas con PRO más abajo). La primera vez que toque una función PRO, la app le mostrará la pantalla de mejora con una prueba gratuita. Todo lo demás — escribir una carta, previsualizarla, compartirla e imprimirla — es gratis.",
  tocTitle: "Contenido",

  sections: [
    {
      id: "getting-around",
      title: "Cómo moverse por la app",
      screenshot: "overview",
      screenshotAlt: "La lista de cartas",
      blocks: [
        { type: "p", text: "Al abrir la app, llegará a su **lista de cartas**." },
        {
          type: "ul",
          items: [
            "**Buscar** — filtre las cartas por asunto o contenido usando el campo de la parte superior.",
            "**Nueva carta** — toque el botón **+** para empezar una carta nueva.",
            "**Abrir una carta** — toque cualquier carta de la lista para previsualizarla.",
            "**Ajustes** — toque el icono del engranaje para abrir los ajustes de la app.",
          ],
        },
        {
          type: "p",
          text: "En pantallas más grandes — una tableta o un ordenador como un Mac o un Chromebook — la lista permanece a la izquierda y la vista previa de la carta seleccionada se muestra a la derecha.",
        },
      ],
    },
    {
      id: "writing-a-letter",
      title: "Escribir una carta",
      screenshot: "edit",
      screenshotAlt: "El editor de cartas",
      blocks: [
        {
          type: "p",
          text: "Toque **+** para crear una carta, o abra una existente y toque **Editar** (icono del lápiz). El editor tiene los campos de encabezado, el cuerpo y un área de firma:",
        },
        {
          type: "ul",
          items: [
            "**Remitente** — su propia dirección (el “De”). Escríbala, elija un perfil de remitente guardado o importe un contacto.",
            "**Destinatario** — a quién va dirigida la carta (el “Para”).",
            "**Asunto** — la línea del asunto. Aquí también puede aplicar una plantilla guardada.",
            "**Cuerpo** — el texto de la carta en sí.",
            "**Panel de firma** — firme la carta dibujando su firma.",
            "**Campo de firma** — escriba su nombre para que aparezca debajo de la firma.",
          ],
        },
        {
          type: "p",
          text: "Toque el botón **✓ Guardar** en la parte superior derecha para guardar. Las cartas nuevas se añaden a su lista; las ediciones actualizan la carta y le devuelven a la vista previa.",
        },
        {
          type: "note",
          text: "Al salir con cambios sin guardar aparecerá **“¿Descartar cambios?”** — elija **Descartar** para desecharlos o **Seguir editando** para volver. Para eliminar una carta, ábrala y toque el icono de la papelera en la vista previa; luego confirme.",
        },
      ],
    },
    {
      id: "formatting-text",
      title: "Dar formato al texto",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "En el editor, una barra de formato le permite dar estilo al texto seleccionado. Seleccione el texto que quiera cambiar y toque el botón — o use el atajo de teclado si tiene un teclado físico.",
        },
        {
          type: "table",
          head: ["Botón", "Atajo", "Efecto"],
          rows: [
            ["Negrita", "Ctrl + B", "Texto en negrita"],
            ["Cursiva", "Ctrl + I", "Texto en cursiva"],
            ["Subrayado", "Ctrl + U", "Texto subrayado"],
          ],
        },
        {
          type: "tip",
          text: "¿Prefiere una carta sencilla sin estilos? Active **Solo texto** en los ajustes de la carta.",
        },
      ],
    },
    {
      id: "ai-assistant",
      title: "El asistente de escritura con IA",
      pro: true,
      screenshot: "ai",
      screenshotAlt: "El asistente de escritura con IA",
      blocks: [
        {
          type: "p",
          text: "Si está activado, aparece un botón de **destello (✨)** en el editor. Redacta un asunto y un cuerpo de carta por usted — o reelabora el texto que ya haya escrito.",
        },
        {
          type: "steps",
          items: [
            "Escriba al menos una breve nota sobre lo que quiere — un asunto y/o algunas instrucciones en el cuerpo.",
            "Toque el botón **✨**.",
            "**Solo la primera vez:** acepte el *Tratamiento de datos* — su asunto y su mensaje se envían a un servicio de IA para generar el borrador. Elija **Aceptar**, **Privacidad** o **Rechazar**.",
            "**Elija qué debe hacer el asistente** — la pantalla *Asistente de IA* pregunta «¿Qué debe hacer el asistente con tu carta?» y muestra las acciones disponibles (véase más abajo). Toque una.",
            "El asistente muestra una animación de *“Escribiendo su carta…”* y luego presenta un asunto y un cuerpo sugeridos.",
            "Toque **Usar** para insertar la sugerencia en su editor, o **Cancelar** para conservar lo que tenía.",
          ],
        },
        {
          type: "p",
          text: "**Las opciones.** Cada opción es una tarjeta con un icono, un nombre y una descripción de una línea. Al tocar una tarjeta la petición se inicia de inmediato — no hay confirmación adicional, así que elija la que se ajuste a lo que necesita:",
        },
        {
          type: "table",
          head: ["Opción", "Qué hace"],
          rows: [
            ["**Mejorar**", "Refinar estructura, claridad y tono manteniendo su intención."],
            ["**Ortografía y gramática**", "Corregir solo ortografía, gramática y puntuación."],
            ["**Más corto**", "Hacerla más concisa sin perder lo esencial."],
            ["**Más largo**", "Ampliar con el detalle y la elaboración adecuados."],
            ["**Simplificar**", "Usar un lenguaje sencillo y fácil de entender."],
            ["**Más formal**", "Reescribir en un tono formal y profesional."],
            ["**Más cercano**", "Reescribir en un tono cálido y amable."],
            ["**Más directo**", "Eliminar rodeos y relleno para ser claro y directo."],
            [
              "**Escribir por mí**",
              "Convertir sus notas en una carta completa y bien estructurada.",
            ],
          ],
        },
        {
          type: "tip",
          text: "¿Empieza desde cero? Apunte unos cuantos puntos y elija **Escribir por mí**. ¿Ya está conforme con el contenido y solo quiere pulirlo? **Ortografía y gramática** es la que menos cambia, **Mejorar** es la opción todoterreno, y las opciones de tono (*Más formal*, *Más cercano*, *Más directo*) reformulan sin cambiar lo que usted dice.",
        },
        {
          type: "note",
          text: "Todas las opciones trabajan sobre la carta completa — asunto y cuerpo juntos — y responden siempre en el idioma de la carta. Lo que devuelva sustituye ambos campos al tocar **Usar**, así que, si solo quiere conservar una parte, cópiela antes de aceptar. Puede volver a ejecutar el asistente tantas veces como quiera y elegir una opción distinta cada vez.",
        },
      ],
    },
    {
      id: "preview-share-print",
      title: "Previsualizar, compartir e imprimir",
      screenshot: "detail",
      screenshotAlt: "La vista previa del PDF en tiempo real",
      blocks: [
        {
          type: "p",
          text: "Al abrir una carta se muestra una **vista previa del PDF en tiempo real** de cómo se imprimirá exactamente. La vista previa se actualiza cada vez que edita la carta. Desde la barra superior puede:",
        },
        {
          type: "ul",
          items: [
            "**Compartir** — envíe el PDF a través de cualquier app (correo, Drive, mensajería…).",
            "**Imprimir** — imprima mediante el cuadro de diálogo de impresión estándar (impresora, tamaño de papel, copias).",
            "**Ajustes** — abra los ajustes de diseño de esta carta.",
            "**Editar** — vuelva al editor.",
            "**Eliminar** — borre la carta.",
          ],
        },
      ],
    },
    {
      id: "layout-settings",
      title: "Diseño y ajustes de la carta",
      pro: true,
      screenshot: "letter_settings",
      screenshotAlt: "Ajustes de diseño de la carta",
      blocks: [
        {
          type: "p",
          text: "Abra una carta y toque el **icono del engranaje** para controlar exactamente cómo aparece en el papel. Toque **✓ Guardar** cuando termine.",
        },
        {
          type: "ul",
          items: [
            "**General** — muestre u oculte su dirección de “De” en la página.",
            "**Papelería** — suba un **PDF** para usarlo como membrete detrás de su texto.",
            "**Formato** — tamaño de papel (**A4** o **Carta**) y el idioma usado para la fecha.",
            "**Fecha** — elija la fecha, un prefijo opcional (p. ej. un lugar) y un formato (Corto → Completo).",
            "**Alineación** — posicione los bloques de remitente, fecha, destinatario y firma.",
            "**Opciones** — marcas de pliegue, números de página, remitente en sobre con ventanilla y modo solo texto.",
            "**Fuente** — tipo de fuente (Sans, Serif, Monoespaciada, Cursiva) y tamaño.",
            "**Márgenes** — defina los márgenes superior, derecho, inferior e izquierdo.",
          ],
        },
        {
          type: "p",
          text: "**Añadir un logotipo o membrete:** la app no diseña un logotipo por usted, pero puede colocar cualquier logotipo o membrete detrás de su texto con la opción **Papelería**:",
        },
        {
          type: "steps",
          items: [
            "En su app preferida — Pages, Word o cualquiera que exporte **PDF** — cree una página con su logotipo (o membrete completo) exactamente donde quiera que aparezca.",
            "Abra la carta y toque el icono de **ajustes** (engranaje).",
            "En **Papelería**, suba ese PDF. Se coloca detrás de su texto como fondo, de modo que su logotipo aparece en la carta impresa.",
          ],
        },
        {
          type: "tip",
          text: "Para añadir su logotipo automáticamente a cada carta nueva, cree un perfil de remitente y suba allí su PDF de papelería — así cada carta que empiece lo incluirá. También puede guardar el resto de estas preferencias en ese perfil para que las cartas nuevas comiencen con su diseño preferido.",
        },
      ],
    },
    {
      id: "signatures",
      title: "Firmas",
      blocks: [
        { type: "p", text: "Puede añadir una firma de dos maneras, y se pueden combinar:" },
        {
          type: "ul",
          items: [
            "**Firma dibujada (PRO)** — toque el botón de firma para abrir un lienzo de dibujo. Firme con el dedo o un lápiz óptico, use **Borrar** para empezar de nuevo y luego confirme. Se incrusta como imagen.",
            "**Firma de texto** — escriba una línea de despedida/firma (p. ej. su nombre).",
          ],
        },
        {
          type: "p",
          text: "Use **Alineación de la firma** en los ajustes de la carta para colocarla a la izquierda o a la derecha.",
        },
      ],
    },
    {
      id: "senders",
      title: "Remitentes / identidades",
      pro: true,
      screenshot: "sender",
      screenshotAlt: "Gestión de perfiles de remitente",
      blocks: [
        {
          type: "p",
          text: "Un **Remitente** es una dirección de “De” guardada junto con su diseño preferido — así no tiene que reintroducir todo cada vez. Gestiónelos en **Ajustes → Remitentes**: toque **+** para añadir, busque para filtrar o toque un remitente para editarlo.",
        },
        {
          type: "p",
          text: "Un remitente guarda la dirección de “De”, el interruptor de mostrar remitente, una firma (dibujada y/o de texto), todas las opciones de diseño y una marca de **Remitente predeterminado** que se aplica automáticamente a las cartas nuevas.",
        },
        {
          type: "note",
          text: "Mientras escribe, use la acción de **seleccionar remitente** junto al campo *Remitente* para insertar un perfil guardado en su carta.",
        },
      ],
    },
    {
      id: "templates",
      title: "Plantillas",
      pro: true,
      screenshot: "templates",
      screenshotAlt: "La lista de plantillas",
      blocks: [
        {
          type: "p",
          text: "Una **Plantilla** es un asunto + cuerpo reutilizable que puede aplicar a cualquier carta — muy útil para cartas recurrentes. Gestiónelas en **Ajustes → Plantillas**: toque **+** para añadir, busque para filtrar o toque una plantilla para editarla con el mismo editor de texto enriquecido.",
        },
        {
          type: "note",
          text: "Mientras escribe, use la acción de **seleccionar plantilla** junto al campo *Asunto* para rellenar el asunto y el cuerpo. La app también incluye algunas **plantillas integradas** para empezar.",
        },
      ],
    },
    {
      id: "contacts",
      title: "Importar direcciones desde los contactos",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Junto a los campos **Remitente** y **Destinatario** puede extraer una dirección directamente de la agenda de su teléfono:",
        },
        {
          type: "steps",
          items: [
            "Toque la acción de **contacto** junto al campo.",
            "La primera vez, conceda el permiso de **Contactos** cuando se le solicite. (Si lo rechazó antes, actívelo en los ajustes de sistema de la app.)",
            "Elija un contacto; su dirección rellena el campo.",
          ],
        },
      ],
    },
    {
      id: "app-settings",
      title: "Ajustes y ayuda de la app",
      screenshot: "settings",
      screenshotAlt: "Ajustes de la app",
      blocks: [
        {
          type: "p",
          text: "Abra **Ajustes** (icono del engranaje) desde la lista de cartas. Desde aquí puede acceder a:",
        },
        {
          type: "ul",
          items: [
            "**Remitentes** — gestione los perfiles de remitente.",
            "**Plantillas** — gestione las plantillas.",
            "**Ayuda** — abre las páginas de ayuda en línea.",
            "**Preguntas frecuentes** — preguntas frecuentes.",
            "**Contactar con soporte** — escriba al equipo de soporte por correo.",
            "**Política de privacidad** — abre la política de privacidad en su navegador.",
          ],
        },
      ],
    },
    {
      id: "pro-subscription",
      title: "Suscripción Cartas PRO",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "**Cartas PRO** desbloquea las funciones avanzadas. Cuando toque una función PRO sin suscripción, aparecerá la pantalla de mejora. PRO desbloquea:",
        },
        {
          type: "ul",
          items: [
            "Perfiles de **Remitente** — introduzca sus datos de remitente una vez y reutilícelos.",
            "**Contactos** — importe direcciones desde su agenda.",
            "**Plantillas** — cartas reutilizables para cualquier ocasión.",
            "**Firmas** — añada firmas manuscritas/personales.",
            "**Diseño** — control total sobre el aspecto de las cartas.",
            "Además de formato de texto enriquecido, el asistente de IA y la papelería.",
          ],
        },
        {
          type: "p",
          text: "La pantalla de mejora ofrece planes (semanal, mensual, anual o una compra única) y normalmente una **prueba gratuita**, todo mostrado en su moneda local. ¿Ya está suscrito en otro dispositivo? Toque **Restaurar compras**.",
        },
        {
          type: "note",
          text: "Si ve *“La facturación no está disponible en este momento”*, compruebe su conexión a internet y asegúrese de haber iniciado sesión en su cuenta de la tienda de aplicaciones.",
        },
      ],
    },
    {
      id: "languages",
      title: "Idiomas",
      blocks: [
        {
          type: "p",
          text: "La app está disponible en **7 idiomas**: inglés, alemán, español, francés, italiano, portugués y neerlandés. Sigue automáticamente el idioma del sistema de su dispositivo, incluido el formato de fecha adaptado a la región.",
        },
      ],
    },
    {
      id: "phones-tablets",
      title: "Teléfonos, tabletas y ordenadores",
      blocks: [
        { type: "p", text: "El diseño se adapta al tamaño de su pantalla:" },
        {
          type: "ul",
          items: [
            "**Teléfono** — una pantalla a la vez. Al tocar una carta se abre su vista previa a pantalla completa; la edición y los ajustes se abren en sus propias pantallas.",
            "**Tableta y ordenador** — en una tableta o un ordenador como un Mac o un Chromebook, obtiene una vista de dos paneles: su lista de cartas a la izquierda y la vista previa a la derecha. La edición, los ajustes, los remitentes, las plantillas y la pantalla de mejora se abren como diálogos sobre la vista previa, para que nunca pierda su sitio.",
          ],
        },
      ],
    },
    {
      id: "syncing",
      title: "Sincronización entre dispositivos (iPhone y iPad)",
      blocks: [
        {
          type: "note",
          text: "Esta sección se aplica únicamente a la versión de **iPhone/iPad**.",
        },
        {
          type: "p",
          text: "En iPhone y iPad, sus cartas, remitentes y plantillas **se sincronizan automáticamente a través de iCloud**. Inicie sesión con la misma cuenta de iCloud en cada dispositivo y su contenido se mantendrá actualizado en todas partes — sin necesidad de exportar ni hacer copias de seguridad manualmente.",
        },
        {
          type: "ul",
          items: [
            "La sincronización ocurre en segundo plano; no hay ningún botón que pulsar.",
            "Los cambios hechos en un dispositivo aparecen en los demás poco después.",
            "iCloud debe estar disponible y activado en el dispositivo para que la sincronización funcione.",
          ],
        },
        {
          type: "p",
          text: "Si tiene problemas con la sincronización, compruebe que:",
        },
        {
          type: "steps",
          items: [
            "Ha iniciado sesión con el mismo ID de Apple en ambos dispositivos.",
            "iCloud está activado en ambos dispositivos.",
            "La app Cartas tiene permiso para almacenar datos en iCloud en ambos dispositivos (consulte también la [guía de soporte de iCloud de Apple](https://support.apple.com/en-us/118225)).",
            "La última versión de iOS está instalada en ambos dispositivos.",
            "La última versión de la app Cartas está instalada en ambos dispositivos.",
          ],
        },
      ],
    },
  ],
};

export default es;
