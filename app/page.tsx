"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ==========================================
// AREA DATA DINAMIS (GANTI DATAMU DI SINI)
// ==========================================
const PROJECTS_DATA = [
  {
    title: "Asset Management Architecture",
    description: "Architected the database schema and process flows for STIPAN’s inventory system to ensure accurate tracking and resource optimization.",
    // Nanti ganti URL ini menjadi "/nama-gambarmu.jpg"
    image: "https://i.ibb.co.com/SwLN0qNq/stipan.jpg", 
    link: "#"
  },
  {
    title: "E-Recruitment Workflow Design",
    description: "Mapped out the end-to-end hiring workflow and system specifications to streamline the talent acquisition process at PT Motekar",
    image: "https://i.ibb.co.com/Cpmpc5xP/Pt-motekar.jpg",
    link: "#"
  },
  {
    title: "E-Government System Blueprint",
    description: "Designed the system architecture and technical documentation for Telkom Indonesia to support community-level healthcare digitalization.",
    image: "https://i.ibb.co.com/p6H3jtMJ/telkom.jpg",
    link: "#"
  },
  {
    title: "Performance Management Specs",
    description: "ranslated complex HR evaluation processes into clear technical requirements and system flows for academic staff management.",
    image: "https://i.ibb.co.com/W4xHtrTR/stipan-1.jpg",
    link: "#"
  }
];
// ==========================================

