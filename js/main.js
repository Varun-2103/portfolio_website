(() => {
'use strict';

/* =========================================================
   DATA — every fact below comes from the résumé.
   ========================================================= */
const ITEMS = [
  { id:'bosch', type:'role', kind:'Experience', when:'Jul 2024 – Dec 2024', title:'ML Engineer Intern', org:'BOSCH', place:'', logo:'B',
    bullets:[
      'Designed and created an AI RAG chatbot for BOSCH employees based on a LLaMA model, supporting text-to-text, text-to-URL and text-to-video conversions.',
      'Contributed to the design, development and testing of chatbot functionality, and implemented feedback from BOSCH clients.',
      'Led a team of four on the NLP and web-scraping part of the project, coordinating communication and delegating tasks.'
    ],
    skills:['LLaMA','RAG','LLMs','NLP','Web Scraping','Team Leadership'], project:'rag' },

  { id:'neu', type:'education', kind:'Education', when:'Sept 2025 – Present', title:"Master’s in Computer Science", org:'Northeastern University · Khoury College of Computer Sciences', place:'Boston, MA', logo:'NEU',
    blurb:'Graduate student at Khoury College of Computer Sciences.', gpa:'CGPA: 3.9 / 4.0',
    courses:['Machine Learning','Web Development','Essentials of Data Science','Programming Design Paradigm','Database Management'], skills:[] },
  { id:'vit', type:'education', kind:'Education', when:'Jun 2021 – May 2025', title:'B.Tech in Computer Science', org:'Vellore Institute of Technology (VIT)', place:'Chennai, India', logo:'VIT',
    blurb:'Bachelor of Technology in Computer Science.', gpa:'CGPA: 8.34 / 10.0',
    courses:['Artificial Intelligence','Digital Image Processing','Data Structures & Algorithms','Foundations of Blockchain Technology','Cryptography & Network Security'], skills:[] },

  { id:'llm', type:'project', kind:'Project', cats:['ml'], when:'Jul 2024 – Dec 2024', title:'Energy-Efficient Transfer Learning for LLMs',
    org:'Adaptive fine-tuning with dynamic pruning', thumb:'net', repo:'https://github.com/Varun-2103/Sparsegpt-Mod',
    tagline:'Adaptive fine-tuning and dynamic pruning to cut the energy and compute cost of large language models.',
    problem:'Large language models have high energy consumption and computational overhead.',
    approach:['Proposed and implemented adaptive fine-tuning and dynamic pruning strategies.','Benchmarked performance using OPL on terabyte-scale datasets: Wikitext2, PTB and C4.','Tested model robustness through perplexity scores.'],
    outcome:'Kept high model accuracy and reached viable perplexity even at 50% sparsity.',
    skills:['LLMs','Pruning','Fine-tuning','Benchmarking'] },
  { id:'dw', type:'project', kind:'Project', cats:['data'], when:'Sept 2025 – Dec 2025', title:'Streaming Analytics Data Warehouse',
    org:'Cloud-hosted MySQL · R · SQLite', thumb:'star', repo:'https://github.com/Varun-2103/Streaming-Analytics-Data-Warehouse',
    tagline:'A year-partitioned star schema and an automated ETL pipeline for multi-year streaming data.',
    problem:'Multi-year streaming transaction data was handled through manual workflows and needed a structure built for analysis.',
    approach:['Designed a year-partitioned star schema in a cloud-hosted MySQL environment.','Built an automated ETL pipeline in R and SQLite with chunked processing to extract, clean and validate data.','Wrote automated analysis scripts and reports in R Markdown.'],
    outcome:'Over 98,000 streaming transactions processed automatically, replacing manual workflows, plus stakeholder-ready insights and visualizations.',
    skills:['MySQL','SQL','SQLite','R','ETL Pipelines','R Markdown','Data Visualization','Relational Databases','Star Schema'] },
  { id:'sched', type:'project', kind:'Project', cats:['software'], when:'Sept 2025 – Dec 2025', title:'Event Scheduler',
    org:'Java desktop app · MVC architecture', thumb:'cal', repo:'https://github.com/Varun-2103/Calendar-Application-Google-and-iCal-Inspired-',
    tagline:'A Java desktop calendar with Google Calendar / iCal-style features, built on strict MVC.',
    problem:'Build a full-featured desktop calendar with Google Calendar / iCal-style features, keeping concerns cleanly separated and modular.',
    approach:['Applied the Model–View–Controller pattern for strict separation of concerns.','Built an interactive Java Swing GUI for event management, error detection and date navigation.','Wrote JUnit test suites for business logic and complex edge cases.'],
    outcome:'A modular, full-featured calendar app with 90%+ code coverage.',
    skills:['Java','Java Swing','JUnit','MVC Architecture'] },
  { id:'rag', type:'project', kind:'Project', cats:['ml'], when:'Jul 2024 – Dec 2024', title:'RAG ChatBot for BOSCH',
    org:'BOSCH · ML Engineer Intern', thumb:'chat', role:'bosch',
    tagline:'An internal LLaMA-based retrieval-augmented chatbot that answers with text, links or video.',
    problem:'BOSCH employees needed an AI assistant that could answer with text, links or video.',
    approach:['Designed a RAG chatbot on a LLaMA model supporting text-to-text, text-to-URL and text-to-video.','Led a team of four on the NLP and web-scraping part of the project.','Designed, developed and tested chatbot features and acted on client feedback.'],
    outcome:'A working multi-format chatbot for BOSCH employees, refined with feedback from BOSCH clients.',
    skills:['LLaMA','RAG','LLMs','NLP','Web Scraping','Team Leadership'] },

  { id:'paper1', type:'paper', kind:'Research paper', when:'Under review', title:'Enhanced Sensitivity-Aware Mixed Sparsity Pruning for Energy-Efficient Large Language Models',
    org:'Sustainable Computing: Informatics and Systems', thumb:'bars',
    tagline:'Sensitivity-aware, mixed-sparsity pruning to make large language models more energy efficient.',
    problem:'Large language models are expensive to run. This work targets their energy efficiency.',
    approach:['Sensitivity-aware, mixed-sparsity pruning of LLMs.'],
    outcome:'Submitted to Sustainable Computing: Informatics and Systems.',
    skills:['LLMs','Pruning'] },
  { id:'paper2', type:'paper', kind:'Research paper', when:'Under review', title:'Comparative Analysis of GloVe CNN, LSTM and BERT Models for Hate Speech Detection',
    org:'Scientific Reports', thumb:'models', repo:'https://github.com/Varun-2103/Hate-Speech-Detection-CNN-GloVe',
    tagline:'Comparing GloVe-CNN, LSTM and BERT models on hate speech detection.',
    problem:'Detecting hate speech in text, and working out which model family suits the task best.',
    approach:['Compared GloVe-embedding CNN, LSTM and BERT models on hate speech detection.'],
    outcome:'Submitted to Scientific Reports.',
    skills:['NLP','BERT','LSTM','CNN','GloVe'] },

  { id:'certs', type:'cert', kind:'Certification', when:'Aug 2024', title:'Google Cloud Digital Leader & AWS Cloud Practitioner', org:'Google Cloud · AWS', skills:['Google Cloud','AWS'] },
  { id:'kart', type:'cert', kind:'Achievement', when:'2023', title:'JK Tyre Indian Karting Race', org:'Organized by ISIEINDIA', skills:[] },
];
const BY_ID = Object.fromEntries(ITEMS.map(i => [i.id, i]));
const PROJECTS = ITEMS.filter(i => i.type === 'project');
const PAPERS = ITEMS.filter(i => i.type === 'paper');

const SKILLS = {
  'Languages':        ['Python','R','SQL','Java','C','C++','Matlab'],
  'ML & AI':          ['LLMs','LLaMA','RAG','NLP','Pruning','Fine-tuning','Benchmarking','BERT','LSTM','CNN','GloVe'],
  'Data':             ['MySQL','SQLite','Relational Databases','ETL Pipelines','Star Schema','Data Visualization','R Markdown'],
  'Web':              ['Selenium WebDriver','BeautifulSoup','Web Scraping','HTML5','CSS3','PHP','XML'],
  'Tools & practice': ['Git/GitHub','JUnit','Java Swing','Spring Boot','Aiven','MVC Architecture','Team Leadership'],
  'Cloud':            ['Google Cloud','AWS'],
};
const ABBR = { 'Python':'Py','SQL':'SQL','Java':'Jv','C++':'C++','Matlab':'Ml','LLMs':'LLM','LLaMA':'Lm','RAG':'RAG','NLP':'NLP','Pruning':'Pr','Fine-tuning':'Ft','Benchmarking':'Bm','BERT':'Bt','LSTM':'Ls','CNN':'Cn','GloVe':'Gv',
  'MySQL':'My','SQLite':'Sl','Relational Databases':'Rd','ETL Pipelines':'ETL','Star Schema':'★','Data Visualization':'Dv','R Markdown':'Rmd','Selenium WebDriver':'Se','BeautifulSoup':'Bs','Web Scraping':'Ws',
  'HTML5':'Ht','CSS3':'Cs','PHP':'Php','XML':'Xml','Git/GitHub':'Git','JUnit':'Ju','Java Swing':'Sw','Spring Boot':'Sb','Aiven':'Ai','MVC Architecture':'MVC','Team Leadership':'Tl','Google Cloud':'GC','AWS':'AWS' };
const SKILL_CAT = {}; Object.entries(SKILLS).forEach(([c, arr]) => arr.forEach(s => SKILL_CAT[s] = c));
const usedIn = s => ITEMS.filter(i => (i.skills || []).includes(s));

const STATS = [
  { n:98000, suffix:'+', label:'streaming transactions run through an automated ETL pipeline', src:'Data warehouse', go:'dw' },
  { n:90, suffix:'%+', label:'JUnit code coverage on an MVC desktop calendar', src:'Event Scheduler', go:'sched' },
  { n:50, suffix:'%', label:'LLM sparsity with perplexity still viable', src:'Energy-efficient LLMs', go:'llm' },
  { n:3.9, dec:1, suffix:'/4', label:'Graduate CGPA at Northeastern (Khoury)', src:'Education', go:'neu' },
];

const ANSWERS = [
  { k:['gpa','cgpa','grade','grades','score','marks'], a:'3.9 / 4.0 CGPA at Northeastern (MS CS, ongoing) · 8.34 / 10 at VIT (B.Tech CS, 2025).' },
  { k:['email','contact','reach','hire','mail','phone'], a:'Email saivarunmm@gmail.com, or open the Contact section for the résumé, GitHub and LinkedIn.' },
  { k:['location','located','based','boston','city','relocate'], a:'Boston, MA. I’m studying at Northeastern University.' },
  { k:['education','degree','study','school','university','masters','master','college','bachelor'], a:"Master’s in CS at Northeastern (Sept 2025 – present) · B.Tech in CS at VIT Chennai (Jun 2021 – May 2025)." },
  { k:['work','experience','job','intern','internship','bosch','employer'], a:'ML Engineer Intern at BOSCH (Jul – Dec 2024). Built an LLaMA-based RAG chatbot and led a team of four on NLP and web scraping.' },
  { k:['research','paper','papers','publication','publications','pruning','sparsity'], a:'Two papers submitted: mixed-sparsity pruning for energy-efficient LLMs (Sustainable Computing) and a CNN / LSTM / BERT comparison for hate speech detection (Scientific Reports).' },
  { k:['cert','certs','certification','certifications','certified','aws','gcp'], a:'Google Cloud Digital Leader and AWS Cloud Practitioner, both earned Aug 2024.' },
  { k:['languages','language','stack','skills','tech','python','programming'], a:'Languages: Python, R, SQL, Java, C, C++, Matlab. The Tech stack section shows where each one appears.' },
];

/* =========================================================
   Utilities
   ========================================================= */
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ph  = s => esc(s).replace(/\[PERSONALIZE:([^\]]*)\]/g, '<span class="ph">[PERSONALIZE:$1]</span>');
const store = {
  get(k){ try { return localStorage.getItem(k); } catch (e) { return null; } },
  set(k, v){ try { localStorage.setItem(k, v); } catch (e) {} }
};
const motionMQ = matchMedia('(prefers-reduced-motion: reduce)');
let reduced = motionMQ.matches;
const onMQ = (mq, fn) => mq.addEventListener ? mq.addEventListener('change', fn) : mq.addListener(fn);
const root = document.documentElement;
const isMac = /Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent);
const scrollToEl = el => el && el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block:'start' });
const ARROW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const GH = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5z"/></svg>';
const codeLink = p => p.repo ? `<a class="code-btn" href="${p.repo}" target="_blank" rel="noopener" aria-label="View code for ${esc(p.title)} on GitHub">${GH} View code</a>` : '';
const CHEV = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>';

