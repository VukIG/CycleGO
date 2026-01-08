import React from 'react';
import { motion } from 'framer-motion';
import { Users, Mountain, Map, ArrowRight } from 'lucide-react';
export function ChallengesView() {
  const coopChallenges = [{
    title: 'Cross-Country Team',
    desc: 'Ride 500km collectively this month',
    progress: 342,
    total: 500,
    members: 4,
    icon: Map,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10'
  }, {
    title: 'Summit Seekers',
    desc: 'Climb 2000m elevation together',
    progress: 1250,
    total: 2000,
    members: 3,
    icon: Mountain,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10'
  }];
  return <div className="h-full bg-[#0F1419] pt-20 px-4 overflow-y-auto pb-24">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-1">
            Co-op Goals
          </h1>
          <p className="text-slate-400 text-sm">Achieve more together</p>
        </div>
        <button className="px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium flex items-center gap-1">
          <Users size={12} />
          Invite
        </button>
      </div>

      <div className="space-y-6">
        {coopChallenges.map((challenge, i) => <motion.div key={i} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: i * 0.1
      }} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-5">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <div className={`p-3 rounded-xl ${challenge.bg} ${challenge.color}`}>
                  <challenge.icon size={24} />
                </div>
                <div>
                  <h3 className="text-slate-200 font-bold text-lg">
                    {challenge.title}
                  </h3>
                  <p className="text-slate-400 text-sm">{challenge.desc}</p>
                </div>
              </div>
            </div>

            {/* Shared Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-xs font-mono mb-2">
                <span className="text-slate-500">GROUP PROGRESS</span>
                <span className="text-emerald-400">
                  {Math.round(challenge.progress / challenge.total * 100)}%
                </span>
              </div>
              <div className="w-full h-3 bg-slate-700/50 rounded-full overflow-hidden">
                <motion.div initial={{
              width: 0
            }} animate={{
              width: `${challenge.progress / challenge.total * 100}%`
            }} className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400" />
              </div>
              <div className="flex justify-between mt-1 text-[10px] text-slate-500 font-mono">
                <span>0</span>
                <span>{challenge.total} km</span>
              </div>
            </div>

            {/* Members */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
              <div className="flex -space-x-2">
                {[...Array(challenge.members)].map((_, idx) => <div key={idx} className="w-8 h-8 rounded-full border-2 border-[#0F1419] bg-slate-700 flex items-center justify-center text-[10px] text-slate-300 font-bold">
                    {String.fromCharCode(65 + idx)}
                  </div>)}
                <div className="w-8 h-8 rounded-full border-2 border-[#0F1419] bg-slate-800 flex items-center justify-center text-[10px] text-slate-400">
                  +
                </div>
              </div>
              <button className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                Details <ArrowRight size={12} />
              </button>
            </div>
          </motion.div>)}
      </div>
    </div>;
}