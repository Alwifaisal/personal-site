"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ==========================================
// AREA DATA DINAMIS HALAMAN WORK (Logo sudah dihapus)
// ==========================================
const WORK_DATA = [
  {
    title: "Training Management System (TMS)",
    category: "Edtech • Process Automation • Web",
    coverImage: "https://i.ibb.co.com/zWMwFCSQ/telkom.png",
    platforms: ["web"],
    link: "#",
  },
  {
    title: "Staff Performance Management Platform",
    category: "GovTech • HR Optimization • Web",
    coverImage: "https://i.ibb.co.com/21SFbrmN/kampus-merdeka.png",
    platforms: ["web"],
    link: "#",
  },
  {
    title: "E-Recruitment & Talent Acquisition",
    category: "HR Tech • Workflow Streamlining • Web ",
    coverImage: "https://i.ibb.co.com/VYqNkpZc/Screenshot-2026-03-06-at-08-10-42.png",
    platforms: ["web"],
    link: "#",
  },
  {
    title: "Laboratory Asset Management System",
    category: "Asset Management • Resource Oprimization • Web",
    coverImage: "https://i.ibb.co.com/hFCT8Qbw/Screenshot-2026-03-05-at-16-24-33.png",
    platforms: ["web"],
    link: "#",
  },
  {
    title: "E-Posyandu E-Government Platform",
    category: "GovTech • Digital Transformation",
    coverImage: "https://i.ibb.co.com/Y428KJNT/Screenshot-2026-03-06-at-08-20-36.png",
    platforms: ["web"],
    link: "#",
  },
  {
    title: "Enterprise HR Recruitment Module",
    category: "HRIS • Enterprise Solution",
    coverImage: "https://i.ibb.co.com/7JWBxdp7/antam.png",
    platforms: ["web"],
    link: "#",
  }
];
// ==========================================

// Komponen Pembantu untuk memunculkan ikon sesuai nama platform
const PlatformIcon = ({ type }: { type: string }) => {
  if (type === "android") {
    return (
      <svg className="w-[15px] h-[15px] text-green-500" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414C17.523 15.3414 17.523 15.3414 17.523 15.3414ZM17.6006 9.48111L19.4406 6.29959C19.5991 6.02444 19.5057 5.67156 19.2319 5.5134C18.9568 5.35414 18.6041 5.44754 18.4457 5.72269L16.551 9.00693C15.1554 8.37548 13.626 8.01777 12 8.01777C10.374 8.01777 8.84462 8.37548 7.449 9.00693L5.55428 5.72269C5.39581 5.44754 5.04316 5.35304 4.76801 5.5134C4.49286 5.67156 4.40051 6.02444 4.55898 6.29959L6.39889 9.48111C4.12056 10.7483 2.45429 13.0699 2.05151 15.7972H21.9485C21.5457 13.0699 19.8794 10.7483 17.6006 9.48111ZM8.08304 13.886C7.57463 13.886 7.16279 13.4741 7.16279 12.9657C7.16279 12.4573 7.57463 12.0455 8.08304 12.0455C8.59145 12.0455 9.00329 12.4573 9.00329 12.9657C9.00329 13.4741 8.59145 13.886 8.08304 13.886ZM15.917 13.886C15.4085 13.886 14.9967 13.4741 14.9967 12.9657C14.9967 12.4573 15.4085 12.0455 15.917 12.0455C16.4254 12.0455 16.8372 12.4573 16.8372 12.9657C16.8372 13.4741 16.4254 13.886 15.917 13.886Z" />
      </svg>
    );
  } else if (type === "apple") {
    return (
      <svg className="w-[15px] h-[15px] text-zinc-800" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C13.1 2 14.1 2.84 14.4 3.94C13.4 4.04 12.3 4.8 11.6 5.8C10.9 6.8 10.6 8.04 10.9 9.14C9.6 9.04 8.4 8.24 7.6 7.24C6.5 9.14 7 11.74 8.7 13.24C8.1 13.24 7.5 13.04 7 12.74C7 14.64 8.3 16.34 10.2 16.74C9.6 16.84 9 16.84 8.4 16.64C8.9 18.24 10.4 19.34 12.1 19.34C10.7 20.44 8.9 21.04 7 21.04C6.6 21.04 6.3 21.04 6 20.94C7.8 22.04 9.9 22.74 12.2 22.74C19.6 22.74 23.6 16.64 23.6 11.34C23.6 11.14 23.6 11.04 23.6 10.84C24.4 10.24 25.1 9.54 25.6 8.64C24.8 8.94 24 9.14 23.2 9.24C24.1 8.74 24.7 7.94 25 6.94C24.2 7.44 23.3 7.74 22.3 7.94C21.5 7.04 20.4 6.54 19.2 6.54C16.8 6.54 14.9 8.44 14.9 10.84C14.9 11.14 14.9 11.54 15 11.84C11.5 11.64 8.4 9.94 6.3 7.34" />
      </svg>
    );
  } else if (type === "web") {
    return (
      <svg className="w-[15px] h-[15px] text-purple-600" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    );
  }
  return null;
};

export default function Work() {
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
          <Link href="/work" className="text-zinc-900 underline underline-offset-[6px] decoration-2 decoration-zinc-300 cursor-default hidden sm:block">Work</Link>
          <Link href="/about" className="hover:text-zinc-500 transition-colors hidden sm:block">About</Link>
          <Link href="/contact" className="hover:text-zinc-500 transition-colors hidden sm:block">Contact</Link>
          <button aria-label="Ganti Tema" className="hover:text-zinc-500 transition-colors ml-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm5.25 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75z" />
            </svg>
          </button>
        </div>
      </nav>

      {/* 3. KONTEN HALAMAN WORK */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        
        {/* Header Section */}
        <div className="text-center mb-16 pt-4">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
           I orchestrate digital products that solve real problems
          </h1>
          <p className="text-[15px] text-zinc-500">
          Strategically aligned, meticulously analyzed, and seamlessly delivered.
          </p>
        </div>

        {/* MAPPING GRID PROJECT DINAMIS (2 Kolom) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-12">
          {WORK_DATA.map((project, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              
              {/* Cover Image */}
              <div className="w-full aspect-square bg-zinc-200 rounded-3xl overflow-hidden mb-5 border border-zinc-100 relative">
                <img 
                  src={project.coverImage} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Judul Aplikasi (Logo image di bawah gambar sudah dihapus!) */}
              <h3 className="text-[17px] font-bold text-zinc-900 mb-2 mt-1">
                {project.title}
              </h3>

              {/* Footer: Kategori & Platform Icons */}
              <div className="flex justify-between items-center mt-auto">
                <span className="text-[13px] text-zinc-500 truncate pr-2">
                  {project.category}
                </span>
                <div className="flex items-center gap-1.5 shrink-0">
                  {project.platforms.map((platform, i) => (
                    <PlatformIcon key={i} type={platform} />
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="border-t border-zinc-200 pt-8 mt-24 text-sm text-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p> Let's go {new Date().getFullYear()} Alwi Faisal.</p>
        </footer>

      </div>
    </main>
  );
}