let toastTimer;
function toast(msg, ms = 2600){
  const t = $('#toast'); t.textContent = msg; t.classList.add('show');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), ms);
}
$('#year').textContent = new Date().getFullYear();
$$('.kbd').forEach(k => k.textContent = isMac ? '⌘ K' : 'Ctrl K');

/* typed brand: types letter by letter, holds, clears, repeats (static when reduced motion) */
(function typeBrand(){
  const el = $('#typed'), word = 'Sai Varun';
  let i = 0, timer;
  const step = () => {
    if (reduced) { el.textContent = word; return; }
    if (i < word.length) { el.textContent = word.slice(0, ++i); timer = setTimeout(step, 125); }
    else timer = setTimeout(() => { i = 0; el.textContent = ''; step(); }, 2000);
  };
  el.textContent = ''; addEventListener('load', step);
  onMQ(motionMQ, () => { clearTimeout(timer); i = 0; step(); });
})();

/* photo reveal: hover on desktop, tap on touch, Enter/Space on keyboard */
(function Photo(){
  const orb = $('#orb');
  const set = on => { orb.classList.toggle('show', on); orb.setAttribute('aria-pressed', String(on)); orb.setAttribute('aria-label', on ? 'Hide photo' : 'Show photo of Sai Varun'); };
  orb.addEventListener('pointerup', e => { if (e.pointerType !== 'mouse') set(!orb.classList.contains('show')); });
  orb.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); set(!orb.classList.contains('show')); } });
})();

