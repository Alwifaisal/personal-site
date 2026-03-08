"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ==========================================
// AREA DATA DINAMIS CAREER HIGHLIGHTS
// ==========================================
const CAREER_DATA = [
  {
    company: "Astranova International",
    role: "IT Project Manager",
    period: "Nov 2025 - Present • Jakarta, Indonesia",
    description: "I orchestrate the end-to-end execution of various digital products. My role focuses on bridging the gap between business stakeholders and engineering teams. I manage clear project roadmaps, champion agile workflows, and empower cross-functional teams to deliver impactful technology solutions on time.",
  },
  {
    company: "Ministry of Energy and Mineral Resources (ESDM)",
    role: "Information Technology System Analyst",
    period: "Dec 2024 - May 2025 • Jakarta, Indonesia",
    description: "Supported digital transformation initiatives at the ministry level by evaluating existing IT infrastructure. I gathered complex functional requirements from multiple stakeholders and translated them into comprehensive technical specifications (SRS), ensuring technological solutions aligned perfectly with institutional strategic goals.",
  },
  {
    company: "PT IndoFintech",
    role: "IT Governance & Frontline Helpdesk",
    period: "Jan 2024 - Dec 2024 • Jakarta, Indonesia",
    description: "Managed IT infrastructure risks and provided frontline helpdesk support in a fast-paced fintech environment. Resolving technical bottlenecks and handling user pain points firsthand equipped me with a deep, practical empathy for the user experience, heavily shaping my user-centric approach to product ownership.",
  },
  {
    company: "STIPAN Kampus Merdeka",
    role: "IT Project Manager & System Analyst",
    period: "Feb 2022 - Nov 2023 • South Jakarta, Indonesia",
    description: "Conducted comprehensive requirements gathering and designed the system architecture for complex academic operations. I developed vital technical documentation (ERD, DFD) and facilitated user training sessions, ensuring smooth technological adoption and alignment with institutional goals.",
  },
  {
    company: "tekMIRA Mineral and Coal",
    role: "IT System Analyst & Frontend Developer",
    period: "May 2018 - Sep 2018 • Bandung, Indonesia",
    description: "Bridged the gap between technical execution and business requirements. I conducted thorough business analysis to gather system requirements for a heavy equipment rental platform, ensuring that frontend implementation perfectly matched the initial business logic and user needs.",
  },
   {
    company: "PT Telkom Indonesia Tbk",
    role: "IT System Analyst",
    period: "Nov 2018 - Feb 2019 • Bandung, Indonesia",
    description: "Played a pivotal role in driving public sector digital transformation by gathering requirements and designing the system architecture for ePosyandu, a community based egovernment healthcare platform. Collaborated closely with government stakeholders to translate complex public health needs into a scalable and user-centric digital solution.",
  },
  {
    company: "PT Antam Tbk",
    role: "IT System Analyst",
    period: "Okt 2018 - Nov 2019 • Jakarta, Indonesia",
    description: "Led the system analysis and requirement gathering for an enterprise-level HR recruitment module. I collaborated directly with corporate HR stakeholders to streamline complex hiring workflows and translated them into clear technical specifications, ensuring seamless integration into the company's broader Human Resource Management Application.",
  }
];
// ==========================================

const AccordionItem = ({ title, children, defaultOpen = false }: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-zinc-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left font-medium text-[15px] text-zinc-900 hover:text-zinc-600 transition-colors"
      >
        {title}
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="pb-6 text-[15px] text-zinc-600 leading-relaxed space-y-4">{children}</div>}
    </div>
  );
};

export default function About() {
  const [currentTime, setCurrentTime] = useState("Memuat waktu...");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta", hour: "2-digit", minute: "2-digit", hour12: false,
      });
      setCurrentTime(`${formatter.format(now).replace(".", ":")} Jakarta, Indonesia`);
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-zinc-200">
      
      {/* 1. TOP STATUS BAR */}
      <div className="border-b border-zinc-200 bg-white/50">
        <div className="max-w-3xl mx-auto px-6 py-2.5 flex flex-col sm:flex-row justify-between items-center gap-2 text-[11px] font-medium text-zinc-500 tracking-wide">
          <div className="flex items-center gap-5 w-full justify-between sm:justify-start">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {currentTime}
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Hello, nice to meet you
            </span>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <nav className="max-w-3xl mx-auto px-6 py-6 flex justify-between items-center mb-8">
        <Link href="/">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-zinc-200 shadow-sm bg-zinc-200 shrink-0 cursor-pointer hover:scale-105 transition-transform">
            <img src="/foto-profil.jpeg" alt="Alwi Faisal" className="w-full h-full object-cover" />
          </div>
        </Link>

        <div className="flex items-center gap-3 sm:gap-6 text-[14px] sm:text-[15px] font-medium text-zinc-800">
          <Link href="/work" className="hover:text-zinc-500 transition-colors">Work</Link>
          <Link href="/about" className="text-zinc-900 underline underline-offset-[6px] decoration-2 decoration-zinc-300 cursor-default">About</Link>
          <Link href="/contact" className="hover:text-zinc-500 transition-colors">Contact</Link>
          
          <button aria-label="Ganti Tema" className="hover:text-zinc-500 transition-colors ml-2 sm:ml-0">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 3. KONTEN ABOUT */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        
        <section className="mb-20">
          <h1 className="text-3xl sm:text-[40px] leading-tight font-bold tracking-tight mb-8 text-zinc-900">
          Building digital products with a strong analytical foundation and genuine user empathy.
          </h1>
          <div className="space-y-6 text-[15px] text-zinc-600 leading-relaxed">
            <p>My name is Alwi Faisal, but people usually call me Alwi. My career journey in tech hasn't been a straight line, and that is exactly where my greatest strength lies. I started my career as an IT System Analyst, building a solid foundation in dissecting complex systems. However, career dynamics eventually led me to step directly onto the front lines of frontline technical operations at a fast-paced fintech company. Troubleshooting user pain points and system bottlenecks firsthand every single day taught me the most valuable lesson you can't learn from any textbook: a deep, practical empathy for the user experience.</p>
            <p>Armed with a real world understanding of what makes a system succeed or fail in the eyes of the user, I stepped back up to become an IT Business Analyst, and today, I am trusted to lead the execution of various technology initiatives as an IT Project Manager at Astranova International. Supported by my unique academic background a Bachelor's degree in Informatics Engineering and a Master's degree in Communication Science. I possess the rare ability to bridge the gap between high level management vision and the reality of technical execution, ensuring that every product we build truly solves real world problems.</p>
            <p>When I'm not crafting product roadmaps or facilitating cross functional team communication, I enjoy spending my time reading books, enjoying a good cup of coffee, and diving deep into research regarding the advancement and impact of Artificial Intelligence (AI). For me, maintaining a balance between professional routines and exploring new knowledge is the key to consistently bringing fresh, innovative perspectives into every project I handle.
