"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// Komponen Accordion (Buka-Tutup) untuk bagian FAQ
const AccordionItem = ({ title, children, defaultOpen = false }: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-zinc-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left font-medium text-[15px] text-zinc-900 hover:text-zinc-600 transition-colors"
      >
        {title}
        <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && <div className="pb-6 text-[15px] text-zinc-600 leading-relaxed">{children}</div>}
    </div>
  );
};

export default function Contact() {
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
          <div className="w-11 h-11 rounded-full overflow-hidden border border-zinc-200 shadow-sm bg-zinc-200 shrink-0 cursor-pointer">
            <img src="/foto-profil.jpeg" alt="Alwi Faisal" className="w-full h-full object-cover" />
          </div>
        </Link>
        <div className="flex items-center gap-6 text-[15px] font-medium text-zinc-800">
          <Link href="/work" className="hover:text-zinc-500 transition-colors hidden sm:block">Work</Link>
          <Link href="/about" className="hover:text-zinc-500 transition-colors hidden sm:block">About</Link>
          <Link href="/contact" className="text-zinc-900 underline underline-offset-[6px] decoration-2 decoration-zinc-300 cursor-default hidden sm:block">Contact</Link>
          
          <button aria-label="Ganti Tema" className="hover:text-zinc-500 transition-colors ml-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 3. KONTEN HALAMAN CONTACT */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        
        {/* HERO SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20 relative">
          
          <div className="md:w-3/5 pt-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 text-zinc-900">
              Let's get in touch
            </h1>
            <p className="text-lg text-zinc-600 leading-relaxed mb-6">
              I am always open to new opportunities and collaborations. If you have any questions or need help with a project, 
              
              {/* --- BAGIAN LINK EMAIL --- */}
              {/* GANTI 'emailkamu@gmail.com' DI BAWAH INI DENGAN EMAIL ASLIMU */}
              <a href="mailto:alwifaisalz@gmail.com" className="text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900 transition-colors ml-1">
                reach out to me via email.
              </a>
              {/* <svg className="inline-block w-4 h-4 ml-1.5 text-zinc-400 hover:text-zinc-900 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg> */}
            </p>
          </div>

          {/* Ilustrasi Pesawat Terbang Asli */}
          <div className="md:w-2/5 flex justify-center md:justify-end sm:flex pt-2">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Garis lintasan terbang putus-putus */}
              <path d="M20 180 Q 60 160, 90 120 T 130 80" stroke="#27272a" strokeWidth="2.5" strokeDasharray="6 8" fill="none" strokeLinecap="round"/>
              {/* Pesawat Komersial */}
              <g transform="translate(100, 20) scale(3.5)">
                <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-3 3-3-1-2 2 4.5 1.5 1.5 4.5 2-2-1-3 3-3 5 6l1.2-.7c.4-.2.7-.6.6-1.1z" fill="#fafafa" stroke="#27272a" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
            </svg>
          </div>
        </div>

        {/* SOSIAL MEDIA */}
        <section className="mb-24">
          <p className="text-[15px] text-zinc-500 mb-6">Feeling too formal via email? Hit me up on social media</p>
          <div className="flex flex-wrap gap-3">
            {/* --- BAGIAN LINK SOSIAL MEDIA --- */}
            {/* Ganti link (href) di bawah ini sesuai dengan profil aslimu! */}
            
            <a href="https://x.com/alwifaisalz" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-zinc-200 text-[15px] font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors">
              X
            </a>
            <a href="https://www.threads.com/@alwifaisaal" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-zinc-200 text-[15px] font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors">
              Threads
            </a>
            <a href="https://www.instagram.com/alwifaisaal?igsh=MXYxNnBrNmJpNHI4dg==" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-zinc-200 text-[15px] font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors">
              Instagram
            </a>
            <a href="https://www.linkedin.com/in/alwifaisalzulfikar/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-full border border-zinc-200 text-[15px] font-medium text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors">
              LinkedIn
            </a>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="mb-20 bg-[#f9f9f9] p-8 rounded-3xl border border-zinc-100">
          <h2 className="text-3xl font-bold mb-8 text-zinc-900">Frequently asked question</h2>
          
          <div className="border-t border-zinc-200">
            <AccordionItem title="Are you currently open to new opportunities or consulting?" defaultOpen={true}>
              <p>While I am currently dedicated to my role as an IT Project Manager at Astranova International, I am always open to discussing exciting new opportunities, part-time consulting, or collaborative projects that align with my expertise in product strategy and system analysis. Let's connect!</p>
            </AccordionItem>
            <AccordionItem title="What project management methodologies do you prefer?">
              <p>I champion Agile and Scrum frameworks because they allow for swift, iterative releases and high responsiveness to changes. However, having worked with government (GovTech) and enterprise sectors, I am highly adaptable and can effectively utilize traditional methodologies (like Waterfall) when strict compliance and documentation are required.</p>
            </AccordionItem>
            <AccordionItem title="Are you open to remote work or relocation?">
              <p>Yes! I am based in the Greater Jakarta area (Jabodetabek) and am perfectly comfortable with hybrid or on-site arrangements here. I am also highly experienced in managing cross-functional teams remotely, so fully remote opportunities are very welcome.</p>
            </AccordionItem>
            <AccordionItem title="Do you code, or do you strictly manage projects?">
              <p>My current focus is strictly on project management, product ownership, and business analysis. However, my foundational background as a System Analyst and Helpdesk equips me with a deep understanding of technical architectures. I don't write the code today, but I speak the developers' language, allowing me to be the perfect bridge between engineering realities and business visions.</p>
            </AccordionItem>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 mt-12 text-sm text-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Alwi Faisal.</p>
        </footer>

      </div>
    </main>
  );
}