/* mobile menu */
const burger = $('#burger'), menu = $('#mobile-menu');
const setMenu = open => { menu.hidden = !open; burger.setAttribute('aria-expanded', String(open)); burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
burger.addEventListener('click', () => setMenu(menu.hidden));
menu.addEventListener('click', e => { if (e.target.closest('a')) setMenu(false); });

/* =========================================================
   Theme
   ========================================================= */
const theme = () => root.getAttribute('data-theme') || 'light';
const SUN  = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>';
const MOON = '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>';
let net = null;
function paintToggle(){
  const t = theme();
  $('#theme-icon').innerHTML = t === 'dark' ? SUN : MOON;
  $('#theme-toggle').setAttribute('aria-label', t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}
function setTheme(t){ root.setAttribute('data-theme', t); store.set('svv-theme', t); paintToggle(); net && net.recolor(); }
$('#theme-toggle').addEventListener('click', () => setTheme(theme() === 'dark' ? 'light' : 'dark'));
paintToggle();

/* =========================================================
   Hero orb — a prunable toy network
   ========================================================= */
(function Network(){
  const canvas = $('#net'), ctx = canvas.getContext('2d');
  const LAYERS = [4, 6, 7, 6, 3];
  let W = 0, H = 0, C = {}, raf = 0, visible = true, last = 0, spawnT = 0;
  const mouse = { x:-1e4, y:-1e4 };
  let seed = 11; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const gauss = () => Math.sqrt(-2 * Math.log(rnd() || 1e-9)) * Math.cos(2 * Math.PI * rnd());
  const nodes = [], layers = LAYERS.map(() => []);
  LAYERS.forEach((n, li) => { for (let i = 0; i < n; i++) { const nd = { li, x:0, y:0, ox:0, oy:0, glow:0, out:[] }; nodes.push(nd); layers[li].push(nd); } });
  const edges = [];
  for (let li = 0; li < LAYERS.length - 1; li++) for (const a of layers[li]) for (const b of layers[li + 1]) {
    const e = { a, b, w: Math.abs(gauss()) + .05, alpha:1, target:1 }; edges.push(e); a.out.push(e);
  }
  const maxW = Math.max(...edges.map(e => e.w));
  let pulses = [];

  function recolor(){
    const cs = getComputedStyle(root);
    C = { ink:cs.getPropertyValue('--ink').trim(), a1:cs.getPropertyValue('--g1').trim(), a2:cs.getPropertyValue('--g2').trim(), card:cs.getPropertyValue('--card').trim(), line:cs.getPropertyValue('--line2').trim() };
    if (reduced || !raf) draw();
  }
  function layout(){
    const r = canvas.getBoundingClientRect(), dpr = Math.min(2, window.devicePixelRatio || 1);
    W = r.width; H = r.height; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const pad = W * .2;
    layers.forEach((arr, li) => {
      const x = pad + (W - 2 * pad) * li / (LAYERS.length - 1);
      const span = (H - 2 * pad) * (arr.length / 7);
      arr.forEach((n, i) => { n.ox = x; n.oy = H / 2 - span / 2 + span * (arr.length === 1 ? .5 : i / (arr.length - 1)); n.x = n.ox; n.y = n.oy; });
    });
    draw();
  }
  function spawn(n){
    const alive = n.out.filter(e => e.target > 0);
    if (alive.length) pulses.push({ e: alive[Math.floor(rnd() * alive.length)], t:0, speed: .0011 + rnd() * .0008 });
  }
  function update(dt){
    const R = W * .4;
    for (const n of nodes) {
      const dx = n.ox - mouse.x, dy = n.oy - mouse.y, d = Math.hypot(dx, dy), f = d < R ? 1 - d / R : 0;
      n.x += (n.ox + (d ? dx / d : 0) * f * 16 - n.x) * .12; n.y += (n.oy + (d ? dy / d : 0) * f * 16 - n.y) * .12;
      n.glow += (Math.max(0, 1 - d / (R * .9)) - n.glow) * .15;
    }
    for (const e of edges) e.alpha += (e.target - e.alpha) * .08;
    spawnT += dt;
    if (spawnT > 380 && pulses.length < 16) { spawnT = 0; spawn(layers[0][Math.floor(rnd() * layers[0].length)]); }
    const next = [];
    for (const p of pulses) {
      p.t += dt * p.speed;
      if (p.t < 1) { next.push(p); continue; }
      const alive = p.e.b.out.filter(e => e.target > 0);
      if (alive.length) next.push({ e: alive[Math.floor(rnd() * alive.length)], t:0, speed:p.speed });
    }
    pulses = next;
  }
  function draw(){
    if (!W) return;
    ctx.clearRect(0, 0, W, H);
    const grad = ctx.createLinearGradient(0, 0, W, 0); grad.addColorStop(0, C.a1); grad.addColorStop(1, C.a2);
    for (const e of edges) {
      if (e.target === 0 && e.alpha < .03) {
        ctx.globalAlpha = .5; ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.setLineDash([2, 4]);
        ctx.beginPath(); ctx.moveTo(e.a.x, e.a.y); ctx.lineTo(e.b.x, e.b.y); ctx.stroke(); ctx.setLineDash([]); continue;
      }
      const s = e.w / maxW, hot = Math.max(e.a.glow, e.b.glow);
      ctx.globalAlpha = e.alpha * (.14 + .5 * s) + hot * .4 * e.alpha;
      ctx.strokeStyle = (hot > .25 || e.target === 0) ? grad : C.ink;
      ctx.lineWidth = .5 + 1.5 * s;
      ctx.beginPath(); ctx.moveTo(e.a.x, e.a.y); ctx.lineTo(e.b.x, e.b.y); ctx.stroke();
    }
    ctx.globalAlpha = 1; ctx.fillStyle = grad;
    for (const p of pulses) {
      const x = p.e.a.x + (p.e.b.x - p.e.a.x) * p.t, y = p.e.a.y + (p.e.b.y - p.e.a.y) * p.t;
      ctx.beginPath(); ctx.arc(x, y, 2.6, 0, Math.PI * 2); ctx.fill();
    }
    for (const n of nodes) {
      ctx.fillStyle = n.glow > .15 ? grad : C.card; ctx.strokeStyle = C.ink; ctx.lineWidth = 1.3;
      ctx.beginPath(); ctx.arc(n.x, n.y, 4.5 + n.glow * 3.5, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    }
  }
  function loop(t){
    const dt = Math.min(50, t - (last || t)); last = t;
    update(dt); draw();
    raf = (visible && !reduced) ? requestAnimationFrame(loop) : 0;
  }
  function start(){ if (!raf && visible && !reduced) { last = 0; raf = requestAnimationFrame(loop); } }

  const pos = e => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; };
  canvas.addEventListener('pointermove', e => { pos(e); if (reduced) { nodes.forEach(n => n.glow = Math.max(0, 1 - Math.hypot(n.ox - mouse.x, n.oy - mouse.y) / (W * .36))); draw(); } });
  canvas.addEventListener('pointerleave', () => { mouse.x = mouse.y = -1e4; if (reduced) { nodes.forEach(n => n.glow = 0); draw(); } });
  canvas.addEventListener('click', () => { if (!reduced) for (let i = 0; i < 2; i++) layers[0].forEach(spawn); });
  new ResizeObserver(layout).observe(canvas);
  new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) start(); }).observe(canvas);
  onMQ(motionMQ, e => { reduced = e.matches; if (reduced) { edges.forEach(x => x.alpha = x.target); pulses = []; draw(); } else start(); });

  recolor(); layout(); start();
  net = { recolor };
})();

