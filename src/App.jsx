import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Menu, X, ChevronRight, Terminal, Cpu, Database, Layout, Mail as MailIcon, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import heroPhoto from './assets/hero_photo.jpg';
import swasthaImg from './assets/swasthapath.png';
import aegisImg from './assets/aegisgan.png';
import multipdfImg from './assets/multipdf.png';
import signlangImg from './assets/signlang.png';

const projectImages = {
  'SwasthaPath (HDIMS)': swasthaImg,
  'AegisGAN Network IDS': aegisImg,
  'MultiPDF AI Chat': multipdfImg,
  'Sign Language Recognition AI': signlangImg
};


const SectionTitle = ({ title, subtitle, center = false }) => (
  <div className={`mb-12 ${center ? 'text-center' : ''}`}>
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">{title}</h2>
    <div className={`w-12 h-1 bg-[#3b82f6] rounded-full mb-6 ${center ? 'mx-auto' : ''}`}></div>
    {subtitle && <p className={`text-slate-400 max-w-2xl text-base sm:text-lg ${center ? 'mx-auto' : ''}`}>{subtitle}</p>}
  </div>
);

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  const roles = ['Web Developer', 'Data Science', 'AI/ML Developer', 'AI Researcher'];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'education', 'certificates', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Certificates', href: '#certificates', id: 'certificates' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const techIcons = {
    // Languages
    'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
    'Java': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
    'SQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg',
    'R': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',

    // Frameworks/Libraries
    'Langchain': 'https://raw.githubusercontent.com/langchain-ai/langchain/master/docs/static/img/langchain_logo.png',
    'OpenCV': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    'Flask': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
    'FastAPI': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    'Scikit-learn': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    'TensorFlow': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    'Streamlit': 'https://streamlit.io/images/brand/streamlit-mark-color.svg',
    'Seaborn': 'https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-wide-lightbg.svg',
    'NumPy': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',

    // Tools
    'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    'PowerBI': 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Power_bi_logo_black.svg',
    'N8N': 'https://docs.n8n.io/assets/images/n8n-logo.svg',
    'Postman': 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',

    // Platforms
    'Linux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    'Supabase': 'https://raw.githubusercontent.com/supabase/supabase/master/packages/common/assets/images/supabase-logo-icon.svg',
    'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    'Oracle': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg',
    'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    'AWS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-200 font-sans selection:bg-blue-500/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#070b14]/70 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <a href="#home" className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105">
            <img src="/favicon.png" alt="Logo" className="h-8 w-8 object-contain" />
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 ${activeSection === link.id ? 'text-blue-400' : 'text-slate-400 hover:text-blue-400'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button className="md:hidden text-slate-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0b1220] border-b border-white/5"
            >
              <div className="flex flex-col p-6 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base font-medium transition-colors ${activeSection === link.id ? 'text-blue-400' : 'text-slate-400'}`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="section-container flex items-center min-h-screen pt-28 md:pt-20">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
          {/* Column 1: Hero Content (Left/Top) */}
          <div className="flex-1 order-1 md:order-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[9px] sm:text-[11px] font-bold tracking-widest uppercase mb-6"
            >
              Open to Full-Time Roles & Freelance Projects
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight text-white"
            >
              Nikhil Nandu Goral
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 mb-8 font-medium leading-normal flex flex-nowrap items-baseline gap-2 whitespace-nowrap overflow-visible"
            >
              <span className="text-[10px] sm:text-xs md:text-sm text-slate-400 uppercase tracking-widest font-black flex-shrink-0">Entry-Level</span>
              <span className="inline-flex relative h-[1.1em] overflow-visible flex-shrink-0">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[currentTitleIndex]}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-blue-500 whitespace-nowrap text-lg sm:text-2xl md:text-4xl font-bold"
                  >
                    {roles[currentTitleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base sm:text-lg text-slate-400 mb-10 max-w-2xl leading-relaxed"
            >
              Building AI-driven applications with a strong foundation in Python, Machine Learning, and Generative AI from data preprocessing to deployment.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 flex-nowrap"
            >
              <a href="#projects" className="btn-primary whitespace-nowrap text-sm sm:text-base px-4 sm:px-8">View Projects</a>
              <a 
                href="https://drive.google.com/file/d/1LBZaWU3xCAFnnNmCYBj9Yihp0Kopgnpy/view?usp=drive_link" 
                target="_blank"
                rel="noreferrer" 
                className="btn-secondary whitespace-nowrap text-sm sm:text-base px-4 sm:px-8 flex items-center gap-2"
              >
                <FileDown size={18} /> Resume
              </a>
              <div className="flex gap-4 sm:gap-6 items-center">
                <a href="https://github.com/NikhilGoral28" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-all duration-300">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/NikhilGoral" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-blue-400 transition-all duration-300">
                  <Linkedin size={20} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Hero Image (Right/Bottom) */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex-shrink-0 order-2 md:order-2 self-stretch"
          >
            <div className="relative h-full min-w-[280px] max-w-[450px]">
              <div
                className="relative h-full overflow-hidden"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 95%)'
                }}
              >
                <img
                  src={heroPhoto}
                  alt="Nikhil Nandu Goral"
                  className="w-full h-full object-cover -translate-y-8 grayscale-[0.05] hover:grayscale-0 transition-all duration-1000"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-[#0b1220] border-y border-white/5">
        <SectionTitle title="The Highlights" subtitle="A brief on my journey and technical focus." />
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="card-minimal h-full">
            <h3 className="text-blue-500 font-bold mb-4 flex items-center gap-2">
              My Journey
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              I am an Entry-Level Data Science and AI/ML Developer with a strong foundation in Python and Machine Learning. I have hands-on experience in building AI-driven applications, from data preprocessing and exploratory data analysis (EDA) to developing predictive models and creating REST APIs using Flask and FastAPI. My focus is on practical, data-driven solutions that bridge the gap between research and real-world deployment.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="card-minimal">
              <h3 className="text-white font-bold mb-2">Leadership</h3>
              <p className="text-sm text-slate-400">Lead AIML @ Google Developer Group, organizing national level workshops.</p>
            </div>
            <div className="card-minimal">
              <h3 className="text-white font-bold mb-2">Winning Mindset</h3>
              <p className="text-sm text-slate-400">Smart India Hackathon Finalist and 1st Place at national ML TechSphere competition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container bg-[#070b14]">
        <SectionTitle title="Technical Skills" subtitle="Categorized core competencies and industrial toolkits." />
        <div className="space-y-12 md:space-y-16">
          {[
            {
              category: 'Languages',
              items: ['Python', 'C++', 'Java', 'SQL', 'R'],
              icon: <Terminal size={24} className="text-blue-500" />
            },
            {
              category: 'Frameworks/Libraries',
              items: ['Langchain', 'OpenCV', 'Flask', 'FastAPI', 'Scikit-learn', 'TensorFlow', 'React.js', 'Streamlit', 'Seaborn', 'NumPy', 'Langraph'],
              icon: <Cpu size={24} className="text-blue-500" />
            },
            {
              category: 'Tools',
              items: ['Git', 'Figma', 'PowerBI', 'N8N', 'Postman'],
              icon: <Layout size={24} className="text-blue-500" />
            },
            {
              category: 'Platforms',
              items: ['Linux', 'Supabase', 'MySQL', 'Oracle', 'PostgreSQL', 'MongoDB', 'AWS'],
              icon: <Database size={24} className="text-blue-500" />
            },
          ].map((group) => (
            <div key={group.category} className="group/category">
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-blue-500">
                  {group.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-5">
                {group.items.map(item => (
                  <span key={item} className="text-xs sm:text-base px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border border-white/5 rounded-xl text-slate-300 flex items-center gap-3 sm:gap-4 hover:border-blue-500/40 hover:text-blue-400 hover:scale-[1.02] transition-all duration-300 group/skill cursor-default">
                    {techIcons[item] && (
                      <img
                        src={techIcons[item]}
                        alt=""
                        className="w-6 h-6 sm:w-8 sm:h-8 object-contain transition-transform duration-500 group-hover/skill:scale-110 filter brightness-110"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    )}
                    <span className="font-semibold">{item}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-[#0b1220] border-y border-white/5">
        <SectionTitle title="Featured Projects" subtitle="Detailed breakdown of technical problem solving and impact." />
        <div className="grid gap-8 md:gap-12">
          {[
            {
              title: 'SwasthaPath (HDIMS)',
              problem: 'High latency and lack of predictive alerting in rural healthcare management systems.',
              approach: 'Engineered a Flutter/Supabase real-time sync architecture. Integrated a predictive ML model for patient inflow forecasting. Deployed Twilio for automated emergency broadcast.',
              stack: ['Flutter', 'Python', 'Supabase', 'Twilio'],
              result: 'SIH Finalist. Reduced hypothetical alert response time by 60% in standardized simulations.',
              link: '#'
            },
            {
              title: 'AegisGAN Network IDS',
              problem: 'Zero-day network intrusions escaping static signature-based detection systems.',
              approach: 'Developed a GAN-powered IDS to generate and detect synthetic attack signatures. Utilized a CNN-LSTM architecture for temporal flow pattern analysis.',
              stack: ['TensorFlow', 'FastAPI', 'Scikit-learn', 'CNN-LSTM'],
              result: 'Achieved 92%+ detection accuracy on UNSW-NB and NSL-KDD industrial benchmarks.',
              link: '#'
            },
            {
              title: 'MultiPDF AI Chat',
              problem: 'Inefficiency in manual semantic search across industrial document repositories.',
              approach: 'Built a RAG pipeline using Google Gemini and LangChain. Implemented efficient vector embeddings for natural language querying across cold storage PDF data.',
              stack: ['LangChain', 'Google Gemini', 'VectorDB', 'Streamlit'],
              result: 'Instant, source-backed natural language queries across hundreds of pages of documentation.',
              link: '#'
            },
            {
              title: 'Sign Language Recognition AI',
              problem: 'Severe communication barrier between speech-impaired individuals and non-signers.',
              approach: 'Developed an end-to-end CNN gesture recognition model for A-Z alphabets. Integrated real-time video processing using OpenCV.',
              stack: ['OpenCV', 'TensorFlow', 'Python', 'Flask'],
              result: 'Achieved 88% real-time translation accuracy in diverse lighting conditions.',
              link: '#'
            }
          ].map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-minimal overflow-hidden group"
            >
              {/* Project Image Header */}
              {projectImages[project.title] && (
                <div className="relative h-48 sm:h-64 -mx-6 -mt-6 mb-8 overflow-hidden border-b border-white/5">
                  <img
                    src={projectImages[project.title]}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1220] via-[#0b1220]/20 to-transparent"></div>
                </div>
              )}

              <div className="grid md:grid-cols-[1fr,2fr] gap-6 md:gap-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white group cursor-default">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map(s => (
                    <span key={s} className="text-[9px] sm:text-[10px] uppercase tracking-wider font-bold text-blue-400 px-2 py-0.5 border border-white/10 rounded-lg bg-white/5">
                      {s}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/NikhilGoral28"
                  className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-400 transition-colors"
                >
                  <Github size={16} /> View Repository
                </a>
              </div>
              <div className="space-y-5 md:space-y-6">
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-widest">Problem</p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{project.problem}</p>
                </div>
                <div>
                  <p className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 mb-2 tracking-widest">Approach</p>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{project.approach}</p>
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-[9px] sm:text-[10px] uppercase font-bold text-blue-500 mb-1 tracking-widest">Outcome</p>
                  <p className="text-white text-xs sm:text-sm font-semibold">{project.result}</p>
                </div>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container bg-[#070b14]">
        <SectionTitle title="Experience" subtitle="Professional journey and industrial internships." />
        <div className="space-y-12">
          {[
            {
              role: 'Application Development Intern - Python/AIML',
              company: 'Nexanova Pro Tech, Pune',
              period: 'Jan 2026 – Present',
              points: [
                'Developing and maintaining end-to-end applications with a focus on Python-based backend and AI/ML modules.',
                'Collaborating with cross-functional teams to design, develop, and test AI-driven features for web and mobile applications.',
                'Utilizing modern web frameworks and APIs to create scalable and efficient software solutions.'
              ]
            },
            {
              role: 'Python Developer Intern',
              company: 'Anvistar Pvt. Ltd., Pune',
              period: 'June 2025 – Aug 2025',
              points: [
                'Developed and deployed Python-based web applications, creating secure and efficient REST APIs.',
                'Optimized MySQL queries, reducing data retrieval latency and improving backend performance.'
              ]
            }
          ].map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l border-white/5"
            >
              <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
              <p className="text-xs text-blue-500 font-bold uppercase tracking-wider mb-2">{exp.period}</p>
              <h3 className="text-xl font-bold text-white">{exp.role}</h3>
              <p className="text-slate-400 mb-4 font-medium">{exp.company}</p>
              <ul className="space-y-3">
                {exp.points.map((p, pi) => (
                  <li key={pi} className="text-slate-400 text-sm flex gap-3 max-w-3xl">
                    <span className="text-blue-500 mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-500/10"></span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-container bg-[#0b1220] border-y border-white/5">
        <SectionTitle title="Academic Foundation" subtitle="Formal education and technical specialization." />
        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-minimal border-l-4 border-l-blue-500 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <p className="text-xs text-blue-500 font-bold mb-3 tracking-widest uppercase">2022 – 2026</p>
            <h3 className="font-bold text-2xl mb-2 text-white">B.Tech in Computer Science and Engineering (Data Science)</h3>
            <p className="text-slate-400 text-lg mb-4">Dr. D. Y. Patil College of Engineering, Kolhapur</p>
            <div className="bg-white/5 px-4 py-2 rounded-lg border border-white/5 inline-flex items-center gap-2">
              <span className="text-slate-500 text-xs font-semibold">Current CGPA:</span>
              <span className="text-white font-bold">8.5 (TY)</span>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-minimal border-l-4 border-l-white/10"
            >
              <p className="text-xs text-slate-500 font-bold mb-3 tracking-widest uppercase">2021 – 2022</p>
              <h3 className="font-bold text-xl mb-1 text-white">HSC (XII)</h3>
              <p className="text-slate-400 text-sm mb-4">G. G. V. P. jr college, Chandgad</p>
              <p className="text-blue-500 font-bold text-lg">71%</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-minimal border-l-4 border-l-white/10"
            >
              <p className="text-xs text-slate-500 font-bold mb-3 tracking-widest uppercase">2019 – 2020</p>
              <h3 className="font-bold text-xl mb-1 text-white">SSC (X)</h3>
              <p className="text-slate-400 text-sm mb-4">SGVN High School, Chandgad</p>
              <p className="text-blue-500 font-bold text-lg">93.40%</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section-container bg-[#070b14]">
        <SectionTitle title="Certifications" subtitle="Professional validation of technical expertise." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: 'AWS Cloud Practitioner Essentials',
              issuer: 'Amazon Web Services',
              date: 'Jan 2026',
              tags: ['Cloud Computing', 'Security', 'Architecture']
            },
            {
              name: 'Deep Learning for Developers',
              issuer: 'Infosys Springboard',
              date: 'July 2025',
              tags: ['Neural Networks', 'Model Development']
            },
            {
              name: 'Machine Learning',
              issuer: 'NPTEL',
              date: 'Feb 2024',
              tags: ['Supervised', 'Unsupervised', 'Deployment']
            },
            {
              name: 'Python for Data Science',
              issuer: 'NPTEL',
              date: 'Feb 2024',
              tags: ['Data Analysis', 'Visualization']
            }
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-minimal hover:border-white/10 transition-all group"
            >
              <div className="flex justify-end items-start mb-4">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{cert.date}</span>
              </div>
              <h3 className="font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{cert.name}</h3>
              <p className="text-sm text-slate-400 mb-4">{cert.issuer}</p>
              <div className="flex flex-wrap gap-2">
                {cert.tags.map(tag => (
                  <span key={tag} className="text-[9px] px-2 py-0.5 bg-white/5 border border-white/5 rounded uppercase tracking-tighter text-blue-300 font-semibold">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-[#0b1220] border-t border-white/5 text-center">
        <SectionTitle title="Let's Connect" subtitle="Ready to collaborate on AI/ML projects or freelance work ?" center={true} />
        <div className="card-minimal max-w-2xl mx-auto py-12">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="mailto:nikhilgoral587@gmail.com" className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-all duration-300">
              <MailIcon size={20} /> nikhilgoral587@gmail.com
            </a>
            <a href="https://linkedin.com/in/NikhilGoral" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-all duration-300">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/NikhilGoral28" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-300 hover:text-blue-500 transition-all duration-300">
              <Github size={20} /> GitHub
            </a>
          </div>
          <p className="mt-8 text-slate-500 text-sm font-medium tracking-wide">+91 8605067018 • Kolhapur, MH</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-xs uppercase tracking-widest bg-[#070b14]">
        <p>© {new Date().getFullYear()} Nikhil Nandu Goral </p>
      </footer>
    </div>
  );
};

export default App;
