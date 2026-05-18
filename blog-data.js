/* Shared article data — single source of truth for the Learning Center.
   Used by index.html (homepage teaser), blog.html (full index), and every
   blog/<slug>.html post page (for the "Related posts" rail).
   Order = newest first.
   `image` is an Unsplash CDN URL; rendered with the category color tint
   blended over it (multiply) so the brand color system stays intact. */
window.BLOG_ARTICLES = [
  {slug:'deterministic-ai-future',                cat:'research',  catLabel:'RESEARCH',     color:'var(--red)',         title:'Why Deterministic AI Is the Future of Restaurant Intelligence',         date:'Apr 2026', read:'2 min', image:'https://images.unsplash.com/photo-1644088379091-d574269d422f?fm=jpg&q=70&w=1600&auto=format&fit=crop'},
  {slug:'hallucination-risk-restaurant-ai',       cat:'ai',        catLabel:'RESTAURANT AI',color:'var(--blue)',        title:'Hallucination Risk in Restaurant AI: What Operators Need to Know',      date:'Apr 2026', read:'2 min', image:'https://images.unsplash.com/photo-1765445774062-05c27b1bfa7d?fm=jpg&q=70&w=1600&auto=format&fit=crop'},
  {slug:'pizza-chain-recovered-4200-per-location',cat:'store',     catLabel:'STORE-LEVEL',  color:'var(--cert-green)',  title:'How a 12-Unit Pizza Chain Recovered $4,200/Month Per Location',         date:'Mar 2026', read:'2 min', image:'https://images.unsplash.com/photo-1767562678474-c92cec881bc3?fm=jpg&q=70&w=1600&auto=format&fit=crop'},
  {slug:'regional-benchmarking-certified-data',   cat:'corporate', catLabel:'ABOVE-STORE',  color:'var(--amber)',       title:"Regional Benchmarking with Certified Data: A GM's Perspective",         date:'Mar 2026', read:'2 min', image:'https://images.unsplash.com/photo-1754299096083-e68d46d44927?fm=jpg&q=70&w=1600&auto=format&fit=crop'},
  {slug:'understanding-trust-scores',             cat:'guide',     catLabel:'GUIDE',        color:'var(--charcoal)',    title:'Understanding Trust Scores: A Technical Deep Dive for Operators',       date:'Mar 2026', read:'2 min', image:'https://images.unsplash.com/photo-1751448555253-f39c06e29d82?fm=jpg&q=70&w=1600&auto=format&fit=crop'},
  {slug:'night-shift-labor-leakage',              cat:'store',     catLabel:'STORE-LEVEL',  color:'var(--cert-green)',  title:"Night Shift Labor Leakage: One Manager's Discovery Through Sentry",     date:'Mar 2026', read:'1 min', image:'https://images.unsplash.com/photo-1721637713270-5470ea1d6389?fm=jpg&q=70&w=1600&auto=format&fit=crop'},
  {slug:'legally-defensible-ai-caar',             cat:'research',  catLabel:'RESEARCH',     color:'var(--red)',         title:'What Is CAAR? The Foundation of Legally Defensible Intelligence',       date:'Feb 2026', read:'2 min', image:'https://images.unsplash.com/photo-1767972159871-b9f5d320be2b?fm=jpg&q=70&w=1600&auto=format&fit=crop'},
  {slug:'multi-unit-pl-certification',            cat:'corporate', catLabel:'ABOVE-STORE',  color:'var(--amber)',       title:'Multi-Unit P&L Certification: How Corporate Teams Use MGE',             date:'Feb 2026', read:'1 min', image:'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?fm=jpg&q=70&w=1600&auto=format&fit=crop'},
];
