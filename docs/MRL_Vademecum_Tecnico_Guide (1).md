# Milan Red Line — Vademecum tecnico per modificare le guide

## Scopo

Questo documento raccoglie le informazioni tecniche emerse durante la migrazione della guida **Where to Stay Near the M1 Red Line** al Reading Experience Framework.

Serve come riferimento operativo per:

- modificare una guida MDX esistente;
- migrare una guida legacy;
- aggiungere componenti editoriali;
- evitare errori di runtime;
- mantenere separati contenuto e logica;
- capire i rapporti tra i principali file del sistema guide.

---

# 1. Principio architetturale

I file MDX devono contenere soltanto contenuti destinati al lettore e dati editoriali semplici.

Nei file MDX possono comparire:

- front matter;
- testo;
- heading;
- liste;
- link;
- FAQ;
- marker strutturali `rx:*`;
- componenti editoriali già registrati;
- dati semplici passati ai componenti.

Non devono contenere:

- logica applicativa;
- layout complessi;
- HTML diretto evitabile;
- gestione responsive;
- mapping di icone;
- comportamento;
- duplicazioni di componenti già inseriti dal layout.

> La guida descrive cosa mostrare. I componenti React decidono come mostrarlo.

---

# 2. Alberatura principale

```text
app/
└── guides/
    └── [slug]/
        └── page.tsx

components/
└── guides/
    ├── ApartmentContextCard.tsx
    ├── EditorialLeadConnector.tsx
    ├── GoodToKnow.tsx
    ├── GuideContentRenderer.tsx
    ├── GuideDestinationTable.tsx
    ├── GuideFaq.tsx
    ├── GuideHighlightCard.tsx
    ├── GuidePanoramicImage.tsx
    ├── GuideSectionHeading.tsx
    ├── GuideTableOfContents.tsx
    ├── PilotGuideLayout.tsx
    └── RelatedGuidesBox.tsx

content/
└── guides/
    └── [slug].mdx

public/
└── images/
    └── guides/
        └── [slug]/
            └── hero.webp
```

---

# 3. Flusso di rendering

```text
[slug].mdx
    ↓
app/guides/[slug]/page.tsx
    ↓
PilotGuideLayout.tsx
    ↓
parseReadingExperienceSections()
    ↓
GuideContentRenderer.tsx
    ↓
MDXRemote
    ↓
componenti React registrati
```

## Ruolo dei file

### `app/guides/[slug]/page.tsx`

Punto di ingresso della pagina dinamica. In genere:

- individua la guida tramite slug;
- legge contenuto e front matter;
- costruisce metadata;
- decide quale layout usare;
- passa il sorgente MDX al layout.

### `PilotGuideLayout.tsx`

Layout centrale del Reading Experience Framework. Responsabilità:

- leggere i marker `rx:*`;
- verificare che tutte le sezioni obbligatorie esistano;
- estrarre titolo e contenuto di ogni sezione;
- costruire il Table of Contents;
- renderizzare le sezioni nell’ordine previsto;
- applicare icone standard agli heading;
- inserire automaticamente componenti condivisi;
- trasformare le FAQ Markdown in accordion.

### `GuideContentRenderer.tsx`

Renderer MDX condiviso. Responsabilità:

- associare Markdown e componenti React;
- definire lo stile di paragrafi, liste, link e tabelle;
- rendere disponibili i componenti editoriali ai file MDX;
- applicare automaticamente l’Editorial Lead Connector al primo vero paragrafo;
- ignorare heading, liste, blockquote, componenti, marker e front matter quando cerca il primo paragrafo.

---

# 4. Front matter delle guide Reading Experience

```yaml
---
title: "Guide title"
description: "Unique and useful description."
readingTime: "6 min read"
publishedAt: "2026-07-17"
author: "Milan Red Line"
layout: "reading-experience-pilot"
heroImage: "/images/guides/[slug]/hero.webp"
heroImageAlt: "Clear description of the hero image"
---
```

Regole:

- `title` unico;
- `description` sintetica e coerente;
- `layout: "reading-experience-pilot"` per usare il layout attuale;
- `heroImage` deve puntare a un file reale;
- `heroImageAlt` descrittivo, senza keyword stuffing;
- `publishedAt` in formato `YYYY-MM-DD`;
- `readingTime` mostrato pari a circa **2/3 del tempo reale stimato**.

