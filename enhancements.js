(()=>{
  const heroName=document.querySelector('.hero-copy .eyebrow');
  const summary=document.querySelector('.hero-copy>p:not(.eyebrow):not(.role-line)');
  if(!heroName||!summary)return;
  heroName.innerHTML='Hardik <span>Sarvaiya</span>';
  heroName.classList.add('hero-name');
  summary.innerHTML='I am an AI and ML Engineer with <strong>around 2 years of hands-on experience</strong> in machine-learning workflows, generative AI, RAG, data preprocessing, model evaluation, and scalable backend systems. I am currently pursuing an <strong>M.Tech in Artificial Intelligence and Data Science</strong> at Parul University.';
  if(!document.querySelector('.location-line')){
    const location=document.createElement('p');
    location.className='location-line';
    location.innerHTML='<span>●</span> Based in Vadodara, Gujarat, India';
    summary.after(location);
  }
  const enhancement=document.createElement('style');
  enhancement.textContent=`.hero-name{font-size:clamp(15px,1.25vw,20px)!important;font-weight:800!important;letter-spacing:.17em!important;color:#f5f7f8!important;text-shadow:0 0 22px #79e7ff55}.hero-name span{color:#79e7ff}.hero-copy strong{color:#fff;font-weight:800;border-bottom:1px solid #79e7ff77}.location-line{margin:15px 0 0!important;color:#dce8ed!important;font:700 11px var(--mono)!important;letter-spacing:.06em!important;text-transform:uppercase}.location-line span{color:#79e7ff;font-size:13px;text-shadow:0 0 13px #79e7ff}.hero-card{animation:heroEnter .8s cubic-bezier(.2,.8,.2,1) both}.hero-copy>*{animation:copyRise .7s both}.hero-copy>*:nth-child(1){animation-delay:.12s}.hero-copy>*:nth-child(2){animation-delay:.2s}.hero-copy>*:nth-child(3){animation-delay:.28s}.hero-copy>*:nth-child(4){animation-delay:.36s}.hero-copy>*:nth-child(5){animation-delay:.44s}.hero-copy>*:nth-child(6){animation-delay:.5s}.skill-list article,.roles article,.card{transition:transform .28s ease,box-shadow .28s ease,border-color .28s ease}.skill-list article:hover,.roles article:hover{transform:translateX(8px);box-shadow:0 12px 30px #00000022}.card:hover{transform:translateY(-7px);border-color:#79e7ff99;box-shadow:0 18px 42px #00000055}.hero-links a{transition:color .2s ease,transform .2s ease}.hero-links a:hover{color:#79e7ff;transform:translateY(-2px)}@keyframes heroEnter{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}@keyframes copyRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}@media(prefers-reduced-motion:reduce){.hero-card,.hero-copy>*{animation:none!important}.skill-list article,.roles article,.card{transition:none!important}}`;
  document.head.append(enhancement);
  const skillBadges=[
    [['python','Python'],['scikitlearn','Scikit-learn'],['pandas','Pandas'],['numpy','NumPy'],['openai','OpenAI'],['huggingface','Hugging Face']],
    [['postgresql','PostgreSQL'],['mysql','MySQL'],['sqlite','SQL'],['microsoft-excel','Excel'],['firebase','Firebase']],
    [['python','Python'],['fastapi','FastAPI'],['django','Django'],['flask','Flask'],['pytest','Pytest'],['git','Git']],
    [['googlecloud','Google Cloud'],['amazonwebservices','AWS'],['microsoftazure','Azure'],['docker','Docker'],['kubernetes','Kubernetes'],['github','GitHub']]
  ];
  const icon=(slug,label)=>{const img=document.createElement('img');img.src=`https://cdn.simpleicons.org/${slug}/79e7ff`;img.alt=label;img.title=label;img.loading='lazy';img.onerror=()=>img.remove();return img};
  document.querySelectorAll('.skill-list article').forEach((article,index)=>{
    const row=document.createElement('div');row.className='skill-logo-row';
    skillBadges[index].forEach(([slug,label])=>row.append(icon(slug,label)));
    article.append(row);
  });
  const organizationMarks=[
    ['Aditi Consulting','', 'AD'],
    ['Voldbug Innovations','', 'VI'],
    ['Google Developer Student Clubs','google','GDSC'],
    ['OASIS INFOBYTE','', 'OI'],
    ['Parul University','https://logowik.com/content/uploads/images/parul-university3698.jpg','Parul University'],
    ['Parul Institute of Engineering','https://logowik.com/content/uploads/images/parul-university3698.jpg','Parul University']
  ];
  organizationMarks.forEach(([match,source,label])=>{
    const target=[...document.querySelectorAll('.rolehead h3,.education h3')].find(el=>el.parentElement.textContent.includes(match));
    if(!target)return;
    const mark=document.createElement(source?'img':'span');
    mark.className='organization-mark';mark.title=label;
    if(source){mark.src=source;mark.alt=label;mark.loading='lazy';mark.onerror=()=>{mark.replaceWith(Object.assign(document.createElement('span'),{className:'organization-mark initials',textContent:label.slice(0,2)}))}}
    else mark.textContent=label;
    target.before(mark);
  });
  const logosCss=document.createElement('style');
  logosCss.textContent=`.skill-logo-row{grid-column:2/4;display:flex;flex-wrap:wrap;gap:9px;margin-top:0;padding-top:4px}.skill-logo-row img{width:21px;height:21px;object-fit:contain;opacity:.85;filter:drop-shadow(0 0 7px #79e7ff22);transition:transform .2s,opacity .2s}.skill-logo-row img:hover{transform:translateY(-3px) scale(1.14);opacity:1}.organization-mark{width:32px;height:32px;object-fit:contain;vertical-align:middle;margin:0 10px 5px 0;border-radius:6px;background:#fff;padding:3px}.organization-mark.initials{display:inline-grid;place-items:center;padding:0;background:#12253b;border:1px solid #79e7ff88;color:#79e7ff;font:700 9px var(--mono);letter-spacing:-.04em}@media(max-width:800px){.skill-logo-row{grid-column:2;gap:8px}.skill-logo-row img{width:19px;height:19px}.organization-mark{width:28px;height:28px}}`;
  logosCss.textContent+=`.rolehead .organization-mark:not(.initials){width:88px;height:30px;padding:4px 6px}.education .organization-mark:not(.initials){width:42px;height:42px}@media(max-width:800px){.rolehead .organization-mark:not(.initials){width:78px;height:28px}}`;
  document.head.append(logosCss);
  // Rebuild experience and education into a consistent, LinkedIn-inspired timeline.
  document.querySelectorAll('.organization-mark').forEach(mark=>mark.remove());
  const orgBadges=[
    {match:'Aditi Consulting',letters:'AC',accent:'#ffffff',name:'Aditi Consulting',image:'https://www.aditiconsulting.com/hubfs/Logo%20Mark%20A.svg'},
    {match:'Voldbug Innovations',letters:'VI',accent:'#ffffff',name:'Voldbug Innovations',image:'https://www.voldebug.in/assets/img/logo/2.png'},
    {match:'Google Developer Student Clubs',letters:'GDSC',accent:'#4285f4',name:'Google Developer Student Clubs',image:'https://cms.epoka.edu.al/api/CMS_Archive/assets/GDSC-png-258?version=1'},
    {match:'OASIS INFOBYTE',letters:'OI',accent:'#ffffff',name:'OASIS INFOBYTE',image:'https://miro.medium.com/v2/resize:fit:1050/0*u1i-Jg0sg7gP1LEf.jpeg'}
  ];
  const makeBadge=({letters,accent,name,image})=>{const badge=document.createElement('div');badge.className='timeline-logo';badge.dataset.organization=name;badge.style.setProperty('--logo-accent',accent);badge.setAttribute('aria-label',name);badge.title=name;if(image){const logo=document.createElement('img');logo.src=image;logo.alt=name;logo.onerror=()=>{logo.remove();badge.textContent=letters};badge.append(logo)}else badge.textContent=letters;return badge};
  document.querySelectorAll('.roles article').forEach(article=>{
    const info=orgBadges.find(item=>article.textContent.includes(item.match));if(!info)return;
    const content=document.createElement('div');content.className='timeline-content';
    [...article.childNodes].forEach(node=>content.append(node));
    article.classList.add('linkedin-role');article.append(makeBadge(info),content);
  });
  const educationBadge={letters:'PU',accent:'#be123c',name:'Parul University'};
  document.querySelectorAll('.education article').forEach(article=>{
    const content=document.createElement('div');content.className='education-content';
    [...article.childNodes].forEach(node=>content.append(node));
    article.classList.add('linkedin-education');article.append(makeBadge(educationBadge),content);
  });
  const timelineCss=document.createElement('style');
  timelineCss.textContent=`.roles .linkedin-role{display:grid!important;grid-template-columns:62px minmax(0,1fr);gap:19px;padding:24px 0!important;background:transparent!important;border-top:1px solid var(--line)!important;box-shadow:none!important}.roles .linkedin-role.current{padding:24px 0!important}.timeline-logo{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;align-self:start;overflow:hidden;background:#fff;border:2px solid color-mix(in srgb,var(--logo-accent) 75%,white);color:#17314d;font:800 12px var(--mono);letter-spacing:-.08em;box-shadow:0 0 0 4px #0d1521,0 0 22px color-mix(in srgb,var(--logo-accent) 35%,transparent)}.timeline-logo img{width:100%;height:100%;object-fit:contain;object-position:center;padding:5px}.timeline-logo[data-organization="Voldbug Innovations"] img{width:175%;max-width:none;object-fit:cover;object-position:left;padding:0}.timeline-logo[data-organization="OASIS INFOBYTE"] img{object-fit:cover;padding:0}.linkedin-education .timeline-logo img{object-fit:cover;padding:0;transform:scale(1.5)}.timeline-content{min-width:0}.timeline-content .rolehead{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}.timeline-content .rolehead h3{margin:0 0 5px}.timeline-content .rolehead p{margin:0;color:#b9c5ce}.timeline-content .rolehead time{margin:2px 0 0;white-space:nowrap}.timeline-content ul{margin:16px 0 0}.linkedin-education{display:grid!important;grid-template-columns:62px minmax(0,1fr);gap:19px;padding:23px 0!important;align-items:start}.linkedin-education .timeline-logo{background:#fff;color:#16130b}.education-content{min-width:0;display:flex;justify-content:space-between;gap:30px}.education-content h3{margin:0}.education-content p{margin:5px 0}.education-content time{white-space:nowrap;margin-top:4px}@media(max-width:800px){.roles .linkedin-role,.linkedin-education{grid-template-columns:50px minmax(0,1fr);gap:13px}.timeline-logo{width:45px;height:45px;font-size:10px}.timeline-content .rolehead,.education-content{display:block}.timeline-content .rolehead time,.education-content time{display:block;margin-top:10px}.timeline-content ul{padding-left:17px}.education-content small{margin-top:10px}}`;
  timelineCss.textContent+=`.linkedin-education .timeline-logo{position:relative;background:#be123c!important;border-color:#fb7185!important;color:#fff!important;font-size:15px!important;letter-spacing:-.1em!important}.linkedin-education .timeline-logo::after{content:"PARUL";display:block;position:absolute;margin-top:30px;font:700 5px var(--mono);letter-spacing:.08em;color:#fff}.timeline-logo[data-organization="Google Developer Student Clubs"] img{object-fit:cover!important;object-position:center!important;padding:0!important;transform:scale(2.2)!important}`;
  document.head.append(timelineCss);
  const achievements=document.querySelector('.wins');
  if(achievements&&!achievements.querySelector('.achievements-title')){
    const title=document.createElement('p');
    title.className='achievements-title';
    title.textContent='Achievements & recognition';
    achievements.prepend(title);
  }
  const oldMenu=document.querySelector('header button');
  const menuNav=document.querySelector('header nav');
  if(oldMenu&&menuNav){
    const menu=oldMenu.cloneNode(false);
    menu.className='menu-toggle';
    menu.type='button';
    menu.setAttribute('aria-label','Open navigation');
    menu.setAttribute('aria-expanded','false');
    menu.innerHTML='<b>Menu</b><i><span></span><span></span><span></span></i>';
    oldMenu.replaceWith(menu);
    menu.addEventListener('click',()=>{
      const open=menuNav.classList.toggle('open');
      menu.classList.toggle('is-open',open);
      menu.setAttribute('aria-expanded',String(open));
      menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');
    });
    menuNav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
      menuNav.classList.remove('open');menu.classList.remove('is-open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');
    }));
  }
  const menuCss=document.createElement('style');
  menuCss.textContent=`.achievements-title{margin:0 0 14px!important;color:#79e7ff!important;font:700 11px var(--mono)!important;text-transform:uppercase;letter-spacing:.09em}.menu-toggle{width:auto!important;height:42px!important;padding:0 11px!important;display:none;align-items:center;gap:8px;border:1px solid #79e7ff66!important;border-radius:22px;background:#0d1521!important;cursor:pointer}.menu-toggle b{font:700 9px var(--mono);letter-spacing:.07em;text-transform:uppercase;color:#f5f7f8}.menu-toggle i{width:19px;height:16px;display:grid;align-content:center;gap:5px;font-style:normal}.menu-toggle i span{display:block;width:19px;height:1.5px;background:#f5f7f8;transition:transform .25s ease,opacity .2s ease}.menu-toggle.is-open i span:nth-child(1){transform:translateY(6.5px) rotate(45deg)}.menu-toggle.is-open i span:nth-child(2){opacity:0}.menu-toggle.is-open i span:nth-child(3){transform:translateY(-6.5px) rotate(-45deg)}@media(max-width:800px){header .menu-toggle{display:flex!important}header nav.open{display:flex!important;z-index:20;box-shadow:0 18px 36px #00000066}}`;
  document.head.append(menuCss);
})();
