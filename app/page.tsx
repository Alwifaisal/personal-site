"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ==========================================
// AREA DATA DINAMIS (GANTI DATAMU DI SINI)
// ==========================================
const PROJECTS_DATA = [
  {
    title: "Page Automator",
    description: "Automate the process of creating multiple pages effortlessly.",
    // Nanti ganti URL ini menjadi "/nama-gambarmu.jpg"
    image: "https://placehold.co/600x450/e2e8f0/64748b?text=Gambar+Proyek+1", 
    link: "#"
  },
  {
    title: "Nataicons",
    description: "A fun-themed simple open source icon library. Available as npm packages.",
    image: "https://placehold.co/600x450/e2e8f0/64748b?text=Gambar+Proyek+2",
    link: "#"
  },
  {
    title: "Variant Inspector",
    description: "Makes it easy to get variant properties and place them above your code structure.",
    image: "https://placehold.co/600x450/e2e8f0/64748b?text=Gambar+Proyek+3",
    link: "#"
  },
  {
    title: "Quick New Page",
    description: "Add new pages in a super quick way. It's a shortcut to do an awesome job.",
    image: "https://placehold.co/600x450/e2e8f0/64748b?text=Gambar+Proyek+4",
    link: "#"
  }
];
// ==========================================

export default function Home() {
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
              6ce42e4
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
          <Link href="/contact" className="hover:text-zinc-500 transition-colors hidden sm:block">Contact</Link>
          <button aria-label="Ganti Tema" className="hover:text-zinc-500 transition-colors ml-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 3. KONTEN UTAMA HALAMAN */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        
        {/* --- SECTION 1: HERO --- */}
        <section className="mb-24 pt-4">
          <h1 className="text-4xl sm:text-[44px] leading-[1.15] font-bold tracking-tight mb-6 text-zinc-900">
            Alwi is a web developer who specializes in user interfaces, design systems, and frontend strategy
          </h1>
          <p className="text-[17px] text-zinc-600 leading-relaxed mb-8 sm:w-11/12">
            Currently, I'm working as a freelance web developer, where I build robust platforms and digital experiences. Prior to this, I gained valuable experience working on various frontend projects and collaborations.
          </p>
        </section>

        {/* --- SECTION 2: PROYEK / TOOLING GRID (DINAMIS!) --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Featured Projects</h2>
          <p className="text-[15px] text-zinc-600 mb-10 leading-relaxed">
            I have a strong interest in learning how to build scalable systems, and I aim to support my team in streamlining our workflow and improving our productivity by developing web utilities.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Di sini keajaiban terjadi! Kode ini membaca isi array di atas otomatis */}
            {PROJECTS_DATA.map((project, index) => (
              <div key={index} className="bg-[#f5f5f5] rounded-[24px] p-6 flex flex-col group cursor-pointer">
                {/* Pembungkus Gambar */}
                <div className="w-full aspect-[4/3] bg-zinc-200 rounded-xl mb-6 overflow-hidden shadow-sm border border-zinc-100 relative">
                  {/* Tag img Asli */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                {/* Teks */}
                <a href={project.link} className="text-[15px] font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 group-hover:decoration-zinc-900 mb-2 w-fit transition-colors">
                  {project.title}
                </a>
                <p className="text-[14px] text-zinc-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}

          </div>
        </section>

        {/* --- SECTION 3: I CAN HELP YOU WITH --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">I can help you with</h2>
          <p className="text-[15px] text-zinc-600 mb-10 leading-relaxed">
            From end-to-end web development to UI integration. My focus is in achieving a balance between driving impactful business goals and delivering exceptional user experiences through clean code.
          </p>
          <div className="border-t border-zinc-200">
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">End-to-end web development</div>
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">Design systems integration</div>
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">Frontend engineering</div>
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">Web performance</div>
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">API integration</div>
          </div>
        </section>

        {/* --- SECTION 4: TESTIMONIALS --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-zinc-900">Read what they say</h2>
          <div className="columns-1 sm:columns-2 gap-6 space-y-6">
            <div className="break-inside-avoid bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-[14px] text-zinc-700 leading-relaxed mb-6">"I have known Alwi for few years + working closely with him for a year now and all I can say is he is a passionate developer. He likes to use his time to exercise his code and open for feedback. Alwi is willing to learn about the users needs and behavior."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-300 rounded-full shrink-0"></div>
                <div>
                  <h4 className="text-[13px] font-bold text-zinc-900">Thalia Shelyndra</h4>
                  <p className="text-[11px] text-zinc-500">Project Manager</p>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-[14px] text-zinc-700 leading-relaxed mb-6">"Alwi is a talented developer who excels at crafting websites and pays great attention to detail. Beyond his technical skills, he shines as a collaborative team player, providing critical input and bridging context gaps within our projects."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-300 rounded-full shrink-0"></div>
                <div>
                  <h4 className="text-[13px] font-bold text-zinc-900">Dara Tasha</h4>
                  <p className="text-[11px] text-zinc-500">Design Manager</p>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-[14px] text-zinc-700 leading-relaxed mb-6">"Alwi is really a great partner. We have working together multiple times. He has a great sense on how the product should be built. He knows about accessibility, and always put the user first. He is also a friendly individual, making it comfortable to collaborate with him."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-300 rounded-full shrink-0"></div>
                <div>
                  <h4 className="text-[13px] font-bold text-zinc-900">Rezky Pangestu</h4>
                  <p className="text-[11px] text-zinc-500">Frontend Engineer</p>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-[14px] text-zinc-700 leading-relaxed mb-6">"Alwi is actually my role model. His coding skills are seriously amazing. He always comes up with creative ideas. It's not just about clean code; his ideas also help solve user problems. He's a supportive discussion partner and problem solver."</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-zinc-300 rounded-full shrink-0"></div>
                <div>
                  <h4 className="text-[13px] font-bold text-zinc-900">Diodona Maenggartama</h4>
                  <p className="text-[11px] text-zinc-500">Product Designer</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 mt-12 text-sm text-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Alwi Faisal.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          </div>
        </footer>

      </div>
    </main>
  );
}