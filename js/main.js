(function(){
  // ---- Site config: set the address that should receive contact-form messages ----
  var CONTACT_EMAIL = ""; // e.g. "hello@symbaco.com" — leave empty until the mailbox exists

  var burger=document.querySelector('.burger'),nav=document.getElementById('nav');
  if(burger){burger.addEventListener('click',function(){var o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o)});
    nav.addEventListener('click',function(e){if(e.target.closest('a')){nav.classList.remove('open');burger.setAttribute('aria-expanded','false')}});}
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();

  // reveal on scroll
  var els=[].slice.call(document.querySelectorAll('.rv'));
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});els.forEach(function(e){io.observe(e)})}
  else els.forEach(function(e){e.classList.add('in')});

  // scroll-spy for the one-page menu
  var links=[].slice.call(document.querySelectorAll('nav a[href^="#"],nav a[href^="/#"]'));
  var map=links.map(function(a){var id=a.getAttribute('href').split('#')[1];return{a:a,el:document.getElementById(id)}}).filter(function(m){return m.el});
  if(map.length&&'IntersectionObserver' in window){
    var spy=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){map.forEach(function(m){m.a.classList.toggle('active',m.el===e.target)})}})},{rootMargin:'-45% 0px -50% 0px'});
    map.forEach(function(m){spy.observe(m.el)});
  }

  // contact form
  var f=document.getElementById('contact-form');
  if(f){f.addEventListener('submit',function(ev){
    ev.preventDefault();var s=document.getElementById('form-status');
    if(f.website&&f.website.value)return; // honeypot
    var d=new FormData(f),name=d.get('name'),email=d.get('email'),co=d.get('company')||'-',svc=d.get('service'),msg=d.get('message');
    if(!CONTACT_EMAIL){s.className='note err';s.textContent='Our contact form is being connected. Please check back shortly.';return}
    var body='Name: '+name+'\nEmail: '+email+'\nCompany: '+co+'\nInterested in: '+svc+'\n\n'+msg;
    window.location.href='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent('Website enquiry – '+svc)+'&body='+encodeURIComponent(body);
    s.className='note ok';s.textContent='Opening your email app… if nothing happens, write to '+CONTACT_EMAIL+'.';
  });}
})();
