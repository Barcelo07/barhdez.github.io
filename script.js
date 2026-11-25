const translations = {
  es: {
    nav_about:"Sobre mí",nav_education:"Formación",nav_areas:"Áreas",nav_projects:"Proyectos",nav_contact:"Contacto",
    hero_kicker:"PORTAFOLIO ACADÉMICO · INGENIERÍA",hero_hello:"Hola, soy",hero_role:"Estudiante de Ingeniería en Automática",
    hero_desc:"Exploro la conexión entre matemáticas, programación, electrónica y sistemas de control para comprender y construir tecnología.",
    hero_cta:"Explorar proyectos",hero_more:"Conocer mi perfil",strip_text:"APRENDER · EXPERIMENTAR · DOCUMENTAR · MEJORAR",
    about_title:"Sobre mí",about_lead:"Soy estudiante de primer año de Ingeniería en Automática en la Facultad de Ingeniería Automática y Biomédica de la CUJAE.",
    about_p1:"Este espacio documenta mi proceso de formación: los fundamentos que estudio, las herramientas que aprendo a utilizar y los proyectos que desarrollo a lo largo de mi carrera.",
    about_p2:"Me interesa comprender cómo interactúan el software, la electrónica y los sistemas físicos para resolver problemas reales. Mi enfoque es aprender con rigor, experimentar y comunicar cada resultado con claridad.",
    education_title:"Formación",present:"ACTUALIDAD",degree:"Ingeniería en Automática",education_desc:"Formación universitaria · Plan E · Primer año",education_location:"La Habana, Cuba",
    education_note:"Esta sección crecerá con asignaturas cursadas, cursos complementarios, certificaciones y experiencias académicas verificables.",
    areas_title:"Áreas de desarrollo",areas_desc:"Los campos que estoy construyendo como base de mi perfil profesional.",
    area_math:"Matemáticas y Física",area_math_desc:"Modelación, cálculo, álgebra y fundamentos físicos.",
    area_code:"Programación",area_code_desc:"C++, Python, algoritmos y herramientas computacionales.",
    area_electronics:"Electrónica",area_electronics_desc:"Circuitos, componentes, análisis y simulación.",
    area_control:"Control e instrumentación",area_control_desc:"Sensores, sistemas dinámicos, medición y control.",
    area_automation:"Automatización industrial",area_automation_desc:"PLC, procesos industriales e integración de sistemas.",
    area_research:"Investigación y robótica",area_research_desc:"Exploración, documentación técnica y proyectos interdisciplinarios.",
    projects_title:"Proyectos",projects_desc:"Un registro de prácticas, experimentos y soluciones desarrolladas durante mi formación.",
    projects_status:"PORTAFOLIO EN CONSTRUCCIÓN",projects_empty_title:"Los primeros proyectos están por venir.",
    projects_empty_desc:"Aquí publicaré código, simulaciones, informes y aprendizajes. Cada entrada incluirá el problema, el proceso y los resultados.",
    tools_title:"Herramientas",tools_note:"La lista refleja herramientas de trabajo y aprendizaje; se actualizará a medida que aumente mi experiencia práctica.",
    contact_title:"Construyamos<br>algo que importe",contact_desc:"Estoy abierto a aprender, colaborar y conectar con personas interesadas en ingeniería, tecnología e investigación.",
    footer_text:"Portafolio académico y profesional · En constante construcción."
  },
  en: {
    nav_about:"About",nav_education:"Education",nav_areas:"Focus areas",nav_projects:"Projects",nav_contact:"Contact",
    hero_kicker:"ACADEMIC PORTFOLIO · ENGINEERING",hero_hello:"Hello, I'm",hero_role:"Automation Engineering Student",
    hero_desc:"I explore the connection between mathematics, programming, electronics and control systems to understand and build technology.",
    hero_cta:"Explore projects",hero_more:"About my profile",strip_text:"LEARN · EXPERIMENT · DOCUMENT · IMPROVE",
    about_title:"About me",about_lead:"I am a first-year Automation Engineering student at the Faculty of Automatic and Biomedical Engineering at CUJAE.",
    about_p1:"This space documents my learning journey: the fundamentals I study, the tools I learn to use and the projects I develop throughout my degree.",
    about_p2:"I am interested in understanding how software, electronics and physical systems interact to solve real problems. My approach is to learn rigorously, experiment and communicate results clearly.",
    education_title:"Education",present:"PRESENT",degree:"Automation Engineering",education_desc:"Undergraduate studies · Plan E · First year",education_location:"Havana, Cuba",
    education_note:"This section will grow with completed courses, additional training, certifications and verifiable academic experiences.",
    areas_title:"Focus areas",areas_desc:"The fields I am developing as the foundation of my professional profile.",
    area_math:"Mathematics & Physics",area_math_desc:"Modeling, calculus, algebra and physical foundations.",
    area_code:"Programming",area_code_desc:"C++, Python, algorithms and computational tools.",
    area_electronics:"Electronics",area_electronics_desc:"Circuits, components, analysis and simulation.",
    area_control:"Control & Instrumentation",area_control_desc:"Sensors, dynamic systems, measurement and control.",
    area_automation:"Industrial Automation",area_automation_desc:"PLC, industrial processes and system integration.",
    area_research:"Research & Robotics",area_research_desc:"Exploration, technical documentation and interdisciplinary projects.",
    projects_title:"Projects",projects_desc:"A record of practical work, experiments and solutions developed throughout my studies.",
    projects_status:"PORTFOLIO IN PROGRESS",projects_empty_title:"The first projects are on their way.",
    projects_empty_desc:"I will publish code, simulations, reports and learning outcomes here. Each entry will explain the problem, process and results.",
    tools_title:"Tools",tools_note:"This list reflects tools used for learning and work; it will be updated as my practical experience grows.",
    contact_title:"Let's build<br>something meaningful",contact_desc:"I am open to learning, collaborating and connecting with people interested in engineering, technology and research.",
    footer_text:"Academic and professional portfolio · Always a work in progress."
  }
};
let currentLang = "es";
const langToggle = document.getElementById("langToggle");
function setLanguage(lang){
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key] !== undefined) el.innerHTML = translations[lang][key];
  });
  langToggle.textContent = lang === "es" ? "EN" : "ES";
  langToggle.setAttribute("aria-label", lang === "es" ? "Switch to English" : "Cambiar a español");
}
langToggle.addEventListener("click",()=>setLanguage(currentLang === "es" ? "en" : "es"));
document.getElementById("year").textContent = new Date().getFullYear();
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".nav");
menuToggle.addEventListener("click",()=>{
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded",String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
  nav.classList.remove("open"); menuToggle.setAttribute("aria-expanded","false"); menuToggle.textContent="☰";
}));