export default function Home() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
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
        {/* Ganti bagian profil dengan tombol ini */}
        <button 
          onClick={() => setIsProfileOpen(true)}
          className="w-11 h-11 rounded-full overflow-hidden border border-zinc-200 shadow-sm bg-zinc-200 shrink-0 cursor-zoom-in hover:scale-105 transition-transform"
          aria-label="Lihat foto profil"
        >
          <img src="/foto-profil.jpeg" alt="Alwi Faisal" className="w-full h-full object-cover" />
        </button>
        {/* <Link href="/">
          <div className="w-11 h-11 rounded-full overflow-hidden border border-zinc-200 shadow-sm bg-zinc-200 shrink-0 cursor-pointer">
            <img src="/foto-profil.jpeg" alt="Alwi Faisal" className="w-full h-full object-cover" />
          </div>
        </Link> */}
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
            Alwi is a strategic tech professional who specializes in IT project management, product ownership, and business analysis.
          </h1>
          <p className="text-[17px] text-zinc-600 leading-relaxed mb-8 sm:w-11/12">
            I bridge the critical gap between business objectives and technical execution. With a strong foundation in Informatics Engineering paired with an advanced degree in Communication Science, I possess a unique ability to translate complex technical jargon into clear, actionable business strategies. My professional journey includes hands-on experience as a web developer, where I learned how to build robust digital platforms from the inside out. Today, I am passionate about leading cross-functional teams, aligning stakeholder visions, and ensuring that every digital product we develop not only functions flawlessly but also drives measurable business transformation.
          </p>
        </section>

        {/* --- SECTION 2: PROYEK / TOOLING GRID (DINAMIS!) --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">Featured Projects</h2>
          <p className="text-[15px] text-zinc-600 mb-10 leading-relaxed">
           I specialize in identifying workflow bottlenecks and delivering scalable digital solutions. Here are some of the internal tools and systems I've managed and developed to significantly streamline team productivity and standardize development processes.
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
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">What I Bring to Your Team</h2>
          <p className="text-[15px] text-zinc-600 mb-10 leading-relaxed">
           From defining product visions to orchestrating project executions. My focus is on bridging the gap between complex technical requirements and strategic business goals to deliver scalable, efficient, and user-centric digital solutions."
          </p>
          <div className="border-t border-zinc-200">
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">IT Project Management</div>
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">Business Requirements Analysis </div>
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">Product Strategy & Ownership </div>
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">Workflow & Process Optimization</div>
            <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">Stakeholder Communication & Alignment</div>
             <div className="py-5 border-b border-zinc-200 font-bold text-lg text-zinc-900">Change Management & Digital Adoption</div>
          </div>
        </section>

        {/* --- SECTION 4: TESTIMONIALS --- */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-10 text-zinc-900">Read what they say</h2>
          <div className="columns-1 sm:columns-2 gap-6 space-y-6">
            <div className="break-inside-avoid bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-[14px] text-zinc-700 leading-relaxed mb-6">"Alwi played a crucial role in our digital transformation. He has a rare ability to translate complex business goals into clear, actionable technical requirements. His strategic mindset and excellent communication skills made our development process significantly more efficient and aligned with our company vision."</p>
              <div className="flex items-center gap-3">
                {/* <div className="w-10 h-10 bg-zinc-300 rounded-full shrink-0"></div>  */}
                <div>
                  <h4 className="text-[13px] font-bold text-zinc-900">Vega Ismaryani</h4>
                  <p className="text-[11px] text-zinc-500">CEO Astranova International</p>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-[14px] text-zinc-700 leading-relaxed mb-6">"Having Alwi bridge the gap between stakeholders and the engineering team is a game-changer. He completely understands our technical constraints but always keeps the focus on the product's core value. He is a structured planner, a great problem-solver, and a highly collaborative team player."</p>
              <div className="flex items-center gap-3">
                {/* <div className="w-10 h-10 bg-zinc-300 rounded-full shrink-0"></div> */}
                <div>
                  <h4 className="text-[13px] font-bold text-zinc-900">Putut Wibowo</h4>
                  <p className="text-[11px] text-zinc-500">Direktur Teknologi Kampus Merdeka STIPAN</p>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-[14px] text-zinc-700 leading-relaxed mb-6">"Alwi's heuristic evaluation on our public service portal was an eye-opener. He doesn't just look at systems functionally; he deeply understands user behavior and accessibility. His actionable recommendations directly improved how we deliver digital services to the public."</p>
              <div className="flex items-center gap-3">
                {/* <div className="w-10 h-10 bg-zinc-300 rounded-full shrink-0"></div> */}
                <div>
                  <h4 className="text-[13px] font-bold text-zinc-900">Bambang Wijaya</h4>
                  <p className="text-[11px] text-zinc-500">IT Manager Kementrian ESDM</p>
                </div>
              </div>
            </div>
            <div className="break-inside-avoid bg-[#f5f5f5] rounded-[24px] p-8">
              <p className="text-[14px] text-zinc-700 leading-relaxed mb-6">"Alwi's unique blend of technical engineering expertise and advanced communication skills makes him an exceptional project driver. He took our scattered requirements and transformed them into a clear roadmap, ensuring the digital product was delivered smoothly, efficiently, and on target."</p>
              <div className="flex items-center gap-3">
                {/* <div className="w-10 h-10 bg-zinc-300 rounded-full shrink-0"></div> */}
                <div>
                  <h4 className="text-[13px] font-bold text-zinc-900">Sarah Ramadhan</h4>
                  <p className="text-[11px] text-zinc-500">IT Sales Samudera Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 mt-12 text-sm text-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p> Let's go {new Date().getFullYear()} Alwi Faisal.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-900 transition-colors">Competition makes us faster, collaboration makes us better.</a>
          </div> 
        </footer> 

      </div>
      {/* TARUH KODE INI TEPAT DI ATAS </main> */}
      {isProfileOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm p-4"
          onClick={() => setIsProfileOpen(false)}
        >
          <div className="relative">
            <img 
              src="/foto-profil.jpeg" 
              alt="Foto Profil Besar" 
              className="w-48 h-48 sm:w-64 sm:h-64 object-cover rounded-full shadow-2xl border border-zinc-200 cursor-zoom-out"
            />
            <button 
            title="Tutup foto"
            aria-label="Tutup foto"
              onClick={() => setIsProfileOpen(false)}
              className="absolute -top-2 -right-2 bg-white text-zinc-500 hover:text-zinc-900 rounded-full p-1.5 shadow-md border border-zinc-200 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </main>
  );
}