"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// 1. Kita buat "peta" urutan halaman dari kiri ke kanan
const pageOrder: Record<string, number> = {
  "/": 0,          // Home (paling kiri)
  "/work": 1,      // Work
  "/about": 2,     // About
  "/contact": 3,   // Contact (paling kanan)
};

// Variabel memori untuk mengingat halaman sebelumnya
let prevIndex = 0;

export default function Template({ children }: { children: React.ReactNode }) {
  // Ambil rute (URL) saat ini
  const pathname = usePathname();
  
  // Cari tahu nomor urut halaman saat ini (kalau tidak ada, anggap 0)
  const currentIndex = pageOrder[pathname] ?? 0;

  // 2. Logika Arah Transisi:
  // Jika index baru LEBIH BESAR dari index lama (Maju) -> Dari Kiri (-30) ke Kanan (0)
  // Jika index baru LEBIH KECIL dari index lama (Mundur) -> Dari Kanan (30) ke Kiri (0)
  const isMovingForward = currentIndex > prevIndex;
  const startX = isMovingForward ? -30 : 30;

  // 3. Update memori halaman sebelumnya untuk klik berikutnya
  useEffect(() => {
    prevIndex = currentIndex;
  }, [currentIndex]);

  return (
    <motion.div
      initial={{ x: startX, opacity: 0 }}   // Posisi awal (ditentukan logika di atas)
      animate={{ x: 0, opacity: 1 }}        // Posisi akhir (selalu di tengah)
      transition={{ ease: "easeInOut", duration: 1 }} // Kecepatan smooth 0.8s
    >
      {children}
    </motion.div>
  );
}