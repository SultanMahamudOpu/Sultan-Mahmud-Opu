const projects = [
  {
    title:"StudyForge AI", period:"2026", category:"AI Learning Platform",
    description:"An AI-powered learning platform with AI Tutor, Study Planner, Smart Quiz, and PDF Reader. It supports personalized study plans, interactive quizzes with instant scoring, PDF-grounded chatbot responses, Bangla-English support, text-to-speech, and PDF downloading.",
    tech:["Python","LangChain","Gemma","ElevenLabs","Flask"],
    live:"https://studyforge-ai-hacktoberfest-urd7.onrender.com/", github:""
  },
  {
    title:"HSTU Student Complaint Management System", period:"June 2026 – August 2026", category:"Web Application",
    description:"A web-based complaint management system with unique complaint ID tracking, complaint status updates, student feedback, and an admin panel for review, status management, and monitoring.",
    tech:["HTML","CSS","JavaScript","Backend","MySQL"],
    live:"https://student-complaint-management-system2.onrender.com", github:""
  },
  {
    title:"Personal Local Cloud Storage and File Sharing System", period:"May 2026 – July 2026", category:"Cloud Computing",
    description:"A local cloud platform for file storage, organization, and sharing, with QR/IP-based access, folder management, dashboards, file recovery, encrypted storage, and external file sharing using Ngrok.",
    tech:["Python","FastAPI","MySQL","HTML","CSS","JavaScript","Ngrok"],
    live:"", github:"https://github.com/SultanMahamudOpu/Cloud-Computing-4-II-project---Personal-Cloud"
  },
  {
    title:"Diabetes Prediction System", period:"2026", category:"Machine Learning",
    description:"A diabetes prediction model built on 2,019 records with 15 features, achieving 95.67% accuracy. The project applies preprocessing, scaling, normalization, Bayesian hyperparameter optimization, ROC-AUC, stratified 5-fold cross-validation, stress testing, and SHAP feature-importance analysis.",
    tech:["Python","Scikit-learn","SHAP","Gradio"],
    live:"https://huggingface.co/spaces/Sultan033/Diabetes_Prediction_System_2", github:""
  },
  {
    title:"Tic-Tac-Toe AI Game", period:"2026", category:"AI Game",
    description:"An interactive Tic-Tac-Toe game with three AI difficulty levels using Minimax with alpha-beta pruning. Deployed via GitHub Pages.",
    tech:["HTML","CSS","JavaScript","Minimax"],
    live:"https://sultanmahamudopu.github.io/Tic-Tac-Toe/", github:""
  },
  {
    title:"HSTU S&T Hub: Real-Time Communication System", period:"January 2025 – June 2025", category:"Academic Communication Platform",
    description:"A platform for teachers and Class Representatives to manage schedules, rooms, and academic communication, with real-time messaging, role-based access, and an AI chatbot using Firebase and Supabase.",
    tech:["Flutter","Android","iOS","Web","Supabase","Firebase"],
    live:"", github:"https://github.com/Najma-Lopa/Room-Allocation"
  }
];

const grid=document.getElementById("project-grid");
projects.forEach((p,i)=>{
  const card=document.createElement("article");
  card.className="project-card reveal";
  card.innerHTML=`<span class="project-number">PROJECT ${String(i+1).padStart(2,"0")}</span>
    <h3>${p.title}</h3><p>${p.description.slice(0,145)}${p.description.length>145?"…":""}</p>
    <div class="project-footer"><span class="project-stack">${p.tech.slice(0,3).join(" • ")}</span>${p.live ? `<a class="card-live" href="${p.live}" target="_blank" rel="noopener" onclick="event.stopPropagation()">Live Demo ↗</a>` : ""}</div>`;
  card.addEventListener("click",()=>openProject(p));
  grid.appendChild(card);
});

const modal=document.getElementById("modal");
function openProject(p){
  document.getElementById("modal-category").textContent=p.category;
  document.getElementById("modal-title").textContent=p.title;
  document.getElementById("modal-period").textContent=p.period;
  document.getElementById("modal-description").textContent=p.description;
  document.getElementById("modal-tech").innerHTML=p.tech.map(x=>`<span>${x}</span>`).join("");
  const live=document.getElementById("modal-live"), gh=document.getElementById("modal-github");
  live.style.display=p.live?"inline-flex":"none"; gh.style.display=p.github?"inline-flex":"none";
  if(p.live) live.href=p.live; if(p.github) gh.href=p.github;
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""}
document.querySelector(".modal-close").addEventListener("click",closeModal);
document.querySelector(".modal-backdrop").addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const menu=document.querySelector(".menu-toggle"), links=document.querySelector(".nav-links");
menu.addEventListener("click",()=>links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const theme=document.querySelector(".theme-toggle");
if(localStorage.getItem("opu-theme")==="dark")document.body.classList.add("dark");
theme.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("opu-theme",document.body.classList.contains("dark")?"dark":"light")});

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

window.addEventListener("scroll",()=>{
  const h=document.documentElement, max=h.scrollHeight-h.clientHeight;
  document.querySelector(".progress").style.width=`${(window.scrollY/max)*100}%`;
});
