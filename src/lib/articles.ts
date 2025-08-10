export type Article = {
    slug: string;
    title: string;
    description: string;
    date: string;
    content: string;
};

export const articles: Article[] = [
    {
        slug: 'effizient-durch-tailwind',
        title: 'Effizient durch Tailwind CSS – Warum Utility-First das Frontend verändert',
        description: 'Wie ich Tailwind CSS in Projekten einsetze und warum es mir hilft, Design und Code effizient zu vereinen.',
        date: '06. August 2025',
        content: `
      <p>Tailwind CSS hat mein Frontend-Workflow grundlegend verändert. Statt hunderten eigenen Klassen oder komplizierten Komponentenbibliotheken nutze ich kleine, präzise Utility-Klassen – direkt im Markup.</p>
      <p>Das Ergebnis? Sauberer Code, schnellere Umsetzung und weniger Kontextwechsel. Besonders im Zusammenspiel mit Next.js lässt sich Tailwind hervorragend skalieren – sei es für einfache Landingpages oder komplexe Webanwendungen.</p>
      <p>Natürlich braucht es etwas Eingewöhnung, aber der initiale Aufwand zahlt sich bereits nach wenigen Tagen aus.</p>
    `,
    },
    {
        slug: 'vom-konzept-zum-launch',
        title: 'Vom Konzept zum Launch – Wie ein Webprojekt in 4 Phasen entsteht',
        description: 'Planung, Umsetzung, Optimierung und Launch: ein typischer Projektablauf in meiner Zusammenarbeit mit Kunden.',
        date: '18. Juli 2025',
        content: `
      <p>Hinter jedem erfolgreichen Webprojekt steht ein klarer Ablauf. Ich teile Projekte gern in vier Phasen:</p>
      <br> 
      <ol>
        <li><strong>Konzept & Struktur:</strong> Inhalte, Ziele und Nutzerführung klären</li>
        <li><strong>Design & Prototyping:</strong> Wireframes & visuelle Sprache entwickeln</li>
        <li><strong>Entwicklung:</strong> Umsetzung mit modernem Stack (z. B. Next.js, Tailwind, CMS)</li>
        <li><strong>Launch & Optimierung:</strong> Deployment, SEO-Feinschliff & Analyse</li>
      </ol>
      <br> 
      <p>Durch diesen strukturierten Ablauf bleiben Aufwand, Zeit und Budget transparent – und der Kunde bekommt ein Ergebnis, das passt.</p>
    `,
    },
    {
        slug: 'was-macht-eine-gute-website-aus',
        title: 'Was macht eine gute Website wirklich aus?',
        description: 'Design allein reicht nicht. Eine gute Website überzeugt durch Struktur, Performance und echte Relevanz.',
        date: '05. Juni 2025',
        content: `
      <p>Viele denken bei "guter Website" zuerst an schickes Design. Aber was bringt das schönste Layout, wenn die Inhalte nicht überzeugen oder die Ladezeit ewig dauert?</p>
      <p>Eine gute Website ist schnell, barrierefrei, responsiv, inhaltlich klar – und auf die Zielgruppe abgestimmt. Dazu gehört ebenso Suchmaschinenoptimierung (SEO) wie strategische Navigation.</p>
      <p>Gutes Webdesign beginnt nicht in Figma – sondern mit einer klaren Idee und echtem Mehrwert für die Besucher.</p>
    `,
    },
];