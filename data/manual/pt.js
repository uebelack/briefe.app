// Portuguese (pt-PT) user manual — translated from en.js (source of truth).
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

const pt = {
  locale: "pt",
  appName: "Cartas",
  homeUrl: "https://letter-app.com/pt",
  canonical: "https://letter-app.com/pt/ajuda",
  metaTitle: "Manual da Aplicação Cartas — Escrever e Imprimir Cartas",
  metaDescription:
    "Guia completo da aplicação Cartas: escreva e formate uma carta, adicione um logótipo ou papel timbrado, use o assistente de IA, faça a gestão de remetentes e modelos, junte uma assinatura e partilhe ou imprima um PDF pronto a enviar.",
  keywords: [
    "manual da aplicação cartas",
    "como escrever uma carta",
    "imprimir uma carta",
    "adicionar logótipo a uma carta",
    "papel timbrado PDF",
    "modelos de cartas",
    "assinatura em carta",
    "ajuda aplicação cartas",
  ],

  title: "Manual do Utilizador",
  tagline:
    "Tudo o que a aplicação Cartas consegue fazer — escrever, formatar e imprimir cartas reais e partilhá-las como um PDF pronto a imprimir.",
  proNote:
    "Algumas funcionalidades fazem parte da subscrição **Cartas PRO** (assinaladas com PRO abaixo). Na primeira vez que tocar numa funcionalidade PRO, a aplicação mostra o ecrã de subscrição com um período de experiência gratuito. Tudo o resto — escrever uma carta, pré-visualizá-la, partilhá-la e imprimi-la — é gratuito.",
  tocTitle: "Índice",

  sections: [
    {
      id: "getting-around",
      title: "Orientar-se na aplicação",
      screenshot: "overview",
      screenshotAlt: "A lista de cartas",
      blocks: [
        { type: "p", text: "Quando abre a aplicação, chega à sua **lista de cartas**." },
        {
          type: "ul",
          items: [
            "**Pesquisar** — filtre as cartas por assunto ou conteúdo através do campo no topo.",
            "**Nova carta** — toque no botão **+** para começar uma nova carta.",
            "**Abrir uma carta** — toque em qualquer carta da lista para a pré-visualizar.",
            "**Definições** — toque no ícone de engrenagem para abrir as definições da aplicação.",
          ],
        },
        {
          type: "p",
          text: "Em ecrãs maiores — um tablet ou um computador como um Mac ou Chromebook — a lista permanece à esquerda e a pré-visualização da carta selecionada aparece à direita.",
        },
      ],
    },
    {
      id: "writing-a-letter",
      title: "Escrever uma carta",
      screenshot: "edit",
      screenshotAlt: "O editor de cartas",
      blocks: [
        {
          type: "p",
          text: "Toque em **+** para criar uma carta, ou abra uma existente e toque em **Editar** (ícone de lápis). O editor tem os campos do cabeçalho, o corpo e uma área de assinatura:",
        },
        {
          type: "ul",
          items: [
            "**Remetente** — o seu próprio endereço (o “De”). Escreva-o, escolha um perfil de remetente guardado ou importe um contacto.",
            "**Destinatário** — a quem se destina a carta (o “Para”).",
            "**Assunto** — a linha de assunto. Aqui também pode aplicar um modelo guardado.",
            "**Corpo** — o texto da carta em si.",
            "**Painel de assinatura** — assine a carta desenhando a sua assinatura.",
            "**Campo de assinatura** — escreva o seu nome para aparecer por baixo da assinatura.",
          ],
        },
        {
          type: "p",
          text: "Toque no botão **✓ Guardar** no canto superior direito para guardar. As cartas novas são adicionadas à sua lista; as edições atualizam a carta e devolvem-no à pré-visualização.",
        },
        {
          type: "note",
          text: "Sair com alterações por guardar mostra a mensagem **“Descartar alterações?”** — escolha **Descartar** para as eliminar ou **Continuar a editar** para voltar atrás. Para eliminar uma carta, abra-a e toque no ícone do caixote do lixo na pré-visualização e confirme.",
        },
      ],
    },
    {
      id: "formatting-text",
      title: "Formatar texto",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "No editor, uma barra de ferramentas de formatação permite-lhe dar estilo ao texto selecionado. Selecione o texto que pretende alterar e toque no botão — ou use o atalho de teclado, caso tenha um teclado físico.",
        },
        {
          type: "table",
          head: ["Botão", "Atalho", "Efeito"],
          rows: [
            ["Negrito", "Ctrl + B", "Texto a negrito"],
            ["Itálico", "Ctrl + I", "Texto em itálico"],
            ["Sublinhado", "Ctrl + U", "Texto sublinhado"],
          ],
        },
        {
          type: "tip",
          text: "Prefere uma carta simples, sem estilos? Ative **Apenas texto** nas definições da carta.",
        },
      ],
    },
    {
      id: "ai-assistant",
      title: "O assistente de escrita com IA",
      pro: true,
      screenshot: "ai",
      screenshotAlt: "O assistente de escrita com IA",
      blocks: [
        {
          type: "p",
          text: "Se estiver ativado, aparece um botão de **brilho (✨)** no editor. Ele redige um assunto e o corpo da carta por si.",
        },
        {
          type: "steps",
          items: [
            "Escreva pelo menos uma pequena nota sobre o que pretende — um assunto e/ou algumas instruções no corpo.",
            "Toque no botão **✨**.",
            "**Apenas na primeira vez:** aceite o *Processamento de dados* — o seu assunto e a sua mensagem são enviados para um serviço de IA para gerar o rascunho. Escolha **Aceitar**, **Privacidade** ou **Recusar**.",
            "O assistente mostra uma animação *“A escrever a sua carta…”* e depois apresenta um assunto e um corpo sugeridos.",
            "Toque em **Usar** para colocar a sugestão no seu editor, ou em **Cancelar** para manter o que tinha.",
          ],
        },
      ],
    },
    {
      id: "preview-share-print",
      title: "Pré-visualizar, partilhar e imprimir",
      screenshot: "detail",
      screenshotAlt: "A pré-visualização de PDF em tempo real",
      blocks: [
        {
          type: "p",
          text: "Ao abrir uma carta, aparece uma **pré-visualização de PDF em tempo real** de exatamente como será impressa. A pré-visualização atualiza-se sempre que edita a carta. A partir da barra superior pode:",
        },
        {
          type: "ul",
          items: [
            "**Partilhar** — envie o PDF através de qualquer aplicação (email, Drive, mensagens…).",
            "**Imprimir** — imprima através da caixa de diálogo de impressão padrão (impressora, tamanho do papel, cópias).",
            "**Definições** — abra as definições de esquema desta carta.",
            "**Editar** — volte ao editor.",
            "**Eliminar** — remova a carta.",
          ],
        },
      ],
    },
    {
      id: "layout-settings",
      title: "Esquema e definições da carta",
      pro: true,
      screenshot: "letter_settings",
      screenshotAlt: "Definições de esquema da carta",
      blocks: [
        {
          type: "p",
          text: "Abra uma carta e toque no **ícone de engrenagem** para controlar exatamente como aparece no papel. Toque em **✓ Guardar** quando terminar.",
        },
        {
          type: "ul",
          items: [
            "**Geral** — mostrar ou ocultar o seu endereço “De” na página.",
            "**Papel timbrado** — carregue um **PDF** para usar como papel timbrado por trás do seu texto.",
            "**Formato** — tamanho do papel (**A4** ou **Letter**) e o idioma usado na data.",
            "**Data** — escolha a data, um prefixo opcional (por exemplo, o nome de um local) e um formato (Curto → Completo).",
            "**Alinhamento** — posicione os blocos de remetente, data, destinatário e assinatura.",
            "**Opções** — marcas de dobra, números de página, remetente em envelope de janela e modo apenas texto.",
            "**Tipo de letra** — tipo de letra (Sem serifa, Com serifa, Monoespaçado, Cursivo) e tamanho.",
            "**Margens** — defina as margens superior, direita, inferior e esquerda.",
          ],
        },
        {
          type: "p",
          text: "**Adicionar um logótipo ou papel timbrado:** a aplicação não cria um logótipo por si, mas pode colocar qualquer logótipo ou papel timbrado por trás do seu texto com a opção **Papel timbrado**:",
        },
        {
          type: "steps",
          items: [
            "Na aplicação que preferir — Pages, Word ou qualquer outra que exporte **PDF** — crie uma página com o seu logótipo (ou papel timbrado completo) exatamente onde pretende que apareça.",
            "Abra a carta e toque no ícone de **definições** (engrenagem).",
            "Em **Papel timbrado**, carregue esse PDF. Fica por trás do seu texto como fundo, para que o seu logótipo apareça na carta impressa.",
          ],
        },
        {
          type: "tip",
          text: "Para adicionar automaticamente o seu logótipo a todas as cartas novas, crie um perfil de remetente e carregue aí o PDF do seu papel timbrado — assim, todas as cartas que iniciar já o incluem. Também pode guardar as restantes preferências nesse perfil, para que as cartas novas comecem com o esquema que prefere.",
        },
      ],
    },
    {
      id: "signatures",
      title: "Assinaturas",
      blocks: [
        {
          type: "p",
          text: "Pode adicionar uma assinatura de duas formas, e ambas podem ser combinadas:",
        },
        {
          type: "ul",
          items: [
            "**Assinatura desenhada (PRO)** — toque no botão de assinatura para abrir uma tela de desenho. Assine com o dedo ou uma caneta, use **Limpar** para recomeçar e confirme. É incorporada como uma imagem.",
            "**Assinatura em texto** — escreva uma linha de fecho/assinatura (por exemplo, o seu nome).",
          ],
        },
        {
          type: "p",
          text: "Use o **Alinhamento da assinatura** nas definições da carta para a colocar à esquerda ou à direita.",
        },
      ],
    },
    {
      id: "senders",
      title: "Remetentes / identidades",
      pro: true,
      screenshot: "sender",
      screenshotAlt: "Gestão de perfis de remetente",
      blocks: [
        {
          type: "p",
          text: "Um **Remetente** é um endereço “De” guardado, agrupado com o esquema que prefere — para não ter de reintroduzir tudo de cada vez. Faça a gestão em **Definições → Remetentes**: toque em **+** para adicionar, pesquise para filtrar ou toque num remetente para o editar.",
        },
        {
          type: "p",
          text: "Um remetente guarda o endereço De, o interruptor para mostrar o remetente, uma assinatura (desenhada e/ou em texto), todas as opções de esquema e uma marca de **Remetente predefinido** que é aplicada automaticamente às cartas novas.",
        },
        {
          type: "note",
          text: "Enquanto escreve, use a ação **selecionar remetente** junto ao campo *Remetente* para colocar um perfil guardado na sua carta.",
        },
      ],
    },
    {
      id: "templates",
      title: "Modelos",
      pro: true,
      screenshot: "templates",
      screenshotAlt: "A lista de modelos",
      blocks: [
        {
          type: "p",
          text: "Um **Modelo** é um assunto + corpo reutilizável que pode aplicar a qualquer carta — prático para cartas recorrentes. Faça a gestão em **Definições → Modelos**: toque em **+** para adicionar, pesquise para filtrar ou toque num modelo para o editar com o mesmo editor de texto formatado.",
        },
        {
          type: "note",
          text: "Enquanto escreve, use a ação **selecionar modelo** junto ao campo *Assunto* para preencher o assunto e o corpo. A aplicação também inclui alguns **modelos incorporados** para o ajudar a começar.",
        },
      ],
    },
    {
      id: "contacts",
      title: "Importar endereços dos contactos",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Junto aos campos **Remetente** e **Destinatário** pode ir buscar um endereço diretamente à agenda de contactos do seu telemóvel:",
        },
        {
          type: "steps",
          items: [
            "Toque na ação de **contacto** junto ao campo.",
            "Da primeira vez, conceda a permissão de **Contactos** quando lhe for pedido. (Se recusou anteriormente, ative-a nas definições de sistema da aplicação.)",
            "Escolha um contacto; o endereço dele preenche o campo.",
          ],
        },
      ],
    },
    {
      id: "app-settings",
      title: "Definições e ajuda da aplicação",
      screenshot: "settings",
      screenshotAlt: "Definições da aplicação",
      blocks: [
        {
          type: "p",
          text: "Abra as **Definições** (ícone de engrenagem) a partir da lista de cartas. A partir daqui pode aceder a:",
        },
        {
          type: "ul",
          items: [
            "**Remetentes** — faça a gestão dos perfis de remetente.",
            "**Modelos** — faça a gestão dos modelos.",
            "**Ajuda** — abre as páginas de ajuda online.",
            "**Perguntas frequentes** — perguntas mais frequentes.",
            "**Contactar o suporte** — envie um email à equipa de suporte.",
            "**Política de privacidade** — abre a política de privacidade no seu navegador.",
          ],
        },
      ],
    },
    {
      id: "pro-subscription",
      title: "Subscrição Cartas PRO",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "A **Cartas PRO** desbloqueia as funcionalidades avançadas. Quando toca numa funcionalidade PRO sem subscrição, aparece o ecrã de subscrição. A PRO desbloqueia:",
        },
        {
          type: "ul",
          items: [
            "Perfis de **Remetente** — introduza a sua informação de remetente uma vez e reutilize-a.",
            "**Contactos** — importe endereços da sua agenda.",
            "**Modelos** — cartas reutilizáveis para qualquer ocasião.",
            "**Assinaturas** — junte assinaturas manuscritas/pessoais.",
            "**Esquema** — controlo total sobre o aspeto das cartas.",
            "Além da formatação de texto, o assistente de IA e o papel timbrado.",
          ],
        },
        {
          type: "p",
          text: "O ecrã de subscrição oferece planos (semanal, mensal, anual ou uma compra única) e, normalmente, um **período de experiência gratuito**, tudo apresentado na sua moeda local. Já subscreveu noutro dispositivo? Toque em **Restaurar compras**.",
        },
        {
          type: "note",
          text: "Se vir *“A faturação não está disponível de momento”*, verifique a sua ligação à Internet e certifique-se de que tem sessão iniciada na sua conta da loja de aplicações.",
        },
      ],
    },
    {
      id: "languages",
      title: "Idiomas",
      blocks: [
        {
          type: "p",
          text: "A aplicação está disponível em **7 idiomas**: inglês, alemão, espanhol, francês, italiano, português e neerlandês. Segue automaticamente o idioma de sistema do seu dispositivo, incluindo a formatação de datas conforme a região.",
        },
      ],
    },
    {
      id: "phones-tablets",
      title: "Telemóveis, tablets e computadores",
      blocks: [
        { type: "p", text: "O esquema adapta-se ao tamanho do seu ecrã:" },
        {
          type: "ul",
          items: [
            "**Telemóvel** — um ecrã de cada vez. Ao tocar numa carta, abre a sua pré-visualização em ecrã inteiro; a edição e as definições abrem-se como ecrãs próprios.",
            "**Tablet e computador** — num tablet, ou num computador como um Mac ou Chromebook, obtém uma vista de dois painéis: a sua lista de cartas à esquerda e a pré-visualização à direita. A edição, as definições, os remetentes, os modelos e o ecrã de subscrição abrem-se como caixas de diálogo sobre a pré-visualização, para que nunca perca o seu lugar.",
          ],
        },
      ],
    },
    {
      id: "syncing",
      title: "Sincronizar entre dispositivos (iPhone e iPad)",
      blocks: [
        {
          type: "note",
          text: "Esta secção aplica-se apenas à versão para **iPhone/iPad**.",
        },
        {
          type: "p",
          text: "No iPhone e no iPad, as suas cartas, remetentes e modelos **sincronizam automaticamente através do iCloud**. Inicie sessão na mesma conta iCloud em cada dispositivo e o seu conteúdo mantém-se atualizado em todo o lado — sem necessidade de exportação ou cópia de segurança manual.",
        },
        {
          type: "ul",
          items: [
            "A sincronização acontece em segundo plano; não há nenhum botão para premir.",
            "As alterações feitas num dispositivo aparecem nos outros pouco tempo depois.",
            "O iCloud tem de estar disponível e ativado no dispositivo para que a sincronização funcione.",
          ],
        },
        {
          type: "p",
          text: "Se tiver problemas com a sincronização, verifique se:",
        },
        {
          type: "steps",
          items: [
            "Tem sessão iniciada com o mesmo ID Apple em ambos os dispositivos.",
            "O iCloud está ativado em ambos os dispositivos.",
            "A aplicação Cartas tem autorização para guardar dados no iCloud em ambos os dispositivos (consulte também o [guia de suporte do iCloud da Apple](https://support.apple.com/en-us/118225)).",
            "A versão mais recente do iOS está instalada em ambos os dispositivos.",
            "A versão mais recente da aplicação Cartas está instalada em ambos os dispositivos.",
          ],
        },
      ],
    },
  ],
};

export default pt;
