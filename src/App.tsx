import { motion } from "motion/react";
import {
  Terminal,
  ArrowRight,
  Download,
  Bolt,
  School,
  Verified,
  Mail,
  Phone,
  MapPin,
  Link as LinkIcon,
  Share2,
  Github,
  Globe,
  GraduationCap,
  BookOpen,
  Award,
} from "lucide-react";

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-dark/80 backdrop-blur-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Terminal className="text-primary w-8 h-8" />
          <span className="text-xl font-bold tracking-tight text-white">
            Marjan<span className="text-primary">Hasan</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "Skills", id: "skills" },
            { label: "Experience", id: "experience" },
            { label: "Education", id: "education" }, // FIXED (was Educations ❌)
            { label: "Projects", id: "projects" },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button className="bg-primary text-white px-5 py-2 rounded-lg text-sm font-bold hover:opacity-90 transition-all cursor-pointer">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden scroll-mt-24">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-blue-600 blur-[100px] rounded-full"></div>
    </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Junior Roles
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
            Junior Frontend <br />
            <span className="text-primary">Developer</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Self-taught developer with{" "}
            <span className="text-white font-semibold">
              500+ solved coding problems
            </span>{" "}
            and <span className="text-white font-semibold">1000+ hours</span> of
            hands-on practice. Passionate about learning and building meaningful
            software.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-primary/30 transition-all  cursor-pointer">
              View Projects
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-700 transition-all cursor-pointer">
              Download CV
              <Download className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative z-10 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
            <img
              alt="Development environment"
              className="w-full h-full object-cover aspect-square"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGiwyZIzAxQtN-62vmyWkRRiud6hTS4Z7TeRMDdih_pr2-OMbkfUsiO_GkTGeBul5FIvmxx7Bspsn8hjuPPu1kElBZQt8XfBH8-TCaT4nPSr2Sl2vFmS2y3Dv93DsWemjAPTCUJ6YKZdcfSxSzBP0ZopTQn1BGv7SZLPKAbZc13wWihEJirAcEb-owNsY3Fa0kFRXhUZdpS-GgpwDrh3hgH1mPC68z9lMmqt41nOayE_3d5yroE9-2SdP2TQS7f1iMfiihJpxJ0stq"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 z-20 glass-card p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary rounded-lg text-white">
                <Bolt className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Optimization</p>
                <p className="text-xl font-bold text-white">
                  99% Core Web Vitals
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      desc: "Semantic Markup",
      color: "#E34F26",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      desc: "Modern Layouts",
      color: "#1572B6",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      desc: "Rapid UI Dev",
      color: "#06B6D4",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "JavaScript",
      desc: "ES6+ Features",
      color: "#F7DF1E",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "ReactJS",
      desc: "Component-Based",
      color: "#61DAFB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Redux Toolkit",
      desc: "State Management",
      color: "#764ABC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "RTK Query",
      desc: "Data Fetching",
      color: "#764ABC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Swagger",
      desc: "API Documentation",
      color: "#85EA2D",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg",
    },
    {
      name: "Git",
      desc: "Version Control",
      color: "#F05032",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "Postman",
      desc: "API Testing",
      color: "#FF6C37",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    },
    {
      name: "Windows",
      desc: "OS Environment",
      color: "#0078D6",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
    },
    {
      name: "Mac OS",
      desc: "OS Environment",
      color: "#000000",
      icon: "data:image/svg+xml;utf8,<svg fill='white' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'><path d='M318.7 268.7c-.4-49.6 40.4-73.5 42.2-74.6-23-33.6-58.8-38.2-71.6-38.7-30.5-3.1-59.5 17.9-75 17.9-15.4 0-39.3-17.5-64.6-17-33.2.5-63.8 19.3-80.9 49.1-34.6 59.9-8.8 148.3 24.9 196.9 16.5 23.9 36.1 50.7 61.9 49.7 24.9-1 34.3-16.1 64.4-16.1s38.5 16.1 64.9 15.6c26.8-.5 43.7-24.3 60.1-48.3 18.9-27.6 26.7-54.3 27.1-55.7-.6-.3-51.9-19.9-52.3-79.8zM259.3 69.5c13.7-16.6 23-39.8 20.5-63.1-19.8.8-43.8 13.2-58 29.8-12.7 14.6-23.8 38-20.8 60.4 22.1 1.7 44.7-11.2 58.3-27.1z'/></svg>",
    },
    {
      name: "Linux",
      desc: "OS Environment",
      color: "#FCC624",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    },
  ];

  return (
    <section className="py-24 bg-white/5 scroll-mt-24" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tech Stack & Core Skills
          </h2>
          <div className="h-1.5 w-20 bg-primary rounded-full"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <motion.div
              whileHover={{ y: -5 }}
              key={skill.name}
              className="flex flex-col gap-4 p-6 rounded-2xl border border-white/5 bg-bg-dark hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="group-hover:scale-110 transition-transform w-10 h-10">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">{skill.name}</h3>
                <p className="text-slate-400 text-sm">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Experience = () => (
  <section className="py-24 scroll-mt-24" id="experience">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Experience
        </h2>
        <div className="h-1.5 w-20 bg-primary rounded-full"></div>
      </div>
      <div className="flex flex-col gap-12">
        <div className="relative pl-8 md:pl-0">
          <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 mb-12">
            <div className="md:w-1/2 md:text-right">
              <h3 className="text-xl font-bold text-white">
                Frontend Web Developer
              </h3>
              <p className="text-primary font-semibold">
                Softvence Alpha (A concern of Betopia Group)
              </p>
            </div>
            <div className="absolute left-0 md:left-1/2 top-0 md:top-auto w-4 h-4 rounded-full bg-primary border-4 border-bg-dark md:-translate-x-1/2 z-10"></div>
            <div className="md:w-1/2">
              <p className="text-slate-400 font-medium">Jan 2026 - Present</p>
              <p className="text-sm text-slate-500">
                Dhaka, Bangladesh (On-site)
              </p>
            </div>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/5 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <Bolt className="text-primary w-6 h-6 shrink-0" />
              <p className="text-slate-400 italic text-sm">
                Recently joined Softvence Alpha, an innovative software division
                within Betopia Ltd., focusing on cutting-edge frontend
                solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Education = () => (
  <section
    className="py-24 bg-white/5 overflow-hidden scroll-mt-24"
    id="education"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Education & <br />
              Certifications
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Committed to continuous learning through formal academics and
              industry-leading specialized courses.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                <School className="w-6 h-6" /> Education
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="border-l-2 border-primary/20 pl-6">
                  <h4 className="font-bold text-white text-lg">
                    B.Tech in CSE (Dropped out)
                  </h4>
                  <p className="text-slate-400">
                    Lovely Professional University, India | 2019-2021
                  </p>
                  <p className="text-sm text-slate-500 italic">
                    Completed 4 semesters
                  </p>
                </li>
                <li className="border-l-2 border-primary/20 pl-6">
                  <h4 className="font-bold text-white text-lg">
                    HSC, Science Group
                  </h4>
                  <p className="text-slate-400">
                    Govt Rajendra College, Faridpur | 2015-2017
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                <Verified className="w-6 h-6" /> Certifications
              </h3>
              <ul className="flex flex-col gap-6">
                <li className="border-l-2 border-primary/20 pl-6">
                  <h4 className="font-bold text-white text-lg">
                    Complete Web Development Course
                  </h4>
                  <p className="text-slate-400">Programming Hero</p>
                </li>
                <li className="border-l-2 border-primary/20 pl-6">
                  <h4 className="font-bold text-white text-lg">
                    CSE Fundamentals with Phitron
                  </h4>
                  <p className="text-slate-400">Spring 2023</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden aspect-4/5 border border-white/5 bg-primary/5 flex items-center justify-center p-8">
              <GraduationCap className="text-primary w-24 h-24 opacity-20" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square border border-white/5 bg-primary/10 flex items-center justify-center p-8">
              <BookOpen className="text-primary w-20 h-20 opacity-20" />
            </div>
          </div>
          <div className="space-y-4 pt-8">
            <div className="rounded-2xl overflow-hidden aspect-square border border-white/5 bg-primary/10 flex items-center justify-center p-8">
              <Award className="text-primary w-20 h-20 opacity-20" />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-4/5 border border-white/5 bg-primary/5 flex items-center justify-center p-8">
              <Terminal className="text-primary w-24 h-24 opacity-20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "OmniChannel Analytics",
      desc: "A selection of projects built during my learning journey, focusing on clean code and interactive user interfaces.",
      tags: ["React", "Redux", "D3.js"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG05Kv8SVin18YHpM4EUWvkd8By1zqznqnLRy6Nt3h-3csW3DFniZFG6NbJ80zqzBa_lxbVYRtVsc5CucHLDZJB-H4U4jZPDcjbZBVfWR1sa6lZtX56FX-QdTdlOjhAOAbuqGqIvdJDE1nb6PRS-mVtnZMic3NUAtFfS5kV5NdT-3t0fCkvzBaTGTQbWblx1hSMj4WWT4eGeYpgME-i9bl7BBeY8HIzKzmPGwTJKok_t9EjyW9FBUD9xUvxQXzHEb8mQC5av1B7AdD",
    },
    {
      title: "E-Commerce Design System",
      desc: "A selection of projects built during my learning journey, focusing on clean code and interactive user interfaces.",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAI7t2Ajf9IZ7KA9sdyNm4VP--6Af_APfm7W_2VhN8zxplmXNg7DG1BLhk_M59atSz9DGNgPtlVLZUux7rxKYRZNP9jsoUyZeU3tzmeL32T24ZRaxgmlPfRMtpA1Nt9gx6S12WFjzJUVVHgSLzn1IyBu8EzH0IxSv2B1zdXBH-9EtjGfapslmPmDYVwoZdcxpZ6W7uBGQMMlyEArsB1N0XmfwWP047F6HK_fubCVOf-7kVvXSgDpytOiB4R-jJ3Hie6oWRQqYZ42NPP",
    },
    {
      title: "Crypto Portfolio Tracker",
      desc: "A selection of projects built during my learning journey, focusing on clean code and interactive user interfaces.",
      tags: ["React Native", "RTK Query", "PostgreSQL"],
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGG6tOVFvjjYelzCZ8YKN9OUQy6uK3GoTsdPhaBl27tClzFk-NfOEdnbEHSg_sLJxM3EcbKH-uBU_F5g_gH_N1Blz57n41IvZdEqBxNyW_KJ48ZxwFUPM11_oIuOhYu29u5c7qboLY40UhDu_LeZAyu6IxuqRXxHvjvfB8aLL-tcnmzM_AAGDNBcpHDrnFL4AqscdpMoo6JlvymIs5xvM1tInsEBAU0IOJqoUtxyiDYk7bjbzew8AuX2qufjeQ2vEiLtnYE5Qlljfm",
    },
  ];

  return (
    <section className="py-24 scroll-mt-24" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 cursor-pointer">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <div className="h-1.5 w-20 bg-primary rounded-full"></div>
          </div>
          <p className="text-slate-400 max-w-md">
            A selection of projects built during my learning journey, focusing
            on clean code and interactive user interfaces.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              whileHover={{ y: -10 }}
              key={project.title}
              className="group flex flex-col bg-bg-dark rounded-2xl overflow-hidden border border-white/5 hover:shadow-2xl hover:shadow-primary/5 transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={project.img}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-linear-to-t from-bg-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <button className="text-white bg-primary px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 cursor-pointer">
                    View Case Study <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/5 text-slate-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 font-bold text-primary hover:gap-4 transition-all  cursor-pointer">
            View All Projects on GitHub
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 scroll-mt-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-primary px-8 py-16 md:p-20 relative overflow-hidden text-center md:text-left">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 blur-[80px] rounded-full"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to bring fresh energy to your team.
            </h2>
            <p className="text-blue-100 text-lg max-w-xl">
              I'm currently open to senior frontend roles and architectural
              consulting opportunities.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform shadow-xl cursor-pointer">
              Start a Conversation
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/20 transition-colors  cursor-pointer">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-bg-dark border-t border-white/5 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Terminal className="text-primary w-8 h-8" />
            <span className="text-xl font-bold tracking-tight text-white">
              Marjan<span className="text-primary">Hasan</span>
            </span>
          </div>
          <p className="text-slate-400 max-w-sm">
            Self-taught developer with 500+ solved coding problems and 1000+
            hours of hands-on practice. Skilled across multiple languages and
            tools, passionate about learning and building meaningful software.
          </p>
          <div className="flex gap-4">
            {[Share2, Github, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Navigation</h4>
          <ul className="flex flex-col gap-4 text-slate-400 text-sm font-medium">
            {[
              { label: "Home", id: "" },
              { label: "Experience", id: "experience" },
              { label: "Projects", id: "projects" },
              { label: "Skills", id: "skills" },
              { label: "Education", id: "education" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.id ? `#${item.id}` : "#"}
                  className="hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-white mb-6">Contact Info</h4>
          <ul className="flex flex-col gap-4 text-slate-400 text-sm font-medium">
            <li className="flex items-center gap-2">
              <Mail className="text-primary w-5 h-5" />{" "}
              moonmarjanhasan@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="text-primary w-5 h-5" /> +88-01782210366
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-primary w-5 h-5" /> West Shewrapara, Dhaka
            </li>
            <li className="flex items-center gap-2">
              <LinkIcon className="text-primary w-5 h-5" />{" "}
              linkedin.com/in/marjanhasan
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© {new Date().getFullYear()} MarjanHasan. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-primary">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-primary">
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <CTA />
      <Footer />
    </div>
  );
}
