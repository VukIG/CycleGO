import React from 'react';
import { Menu, Bell, Search } from 'lucide-react';
import { motion } from 'framer-motion';
interface MobileHeaderProps {
  onSearchClick: () => void;
}
export function MobileHeader({
  onSearchClick
}: MobileHeaderProps) {
  return <motion.header initial={{
    y: -20,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} className="fixed top-0 left-0 right-0 z-30 pt-safe-top px-4 pb-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
      <div className="flex justify-between items-center pt-4">
        {/* Profile / Menu */}
        <button className="pointer-events-auto w-10 h-10 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white active:scale-95 transition-transform">
          <Menu size={20} />
        </button>

        {/* Status Pill */}
        <div className="pointer-events-auto flex items-center gap-2 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
          <div className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
          <span className="text-xs font-mono font-medium text-white tracking-wider">
            ONLINE
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button onClick={onSearchClick} className="pointer-events-auto w-10 h-10 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white active:scale-95 transition-transform">
            <Search size={20} />
          </button>

          <button className="pointer-events-auto w-10 h-10 rounded-full bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 flex items-center justify-center text-white active:scale-95 transition-transform relative">
            <Bell size={20} />
            <div className="absolute top-2 right-2 w-2 h-2 bg-[#00f0ff] rounded-full border border-[#1a1a1a]" />
          </button>
        </div>
      </div>
    </motion.header>;
}