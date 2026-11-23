/*Dark / Light Mode*/
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.dataset.theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    setTheme(newTheme);
});

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    themeToggle.textContent = theme === "dark" ? "☼" : "☾";
    localStorage.setItem("cv-theme", theme);
}

const savedTheme = localStorage.getItem("cv-theme");
const preferredTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

setTheme(preferredTheme);




/*Translation system*/
const translations = {

    pt: {
        //Header
        navAbout: "Sobre",
        navEducation: "Educação",
        navExperience: "Experiência",
        navSkills: "Competências",
        navProjects: "Projetos",
        navContact: "Contacto",

        //Section Welcome / Home
        hello: "Olá, sou",
        role: "Engenheiro Informático · Cibersegurança · Software Development",
        intro: "Engenheiro Informático apaixonado pelo desenvolvimento de software e pela cibersegurança, com foco em Java, Spring Boot, Python, bases de dados, cloud e segurança de redes.",
        contactMe: "Contacta-me",
        downloadCV: "Descarregar CV",




        // About Section
        aboutTitle: "Um pouco sobre mim.",
        aboutText1: "Sou Engenheiro Informático, formado pelo IPCB, e encontro-me atualmente especializado nas áreas da Cibersegurança e da Informática Forense. A minha formação permitiu-me desenvolver uma base sólida em desenvolvimento de software, bases de dados, redes e tecnologias Cloud, com particular contacto com o Microsoft Azure.",
        aboutText2: "Ao longo do meu percurso académico, trabalhei com tecnologias como Java, Spring Boot, Python, PHP, HTML e SQL, desenvolvendo projetos que me permitiram consolidar conhecimentos tanto no desenvolvimento de aplicações como na gestão e utilização de bases de dados.",
        aboutText3: "O meu interesse pela Cibersegurança levou-me a aprofundar conhecimentos em áreas como a análise forense digital, a segurança de redes, a monitorização e os testes de intrusão (Pentesting). Atualmente, tenho especial interesse nas áreas de Security Operations Center (SOC), monitorização de dispositivos, Threat Hunting e Pentesting.",
        aboutText4: "Procuro continuar a desenvolver as minhas competências e aplicar os meus conhecimentos em projetos que integrem desenvolvimento de software, infraestrutura e cibersegurança.",
        // Personal Information
        personalInfoTitle: "Dados Pessoais",
        personalName: "Nome:",
        personalBirth: "Data de nascimento:",
        personalNationality: "Nacionalidade:",
        personalNationalityValue: "Portuguesa",
        personalGender: "Sexo:",
        personalGenderValue: "Masculino",
        // Languages
        languagesTitle: "Competências Linguísticas",
        languagePortuguese: "Português:",
        languageNative: "Nativo",
        languageEnglish: "Inglês:",
        languageReading: "Compreensão escrita:",
        languageSpeaking: "Expressão oral:",
        languageWriting: "Expressão escrita:",
        levelAdvanced: "Avançado",
        levelIntermediate: "Intermédio",
        // Hobbies and Personal Interests
        hobbiesTitle: "Passatempos e Interesses Pessoais",
        hobby1: "Gosto de cozinhar e experimentar novas receitas.",
        hobby2: "Gosto de fazer caminhadas, correr e participar em algumas provas de 12 km, 15 km e 21 km.",
        hobby3: "Gosto de viajar e conhecer novos sítios.",
        hobby4: "Fui escuteiro durante 10 anos.",
        hobby5: "Gosto de ver filmes e séries.",
        // Career Objectives
        objectivesTitle: "Objetivos",
        objective1: "Obter uma posição de nível inicial na área de TI ou cibersegurança para ganhar experiência prática.",
        objective2: "Desenvolver as minhas competências em áreas como desenvolvimento Web, bases de dados e cibersegurança.",
        objective3: "Continuar a aprender cibersegurança em plataformas como TryHackMe e Hack The Box.",
        objective4: "Participar em desafios de CTF (Capture The Flag).",
        objective5: "Melhorar as minhas competências linguísticas.",



        //Education Section
        educationSectionTitle: "Educação e formação.",
        educationTitle1: "Licenciatura em Engenharia Informática",
        educationPlace1: "Instituto Politécnico de Castelo Branco",
        educationGrade1: "Classificação final: 16 Valores",
        educationText11: "Redes de Computadores (Cisco Packet Tracer, Wireshark)",
        educationText12: "Computação Móvel (Android Studio - Java e Kotlin)",
        educationText13: "Desenvolvimento Web (HTML, CSS e PHP)",
        educationText14: "Base de Dados (Oracle - SQL, Neo4j, MongoDB, Power BI)",
        educationText15: "Linguagens de Programação (Java e Python)",
        educationText16: "Serviços de Informática em Nuvem (Azure)",
        educationText17: "Internet das coisas",
        educationText18: "Cibersegurança (Palo Alto Networks, Criptografia, Kali Linux)",

        educationTitle2: "Mestrado em Cibersegurança e Informática Forense",
        educationPlace2: "Instituto Politécnico de Leiria",
        educationGrade2: "Classificação final: Em curso",
        educationText21: "Teste de Penetração: Kali Linux (Nmap, Nessus, OpenVAS)",
        educationText22: "Análise Forense Digital (Autopsy, Wireshark)",
        educationText23: "Gestão de Segurança (Políticas e práticas de cibersegurança)",
        educationText24: "Criptografia (RSA, AES, técnicas de encriptação e hashing)",
        educationText25: "Gestão e Análise de Relatórios de Segurança (Altair RapidMiner)",


        //Experience Section
        experienceSectionTitle: "Experiência Profissional.",
        experienceTitle1: "Estagiário em Cibersegurança (Remoto)",
        experienceCompany1: "Cachapuz - Bilanciai Group",
        experiencePlace1: "Braga",
        experienceRole1: "Estágio Curricular no âmbito do Mestrado em Cibersegurança e Informática Forense do Instituto Politécnico de Leiria",
        educationGrade1: "Classificação do Projeto de estágio: 18 Valores",
        experienceText11: "Análise de sistemas, redes e serviços da organização (firewall, router, domínios e subdomínios)",
        experienceText12: "Reconhecimento e enumeração de ativos (Nmap, Subfinder, Whois , etc)",
        experienceText13: "Identificação de vulnerabilidades (Nessus, OpenVAS)",
        experienceText14: "Testes de segurança web (Burp Suite, Nikto)",
        experienceText15: "Análise de tráfego (Wireshark, tcpdump)",
        experienceText16: "Testes de autenticação e força bruta (Hydra e Medusa)",
        experienceText17: "Documentação técnica",
        experienceText18: "Apoio na implementação de soluções de monitorização (Datadog)",
        experienceText19: "Gestão e análise de identidades e acessos com Microsoft Entra ID",
        experienceText110: "Configuração de políticas de proteção de dados com Microsoft Purview",
        recommendationText: "Carta de recomendação emitida pela Cachapuz, assinada digitalmente pela Administração de Sistemas da empresa.",
        recommendationButton: "Descarregar PDF",




        // Skills Section
        skillsTitle: "Competências.",

        skillCategory1: "Cibersegurança",
        skillCategory2: "Ferramentas de Segurança",
        skillCategory3: "Normas e Conformidade",
        skillCategory4: "Desenvolvimento de Software",
        skillCategory5: "Bases de Dados e Análise de Dados",
        skillCategory6: "Redes e Infraestrutura",
        skillCategory7: "Cloud e Sistemas",
        skillCategory8: "Outras Tecnologias",
        // Cybersecurity
        skillText11: "Cibersegurança",
        skillText12: "Testes de Intrusão",
        skillLabel13: "Threat Hunting:",
        skillLabel14: "Informática Forense Digital:",
        skillText15: "Segurança de Redes",
        skillText16: "Avaliação de Vulnerabilidades",
        skillText17: "Criptografia",
        // Standards & Compliance
        skillText31: "NIST Cybersecurity Framework",
        // Software Development
        skillText41: "Kotlin (Desenvolvimento de Aplicações Móveis)",
        skillText42: "Assembly (Linguagem de Baixo Nível)",
        // Networks & Infrastructure
        skillText61: "Redes de Computadores",
        skillText62: "Firewalls",
        skillText63: "Routers",
        skillText64: "Programação de Scripts Bash",
        // Cloud & Systems
        skillText71: "Gestão de Identidades e Acessos (IAM)",
        skillText72: "Computação em Nuvem",
        // Other Technologies
        skillText82: "Extração de Dados de PDF",
        skillText83: "Redes Neuronais Convolucionais (CNN)",
        skillText84: "Desenvolvimento de Aplicações Móveis",



        // Projects Section
        projectsTitle: "Projetos.",
        projectTitle1: "Aplicação Móvel para Reconhecimento de Pratos Portugueses",
        projectDescription1: "Desenvolvimento de uma aplicação móvel para reconhecimento de pratos tradicionais portugueses através de classificação de imagem.",
        projectText11: "Utilização da câmara do dispositivo para capturar imagens dos pratos.",
        projectText12: "Processamento local das imagens com recurso ao TensorFlow Lite.",
        projectText13: "Modelo baseado numa rede neuronal convolucional (CNN) treinada de forma personalizada.",
        projectText14: "Foco no reconhecimento rápido e offline de pratos da gastronomia portuguesa.",

        projectTitle2: "Wordlist de Nomes Portugueses (Portugal)",
        projectDescription2: "Projeto de criação de uma wordlist de nomes portugueses para enumeração de utilizadores em cibersegurança.",
        projectText21: "Desenvolvimento de três scripts em Python para recolha de nomes próprios, apelidos e combinações automáticas.",
        projectText22: "Extração de dados a partir de documentos PDF oficiais e scraping de websites.",
        projectText23: "Geração de um dataset com cerca de 7.548 nomes próprios e 21.422 apelidos.",
        projectText24: "Geração de aproximadamente 161 milhões de combinações de nomes.",
        projectGithubButton: "Ver projeto no GitHub",

        
        projectTitle3: "Aprendizagem de Programação Web",
        projectDescription3: "Aprendizagem de desenvolvimento Web e de aplicações através de plataformas online, principalmente The Odin Project e YouTube, com o objetivo de desenvolver projetos pessoais.",
        projectText31: "Aprendizagem de desenvolvimento Web e de aplicações através de recursos online.",
        projectText32: "Estudo e aplicação prática de HTML, CSS, JavaScript, Node.js e React.",
        projectText33: "Aplicação dos conhecimentos adquiridos no desenvolvimento de diversos projetos práticos.",
        projectText34: "Desenvolvimento de projetos integrados no percurso de aprendizagem The Odin Project.",
        learningDesc1: "Jogo interativo em que o jogador compete contra o computador no clássico jogo Pedra, Papel ou Tesoura.",
        learningDesc2: "Painel de administração desenvolvido para apresentar informações, estatísticas e dados de gestão através de uma interface organizada.",
        learningDesc3: "Interface de autenticação de utilizadores, com formulário de início de sessão e design adaptado a diferentes dispositivos.",
        learningDesc4: "Website de um restaurante desenvolvido com HTML, CSS e JavaScript, com conteúdo dinâmico, JavaScript modular e Webpack.",
        learningDesc5: "Aplicação de gestão de tarefas que permite organizar e acompanhar as atividades do dia a dia, desenvolvida com JavaScript, HTML, CSS e Webpack.",
        learningDesc6: "Aplicação meteorológica que permite pesquisar diferentes localizações e consultar as condições meteorológicas atuais e respetivas previsões, desenvolvida com JavaScript, HTML, CSS, Webpack e a API Visual Crossing Weather.",
        projectLiveButton: "Ver demonstração",

        // Contact Section
        contactTitle: "Vamos conversar?",
        contactEmail: "Email",
        contactLinkedin: "Perfil profissional",
        contactLocation: "Localização",
    },

    en: {
        //Header
        navAbout: "About",
        navEducation: "Education",
        navExperience: "Experience",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",


        //Section Welcome / Home
        hello: "Hello, I'm",
        role: "Computer Engineer · Cybersecurity · Software Development",
        intro: "Computer Engineer passionate about software development and cybersecurity, with a focus on Java, Spring Boot, Python, databases, cloud computing, and network security.",
        contactMe: "Get in touch",
        downloadCV: "Download résumé",


        // About Section
        aboutTitle: "A little about me.",
        aboutText1: "I am a Computer Engineer, graduated from IPCB, currently specialising in Cybersecurity and Digital Forensics. My academic background has allowed me to develop a solid foundation in software development, databases, networking, and Cloud technologies, with particular experience in Microsoft Azure.",
        aboutText2: "Throughout my academic journey, I have worked with technologies such as Java, Spring Boot, Python, PHP, HTML, and SQL, developing projects that allowed me to strengthen my knowledge of both application development and database management and utilisation.",
        aboutText3: "My interest in Cybersecurity has led me to deepen my knowledge in areas such as digital forensics, network security, monitoring, and penetration testing (Pentesting). I am currently particularly interested in Security Operations Centers (SOC), device monitoring, Threat Hunting, and Pentesting.",
        aboutText4: "I am looking to continue developing my skills and applying my knowledge to projects that combine software development, infrastructure, and cybersecurity.",
        // Personal Information
        personalInfoTitle: "Personal Information",
        personalName: "Name:",
        personalBirth: "Date of Birth:",
        personalNationality: "Nationality:",
        personalNationalityValue: "Portuguese",
        personalGender: "Gender:",
        personalGenderValue: "Male",
        // Languages
        languagesTitle: "Language Skills",
        languagePortuguese: "Portuguese:",
        languageNative: "Native",
        languageEnglish: "English:",
        languageReading: "Reading Comprehension:",
        languageSpeaking: "Speaking:",
        languageWriting: "Writing:",
        levelAdvanced: "Advanced",
        levelIntermediate: "Intermediate",
        // Hobbies and Personal Interests
        hobbiesTitle: "Hobbies and Personal Interests",
        hobby1: "I enjoy cooking and trying out new recipes.",
        hobby2: "I enjoy hiking, running and taking part in 12 km, 15 km and 21 km races.",
        hobby3: "I enjoy travelling and discovering new places.",
        hobby4: "I was a Scout for 10 years.",
        hobby5: "I enjoy watching films and TV series.",
        // Career Objectives
        objectivesTitle: "Career Objectives",
        objective1: "Obtain an entry-level position in IT or cybersecurity to gain practical experience.",
        objective2: "Develop my skills in areas such as web development, databases and cybersecurity.",
        objective3: "Continue learning about cybersecurity through platforms such as TryHackMe and Hack The Box.",
        objective4: "Participate in CTF (Capture The Flag) challenges.",
        objective5: "Improve my language skills.",



        //Education Section
        educationSectionTitle: "Education.",
        educationTitle1: "Bachelor's Degree in Computer Engineering",
        educationPlace1: "Polytechnic Institute of Castelo Branco",
        educationGrade1: "Final grade: 16",
        educationText11: "Computer Networks (Cisco Packet Tracer, Wireshark)",
        educationText12: "Mobile Computing (Android Studio – Java and Kotlin)",
        educationText13: "Web Development (HTML, CSS, and PHP)",
        educationText14: "Databases (Oracle SQL, Neo4j, MongoDB, Power BI)",
        educationText15: "Programming Languages (Java and Python)",
        educationText16: "Cloud Computing Services (Azure)",
        educationText17: "Internet of Things (IoT)",
        educationText18: "Cybersecurity (Palo Alto Networks, Cryptography, Kali Linux)",

        educationTitle2: "Master in Cybersecurity and Forensic Computing",
        educationPlace2: "Polytechnic Institute of Leiria",
        educationGrade2: "Final grade: In progress",
        educationText21: "Penetration Testing: Kali Linux (Nmap, Nessus, OpenVAS)",
        educationText22: "Digital Forensics (Autopsy, Wireshark)",
        educationText23: "Security Management (Cybersecurity Policies and Practices)",
        educationText24: "Cryptography (RSA, AES, Encryption and Hashing Techniques)",
        educationText25: "Security Report Management and Analysis (Altair RapidMiner)",


        //Experience Section
        experienceSectionTitle: "Professional Experience",
        experienceTitle1: "Cybersecurity Intern (Remote)",
        experienceCompany1: "Cachapuz - Bilanciai Group",
        experiencePlace1: "Braga",
        experienceRole1: "Curricular Internship as part of the Master's Degree in Cybersecurity and Digital Forensics at the Polytechnic University of Leiria.",
        educationGrade1: "Internship Project Grade: 18/20",
        experienceText11: "Analysis of the organization's systems, networks, and services (firewalls, routers, domains, and subdomains)",
        experienceText12: "Asset Discovery and Enumeration (Nmap, Subfinder, Whois, etc.)",
        experienceText13: "Vulnerability Identification (Nessus, OpenVAS)",
        experienceText14: "Web Security Testing (Burp Suite, Nikto)",
        experienceText15: "Network Traffic Analysis (Wireshark, tcpdump)",
        experienceText16: "Authentication and Brute-Force Testing (Hydra, Medusa)",
        experienceText17: "Technical Documentation",
        experienceText18: "Assistance with the Implementation of Monitoring Solutions (Datadog)",
        experienceText19: "Identity and Access Management and Analysis using Microsoft Entra ID",
        experienceText110: "Configuration of Data Protection Policies using Microsoft Purview",
        recommendationText: "Letter of recommendation issued by Cachapuz, digitally signed by the company's Systems Administration.",
        recommendationButton: "Download PDF",

        

        // Skills Section
        skillsTitle: "Skills.",
        skillCategory1: "Cybersecurity",
        skillCategory2: "Security Tools",
        skillCategory3: "Standards & Compliance",
        skillCategory4: "Software Development",
        skillCategory5: "Databases & Data Analysis",
        skillCategory6: "Networks & Infrastructure",
        skillCategory7: "Cloud & Systems",
        skillCategory8: "Other Technologies",
        // Cybersecurity
        skillText11: "Cybersecurity",
        skillText12: "Penetration Testing",
        skillLabel13: "Threat Hunting:",
        skillLabel14: "Digital Forensics:",
        skillText15: "Network Security",
        skillText16: "Vulnerability Assessment",
        skillText17: "Cryptography",
        // Standards & Compliance
        skillText31: "NIST Cybersecurity Framework",
        // Software Development
        skillText41: "Kotlin (Mobile Application Development)",
        skillText42: "Assembly (Low-Level Programming Language)",
        // Networks & Infrastructure
        skillText61: "Computer Networking",
        skillText62: "Firewalls",
        skillText63: "Routers",
        skillText64: "Bash Scripting",
        // Cloud & Systems
        skillText71: "Identity and Access Management (IAM)",
        skillText72: "Cloud Computing",
        // Other Technologies
        skillText82: "PDF Data Extraction",
        skillText83: "Convolutional Neural Networks (CNN)",
        skillText84: "Mobile Application Development",




        // Projects Section
        projectsTitle: "Projects.",
        projectTitle1: "Mobile App for Portuguese Food Recognition",
        projectDescription1: "Development of a mobile application for recognizing traditional Portuguese dishes through image classification.",
        projectText11: "Use of the device camera to capture images of food dishes.",
        projectText12: "On-device image processing using TensorFlow Lite.",
        projectText13: "Model based on a custom-trained Convolutional Neural Network (CNN).",
        projectText14: "Focused on fast, offline recognition of traditional Portuguese dishes.",

        projectTitle2: "Portuguese Names Wordlist (Portugal)",
        projectDescription2: "Project focused on creating a Portuguese names wordlist for user enumeration in cybersecurity.",
        projectText21: "Development of three Python scripts to collect first names, surnames, and automatically generate combinations.",
        projectText22: "Data extraction from official PDF documents and website scraping.",
        projectText23: "Dataset generation containing approximately 7,548 first names and 21,422 surnames.",
        projectText24: "Generation of approximately 161 million name combinations.",
        projectGithubButton: "View project on GitHub",

        projectTitle3: "Web Programming Learning",
        projectDescription3: "Learning web and application development through online platforms, mainly The Odin Project and YouTube, with the goal of developing personal projects.",
        projectText31: "Learning web and application development through online resources.",
        projectText32: "Studying and practising HTML, CSS, JavaScript, Node.js and React.",
        projectText33: "Applying acquired knowledge to the development of several practical projects.",
        projectText34: "Developing projects as part of the The Odin Project learning path.",
        learningDesc1: "Interactive game where the player competes against the computer in the classic Rock Paper Scissors challenge.",
        learningDesc2: "Administrative dashboard designed to display information, statistics and management data through an organized interface.",
        learningDesc3: "User authentication interface featuring a login form and a responsive design for different devices.",
        learningDesc4: "Restaurant website built with HTML, CSS and JavaScript, featuring dynamic content, modular JavaScript and Webpack.",
        learningDesc5: "Task management application that allows users to organize and manage daily activities, built with JavaScript, HTML, CSS and Webpack.",
        learningDesc6: "Weather application that allows users to search for different locations and view current weather conditions and forecasts, built with JavaScript, HTML, CSS, Webpack and the Visual Crossing Weather API.",
        projectLiveButton: "Live Demo",


        // Contact Section
        contactTitle: "Let's talk?",
        contactEmail: "Email",
        contactLinkedin: "Professional Profile",
        contactLocation: "Location"
    }

};


let currentLanguage = "pt";
const languageToggle = document.getElementById("languageToggle");

function setLanguage(language) {
    currentLanguage = language;

    document.documentElement.lang = language;

    document.querySelectorAll("[data-translate]").forEach(element => {
        const key = element.dataset.translate;

        if (translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });

    languageToggle.textContent = language === "pt" ? "EN" : "PT";
    localStorage.setItem("cv-language", language);
}

if (languageToggle) {
    languageToggle.addEventListener("click", () => {
        const newLanguage = currentLanguage === "pt" ? "en" : "pt";
        setLanguage(newLanguage);
    });
}

const savedLanguage = localStorage.getItem("cv-language");
const browserLanguage = navigator.language.toLowerCase();
const preferredLanguage = savedLanguage || (browserLanguage.startsWith("pt") ? "pt" : "en");

setLanguage(preferredLanguage);