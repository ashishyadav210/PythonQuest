const $=s=>document.querySelector(s);
const app=document.getElementById('app');

const state={
  lang:localStorage.pqLang||'en',
  completed:JSON.parse(localStorage.pqCompleted||'[]'),
  xp:+localStorage.pqXP||0,
  theme:localStorage.pqTheme||'dark',
  sound:localStorage.pqSound!=='off'
};

const topics=[
['1','Python Introduction','Beginner','Learn what Python is, why it is used, and where it fits.'],
['2','Python Syntax & Comments','Beginner','Write simple Python statements and comments.'],
['3','Variables','Beginner','Store and use values with variables.'],
['4','Data Types','Beginner','Understand numbers, text, booleans and collections.'],
['5','Input & Output','Beginner','Take input and display output.'],
['6','Operators','Beginner','Use arithmetic, comparison and logical operators.'],
['7','If Else','Beginner','Make decisions with conditions.'],
['8','Loops','Beginner','Repeat work using for and while loops.'],
['9','Strings','Beginner','Work with text and common string methods.'],
['10','Lists','Beginner','Store and manage multiple values.'],
['11','Tuples, Sets & Dictionaries','Beginner','Learn three useful collection types.'],
['12','Functions','Core','Create reusable blocks of code.'],
['13','Modules & Packages','Core','Organize code and use libraries.'],
['14','Exceptions','Core','Handle errors safely.'],
['15','File Handling','Core','Read and write files.'],
['16','Comprehensions','Core','Create collections with compact syntax.'],
['17','OOP Basics','Intermediate','Understand classes and objects.'],
['18','OOP Advanced','Intermediate','Inheritance, polymorphism and encapsulation.'],
['19','Iterators & Generators','Intermediate','Control iteration efficiently.'],
['20','Decorators & Context Managers','Advanced','Build reusable behavior around code.'],
['21','Regex, JSON & Dates','Advanced','Process common real-world data.'],
['22','pip & Virtual Environments','Advanced','Manage Python projects and packages.'],
['23','APIs & Requests Concepts','Advanced','Understand Python API usage.'],
['24','SQLite & Databases','Advanced','Store structured data with Python.'],
['25','Testing, Debugging & Logging','Advanced','Build more reliable programs.'],
['26','Type Hints & Dataclasses','Advanced','Write clearer modern Python.'],
['27','Async, Threads & Processes','Advanced','Understand concurrency basics.'],
['28','Best Practices & Security','Advanced','Write cleaner and safer Python.'],
['29','Real-World Python Concepts','Advanced','Connect Python skills to projects.'],
['30','Final Python Challenge','Master','Test your complete Python knowledge.']
];

