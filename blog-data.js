/* Shared article data — single source of truth for the Learning Center.
   Used by index.html (homepage teaser), blog.html (full index), and every
   blog/<slug>.html post page (for the "Related posts" rail).
   Order = newest first.
   `image` is a local path under /images/blog/ (downloaded from Unsplash);
   rendered with a translucent category-color overlay so the brand hue
   tints the lower portion while the photo reads clearly above. */
window.BLOG_ARTICLES = [
  {slug:'deterministic-ai-future',                cat:'research',  catLabel:'RESEARCH',     color:'var(--red)',         title:'Why Deterministic AI Is the Future of Restaurant Intelligence',         date:'Apr 2026', read:'2 min', image:'images/blog/deterministic-ai-future.jpg'},
  {slug:'hallucination-risk-restaurant-ai',       cat:'ai',        catLabel:'RESTAURANT AI',color:'var(--blue)',        title:'Hallucination Risk in Restaurant AI: What Operators Need to Know',      date:'Apr 2026', read:'2 min', image:'images/blog/hallucination-risk-restaurant-ai.jpg'},
  {slug:'pizza-chain-recovered-4200-per-location',cat:'store',     catLabel:'STORE-LEVEL',  color:'var(--cert-green)',  title:'How a 12-Unit Pizza Chain Recovered $4,200/Month Per Location',         date:'Mar 2026', read:'2 min', image:'images/blog/pizza-chain-recovered-4200-per-location.jpg'},
  {slug:'regional-benchmarking-certified-data',   cat:'corporate', catLabel:'ABOVE-STORE',  color:'var(--amber)',       title:"Regional Benchmarking with Certified Data: A GM's Perspective",         date:'Mar 2026', read:'2 min', image:'images/blog/regional-benchmarking-certified-data.jpg'},
  {slug:'understanding-trust-scores',             cat:'guide',     catLabel:'GUIDE',        color:'var(--charcoal)',    title:'Understanding Trust Scores: A Technical Deep Dive for Operators',       date:'Mar 2026', read:'2 min', image:'images/blog/understanding-trust-scores.jpg'},
  {slug:'night-shift-labor-leakage',              cat:'store',     catLabel:'STORE-LEVEL',  color:'var(--cert-green)',  title:"Night Shift Labor Leakage: One Manager's Discovery Through Sentry",     date:'Mar 2026', read:'1 min', image:'images/blog/night-shift-labor-leakage.jpg'},
  {slug:'legally-defensible-ai-caar',             cat:'research',  catLabel:'RESEARCH',     color:'var(--red)',         title:'What Is CAAR? The Foundation of Legally Defensible Intelligence',       date:'Feb 2026', read:'2 min', image:'images/blog/legally-defensible-ai-caar.jpg'},
  {slug:'multi-unit-pl-certification',            cat:'corporate', catLabel:'ABOVE-STORE',  color:'var(--amber)',       title:'Multi-Unit P&L Certification: How Corporate Teams Use MGE',             date:'Feb 2026', read:'1 min', image:'images/blog/multi-unit-pl-certification.jpg'},
];