That’s a little bit about my journey. </p>
            <p className="font-medium text-zinc-800 pt-4">If you are looking for a resilient, solution oriented professional who excels at aligning business strategy with technology, let’s connect!</p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">How I Deliver Value</h2>
          <p className="text-zinc-600 mb-10 text-[15px]">I start by ensuring we are solving the right problems, not just building features. While every project has its own unique complexities, my approach centers on deep analysis, strategic alignment, and adaptable execution.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] p-6 rounded-2xl flex flex-col h-full">
              <div className="mb-8 mt-4 flex justify-center">
                <svg className="w-16 h-16 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-3 text-[17px]">Analyze & Understand</h3>
              <p className="text-[15px] text-zinc-600 leading-relaxed mb-8">
              Great digital products begin with a deep understanding of the core issues. I dive into business requirements and user pain points to ensure our technical solutions align perfectly with strategic goals.
              </p>
              <div className="mt-auto">
                <AccordionItem title="Stakeholder & User Empathy" defaultClose={true}>
                  <p> Drawing from my frontline technical support experience, I approach requirements with genuine empathy—listening closely to both end-users and business stakeholders to uncover their true needs.</p>
                </AccordionItem>
                <AccordionItem title="Strategic Business Analysis" defaultClose={true}>
                  <p>I rely on thorough system analysis and informed insights to make strategic decisions, ensuring we build scalable, long-term solutions rather than just temporary quick fixes.</p>
                </AccordionItem>
              </div>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-2xl flex flex-col h-full">
              <div className="mb-8 mt-4 flex justify-center">
                <svg className="w-16 h-16 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-3 text-[17px]">Collaborate & Iterate</h3>
              <p className="text-[15px] text-zinc-600 leading-relaxed mb-8">
                Building technology is a team effort. I bridge the gap between business objectives and engineering, fostering a collaborative environment where we can execute seamlessly and adapt to changes.
              </p>
              <div className="mt-auto">
                <AccordionItem title="Cross-Functional Leadership" defaultOpen={false}>
                  <p>Leveraging my background in communication science, I translate complex technical jargon into clear business narratives, ensuring the development, design, and management teams are always perfectly aligned.</p>
                </AccordionItem>
                <AccordionItem title="Agile Delivery & Optimization" defaultOpen={false}>
                  <p>Project landscapes shift, and so must our strategies. I champion agile methodologies to continuously evaluate our progress, mitigate risks, and iterate on our solutions to maximize business impact.</p>
                </AccordionItem>
              </div>
            </div>
          </div>
        </section>

        {/* --- BAGIAN CAREER HIGHLIGHTS DINAMIS --- */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-zinc-900">Career highlights</h2>
          
          <div className="relative">
            {/* Garis Vertikal Timeline */}
            <div className="hidden md:block absolute left-[3.5px] top-2 bottom-0 w-[1px] bg-zinc-200"></div>
            
            <div className="space-y-0">
              {/* Loop Data Array Career */}
              {CAREER_DATA.map((job, index) => {
                // Mengecek apakah ini item terakhir (agar garis bawahnya dihapus)
                const isLast = index === CAREER_DATA.length - 1;
                
                return (
                  <div key={index} className={`flex flex-col md:flex-row gap-4 md:gap-12 relative ${isLast ? '' : 'pb-12'}`}>
                    
                    {/* Kotak Hitam (Bullet Timeline) */}
                    <div className="hidden md:block absolute left-0 top-1.5 w-2 h-2 bg-zinc-800"></div>
                    
                    {/* Nama Perusahaan & Posisi */}
                    <div className="md:w-1/3 shrink-0 md:pl-8">
                      <h3 className="font-semibold text-zinc-900 text-[15px]">{job.company}</h3>
                      <p className="text-zinc-500 text-[15px] mt-1">{job.role}</p>
                    </div>
                    
                    {/* Deskripsi & Waktu */}
                    <div className={`md:w-2/3 ${isLast ? '' : 'border-b border-zinc-200 pb-12'}`}>
                      <p className="text-zinc-600 text-[15px] leading-relaxed mb-4">
                        {job.description}
                      </p>
                      <p className="text-[13px] text-zinc-500 font-medium">{job.period}</p>
                    </div>
                    
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-200 pt-8 mt-12 text-sm text-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>Let's go 2026 Alwi Faisal.</p>
        </footer>

      </div>
    </main>
  );
}