const lessons={
'1':{en:{title:'What is Python?',def:'Python is a programming language used to build software, websites, automation tools, data projects and more.',why:'Python is popular because its syntax is easy to read and write.',items:[['Example','A first program','print("Hello Python")'],['Remember','Python files normally use .py','hello.py']]},hi:{title:'Python kya hai?',def:'Python ek programming language hai jisse software, websites, automation aur data projects banaye ja sakte hain.',why:'Python popular hai kyunki iska syntax easy to read aur write hai.',items:[['Example','Pehla program','print("Hello Python")'],['Remember','Python files me usually .py extension hota hai','hello.py']]}},
'2':{en:{title:'Python Syntax & Comments',def:'Syntax means the rules Python follows when we write code.',why:'Correct syntax helps Python understand your instructions.',items:[['Statement','A simple instruction','print("Hello")'],['Comment','A note ignored by Python','# This is a comment']]},hi:{title:'Python Syntax & Comments',def:'Syntax ka matlab hai Python me code likhne ke rules.',why:'Sahi syntax se Python hamari instruction ko samajh pata hai.',items:[['Statement','Simple instruction','print("Hello")'],['Comment','Aisi note jise Python run nahi karta','# Ye ek comment hai']]}},
'3':{en:{title:'Variables',def:'A variable is a name used to store a value.',why:'Variables help us save data and use it later.',items:[['Create','Store a value','name = "Alex"'],['Number','Store a number','age = 20'],['Use','Read the value','print(age)']]},hi:{title:'Variables',def:'Variable ek naam hai jisme hum koi value store karte hain.',why:'Variable se data ko save karke baad me use kar sakte hain.',items:[['Create','Value store karo','name = "Alex"'],['Number','Number store karo','age = 20'],['Use','Value use karo','print(age)']]}}
};
lessons['4']={en:{title:'Python Data Types',def:'A data type tells Python what kind of value we are working with.',why:'Different values need different ways of working with them.',items:[['int','Whole numbers','age = 20'],['float','Numbers with a decimal','price = 99.5'],['str','Text inside quotes','name = "Python"'],['bool','True or False','ready = True'],['list','A changeable collection','nums = [1, 2, 3]'],['tuple','A fixed collection','point = (2, 3)'],['set','A collection of unique values','x = {1, 2, 3}'],['dict','Key-value data','user = {"name":"Sam"}'],['NoneType','No value','result = None']]},hi:{title:'Python Data Types',def:'Data type Python ko batata hai ki value kis type ki hai.',why:'Alag values par alag tarah kaam karne ke liye data types useful hain.',items:[['int','Whole number','age = 20'],['float','Decimal wala number','price = 99.5'],['str','Text','name = "Python"'],['bool','True ya False','ready = True'],['list','Change hone wali collection','nums = [1, 2, 3]'],['tuple','Fixed collection','point = (2, 3)'],['set','Unique values ki collection','x = {1, 2, 3}'],['dict','Key-value data','user = {"name":"Sam"}'],['NoneType','Koi value nahi','result = None']]}};

function fallback(t){return {title:t[1],def:`This lesson introduces ${t[1]} in a simple way. Read the examples and then test yourself in the quiz.`,why:'Understanding small concepts one by one makes Python easier.',items:[['Key idea','Simple example',`print("Learning ${t[1]}")`],['Remember','Practice','Read the example, understand it, then take the quiz.']]}}
function save(){localStorage.pqLang=state.lang;localStorage.pqCompleted=JSON.stringify(state.completed);localStorage.pqXP=state.xp;localStorage.pqTheme=state.theme;localStorage.pqSound=state.sound?'on':'off'}
function beep(type='click'){
  if(!state.sound) return;
  try{
    const C=window.AudioContext||window.webkitAudioContext; if(!C)return;
    const c=beep.ctx||(beep.ctx=new C()),o=c.createOscillator(),g=c.createGain();
    const f={click:520,correct:760,wrong:180,next:620,pass:880,fail:160}[type]||520;
    o.frequency.value=f;o.type=type==='wrong'||type==='fail'?'sawtooth':'sine';
    g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.07,c.currentTime+.01);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.13);
    o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+.14);
  }catch(e){}
}
function header(title='Python Learning',back='home'){
return `<header class="app-header"><button class="brand-home" onclick="beep('click');home()" aria-label="Go to home">↩️ PYTHONQUEST</button><div class="header-spacer"></div></header>`}

function home(){
document.documentElement.dataset.theme=state.theme;
app.innerHTML=`<main class="app-home">
 <div class="home-glow g1"></div><div class="home-glow g2"></div>
 <section class="home-screen">
   <div class="home-top"><div class="mini-brand">PYTHONQUEST</div><div class="home-controls"><button onclick="toggleSound()">${state.sound?'🔊 Sound':'🔇 Sound'}</button><button onclick="toggleTheme()">◐ Theme</button></div></div>
   <div class="python-mark">🐍</div>
   <span class="eyebrow">LEARN • PLAY • MASTER</span>
   <h1>Python made<br><em>simple.</em></h1>
   <p class="home-copy">Small lessons. Friendly quizzes. One step at a time from your first Python line to advanced concepts.</p>
   <button class="start-app" onclick="beep('next');roadmap()">Start Learning <span>→</span></button>
   <div class="home-stats"><div><b>${state.completed.length}</b><span>Topics done</span></div><div><b>${state.xp}</b><span>XP</span></div><div><b>${Math.round(state.completed.length/topics.length*100)}%</b><span>Progress</span></div></div>
   <div class="home-links"><button onclick="help()">Help</button><button onclick="terms()">Terms &amp; Conditions</button><button onclick="social()">Social Media</button></div>
 </section>
</main>`}

