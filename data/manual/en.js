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

const en = {
  locale: "en",
  appName: "Letter",
  homeUrl: "https://letter-app.com/en",
  canonical: "https://letter-app.com/en/help",
  metaTitle: "Letter App User Manual — Write, Format & Print Letters",
  metaDescription:
    "The complete Letter app guide: write and format a letter, add a logo or letterhead, use the AI assistant, manage senders and templates, add a signature, then share or print a ready-to-send PDF.",
  keywords: [
    "letter app manual",
    "how to write a letter",
    "print a letter",
    "add a logo to a letter",
    "letterhead PDF",
    "letter templates",
    "letter signature",
    "letter app help",
  ],

  title: "User Manual",
  tagline:
    "Everything the Letter app can do — write, format, and print real letters, then share them as a print-ready PDF.",
  proNote:
    "Some features are part of the **Letter PRO** subscription (marked PRO below). The first time you tap a PRO feature, the app shows the upgrade screen with a free trial. Everything else — writing a letter, previewing it, sharing and printing it — is free.",
  tocTitle: "Contents",

  sections: [
    {
      id: "getting-around",
      title: "Getting around",
      screenshot: "overview",
      screenshotAlt: "The list of letters",
      blocks: [
        { type: "p", text: "When you open the app you land on your **list of letters**." },
        {
          type: "ul",
          items: [
            "**Search** — filter letters by subject or content using the field at the top.",
            "**New letter** — tap the **+** button to start a new letter.",
            "**Open a letter** — tap any letter in the list to preview it.",
            "**Settings** — tap the gear icon to open app settings.",
          ],
        },
        {
          type: "p",
          text: "On larger screens — a tablet, or a computer such as a Mac or Chromebook — the list stays on the left and the selected letter's preview shows on the right.",
        },
      ],
    },
    {
      id: "writing-a-letter",
      title: "Writing a letter",
      screenshot: "edit",
      screenshotAlt: "The letter editor",
      blocks: [
        {
          type: "p",
          text: "Tap **+** to create a letter, or open an existing one and tap **Edit** (pencil icon). The editor has the header fields, the body, and a signature area:",
        },
        {
          type: "ul",
          items: [
            "**Sender** — your own address (the “From”). Type it, pick a saved sender profile, or import a contact.",
            "**Recipient** — who the letter is going to (the “To”).",
            "**Subject** — the subject line. You can also apply a saved template here.",
            "**Body** — the letter text itself.",
            "**Signature pane** — sign the letter by drawing your signature.",
            "**Signature field** — type your name to appear below the signature.",
          ],
        },
        {
          type: "p",
          text: "Tap the **✓ Save** button in the top-right to save. New letters are added to your list; edits update the letter and return you to the preview.",
        },
        {
          type: "note",
          text: "Leaving with unsaved changes prompts **“Discard Changes?”** — choose **Discard** to throw them away or **Keep Editing** to go back. To delete a letter, open it and tap the trash icon in the preview, then confirm.",
        },
      ],
    },
    {
      id: "formatting-text",
      title: "Formatting text",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "In the editor, a formatting toolbar lets you style selected text. Select the text you want to change, then tap the button — or use the keyboard shortcut if you have a hardware keyboard.",
        },
        {
          type: "table",
          head: ["Button", "Shortcut", "Effect"],
          rows: [
            ["Bold", "Ctrl + B", "Bold text"],
            ["Italic", "Ctrl + I", "Italic text"],
            ["Underline", "Ctrl + U", "Underlined text"],
          ],
        },
        {
          type: "tip",
          text: "Prefer a plain letter with no styling? Turn on **Text Only** in letter settings.",
        },
      ],
    },
    {
      id: "ai-assistant",
      title: "The AI writing assistant",
      pro: true,
      screenshot: "ai",
      screenshotAlt: "The AI writing assistant",
      blocks: [
        {
          type: "p",
          text: "If enabled, a **sparkle (✨)** button appears in the editor. It drafts a subject and letter body for you — or reworks the text you already wrote.",
        },
        {
          type: "steps",
          items: [
            "Type at least a short note about what you want — a subject and/or a few instructions in the body.",
            "Tap the **✨** button.",
            "**First time only:** agree to *Data Processing* — your subject and message are sent to an AI service to generate the draft. Choose **Accept**, **Privacy**, or **Decline**.",
            "**Choose what the assistant should do** — the *AI Assistant* screen asks “What should the assistant do with your letter?” and lists the available actions (see below). Tap one.",
            "The assistant shows a *“Writing your letter…”* animation, then presents a suggested subject and body.",
            "Tap **Use** to drop the suggestion into your editor, or **Cancel** to keep what you had.",
          ],
        },
        {
          type: "p",
          text: "**The options.** Each option is a card with an icon, a name, and a one-line description. Tapping a card immediately starts that request — there is no extra confirmation, so pick the one that matches what you need:",
        },
        {
          type: "table",
          head: ["Option", "What it does"],
          rows: [
            ["**Improve**", "Refine structure, clarity, and tone while keeping your intent."],
            ["**Spelling & Grammar**", "Fix spelling, grammar, and punctuation only."],
            ["**Make Shorter**", "Make it more concise without losing essentials."],
            ["**Make Longer**", "Expand with appropriate detail and elaboration."],
            ["**Simplify**", "Use plain, easy-to-understand language."],
            ["**Make Formal**", "Rewrite in a formal, professional tone."],
            ["**Make Friendly**", "Rewrite in a warm, friendly tone."],
            ["**Make Direct**", "Remove hedging and filler to be clear and direct."],
            ["**Write for Me**", "Turn your notes into a complete, well-structured letter."],
          ],
        },
        {
          type: "tip",
          text: "Starting from scratch? Jot down a few bullet points and pick **Write for Me**. Already happy with your content and only want it polished? **Spelling & Grammar** changes the least, **Improve** is the good all-rounder, and the tone options (*Formal*, *Friendly*, *Direct*) rewrite the wording without changing what you're saying.",
        },
        {
          type: "note",
          text: "Every option runs on the whole letter — subject and body together — and always answers in the letter's language. Whatever comes back replaces both fields when you tap **Use**, so if you only want to keep part of it, copy it out before accepting. You can run the assistant again as often as you like and pick a different option each time.",
        },
      ],
    },
    {
      id: "preview-share-print",
      title: "Previewing, sharing & printing",
      screenshot: "detail",
      screenshotAlt: "The live PDF preview",
      blocks: [
        {
          type: "p",
          text: "Opening a letter shows a **live PDF preview** of exactly how it will print. The preview updates whenever you edit the letter. From the top bar you can:",
        },
        {
          type: "ul",
          items: [
            "**Share** — send the PDF through any app (email, Drive, messaging…).",
            "**Print** — print through the standard print dialog (printer, paper size, copies).",
            "**Settings** — open this letter's layout settings.",
            "**Edit** — return to the editor.",
            "**Delete** — remove the letter.",
          ],
        },
      ],
    },
    {
      id: "layout-settings",
      title: "Letter layout & settings",
      pro: true,
      screenshot: "letter_settings",
      screenshotAlt: "Letter layout settings",
      blocks: [
        {
          type: "p",
          text: "Open a letter and tap the **gear icon** to control exactly how it appears on paper. Tap **✓ Save** when done.",
        },
        {
          type: "ul",
          items: [
            "**General** — show or hide your “From” address on the page.",
            "**Stationary** — upload a **PDF** to use as letterhead behind your text.",
            "**Format** — paper size (**A4** or **Letter**) and the language used for the date.",
            "**Date** — pick the date, an optional prefix (e.g. a place name), and a format (Short → Full).",
            "**Alignment** — position the sender, date, recipient, and signature blocks.",
            "**Options** — fold marks, page numbers, sender in window envelope, and text-only mode.",
            "**Font** — font type (Sans, Serif, Monospace, Cursive) and size.",
            "**Margins** — set top, right, bottom, and left margins.",
          ],
        },
        {
          type: "p",
          text: "**Adding a logo or letterhead:** the app doesn't design a logo for you, but you can place any logo or letterhead behind your text with the **Stationary** option:",
        },
        {
          type: "steps",
          items: [
            "In your preferred app — Pages, Word, or anything that exports **PDF** — create a page with your logo (or full letterhead) exactly where you want it to appear.",
            "Open the letter and tap the **settings** (gear) icon.",
            "Under **Stationary**, upload that PDF. It sits behind your text as the background, so your logo shows on the printed letter.",
          ],
        },
        {
          type: "tip",
          text: "To add your logo automatically to every new letter, create a sender profile and upload your stationary PDF there — then every letter you start includes it. You can also save the rest of these preferences in that profile so new letters begin with your preferred layout.",
        },
      ],
    },
    {
      id: "signatures",
      title: "Signatures",
      blocks: [
        { type: "p", text: "You can add a signature two ways, and they can be combined:" },
        {
          type: "ul",
          items: [
            "**Drawn signature (PRO)** — tap the signature button to open a drawing canvas. Sign with your finger or stylus, use **Clear** to start over, then confirm. It's embedded as an image.",
            "**Text signature** — type a closing/signature line (e.g. your name).",
          ],
        },
        {
          type: "p",
          text: "Use **Signature alignment** in letter settings to place it left or right.",
        },
      ],
    },
    {
      id: "senders",
      title: "Senders / identities",
      pro: true,
      screenshot: "sender",
      screenshotAlt: "Managing sender profiles",
      blocks: [
        {
          type: "p",
          text: "A **Sender** is a saved “From” address bundled with your preferred layout — so you don't re-enter everything each time. Manage them in **Settings → Senders**: tap **+** to add, search to filter, or tap a sender to edit.",
        },
        {
          type: "p",
          text: "A sender stores the From address, the show-sender toggle, a signature (drawn and/or text), all the layout options, and a **Default sender** flag that's applied automatically to new letters.",
        },
        {
          type: "note",
          text: "While writing, use the **select sender** action next to the *Sender* field to drop a saved profile into your letter.",
        },
      ],
    },
    {
      id: "templates",
      title: "Templates",
      pro: true,
      screenshot: "templates",
      screenshotAlt: "The templates list",
      blocks: [
        {
          type: "p",
          text: "A **Template** is a reusable subject + body you can apply to any letter — handy for recurring letters. Manage them in **Settings → Templates**: tap **+** to add, search to filter, or tap a template to edit with the same rich-text editor.",
        },
        {
          type: "note",
          text: "While writing, use the **select template** action next to the *Subject* field to fill in the subject and body. The app also includes some **built-in templates** to get you started.",
        },
      ],
    },
    {
      id: "contacts",
      title: "Importing addresses from contacts",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "Next to the **Sender** and **Recipient** fields you can pull an address straight from your phone's address book:",
        },
        {
          type: "steps",
          items: [
            "Tap the **contact** action next to the field.",
            "The first time, grant **Contacts** permission when prompted. (If you declined earlier, enable it in the app's system settings.)",
            "Pick a contact; their address fills the field.",
          ],
        },
      ],
    },
    {
      id: "app-settings",
      title: "App settings & help",
      screenshot: "settings",
      screenshotAlt: "App settings",
      blocks: [
        {
          type: "p",
          text: "Open **Settings** (gear icon) from the letter list. From here you can reach:",
        },
        {
          type: "ul",
          items: [
            "**Senders** — manage sender profiles.",
            "**Templates** — manage templates.",
            "**Help** — opens the online help pages.",
            "**FAQ** — frequently asked questions.",
            "**Contact support** — email the support team.",
            "**Privacy policy** — opens the privacy policy in your browser.",
          ],
        },
      ],
    },
    {
      id: "pro-subscription",
      title: "Letter PRO subscription",
      pro: true,
      blocks: [
        {
          type: "p",
          text: "**Letter PRO** unlocks the advanced features. When you tap a PRO feature without a subscription, the upgrade screen appears. PRO unlocks:",
        },
        {
          type: "ul",
          items: [
            "**Sender** profiles — enter your sender info once and reuse it.",
            "**Contacts** — import addresses from your address book.",
            "**Templates** — reusable letters for any occasion.",
            "**Signatures** — add handwritten/personal signatures.",
            "**Layout** — full control over how letters look.",
            "Plus rich-text formatting, the AI assistant, and stationary.",
          ],
        },
        {
          type: "p",
          text: "The upgrade screen offers plans (weekly, monthly, yearly, or a one-time purchase) and typically a **free trial**, all shown in your local currency. Already subscribed on another device? Tap **Restore purchases**.",
        },
        {
          type: "note",
          text: "If you see *“Billing is currently not available”*, check your internet connection and make sure you're signed in to your app store account.",
        },
      ],
    },
    {
      id: "languages",
      title: "Languages",
      blocks: [
        {
          type: "p",
          text: "The app is available in **7 languages**: English, German, Spanish, French, Italian, Portuguese, and Dutch. It follows your device's system language automatically, including locale-aware date formatting.",
        },
      ],
    },
    {
      id: "phones-tablets",
      title: "Phones, tablets & computers",
      blocks: [
        { type: "p", text: "The layout adapts to the size of your screen:" },
        {
          type: "ul",
          items: [
            "**Phone** — one screen at a time. Tapping a letter opens its preview full-screen; editing and settings open as their own screens.",
            "**Tablet & computer** — on a tablet, or a computer such as a Mac or Chromebook, you get a two-pane view: your list of letters on the left and the preview on the right. Editing, settings, senders, templates, and the upgrade screen open as dialogs over the preview, so you never lose your place.",
          ],
        },
      ],
    },
    {
      id: "syncing",
      title: "Syncing across devices (iPhone & iPad)",
      blocks: [
        {
          type: "note",
          text: "This section applies to the **iPhone/iPad** version only.",
        },
        {
          type: "p",
          text: "On iPhone and iPad, your letters, senders, and templates **sync automatically over iCloud**. Sign in to the same iCloud account on each device and your content stays up to date everywhere — no manual export or backup needed.",
        },
        {
          type: "ul",
          items: [
            "Sync happens in the background; there's no button to press.",
            "Changes made on one device appear on your others a short while later.",
            "iCloud must be available and enabled on the device for syncing to work.",
          ],
        },
        {
          type: "p",
          text: "If you have trouble syncing, check that:",
        },
        {
          type: "steps",
          items: [
            "You are signed in with the same Apple ID on both devices.",
            "iCloud is enabled on both devices.",
            "The Letters app is allowed to store data in iCloud on both devices (see also [Apple's iCloud support guide](https://support.apple.com/en-us/118225)).",
            "The latest iOS version is installed on both devices.",
            "The latest version of the Letters app is installed on both devices.",
          ],
        },
      ],
    },
  ],
};

export default en;