/* =========================================================
   Stats strip with animated counters
   ========================================================= */
(function Stats(){
  const box = $('#stats');
  box.innerHTML = STATS.map(s => `
    <div class="card stat reveal">
      <div class="num" aria-hidden="true"><span data-count="${s.n}" data-dec="${s.dec || 0}">0</span><span class="u">${esc(s.suffix)}</span></div>
      <span class="sr-only">${s.n.toLocaleString('en-US')}${esc(s.suffix)}</span>
      <p class="lbl">${esc(s.label)}</p>
      <button type="button" class="src" data-go="${s.go}">↳ ${esc(s.src)}</button>
    </div>`).join('');
  const fmt = (v, d) => d ? v.toFixed(d) : Math.round(v).toLocaleString('en-US');
  const run = el => {
    const end = +el.dataset.count, d = +el.dataset.dec;
    if (reduced) { el.textContent = fmt(end, d); return; }
    const t0 = performance.now(), dur = 1500;
    const tick = t => { const p = Math.min(1, (t - t0) / dur); el.textContent = fmt(end * (1 - Math.pow(1 - p, 3)), d); if (p < 1) requestAnimationFrame(tick); };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(ents => ents.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }), { threshold:.6 });
  $$('[data-count]', box).forEach(el => io.observe(el));
  box.addEventListener('click', e => { const b = e.target.closest('[data-go]'); if (b) goTo(b.dataset.go); });
})();

/* =========================================================
   Tech stack tiles + evidence panel
   ========================================================= */
let activeSkill = null;
(function Stack(){
  $('#tgroups').innerHTML = Object.entries(SKILLS).map(([cat, arr]) => `
    <div class="tgroup"><h3>${esc(cat)}</h3><div class="tiles">${arr.map(s => {
      const n = usedIn(s).length;
      return `<button type="button" class="tile" data-skill="${esc(s)}" data-n="${Math.min(n, 3)}" aria-pressed="false" aria-label="${esc(s)}, used in ${n} place${n === 1 ? '' : 's'}">
        ${n ? `<span class="ct" aria-hidden="true">${n}</span>` : ''}<span class="ab" aria-hidden="true">${esc(ABBR[s] || s)}</span><span class="nm" aria-hidden="true">${esc(s)}</span></button>`;
    }).join('')}</div></div>`).join('');
  $('#tgroups').addEventListener('click', e => { const t = e.target.closest('[data-skill]'); if (t) selectSkill(t.dataset.skill); });
  $('#evidence').addEventListener('click', e => {
    const g = e.target.closest('[data-go]'); if (g) goTo(g.dataset.go);
    if (e.target.closest('#ev-clear')) selectSkill(null);
  });
  renderEvidence();
})();