Esempio: 9 minuti reali → `6 min read`.

---

# 5. Marker strutturali obbligatori

`PilotGuideLayout.tsx` richiede esattamente:

```mdx
{/* rx:introduction */}
{/* rx:audience */}
{/* rx:key-points */}
{/* rx:area-selection */}
{/* rx:transport */}
{/* rx:local-area */}
{/* rx:day-trips */}
{/* rx:local-tip */}
{/* rx:faq */}
{/* rx:planning */}
{/* rx:good-to-know */}
```

Non cambiarne i nomi.

Varianti non valide:

```mdx
{/* rx:destinations */}
{/* rx:beyond-milan */}
{/* rx:local-advice */}
```

Errori tipici:

```text
Required Reading Experience section marker not found: "local-area"
Duplicate Reading Experience section marker: "transport"
No Reading Experience section markers found.
```

---

# 6. Ordine effettivo delle sezioni

L’ordine visualizzato è definito da `PilotGuideLayout.tsx`:

1. Introduction
2. Table of Contents
3. Hero image
4. Audience
5. Key Points
6. Area Selection
7. Transport
8. Local Area
9. Apartment Context
10. Day Trips
11. Local Tip
12. FAQ
13. Planning
14. Good to Know
15. Related Guides

Spostare i marker nel file non cambia necessariamente l’ordine di rendering.

---

# 7. Parsing delle sezioni

Ogni sezione può iniziare con un heading `##`:

```mdx
{/* rx:transport */}

## What can you reach on the M1?

Section content.
```

`parseContentSection()`:

- legge il primo `##`;
- usa il testo come titolo;
- genera automaticamente l’id;
- rimuove il titolo dal corpo della sezione.

Esempio:

```text
What can you reach on the M1?
→ what-can-you-reach-on-the-m1
```

---

# 8. FAQ

Usare heading di livello 3:

```mdx
{/* rx:faq */}

## Frequently asked questions

### Is the M1 useful for tourists?

Yes. It connects several important destinations.

### Can I visit Milan without a car?

Yes. Public transport is sufficient for most visitors.
```

Il parser:

- usa ogni `###` come domanda;
- considera il contenuto successivo come risposta;
- trasforma gli elementi in `GuideFaqItem`.

Errore se non trova domande:

```text
No FAQ items found in the Reading Experience guide.
```

---

# 9. Good to Know

Formato ammesso:

```mdx
{/* rx:good-to-know */}

---

### Good to know

Text...
```

`cleanGoodToKnowSection()` rimuove automaticamente separatore e titolo.

---

# 10. Editorial Lead Connector

Non va inserito manualmente nell’MDX.

`PilotGuideLayout` passa `showEditorialLeadConnector` al renderer per l’introduzione.

Il renderer individua il primo vero paragrafo ignorando:

- heading;
- liste;
- liste numerate;
- blockquote;
- componenti JSX;
- marker;
- front matter;
- code block.

---

# 11. Componenti inseriti automaticamente dal layout

## `ApartmentContextCard`

Inserito dopo `local-area`:

```tsx
<ApartmentContextCard
  slugs={["arco", "gramsci"]}
  title="A practical base in Sesto San Giovanni"
>
  Both Milan Red Line apartments...
</ApartmentContextCard>
```

Non duplicarlo nell’MDX.

## `RelatedGuidesBox`

Inserito alla fine della guida:

```tsx
<RelatedGuidesBox
  slugs={[
    "where-to-stay-in-milan-without-a-car",
    "where-to-stay-near-the-m1-red-line",
    "is-sesto-san-giovanni-a-good-place-to-stay",
  ]}
/>
```

Attenzione: oggi la lista è condivisa e può includere la guida corrente. Va resa configurabile in uno sviluppo successivo.

---

# 12. Componenti disponibili nell’MDX

Registrati in `GuideContentRenderer.tsx`:

```text
ApartmentContextCard
EditorialLeadConnector
GoodToKnow
GuideDestinationRow
GuideDestinationTable
GuideFaq
GuideFaqItem
GuideHighlightCard
GuidePanoramicImage
GuideSectionHeading
GuideTableOfContents
RelatedGuidesBox
```

