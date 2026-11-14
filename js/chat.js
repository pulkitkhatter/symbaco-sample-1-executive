(function(){
  var L=(window.SYM&&window.SYM.links)||{consulting:"/#consulting",staffing:"/#staffing",about:"/#about",contact:"/#contact"};
  var LOGO='<svg viewBox="-6 20 136 92" xmlns="http://www.w3.org/2000/svg"><defs><clipPath id="sct"><rect x="44" y="0" width="40" height="66"/></clipPath></defs><circle cx="40" cy="66" r="34" fill="none" stroke="#0369a1" stroke-width="14"/><circle cx="84" cy="66" r="34" fill="none" stroke="#f59e0b" stroke-width="14"/><circle cx="40" cy="66" r="34" fill="none" stroke="#0369a1" stroke-width="14" clip-path="url(#sct)"/></svg>';
  var CONTACT='<a href="'+L.contact+'">contact form</a>';
  var TOPICS=["What do you do?","Management Consulting","Staff Augmentation","How do you work?","Contact us"];
  var KB=[
   {k:["hello","hi ","hey","good morning","good afternoon","help me","start"],a:"Hi! I’m the Symbaco assistant. I can tell you about our services, how we work, or how to get in touch. What would you like to know?",q:TOPICS},
   {k:["what do you do","what does symbaco","who are you","who is symbaco","about symbaco","about the company","tell me about","company","what is symbaco","what is this"],a:"<b>Symbaco Partners, LLC</b> is a management consulting and staff augmentation firm. We help organizations solve complex challenges and build high-performing teams — with the right expertise, at the right time.",q:["Management Consulting","Staff Augmentation","Contact us"]},
   {k:["founder","ceo","seema","korumilli","who runs","who started","who owns","who leads","who founded","leadership","who is behind","owner","president"],a:"<b>Seema Korumilli</b> is the Founder & CEO of Symbaco Partners. Her background spans management consulting, business operations and business intelligence, with experience in tech (Microsoft), education (Ellucian) and reinsurance (Hannover Re). She holds an MBA from Columbia Business School and is a PMP-certified project manager. Learn more in <a href=\""+L.about+"\">About Us</a>.",q:["What do you do?","Contact us"]},
   {k:["project and program","project & program","program management","programme"],a:"<b>Project & Program Management</b>: we plan, govern and deliver projects and programs on scope, on schedule and on budget.",q:["Change Management","Contact us"]},
   {k:["ai","artificial intelligence","machine learning","genai","generative"],a:"<b>AI</b>: we help you find the practical, responsible uses of AI for your business and put them to work.",q:["Digital Transformation","Contact us"]},
   {k:["service","offer","provide","what can you","solutions","products"],a:"We offer two core services:<ul><li><b>Management Consulting</b> – strategy, operations, transformation</li><li><b>Staff Augmentation</b> – skilled professionals who join your team</li></ul>Which one would you like to explore?",q:["Management Consulting","Staff Augmentation","Contact us"]},
   {k:["management consulting","consulting","consultant","advisory","advice","advise"],a:"Our <a href=\""+L.consulting+"\">Management Consulting</a> turns goals into practical plans and measurable results. We help with:<ul><li>Strategy & Planning</li><li>Operations Improvement</li><li>Digital Transformation</li><li>Change Management</li><li>Project & Program Management</li><li>AI</li></ul>",q:["Strategy & Planning","Digital Transformation","How do you work?","Contact us"]},
   {k:["strategy","planning","roadmap","priorit"],a:"<b>Strategy & Planning</b>: we clarify priorities, define a roadmap and align your organization around what matters most.",q:["Operations Improvement","How do you work?","Contact us"]},
   {k:["operations","operational","cost reduction","reduce cost","efficien"],a:"<b>Operations Improvement</b>: we streamline processes, reduce cost and improve the way work gets delivered across teams.",q:["Change Management","Contact us"]},
   {k:["digital","transformation","moderni","technology change","systems"],a:"<b>Digital Transformation</b>: we help modernize systems and ways of working with a low-risk, step-by-step adoption plan.",q:["Change Management","Contact us"]},
   {k:["change management","adoption","adopt"],a:"<b>Change Management</b>: we help people adopt new tools and processes so change sticks long after the project ends.",q:["Digital Transformation","Contact us"]},
   {k:["how do you work","how does it work","approach","process","steps","methodology","how it works","engagement"],a:"We work in four simple steps:<ul><li><b>Discover</b> – we listen to your goals and context</li><li><b>Design</b> – a focused plan with owners and milestones</li><li><b>Deliver</b> – we work side by side with your team</li><li><b>Sustain</b> – we measure results and hand over</li></ul>",q:["Management Consulting","Staff Augmentation","Contact us"]},
   {k:["contract to hire","contract-to-hire","try before","permanent","full time","full-time","convert"],a:"With <b>contract-to-hire</b>, you work with a professional on the job before deciding to bring them on permanently.",q:["Staff Augmentation","Contact us"]},
   {k:["dedicated team","team of","managed team","whole team","group"],a:"A <b>dedicated team</b> is a managed group built around your goals, tools and ways of working.",q:["Staff Augmentation","Contact us"]},
   {k:["contractor","contract basis","short term","short-term","long term","long-term","project based","project-based","models","engagement model"],a:"We offer flexible engagement models: <b>Contract</b> (specialists for a defined period or project), <b>Contract-to-hire</b>, and <b>Dedicated team</b>. Short-term, long-term and project-based work are all possible.",q:["Contract-to-hire","Dedicated team","Contact us"]},
   {k:["skills","roles","what kind of","which areas","expertise","specialist","technology roles","business intelligence","program management","project management","operations roles"],a:"Sample areas we can staff: <b>AI, Business Intelligence, Change Management, Data & Analytics, Operations, Program Management, Project Management, Technology</b> and <b>Transformation</b>. Tell us the role you need and we’ll confirm via the "+CONTACT+".",q:["Staff Augmentation","Contact us"]},
   {k:["how fast","how quickly","how long","timeline","turnaround","onboard","start date","when can"],a:"We focus on fast onboarding — productive in days, not months. Exact timing depends on the role, so tell us your needs through the "+CONTACT+" and we’ll give you a realistic plan.",q:["Staff Augmentation","Contact us"]},
   {k:["staff augmentation","staffing","staff","talent","hire","hiring","recruit","candidate","resource","augment","professionals","people"],a:"Our <a href=\""+L.staffing+"\">Staff Augmentation</a> gives you skilled professionals who plug into your team — without the time and cost of a long hiring cycle.<ul><li>Short-term, long-term or project-based</li><li>Vetted specialists, screened for skills and culture fit</li><li>Fast onboarding</li><li>Scale up or down as needed</li></ul>",q:["Engagement models","What roles can you staff?","How fast can you start?","Contact us"]},
   {k:["mission","values","why symbaco","why choose","why you","different","trust","accountab"],a:"Our mission is to deliver measurable value to every client. We’re collaborative, transparent and tailored — and guided by integrity, accountability and continuous improvement. See <a href=\""+L.about+"\">About Us</a>.",q:["What do you do?","Contact us"]},
   {k:["price","pricing","cost","rate","fee","quote","budget","how much","charge","expensive"],a:"Pricing depends on the scope and type of engagement, so we tailor every proposal. Share a few details through the "+CONTACT+" and we’ll get back to you.",q:["Contact us"]},
   {k:["where","location","based","office","country","remote","on site","onsite","usa","united states","city","address","new york","nyc"],a:"Symbaco Partners is based at <b>242 W 61st St #5D, New York, NY 10023</b>, and supports clients remotely and on site.",q:["Contact us"]},
   {k:["industry","industries","sector","healthcare","banking","retail","manufactur","small business","enterprise","size"],a:"Every organization is different. Tell us about your industry and project through the "+CONTACT+", and we’ll confirm how we can help.",q:["Contact us"]},
   {k:["contact","reach","email","phone","call","speak","talk","meeting","book","consultation","get started","get in touch","human","person","someone","agent","support","enquiry","inquiry"],a:"The best way to reach us is the <a href=\""+L.contact+"\"><b>contact form</b></a> — tell us about your project or the roles you need, and we’ll get back to you. We reply to every inquiry. You can also email <a href=\"mailto:hello@symbaco.com\">hello@symbaco.com</a>.",q:["What do you do?","Management Consulting","Staff Augmentation"]},
   {k:["thank","thanks","great","awesome","perfect","ok thanks"],a:"You’re welcome! Anything else I can help with?",q:TOPICS},
   {k:["bye","goodbye","see you"],a:"Thanks for stopping by! If you’d like to talk to the team, the "+CONTACT+" is always open.",q:[]}
  ];
  var ALIAS={"Engagement models":"engagement model","What roles can you staff?":"what kind of roles","How fast can you start?":"how fast","Contract-to-hire":"contract to hire","Dedicated team":"dedicated team","Strategy & Planning":"strategy planning","Operations Improvement":"operations","Digital Transformation":"digital transformation","Change Management":"change management",};
  function norm(s){return " "+s.toLowerCase().replace(/[^a-z0-9&\- ]/g," ").replace(/\s+/g," ").trim()+" "}
  function answer(text){
    var t=norm(ALIAS[text]||text),best=null,score=0;
    KB.forEach(function(it){var s=0;it.k.forEach(function(k){if(t.indexOf(k.length<4?" "+k:k)>-1)s+=k.length});if(s>score){score=s;best=it}});
    if(best)return best;
    return {a:"I’m not sure I have that one. I can help with our services, how we work, pricing or contact details — or you can send your question to the team through the "+CONTACT+" or at <a href=\"mailto:hello@symbaco.com\">hello@symbaco.com</a>.",q:TOPICS};
  }
  function el(t,c,h){var e=document.createElement(t);if(c)e.className=c;if(h!=null)e.innerHTML=h;return e}
  var btn=el("button","",'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a8 8 0 0 1-11.6 7.1L3 21l1.9-5.4A8 8 0 1 1 21 12z"/></svg><span>Chat with us</span>');
  btn.id="sym-chat-btn";btn.setAttribute("aria-label","Open chat assistant");btn.setAttribute("aria-expanded","false");
  var box=el("section");box.id="sym-chat";box.setAttribute("role","dialog");box.setAttribute("aria-label","Symbaco assistant");
  var head=el("div","sc-head",'<div class="av">'+LOGO+'</div><div><b>Symbaco Assistant</b><small>Ask me anything about our services</small></div>');
  var close=el("button","","×");close.setAttribute("aria-label","Close chat");head.appendChild(close);
  var body=el("div","sc-body");body.setAttribute("aria-live","polite");
  var form=el("form","sc-form",'<input type="text" aria-label="Type your question" placeholder="Type your question…" autocomplete="off"><button type="submit">Send</button>');
  var foot=el("div","sc-foot",'Automated assistant · answers are based on this website<br>Prefer email? <a href="mailto:hello@symbaco.com">hello@symbaco.com</a>');
  box.appendChild(head);box.appendChild(body);box.appendChild(form);box.appendChild(foot);
  document.body.appendChild(box);document.body.appendChild(btn);
  var input=form.querySelector("input"),started=false;
  function scroll(){body.scrollTop=body.scrollHeight}
  function chips(list){if(!list||!list.length)return;var c=el("div","sc-chips");list.forEach(function(q){var b=el("button","",q);b.type="button";b.addEventListener("click",function(){ask(q)});c.appendChild(b)});body.appendChild(c);scroll()}
  function clearChips(){[].slice.call(body.querySelectorAll(".sc-chips")).forEach(function(c){c.remove()})}
  function bot(html,q,delay){
    var ty=el("div","sc-m bot sc-typing","<i></i><i></i><i></i>");body.appendChild(ty);scroll();
    setTimeout(function(){ty.remove();body.appendChild(el("div","sc-m bot",html));chips(q);scroll()},delay==null?550:delay);
  }
  function ask(text){
    text=text.trim();if(!text)return;clearChips();
    body.appendChild(el("div","sc-m me")).textContent=text;scroll();
    var r=answer(text);bot(r.a,r.q);
  }
  function open(){box.classList.add("open");btn.setAttribute("aria-expanded","true");
    if(!started){started=true;bot("Hi! 👋 I’m the Symbaco assistant. I can tell you about our services, how we work, or how to get in touch. What would you like to know?",TOPICS,300)}
    setTimeout(function(){input.focus()},50)}
  function shut(){box.classList.remove("open");btn.setAttribute("aria-expanded","false");btn.focus()}
  btn.addEventListener("click",function(){box.classList.contains("open")?shut():open()});
  close.addEventListener("click",shut);
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&box.classList.contains("open"))shut()});
  form.addEventListener("submit",function(e){e.preventDefault();var v=input.value;input.value="";ask(v)});
})();