function renderEvidence(){
  const ev = $('#evidence'), all = Object.values(SKILLS).flat();
  if (!activeSkill) {
    const shown = all.filter(s => usedIn(s).length).length;
    ev.innerHTML = `<span class="lbl">Evidence</span><h4>Pick a tile</h4>
      <p>${all.length} skills on the board. ${shown} show up in a specific role, project or paper. The dashed ones come from the résumé’s skills list.</p>`;
    return;
  }
  const u = usedIn(activeSkill);
  ev.innerHTML = `<span class="lbl">${esc(SKILL_CAT[activeSkill] || 'Skill')}</span><h4>${esc(activeSkill)}</h4>
    ${u.length ? `<p>Used in ${u.length} place${u.length > 1 ? 's' : ''}:</p><ol>${u.map(i => `
      <li><button type="button" class="ev-item" data-go="${i.id}"><small>${esc(i.kind)} · ${esc(i.when)}</small><b>${esc(i.title)}</b></button></li>`).join('')}</ol>`
      : `<p>Listed under Technical Skills on my résumé. No specific project names it yet.</p>`}
    <button type="button" class="text-btn" id="ev-clear">Clear selection</button>`;
}

function selectSkill(s, scroll){
  activeSkill = (s && s === activeSkill && !scroll) ? null : s;
  $$('.tile').forEach(t => t.setAttribute('aria-pressed', String(t.dataset.skill === activeSkill)));
  renderEvidence();
  const ids = new Set(activeSkill ? usedIn(activeSkill).map(i => i.id) : []);
  $$('[data-item]').forEach(el => el.classList.toggle('dim', !!activeSkill && !ids.has(el.dataset.item)));
  $('#hl-chip').classList.toggle('on', !!activeSkill);
  $('#hl-clear').textContent = activeSkill ? `${activeSkill} ×` : '';
  if (scroll) scrollToEl($('#stack'));
}
$('#hl-clear').addEventListener('click', () => selectSkill(null));

/* =========================================================
   Timelines (experience + education), expandable cards
   ========================================================= */
function xcard(it, open){
  const body = it.type === 'role'
    ? `<ul>${it.bullets.map(b => `<li>${esc(b)}</li>`).join('')}</ul>
       <div class="tags">${it.skills.map(s => `<button type="button" class="pill" data-skill="${esc(s)}" style="cursor:pointer">${esc(s)}</button>`).join('')}</div>
       ${it.project ? `<button type="button" class="case-btn" data-project="${it.project}">Read the chatbot case study ${ARROW}</button>` : ''}`
    : `<p style="color:var(--sub);font-size:.94rem">${esc(it.blurb)}</p>
       <div class="tags"><span class="pill">${esc(it.gpa)}</span></div>
       <div class="cw"><p>Relevant coursework</p><div class="tags">${it.courses.map(c => `<span class="pill outline">${esc(c)}</span>`).join('')}</div></div>`;
  return `<div class="tl-item reveal">
    <span class="tl-dot" aria-hidden="true"></span>
    <div class="tl-date">${esc(it.when)}</div>
    <div class="card xcard" id="item-${it.id}">
      <h3 class="xh"><button type="button" class="xhead" aria-expanded="${open}" aria-controls="xb-${it.id}">
        <span class="logo ${it.type === 'role' ? 'hot' : ''}" aria-hidden="true">${esc(it.logo)}</span>
        <span class="xt"><span class="rl">${esc(it.title)}</span><span class="co">${esc(it.org)}</span>${it.place ? `<span class="loc">${esc(it.place)}</span>` : ''}</span>
        <span class="chev" aria-hidden="true">${CHEV}</span></button></h3>
      <div class="xbody" id="xb-${it.id}" ${open ? '' : 'hidden'}>${body}</div>
    </div></div>`;
}
$('#tl-exp').insertAdjacentHTML('beforeend', ITEMS.filter(i => i.type === 'role').map(i => xcard(i, true)).join(''));
$('#tl-edu').insertAdjacentHTML('beforeend', ITEMS.filter(i => i.type === 'education').map((i, k) => xcard(i, k === 0)).join(''));
function setOpen(btn, open){ btn.setAttribute('aria-expanded', String(open)); $('#' + btn.getAttribute('aria-controls')).hidden = !open; }
$$('.tl').forEach(tl => tl.addEventListener('click', e => {
  const h = e.target.closest('.xhead'); if (h) { setOpen(h, h.getAttribute('aria-expanded') !== 'true'); return; }
  const s = e.target.closest('[data-skill]'); if (s) { selectSkill(s.dataset.skill, true); return; }
  const p = e.target.closest('[data-project]'); if (p) openProject(p.dataset.project);
}));

/* scroll-driven fill on the timeline rail */
function railTick(){
  $$('.tl').forEach(tl => {
    const r = tl.getBoundingClientRect(), mark = innerHeight * .6;
    const p = Math.max(0, Math.min(1, (mark - r.top) / r.height));
    $('.fill', tl).style.height = `calc(${p * 100}% - ${p * 20}px)`;
    $$('.tl-item', tl).forEach(it => it.classList.toggle('on', it.getBoundingClientRect().top + 12 < mark));
  });
}

/* =========================================================
   Projects carousel
   ========================================================= */