Usare direttamente solo i componenti che aggiungono contenuto specifico e non sono già gestiti dal layout.

---

# 13. GuideHighlightCard

```mdx
<GuideHighlightCard
  icon="train"
  title="Why the M1 matters"
>
A direct metro journey is often simpler than a route requiring several changes.
</GuideHighlightCard>
```

Alias supportati:

```text
briefcase
building
calendar
clock
help
info
lightbulb
map
train
users
```

Mapping Lucide:

```text
briefcase → Briefcase
building  → Building2
calendar  → CalendarDays
clock     → Clock3
help      → CircleHelp
info      → Info
lightbulb → Lightbulb
map       → MapPinned
train     → Train
users     → Users
```

Non usare:

```text
map-pin
building-2
calendar-days
circle-help
```

Errore tipico:

```text
Element type is invalid...
Check the render method of GuideHighlightCard.
```

---

# 14. GuideSectionHeading

Usa gli stessi alias del `GuideHighlightCard`.

Il layout assegna automaticamente:

```text
audience → users
transport → train
local-tip → lightbulb
faq → help
planning → calendar
```

Refactoring approvato dopo il cluster Rho Fiera:

- creare `guide-icons.ts`;
- centralizzare mappa e tipo;
- importare la stessa sorgente in `GuideHighlightCard.tsx` e `GuideSectionHeading.tsx`.

---

# 15. GuideDestinationTable

Introdotto per evitare tabelle Markdown poco leggibili e mantenere layout e responsive fuori dall’MDX.

File:

```text
components/guides/GuideDestinationTable.tsx
```

Esporta:

```tsx
export default function GuideDestinationTable(...)
export function GuideDestinationRow(...)
```

Uso corretto:

```mdx
<GuideDestinationTable>
  <GuideDestinationRow destination="Duomo" direct />
  <GuideDestinationRow destination="San Babila" direct />
  <GuideDestinationRow destination="Cadorna" direct />
  <GuideDestinationRow destination="Lotto" direct />
  <GuideDestinationRow destination="Rho Fiera Milano" direct />
</GuideDestinationTable>
```

Non usare array di oggetti complessi:

```mdx
<GuideDestinationTable
  rows={[
    { destination: "Duomo", direct: true },
  ]}
/>
```

Questa forma ha causato:

```text
Cannot read properties of undefined (reading 'map')
```

---

# 16. Registrazione di un nuovo componente MDX

Ogni componente usato nell’MDX deve essere registrato in `GuideContentRenderer.tsx`.

Esempio:

```tsx
import GuideDestinationTable, {
  GuideDestinationRow,
} from "@/components/guides/GuideDestinationTable";
```

Poi:

```tsx
const mdxComponents = {
  ...
  GuideDestinationRow,
  GuideDestinationTable,
  ...
};
```

Se manca la registrazione, MDX non sa renderizzare il componente.

---

# 17. Tabelle Markdown standard

Il renderer definisce stili per:

```text
table
thead
tbody
tr
th
td
```

Tuttavia, per tabelle editoriali importanti è preferibile:

- creare un componente dedicato;
- passare solo dati semplici;
- centralizzare grafica, responsive e accessibilità.

Non inserire HTML tabellare manuale nell’MDX.

---

# 18. Internal linking

Regole:

- 3–5 link contestuali indicativi;
- anchor text naturale;
- nessun link inserito solo per SEO;
- evitare ripetizioni;
- link agli appartamenti solo quando naturale;
- una sola CTA finale principale;
- Related Guides complementari.

Per la guida M1 sono stati inseriti link verso:

- Where to Stay in Milan Without a Car;
- Where to Stay Near Rho Fiera Milano;
- Is Sesto San Giovanni a Good Place to Stay;
- Where to Stay Near Monza Circuit;
- Best Area to Stay in Milan for Business Travellers;
- Apartment Arco;
- Apartment Gramsci.

---

# 19. Regola “Touch Once”

Quando una guida viene aperta:

- va migrata al layout corrente;
- va semplificata;
- vanno aggiunti tutti gli internal link;
- va completato il front matter;
- va verificata la hero;
- va aggiornato il reading time;
- vanno inseriti i componenti utili;
- va controllato il disclaimer;
- va lasciata in stato Current.

---

# 20. Regole editoriali

Le guide devono essere:

