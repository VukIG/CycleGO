import React from 'react';
import { Navigation, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
export function RoutePanel() {
  return <motion.div initial={{
    y: 50,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} transition={{
    delay: 0.2,
    duration: 0.5
  }} className="fixed bottom-8 left-4 right-4 md:left-8 md:right-auto md:w-96 z-40 backdrop-blur-xl bg-[#1a1a1a]/40 border border-white/10 rounded-2xl p-6 overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#00f0ff]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-[#00f0ff]">
            <Navigation size={16} className="animate-pulse" />
            <span className="text-xs font-mono uppercase tracking-widest">
              Active Route
            </span>
          </div>
          <span className="text-xs text-white/40 font-mono">
            EST. ARRIVAL 14:32
          </span>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
              Distance
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white font-mono tracking-tighter">
                12.4
              </span>
              <span className="text-sm text-white/60 font-medium">km</span>
            </div>
          </div>

          <div>
            <div className="text-white/40 text-xs uppercase tracking-wider mb-1">
              Time
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-5xl font-bold text-white font-mono tracking-tighter">
                18
              </span>
              <span className="text-sm text-white/60 font-medium">min</span>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/5">
              <Zap size={16} className="text-[#00f0ff]" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase">Avg Speed</div>
              <div className="text-sm font-mono text-white">42 km/h</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/5">
              <Clock size={16} className="text-[#00f0ff]" />
            </div>
            <div>
              <div className="text-xs text-white/40 uppercase">Delay</div>
              <div className="text-sm font-mono text-white">+2 min</div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
}