const THUMBS = {
  star: () => `<svg class="thumb" viewBox="0 0 240 142" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
      <g class="flow acc"><path d="M120 70 L48 28 M120 70 L192 28 M120 70 L48 112 M120 70 L192 112"/></g>
      <rect x="92" y="52" width="56" height="36" rx="4" class="accf" stroke="none"/>
      <path d="M100 63h40M100 71h40M100 79h28" stroke="var(--card)"/>
      ${[[22,16],[166,16],[22,100],[166,100]].map(([x,y]) => `<rect x="${x}" y="${y}" width="52" height="24" rx="4" fill="var(--card)"/><path d="M${x+7} ${y+9}h30M${x+7} ${y+16}h20" class="muted"/>`).join('')}
      <text x="120" y="136" text-anchor="middle">fact ⟶ dims · partitioned by year</text></svg>`,
  cal: () => { let c = ''; for (let r = 0; r < 5; r++) for (let k = 0; k < 7; k++) { const on = [[1,2],[2,5],[3,1],[0,4],[4,3]].some(([a,b]) => a === r && b === k); c += `<rect x="${34 + k*25}" y="${32 + r*20}" width="21" height="16" rx="3" ${on ? `class="accf blink" stroke="none" style="animation-delay:${(r+k)*.15}s"` : 'fill="var(--card)"'}/>`; }
    return `<svg class="thumb" viewBox="0 0 240 142" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
      <rect x="28" y="8" width="184" height="18" rx="4" fill="var(--card)"/><text x="38" y="21">M · V · C</text><path d="M180 17h22" class="acc"/>${c}</svg>`; },
  net: () => { const L = [[40,[36,71,106]],[120,[26,56,86,116]],[200,[51,91]]]; let e = '', n = '', k = 0;
    for (let i = 0; i < 2; i++) for (const y1 of L[i][1]) for (const y2 of L[i+1][1]) { const cut = (k++ % 3 === 1); e += `<path d="M${L[i][0]} ${y1} L${L[i+1][0]} ${y2}" ${cut ? 'stroke-dasharray="2 4" class="muted" opacity=".6"' : 'class="flow acc"'}/>`; }
    L.forEach(([x, ys]) => ys.forEach(y => n += `<circle cx="${x}" cy="${y}" r="6" fill="var(--card)"/>`));
    return `<svg class="thumb" viewBox="0 0 240 142" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">${e}${n}<text x="120" y="137" text-anchor="middle">50% sparsity · dashed = pruned</text></svg>`; },
  chat: () => `<svg class="thumb" viewBox="0 0 240 142" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true">
      <rect x="24" y="16" width="110" height="34" rx="14" fill="var(--card)"/><path d="M38 29h70M38 38h46" class="muted"/>
      <rect x="96" y="60" width="120" height="34" rx="14" class="accf" stroke="none"/><path d="M110 73h80M110 82h52" stroke="var(--card)"/>
      <rect x="24" y="104" width="22" height="22" rx="5" fill="var(--card)"/><path d="M31 111h8M31 116h8M31 121h5"/>
      <rect x="54" y="104" width="22" height="22" rx="5" fill="var(--card)"/><path d="M62 110l7 5-7 5z" class="accf" stroke="none"/>
      <rect x="84" y="104" width="22" height="22" rx="5" fill="var(--card)"/><path d="M90 115h10M95 110l5 5-5 5"/>
      <path d="M118 115h90" class="flow acc"/><text x="212" y="118" text-anchor="end">RAG</text></svg>`,
  bars: () => { const h = [70,44,88,30,62,96,40,76,52,84]; return `<svg class="thumb" viewBox="0 0 240 142" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
      <path d="M24 118h196" class="muted"/>${h.map((v, i) => { const x = 30 + i*19, keep = Math.round(v * (.35 + (i % 3) * .2));
      return `<rect x="${x}" y="${118 - v}" width="12" height="${v}" rx="2" fill="var(--card)"/><rect x="${x}" y="${118 - keep}" width="12" height="${keep}" rx="2" class="accf blink" stroke="none" style="animation-delay:${i*.12}s"/>`; }).join('')}
      <text x="24" y="135">layer-wise mixed sparsity</text></svg>`; },
  models: () => `<svg class="thumb" viewBox="0 0 240 142" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">
      ${['GloVe·CNN','LSTM','BERT'].map((t, i) => `<rect x="${22 + i*70}" y="30" width="58" height="62" rx="6" ${i === 2 ? 'class="accf" stroke="none"' : 'fill="var(--card)"'}/><text x="${51 + i*70}" y="65" text-anchor="middle" ${i === 2 ? 'style="fill:var(--card)"' : ''}>${t}</text>`).join('')}
      <path d="M51 92v18h140V92M121 92v18" class="flow acc"/><text x="120" y="128" text-anchor="middle">hate speech detection</text></svg>`,
};
const CAT = { ml:'ML & NLP', data:'Data engineering', software:'Software' };
let pcat = 'all';

(function Projects(){
  $('#pfilters').innerHTML = [['all','All'], ...Object.entries(CAT)].map(([k, l]) => `<button type="button" class="fpill" data-pcat="${k}" aria-pressed="${k === 'all'}">${l}</button>`).join('');
  const grid = $('#pgrid');
  grid.innerHTML = PROJECTS.map(p => `
    <article class="card pcard" data-item="${p.id}" data-cats="${p.cats.join(' ')}" aria-labelledby="pt-${p.id}">
      <div class="pthumb">${THUMBS[p.thumb]()}</div>
      <div class="pbody">
        <span class="k">${esc(p.when)} · ${p.cats.map(c => CAT[c]).join(' / ')}</span>
        <h3 id="pt-${p.id}">${esc(p.title)}</h3>
        <p>${esc(p.tagline)}</p>
        <div class="tags">${p.skills.slice(0, 4).map(s => `<span class="pill">${esc(s)}</span>`).join('')}${p.skills.length > 4 ? `<span class="pill more">+${p.skills.length - 4}</span>` : ''}</div>
        <div class="p-actions">${codeLink(p)}<button type="button" class="case-btn" data-project="${p.id}">Case study ${ARROW}</button></div>
      </div>
    </article>`).join('');
  grid.addEventListener('click', e => { const b = e.target.closest('[data-project]'); if (b) openProject(b.dataset.project); });
  $('#pfilters').addEventListener('click', e => {
    const b = e.target.closest('[data-pcat]'); if (!b) return;
    pcat = b.dataset.pcat; $$('#pfilters .fpill').forEach(p => p.setAttribute('aria-pressed', String(p === b)));
    $$('.pcard').forEach(c => c.hidden = !(pcat === 'all' || c.dataset.cats.split(' ').includes(pcat)));
    grid.scrollLeft = 0; buildDots();
  });
  const step = dir => { const c = $('.pcard:not([hidden])', grid); grid.scrollBy({ left: dir * ((c ? c.offsetWidth : 320) + 20), behavior: reduced ? 'auto' : 'smooth' }); };
  $('#p-prev').addEventListener('click', () => step(-1));
  $('#p-next').addEventListener('click', () => step(1));

  let spy;
  function buildDots(){
    const cards = $$('.pcard:not([hidden])', grid), dots = $('#pdots');
    dots.innerHTML = cards.map((c, i) => `<button type="button" class="pdot${i ? '' : ' on'}" aria-label="Go to ${esc(BY_ID[c.dataset.item].title)}"></button>`).join('');
    const ds = $$('.pdot', dots);
    ds.forEach((d, i) => d.addEventListener('click', () => grid.scrollTo({ left: cards[i].offsetLeft - grid.offsetLeft - 2, behavior: reduced ? 'auto' : 'smooth' })));
    spy && spy.disconnect();
    spy = new IntersectionObserver(ents => ents.forEach(en => { if (en.isIntersecting) { const i = cards.indexOf(en.target); ds.forEach((d, k) => d.classList.toggle('on', k === i)); } }), { root:grid, threshold:.6 });
    cards.forEach(c => spy.observe(c));
  }
  buildDots();
})();