- concise;
- prive di ridondanze;
- leggibili da mobile;
- utili prima che “SEO-oriented”;
- gestibili in massimo due messaggi di chat.

> Dire la stessa cosa con meno parole.

---

# 21. Regola di consegna dei file

Tutti i file di codice devono essere consegnati in blocchi di codice puro.

Non usare documenti formattati o rich text perché possono:

- nascondere il front matter;
- alterare commenti JSX;
- troncare marker;
- modificare sintassi;
- rendere il copia-incolla non affidabile.

---

# 22. Workflow consigliato

## Passo 1 — Leggere il file reale

Controllare:

- front matter;
- marker;
- componenti;
- internal link;
- layout;
- hero;
- reading time.

## Passo 2 — Verificare il contratto del framework

Controllare:

- `PilotGuideLayout.tsx`;
- `GuideContentRenderer.tsx`;
- componente specifico;
- props e alias ammessi.

## Passo 3 — Aggiornare il contenuto

- sintetizzare;
- eliminare ripetizioni;
- mantenere tono onesto;
- completare il Knowledge Network;
- non inserire logica.

## Passo 4 — Registrare eventuali componenti

1. creare il componente in `components/guides/`;
2. esportarlo;
3. importarlo in `GuideContentRenderer.tsx`;
4. aggiungerlo a `mdxComponents`;
5. usare props semplici.

## Passo 5 — Verificare

```text
npm run lint
npm run build
```

Poi controllare:

- desktop;
- tablet;
- mobile;
- hero;
- TOC;
- heading;
- card;
- FAQ;
- tabella;
- overflow;
- link;
- Related Guides;
- Lead Connector.

---

# 23. Errori già incontrati

## Marker non riconosciuto

```text
Required Reading Experience section marker not found
```

Soluzione: usare esattamente i marker previsti.

## Icona undefined

```text
Element type is invalid...
```

Soluzione: usare solo alias presenti nella mappa.

## Array MDX non ricevuto

```text
Cannot read properties of undefined (reading 'map')
```

Soluzione: evitare array di oggetti complessi e usare children.

## Front matter o marker alterati

Causa: file inviato come documento formattato.

Soluzione: usare sempre blocchi di codice puro.

---

# 24. Debito tecnico e attività successive

## Centralizzazione icone

Creare:

```text
components/guides/guide-icons.ts
```

Con:

- `guideIcons`;
- `GuideIcon`.

## Related Guides configurabile

La lista non dovrebbe essere uguale per tutte le guide.

Possibili soluzioni:

- prop dal livello pagina;
- configurazione per slug;
- metadata strutturati;
- front matter, se compatibile con il multilingua.

Vincoli:

- nessuna logica basata sul testo;
- nessuna ricerca di stringhe;
- nessuna eccezione hardcoded sparsa;
- un solo punto di manutenzione.

## Layout definitivo

Valutare in futuro se rinominare:

```text
reading-experience-pilot
PilotGuideLayout
```

Il framework non è più realmente un pilot, ma il cambio va fatto in uno sprint dedicato.

---

# 25. Checklist rapida

```text
[ ] Front matter completo
[ ] Reading time secondo regola 2/3
[ ] Hero presente
[ ] Hero alt corretto
[ ] Layout Reading Experience
[ ] Tutti gli 11 marker
[ ] Nessun marker rinominato
[ ] Lead Connector automatico
[ ] GuideHighlightCard con icone valide
[ ] FAQ parseabile
[ ] Good to Know
[ ] Internal link completi
[ ] Link appartamenti naturali
[ ] Una sola CTA
[ ] Nessun HTML diretto evitabile
[ ] Nessun componente duplicato dal layout
[ ] Responsive verificato
[ ] Nessun link rotto
[ ] Lint e build completati
```

---

# Stato attuale della guida M1

La guida `where-to-stay-near-the-m1-red-line.mdx` è stata:

- migrata al Reading Experience Framework;
- sintetizzata;
- aggiornata con link verso Rho Fiera;
- aggiornata con `GuideHighlightCard`;
- aggiornata con `GuideDestinationTable`;
- resa compatibile con il parser esistente;
- portata a `readingTime: "6 min read"`.

Il nuovo componente `GuideDestinationTable` è ora parte del sistema editoriale e può essere riutilizzato in altre guide.