function roadmap(){
document.documentElement.dataset.theme=state.theme;
app.innerHTML=header('Python Syllabus','home')+`<main class="page">
<div class="top"><div><span class="eyebrow">LEARNING PATH</span><h2>Python A → Z</h2><p>Pass each topic quiz with more than 50% to continue.</p></div><div class="progress-pill">${state.completed.length}/${topics.length}</div></div>
<div class="roadmap">${topics.map((t,i)=>{let unlocked=i===0||state.completed.includes(topics[i-1][0]),done=state.completed.includes(t[0]);return `<article class="topic ${unlocked?'':'locked'} ${done?'done':''}" onclick="${unlocked?`lesson('${t[0]}')`:''}"><div class="num">${done?'✓':t[0]}</div><div><small>${t[2]}</small><h3>${t[1]}</h3><p>${t[3]}</p></div><b>${done?'Completed':unlocked?'Open':'🔒'}</b></article>`}).join('')}</div>
</main>`}

async function lesson(id){
  const t=topics.find(x=>x[0]===id);
  if(!t)return roadmap();
  document.documentElement.dataset.theme=state.theme;
  app.innerHTML=header('PythonQuest','home')+`<main class="page lesson"><button class="back" onclick="roadmap()">← Roadmap</button>
  <div class="lesson-head"><span class="eyebrow">${t[2]} • TOPIC ${id}</span><h2>${t[1]}</h2><div class="language">Language <select onchange="setLangOnly(this.value);lesson('${id}')"><option value="en" ${state.lang==='en'?'selected':''}>English</option><option value="hi" ${state.lang==='hi'?'selected':''}>Hinglish</option></select></div></div>
  <section class="learn-card"><p class="lesson-loading">Loading lesson...</p></section></main>`;

  const file=`concept/topic${String(id).padStart(2,'0')}_${topicSlug(id)}.json`;
  try{
    const r=await fetch(file,{cache:'no-store'});
    if(!r.ok) throw new Error(`HTTP ${r.status}`);
    const data=await r.json();
    const items=Array.isArray(data.items)?data.items:[];
    if(items.length<10) throw new Error(`Concept lesson has only ${items.length} sections`);
    const intro=state.lang==='hi'
      ? `Is lesson me ${t[1]} ke basic concepts simple Hinglish me samjhe jaate hain. Pehle concept samjho, phir quiz do. Quiz ke MCQs isi concept order me honge aur shuffle nahi honge.`
      : `${data.intro||`Learn ${t[1]} in simple terms.`} The quiz follows the same concept order and questions are never shuffled.`;
    const points=items.map((it,i)=>`<article class="example lesson-point"><div><strong>${escapeHtml(it.heading||`Concept ${i+1}`)}</strong><span>${state.lang==='hi'?'Easy explanation':'Simple explanation'}</span></div><p>${escapeHtml(it.text||'')}</p>${it.code?`<pre><code>${escapeHtml(it.code)}</code></pre>`:''}</article>`).join('');
    app.querySelector('.learn-card').innerHTML=`<h3>Simple lesson</h3><p>${intro}</p><div class="lesson-sequence">${points}</div><div class="recap"><strong>Quick recap</strong><p>${items.length} concepts → ordered MCQs from the matching topic.</p></div><button class="primary wide" onclick="beep('next');quiz('${id}')">Take Quiz →</button>`;
  }catch(e){
    console.error('Lesson load failed:',e);
    app.querySelector('.learn-card').innerHTML=`<div class="feedback bad"><strong>Lesson could not load</strong><p>Please make sure the <code>concept</code> folder is uploaded beside <code>index.html</code>.</p></div>`;
  }
}
function topicSlug(id){
  return ({1:'python-introduction',2:'python-syntax-comments',3:'variables',4:'data-types',5:'input-output',6:'operators',7:'if-else',8:'loops',9:'strings',10:'lists',11:'tuples-sets-dictionaries',12:'functions',13:'modules-packages',14:'exceptions',15:'file-handling',16:'comprehensions',17:'oop-basics',18:'oop-advanced',19:'iterators-generators',20:'decorators-context-managers',21:'regex-json-dates',22:'pip-virtual-environments',23:'apis-requests-concepts',24:'sqlite-databases',25:'testing-debugging-logging',26:'type-hints-dataclasses',27:'async-threads-processes',28:'best-practices-security',29:'real-world-python',30:'final-python-challenge'})[Number(id)]||String(id).toLowerCase();
}
function escapeHtml(v){return String(v).replace(/[&<>'"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[ch]));}

let quizData=[],qi=0,selected=null,score=0,currentTopic=null,submitted=false;

async function quiz(id){ return loadQuiz(id); }
async function loadQuiz(id){
  currentTopic=id;
  const file=(window.PQ_TOPIC_FILES&&PQ_TOPIC_FILES[id])||`mcq/topic${String(id).padStart(2,'0')}_${topicSlug(id)}.json`;
  let data=[];
  try{
    const r=await fetch(file,{cache:'no-store'});
    if(!r.ok) throw new Error('Quiz JSON not found');
    const obj=await r.json();
    data=Array.isArray(obj.questions)?obj.questions:[];
  }catch(e){ console.error('Quiz load failed:',e); }
  quizData=data.map(q=>{let answer=typeof q.answer==='number'?q.answer:String(q.answer||'A').toUpperCase().charCodeAt(0)-65; if(answer<0||answer>3) answer=0; return {...q,answer};});
  if(quizData.length<10){ alert('This topic needs at least 10 questions.'); return; }
  // IMPORTANT: keep source JSON order. Never shuffle.
  qi=0;score=0;selected=null;submitted=false; renderQuiz(id);
}
function renderQuiz(id){
const q=quizData[qi];
const correctIndex=typeof q.answer==='number'?q.answer:(String(q.answer).toUpperCase().charCodeAt(0)-65);
document.documentElement.dataset.theme=state.theme;
app.innerHTML=header('PythonQuest','home')+`<main class="page quiz"><div class="quiz-top"><button class="back" onclick="lesson('${id}')">← Lesson</button><span>Question ${qi+1} of ${quizData.length}</span></div>
<div class="bar"><i style="width:${(qi/quizData.length)*100}%"></i></div>
<section class="quiz-card"><span class="eyebrow">CHOOSE AN ANSWER</span><h2>${escapeHtml(q.question)}</h2>
<p class="quiz-hint">Select one option. You can change it before submitting.</p>
<div class="answers">${q.options.map((o,i)=>`<button class="${selected===i?'selected':''}" onclick="selectAnswer(this,${i})" ${submitted?'disabled':''}><b>${String.fromCharCode(65+i)}</b><span>${escapeHtml(o)}</span></button>`).join('')}</div>
${submitted?`<div class="feedback ${selected===correctIndex?'ok':'bad'}"><strong>${selected===correctIndex?'Correct!':'Wrong answer'}</strong><p>${escapeHtml(q.explanation||'')}</p><button class="primary" onclick="nextQ('${id}')">${qi===quizData.length-1?'See Result':'Next Question →'}</button></div>`:`<button class="submit-answer" onclick="submitAnswer('${id}')" ${selected===null?'disabled':''}>Submit Answer</button>`}
</section></main>`;
}

function selectAnswer(btn,pick){
 if(submitted)return;
 selected=Number(pick); beep('click');
 document.querySelectorAll('.answers button').forEach(b=>b.classList.remove('selected'));
 btn.classList.add('selected');
 const submit=document.querySelector('.submit-answer'); if(submit){submit.disabled=false;submit.removeAttribute('disabled');}
}
function submitAnswer(id){
if(selected===null||submitted)return;submitted=true;
const q=quizData[qi]; const correctIndex=typeof q.answer==='number'?q.answer:(String(q.answer).toUpperCase().charCodeAt(0)-65);
if(selected===correctIndex){score++;beep('correct')}else beep('wrong');
renderQuiz(id);
}
function nextQ(id){beep('next');if(qi<quizData.length-1){qi++;selected=null;submitted=false;renderQuiz(id)}else result(id)}
function result(id){
let pct=Math.round(score/quizData.length*100),pass=pct>50;
if(pass&&!state.completed.includes(id)){state.completed.push(id);state.xp+=PQ_CONFIG.xpPerPass;save();beep('pass')}else if(!pass)beep('fail');
app.innerHTML=header('Quiz Result','roadmap')+`<main class="page result"><div class="result-card ${pass?'pass':'fail'}"><div class="result-icon">${pass?'✓':'↻'}</div><span class="eyebrow">${pass?'TOPIC COMPLETED':'TRY AGAIN'}</span><h2>${pass?'Great job!':'Quiz failed'}</h2><div class="score">${pct}%</div><p>You answered <strong>${score}</strong> out of <strong>${quizData.length}</strong> correctly.</p><p>${pass?'Your score is above 50%. The next topic is now unlocked.':'Your score is 50% or below. Review the lesson and retry.'}</p><div class="actions">${pass?`<button class="primary" onclick="roadmap()">Next Topic →</button>`:`<button class="primary" onclick="quiz('${id}')">Retry Quiz</button>`}<button class="ghost" onclick="lesson('${id}')">Review Topic</button></div></div></main>`}

function progress(){let pct=Math.round(state.completed.length/topics.length*100);app.innerHTML=header()+`<main class="page"><div class="top"><div><span class="eyebrow">YOUR PROGRESS</span><h2>Keep building your Python skills</h2></div></div><section class="stats"><div><strong>${pct}%</strong><span>Overall</span></div><div><strong>${state.completed.length}</strong><span>Topics done</span></div><div><strong>${state.xp}</strong><span>XP earned</span></div></section><section class="learn-card"><h3>Current level</h3><h2>${pct<20?'Python Starter':pct<50?'Python Explorer':pct<80?'Python Coder':pct<100?'Python Expert':'Python Master'}</h2><div class="bar"><i style="width:${pct}%"></i></div><p>${topics.length-state.completed.length} topics remaining.</p></section></main>`}
function help(){app.innerHTML=header('PythonQuest','home')+`<main class="page info-page"><span class="eyebrow">HELP CENTER</span><h2>How PythonQuest works</h2><p class="page-intro">Learn Python step by step with simple concepts and ordered quizzes.</p><div class="faq">${[['How do I start?','Open the roadmap and start with the first unlocked topic.'],['How do I unlock topics?','Pass the current topic quiz with more than 50% correct answers.'],['Can I change an answer before submitting?','Yes. Tap any option to change your selection before submitting.'],['What happens if I fail?','Review the lesson and retry the quiz as many times as you need.'],['Is my progress saved?','Yes. Your progress, language, theme and sound preference are saved in your browser.']].map(x=>`<article><h3>${x[0]}</h3><p>${x[1]}</p></article>`).join('')}</div></main>`}

function terms(){app.innerHTML=header('PythonQuest','home')+`<main class="page info-page terms-page"><span class="eyebrow">LEGAL</span><h2>Terms &amp; Conditions</h2><p class="page-intro">Last updated: September 10, 2026</p><section class="learn-card legal-card">
<h3>1. About PythonQuest</h3><p>PythonQuest is an educational learning application designed to help users learn Python programming through lessons, examples and quizzes.</p>
<h3>2. Educational Use</h3><p>All lessons, examples and quizzes are provided for learning and practice. PythonQuest does not guarantee exam results, employment, certification or any particular learning outcome.</p>
<h3>3. User Responsibility</h3><p>You are responsible for how you use the information learned through PythonQuest. Do not use programming knowledge gained from the app for unlawful, harmful or unauthorized activities.</p>
<h3>4. Accounts &amp; Progress</h3><p>The current version can save learning progress and preferences locally on your device/browser. Clearing browser data, uninstalling the app, or changing devices may remove locally stored progress.</p>
<h3>5. Intellectual Property</h3><p>Unless otherwise stated, the PythonQuest name, original interface, written lesson content, quiz content and app design are owned by the app creator. You may use the educational material for personal learning, but you may not copy, resell, redistribute or publish the app or its original content as your own without permission.</p>
<h3>6. Third-Party Links</h3><p>PythonQuest may provide links to third-party social-media websites. Those services have their own terms and privacy policies. We are not responsible for third-party content, availability or practices.</p>
<h3>7. Availability</h3><p>We aim to keep PythonQuest working correctly, but the app may contain bugs or become temporarily unavailable because of hosting, browser, network or maintenance issues.</p>
<h3>8. Changes</h3><p>These terms may be updated when the app, features or legal requirements change. The latest version shown in the application will apply to future use.</p>
<h3>9. Contact</h3><p>For questions or feedback, use the Social Media section in PythonQuest to reach the project creator through the listed official channels.</p>
<h3>10. Acceptance</h3><p>By using PythonQuest, you acknowledge that you have read and agree to these Terms &amp; Conditions.</p>
</section></main>`}

function social(){app.innerHTML=header('PythonQuest','home')+`<main class="page social-page"><div class="social-hero"><span class="eyebrow">CONNECT</span><h2>Follow PythonQuest</h2><p>Stay connected for updates, projects, learning content and announcements.</p></div><section class="social-grid premium-social">
<a class="social-card instagram" href="${PQ_CONFIG.social.instagram}" target="_blank" rel="noopener"><span class="social-icon">◎</span><span><b>Instagram</b><small>@6_hf0</small></span><strong>↗</strong></a>
<a class="social-card youtube" href="${PQ_CONFIG.social.youtube}" target="_blank" rel="noopener"><span class="social-icon">▶</span><span><b>YouTube</b><small>@Unknown_Reason</small></span><strong>↗</strong></a>
<a class="social-card github" href="${PQ_CONFIG.social.github}" target="_blank" rel="noopener"><span class="social-icon">⌘</span><span><b>GitHub</b><small>ashishyadav210</small></span><strong>↗</strong></a>
<a class="social-card telegram" href="${PQ_CONFIG.social.telegram}" target="_blank" rel="noopener"><span class="social-icon">➤</span><span><b>Telegram</b><small>Unknown Reason</small></span><strong>↗</strong></a>
</section></main>`}

function setLangOnly(v){state.lang=v;save()}
function setLang(v){state.lang=v;save();roadmap()}
function toggleTheme(){state.theme=state.theme==='dark'?'light':'dark';save();beep('click');document.documentElement.dataset.theme=state.theme}
function toggleSound(){state.sound=!state.sound;save();if(state.sound)beep('click');home()}
document.documentElement.dataset.theme=state.theme;
if('serviceWorker'in navigator)navigator.serviceWorker.register('service-worker.js').catch(()=>{});
home();