/* research cards */
$('#rgrid').innerHTML = PAPERS.map(p => `
  <article class="card rcard reveal" id="item-${p.id}" data-item="${p.id}">
    <span class="status">Submitted · under review</span>
    <h3>${esc(p.title)}</h3>
    <p class="jr">${esc(p.org)}</p>
    <div class="tags">${p.skills.map(s => `<span class="pill outline">${esc(s)}</span>`).join('')}</div>
    <div class="actions p-actions">${codeLink(p)}<button type="button" class="case-btn" data-project="${p.id}">Details ${ARROW}</button></div>
  </article>`).join('');
$('#rgrid').addEventListener('click', e => { const b = e.target.closest('[data-project]'); if (b) openProject(b.dataset.project); });

/* =========================================================
   Detail modal + "go to" routing
   ========================================================= */
const dlg = $('#proj-dialog');
let pal;
function openProject(id){
  const p = BY_ID[id]; if (!p) return;
  if (pal && pal.open) pal.close();
  $('#pd-kicker').textContent = `${p.kind} · ${p.when}`;
  $('#pd-body').innerHTML = `
    <h3 id="pd-title">${esc(p.title)}</h3>
    <p class="tagline">${esc(p.tagline)} <span style="white-space:nowrap">· ${esc(p.org)}</span></p>
    <div class="m-thumb">${THUMBS[p.thumb]().replace('viewBox="0 0 240 142"', 'viewBox="-50 0 340 142" preserveAspectRatio="xMidYMid meet"')}</div>
    <div class="pao">
      <div><h4>Problem</h4><p>${ph(p.problem)}</p></div>
      <div><h4>Approach</h4><ul>${p.approach.map(a => `<li>${ph(a)}</li>`).join('')}</ul></div>
      <div><h4>Outcome</h4><p>${ph(p.outcome)}</p></div>
    </div>
    <div class="tags" style="margin-top:22px">${p.skills.map(s => `<button type="button" class="pill" style="cursor:pointer" data-skill="${esc(s)}">${esc(s)}</button>`).join('')}</div>
    <div class="m-foot">${p.role ? `<button type="button" class="case-btn" data-goto="${p.role}">See the role ${ARROW}</button>` : ''}
      ${codeLink(p)}</div>`;
  if (typeof dlg.showModal === 'function') dlg.showModal(); else dlg.setAttribute('open', '');
}
dlg.addEventListener('click', e => {
  if (e.target === dlg || e.target.closest('[data-close]')) { dlg.close(); return; }
  const s = e.target.closest('[data-skill]'); if (s) { dlg.close(); selectSkill(s.dataset.skill, true); return; }
  const g = e.target.closest('[data-goto]'); if (g) { dlg.close(); goTo(g.dataset.goto); }
});

function goTo(id){
  const it = BY_ID[id]; if (!it) return;
  if (it.type === 'project' || it.type === 'paper') { openProject(id); return; }
  const el = $('#item-' + id); if (!el) return;
  el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block:'center' });
  const h = $('.xhead', el); if (h) setOpen(h, true);
  el.classList.remove('flash'); void el.offsetWidth; el.classList.add('flash');
  setTimeout(() => (h || el).focus({ preventScroll:true }), reduced ? 0 : 450);
}

/* =========================================================
   Command palette (Ctrl/Cmd + K, or /)
   ========================================================= */
