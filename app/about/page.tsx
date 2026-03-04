"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
          <Link href="/about" className="text-zinc-900 underline underline-offset-[6px] decoration-2 decoration-zinc-300 cursor-default hidden sm:block">About</Link>
          <Link href="/contact" className="hover:text-zinc-500 transition-colors hidden sm:block">Contact</Link>
          <button aria-label="Ganti Tema" className="hover:text-zinc-500 transition-colors ml-2">
            {/* Ikon Smile 😁 Hitam Putih */}
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
            Saya seorang pengembang web Indonesia dengan pengalaman dalam merancang antarmuka dan pengalaman pengguna.
          </h1>
          <div className="space-y-6 text-[15px] text-zinc-600 leading-relaxed">
            <p>Nama saya Alwi Faisal, tapi orang-orang biasanya memanggil saya Alwi. Saya memiliki ketertarikan yang mendalam dalam membangun sistem, menulis kode, dan memastikan semuanya berjalan dengan mulus.</p>
            <p>Ketika saya tidak sedang berada di depan layar, saya senang membaca buku, menikmati kopi, atau belajar hal-hal baru seputar teknologi. Saya percaya bahwa desain dan teknik pemrograman saling melengkapi dalam membangun produk yang jauh lebih baik.</p>
            <p className="font-medium text-zinc-800 pt-4">Itu sedikit pengantar tentang saya. Jangan ragu untuk menghubungi jika Anda tertarik untuk berdiskusi tentang apa pun.</p>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-4 text-zinc-900">How I work</h2>
          <p className="text-zinc-600 mb-10 text-[15px]">Start with the problems and making sure we deal with the right ones. The process sometimes it’s as linear as it looks, other times it’s a zigzag.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f5f5] p-6 rounded-2xl flex flex-col h-full">
              <div className="mb-8 mt-4 flex justify-center">
                <svg className="w-16 h-16 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-3 text-[17px]">Observe</h3>
              <p className="text-[15px] text-zinc-600 leading-relaxed mb-8">
                By observing, I believe we can develop a greater understanding of users and their needs while observing them in their environment.
              </p>
              <div className="mt-auto">
                <AccordionItem title="Get to know users" defaultOpen={true}>
                  <p>Empathy starts with seeing people as people, not just users. I'm really like to talk to them, asking questions, and listening closely.</p>
                </AccordionItem>
                <AccordionItem title="Analytical thinking" defaultOpen={true}>
                  <p>I enjoy making informed decisions, whether or not they rely on data, as it enables us to continuously enhance our strategies for improved outcomes.</p>
                </AccordionItem>
              </div>
            </div>

            <div className="bg-[#f5f5f5] p-6 rounded-2xl flex flex-col h-full">
              <div className="mb-8 mt-4 flex justify-center">
                <svg className="w-16 h-16 text-zinc-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                </svg>
              </div>
              <h3 className="font-semibold text-zinc-900 mb-3 text-[17px]">Reflect</h3>
              <p className="text-[15px] text-zinc-600 leading-relaxed mb-8">
                Reflecting on our work, we should consider different perspectives and be prepared to adapt to remain true to the objectives we pursue.
              </p>
              <div className="mt-auto">
                <AccordionItem title="Cross-functional collaboration" defaultOpen={false}>
                  <p>Collaboration across different disciplines ensures we view problems holistically and craft solutions that are technically sound and user-friendly.</p>
                </AccordionItem>
                <AccordionItem title="Adaptability, evaluate, and iterate" defaultOpen={false}>
                  <p>The landscape is always changing. I constantly review our processes, learn from outcomes, and refine our approach to ensure we are always improving.</p>
                </AccordionItem>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-10 text-zinc-900">Career highlights</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-[3.5px] top-2 bottom-0 w-px bg-zinc-200"></div>
            <div className="space-y-0">
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 relative pb-12">
                <div className="hidden md:block absolute left-0 top-1.5 w-2 h-2 bg-zinc-800"></div>
                <div className="md:w-1/3 shrink-0 md:pl-8">
                  <h3 className="font-semibold text-zinc-900 text-[15px]">GovTech Edu</h3>
                  <p className="text-zinc-500 text-[15px] mt-1">Product Designer</p>
                </div>
                <div className="md:w-2/3 border-b border-zinc-200 pb-12">
                  <p className="text-zinc-600 text-[15px] leading-relaxed mb-4">I help designed the Rapor Pendidikan platform for data-driven decision-making in education. I also laid the foundation for our internal design system, creating a unified UI kit and led the migration our current design to align with our design system.</p>
                  <p className="text-[13px] text-zinc-500 font-medium">Feb 2021 - Present • Jakarta, Indonesia</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 relative pb-12">
                <div className="hidden md:block absolute left-0 top-1.5 w-2 h-2 bg-zinc-800"></div>
                <div className="md:w-1/3 shrink-0 md:pl-8">
                  <h3 className="font-semibold text-zinc-900 text-[15px]">Bukalapak</h3>
                  <p className="text-zinc-500 text-[15px] mt-1">UX Designer</p>
                </div>
                <div className="md:w-2/3 border-b border-zinc-200 pb-12">
                  <p className="text-zinc-600 text-[15px] leading-relaxed mb-4">I started as an intern and progressed to full-time, from taking charge of design for DANA in Bukalapak. I also created visual and interactive designs, icons, and illustrations, and facilitated design sprints.</p>
                  <p className="text-[13px] text-zinc-500 font-medium">Jun 2017 - Jan 2021 • Bandung, Indonesia</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-4 md:gap-12 relative">
                <div className="hidden md:block absolute left-0 top-1.5 w-2 h-2 bg-zinc-800"></div>
                <div className="md:w-1/3 shrink-0 md:pl-8">
                  <h3 className="font-semibold text-zinc-900 text-[15px]">Sixty Two</h3>
                  <p className="text-zinc-500 text-[15px] mt-1">UI/UX Designer</p>
                </div>
                <div className="md:w-2/3">
                  <p className="text-zinc-600 text-[15px] leading-relaxed mb-4">I contributed to the redesign of a soccer team platform, enhancing its ability to find sparring opponents. This involved defining the product's workflow and main features.</p>
                  <p className="text-[13px] text-zinc-500 font-medium">May 2017 - Oct 2017 • Jakarta, Indonesia</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-200 pt-8 mt-12 text-sm text-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Alwi Faisal.</p>
        </footer>

      </div>
    </main>
  );
}