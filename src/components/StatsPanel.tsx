import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Activity, Mountain, Wind, Battery, Signal } from 'lucide-react';
const stats = [{
  label: 'Elevation Gain',
  value: '342',
  unit: 'm',
  icon: Mountain
}, {
  label: 'Avg Pace',
  value: '4:12',
  unit: '/km',
  icon: Activity
}, {
  label: 'Calories',
  value: '840',
  unit: 'kcal',
  icon: TrendingUp
}, {
  label: 'Wind Speed',
  value: '12',
  unit: 'km/h',
  icon: Wind
}, {
  label: 'Battery',
  value: '84',
  unit: '%',
  icon: Battery
}, {
  label: 'Signal',
  value: '4G',
  unit: 'LTE',
  icon: Signal
}];
export function StatsPanel() {
  return <motion.div initial={{
    opacity: 0,
    scale: 0.95
  }} animate={{
    opacity: 1,
    scale: 1
  }} exit={{
    opacity: 0,
    scale: 0.95
  }} transition={{
    duration: 0.4,
    ease: [0.23, 1, 0.32, 1]
  }} className="absolute inset-0 z-30 flex items-center justify-center p-4 pt-24 pb-8 bg-[#0a0a0a]">
      <div className="w-full max-w-4xl h-full flex flex-col">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Session Analytics
          </h2>
          <p className="text-white/40 font-mono text-sm">
            SESSION ID: 8X-2939-A
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-y-auto pb-20">
          {stats.map((stat, index) => <motion.div key={stat.label} initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }} className="bg-[#1a1a1a]/40 border border-white/10 rounded-2xl p-6 hover:bg-[#1a1a1a]/60 transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <div className="p-3 rounded-xl bg-white/5 text-[#00f0ff] group-hover:shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-shadow">
                  <stat.icon size={24} />
                </div>
                <span className="text-xs font-mono text-white/30 uppercase tracking-widest">
                  Live
                </span>
              </div>

              <div>
                <div className="text-sm text-white/50 mb-1">{stat.label}</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white font-mono tracking-tighter group-hover:text-[#00f0ff] transition-colors">
                    {stat.value}
                  </span>
                  <span className="text-sm font-medium text-white/40">
                    {stat.unit}
                  </span>
                </div>
              </div>
            </motion.div>)}

          {/* Large Graph Placeholder */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.6
        }} className="md:col-span-2 lg:col-span-3 bg-[#1a1a1a]/40 border border-white/10 rounded-2xl p-8 min-h-[200px] flex flex-col justify-between relative overflow-hidden">
            <div className="flex justify-between items-center z-10 relative">
              <h3 className="text-white font-medium">Elevation Profile</h3>
              <div className="flex gap-2">
                {['1H', '2H', '4H'].map(t => <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-white/5 text-white/60 cursor-pointer hover:bg-white/10 hover:text-white transition-colors">
                    {t}
                  </span>)}
              </div>
            </div>

            {/* Abstract Graph Visualization */}
            <div className="absolute inset-0 flex items-end opacity-20 pointer-events-none">
              <svg className="w-full h-3/4" preserveAspectRatio="none" viewBox="0 0 100 100">
                <path d="M0,100 L0,80 C10,75 20,85 30,60 C40,35 50,50 60,40 C70,30 80,45 90,20 L100,10 L100,100 Z" fill="url(#gradient)" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#00f0ff" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex justify-between mt-auto pt-8 z-10 relative">
              <span className="text-xs font-mono text-white/30">START</span>
              <span className="text-xs font-mono text-white/30">FINISH</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>;
}