pal = $('#palette');
const palIn = $('#pal-input'), palList = $('#pal-list'), palAns = $('#pal-answer');
const copyEmail = async () => {
  try { await navigator.clipboard.writeText('saivarunmm@gmail.com'); toast('Email copied: saivarunmm@gmail.com'); }
  catch (e) { toast('saivarunmm@gmail.com'); }
};
const ENTRIES = [
  ...[['hero','Home','top intro start'],['about','About','bio hi'],['stack','Tech stack','skills tools languages'],['experience','Experience','work job intern'],['education','Education','degree university'],['projects','Projects','portfolio work built'],['research','Research & credentials','papers certifications'],['contact','Contact','email resume hire']]
    .map(([id, t, kw]) => ({ g:'Sections', k:'Go to', t, kw, run: () => scrollToEl($('#' + id)) })),
  ...ITEMS.map(i => ({ g: i.type === 'project' ? 'Projects' : i.type === 'paper' ? 'Research' : 'Timeline', k:i.kind, t: i.title + (i.type === 'role' || i.type === 'education' ? ' · ' + i.org.split(' · ')[0] : ''),
    kw:[i.org, i.when, i.gpa, i.blurb, (i.courses || []).join(' '), (i.bullets || []).join(' '), i.problem, (i.approach || []).join(' '), i.outcome, (i.skills || []).join(' ')].join(' '), run: () => goTo(i.id) })),
  ...Object.values(SKILLS).flat().map(s => ({ g:'Skills', k:'Skill', t:s, kw:SKILL_CAT[s], run: () => selectSkill(s, true) })),
  { g:'Actions', k:'Action', t:'Copy email address', kw:'mail contact clipboard', run: copyEmail },
  { g:'Actions', k:'Action', t:'Download résumé (PDF)', kw:'resume cv pdf download', run: () => $('a[download]').click() },
  { g:'Actions', k:'Action', t:'Open GitHub', kw:'code repos', run: () => window.open('https://github.com/Varun-2103', '_blank', 'noopener') },
  { g:'Actions', k:'Action', t:'Open LinkedIn', kw:'network profile', run: () => window.open('https://www.linkedin.com/in/sai-venkatesh-varun-mm-20b78421b/', '_blank', 'noopener') },
  { g:'Actions', k:'Action', t:'Toggle light / dark theme', kw:'dark mode light mode appearance', run: () => setTheme(theme() === 'dark' ? 'light' : 'dark') },
  { g:'Actions', k:'Secret', t:'Start your engines 🏁', kw:'kart karting race vroom konami secret', secret:true, run: () => kart() },
];
const STOP = new Set('a an the is are was were what whats which who where when how do does did you your yours i me my of in on at to for and or with about tell show have has any can'.split(' '));
const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
let results = [], sel = 0;
function search(q){
  const toks = norm(q).split(/[^a-z0-9+#]+/).filter(t => t && !STOP.has(t));
  if (!toks.length) return q.trim() ? [] : ENTRIES.filter(e => e.g === 'Sections' || (e.g === 'Actions' && !e.secret));
  return ENTRIES.map(e => {
    const t = norm(e.t), body = norm(e.kw); let s = 0;
    for (const tk of toks) { if (t.startsWith(tk)) s += 6; else if (t.includes(tk)) s += 4; else if (body.includes(tk)) s += 1.5; else s -= 1; }
    if (e.secret && s < 3) return null;
    return s > 0 ? { e, s } : null;
  }).filter(Boolean).sort((a, b) => b.s - a.s).slice(0, 12).map(x => x.e);
}
function answer(q){
  const toks = norm(q).split(/[^a-z0-9]+/).filter(Boolean);
  let best = null, score = 0;
  for (const a of ANSWERS) { const s = toks.filter(t => a.k.includes(t)).length; if (s > score) { score = s; best = a; } }
  return best;
}
function renderPal(){
  const q = palIn.value; results = search(q); sel = 0;
  const a = q.trim() ? answer(q) : null;
  palAns.hidden = !a; if (a) palAns.innerHTML = `<small>Quick answer</small>${esc(a.a)}`;
  if (!results.length) { palList.innerHTML = a ? '' : `<li class="pal-none">Nothing matched “${esc(q)}”. Try “Java”, “research” or “GPA”.</li>`; palIn.removeAttribute('aria-activedescendant'); return; }
  let g = '', html = '';
  results.forEach((r, i) => {
    if (r.g !== g) { g = r.g; html += `<li role="presentation" class="pal-group">${esc(g)}</li>`; }
    html += `<li role="option" id="po-${i}" class="pal-opt" data-i="${i}" aria-selected="${i === 0}"><span class="k">${esc(r.k)}</span><span class="t">${esc(r.t)}</span></li>`;
  });
  palList.innerHTML = html; mark();
}
function mark(){
  $$('.pal-opt', palList).forEach(o => o.setAttribute('aria-selected', String(+o.dataset.i === sel)));
  const cur = $(`#po-${sel}`); if (cur) { palIn.setAttribute('aria-activedescendant', cur.id); cur.scrollIntoView({ block:'nearest' }); }
}
function choose(i){ const r = results[i]; if (!r) return; pal.close(); setTimeout(r.run, 30); }
function openPalette(){
  if (dlg.open) dlg.close();
  setMenu(false);
  palIn.value = ''; renderPal();
  if (typeof pal.showModal === 'function') pal.showModal(); else pal.setAttribute('open', '');
  palIn.focus();
}
palIn.addEventListener('input', renderPal);
palIn.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown') { e.preventDefault(); sel = Math.min(results.length - 1, sel + 1); mark(); }
  else if (e.key === 'ArrowUp') { e.preventDefault(); sel = Math.max(0, sel - 1); mark(); }
  else if (e.key === 'Enter') { e.preventDefault(); choose(sel); }
});
palList.addEventListener('click', e => { const o = e.target.closest('.pal-opt'); if (o) choose(+o.dataset.i); });
palList.addEventListener('pointermove', e => { const o = e.target.closest('.pal-opt'); if (o && +o.dataset.i !== sel) { sel = +o.dataset.i; mark(); } });
pal.addEventListener('click', e => { if (e.target === pal) pal.close(); });
$$('[data-open-palette]').forEach(b => b.addEventListener('click', openPalette));
$('#copy-email').addEventListener('click', copyEmail);

/* =========================================================
   Keys, easter egg, scroll effects
   ========================================================= */
const KONAMI = ['arrowup','arrowup','arrowdown','arrowdown','arrowleft','arrowright','arrowleft','arrowright','b','a'];
let kIdx = 0, typedKeys = '';
document.addEventListener('keydown', e => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); pal.open ? pal.close() : openPalette(); return; }
  if (e.key === 'Escape' && !menu.hidden) setMenu(false);
  const tag = (e.target.tagName || '').toLowerCase();
  if (tag === 'input' || tag === 'textarea' || e.target.isContentEditable) return;
  if (e.key === '/' && !pal.open && !dlg.open) { e.preventDefault(); openPalette(); return; }
  const k = e.key.toLowerCase();
  kIdx = (k === KONAMI[kIdx]) ? kIdx + 1 : (k === KONAMI[0] ? 1 : 0);
  if (kIdx === KONAMI.length) { kIdx = 0; kart(); }
  if (k.length === 1) { typedKeys = (typedKeys + k).slice(-5); if (typedKeys === 'vroom') kart(); }
});

let racing = false;
function kart(){
  if (racing) return; racing = true;
  const kt = $('#kart'), ch = $('#checker');
  toast('🏁 Lap complete. A nod to the JK Tyre Indian Karting Race, 2023.', 3800);
  if (reduced) { racing = false; return; }
  ch.classList.add('show'); kt.classList.remove('go'); void kt.getBoundingClientRect(); kt.classList.add('go');
  setTimeout(() => { ch.classList.remove('show'); kt.classList.remove('go'); racing = false; }, 3600);
}

const bar = $('#progress'); let ticking = false;
function onScroll(){
  const h = document.documentElement.scrollHeight - innerHeight;
  bar.style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
  railTick(); ticking = false;
}
addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive:true });
addEventListener('resize', onScroll);
onScroll();

const rio = new IntersectionObserver(ents => ents.forEach(en => { if (en.isIntersecting) { en.target.classList.add('in'); rio.unobserve(en.target); } }), { threshold:.12, rootMargin:'0px 0px -40px 0px' });
$$('.reveal').forEach(el => rio.observe(el));

const navLinks = $$('#nav-links a');
const sio = new IntersectionObserver(ents => ents.forEach(en => {
  if (en.isIntersecting) navLinks.forEach(a => a.setAttribute('aria-current', String(a.getAttribute('href') === '#' + en.target.id)));
}), { rootMargin:'-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => sio.observe(s));
})();
