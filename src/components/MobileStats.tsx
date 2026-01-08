import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Mountain, Wind, Battery, TrendingUp, Calendar, Heart, Zap, Timer, Users, Trophy } from 'lucide-react';
const stats = [{
  label: 'Heart Rate',
  value: '142',
  unit: 'bpm',
  icon: Heart,
  color: 'text-rose-400',
  bg: 'bg-rose-400/10'
}, {
  label: 'Power',
  value: '245',
  unit: 'watts',
  icon: Zap,
  color: 'text-yellow-400',
  bg: 'bg-yellow-400/10'
}, {
  label: 'Cadence',
  value: '85',
  unit: 'rpm',
  icon: Activity,
  color: 'text-blue-400',
  bg: 'bg-blue-400/10'
}, {
  label: 'Elevation',
  value: '342',
  unit: 'm',
  icon: Mountain,
  color: 'text-emerald-400',
  bg: 'bg-emerald-400/10'
}, {
  label: 'Calories',
  value: '840',
  unit: 'kcal',
  icon: TrendingUp,
  color: 'text-orange-400',
  bg: 'bg-orange-400/10'
}, {
  label: 'Moving Time',
  value: '1:45',
  unit: 'hr',
  icon: Timer,
  color: 'text-purple-400',
  bg: 'bg-purple-400/10'
}];
const leaderboard = [{
  name: 'Dad',
  points: 2450,
  rank: 1,
  avatar: 'D',
  color: 'from-amber-500 to-amber-600'
}, {
  name: 'You',
  points: 2100,
  rank: 2,
  avatar: 'Y',
  isUser: true,
  color: 'from-emerald-500 to-emerald-600'
}, {
  name: 'Mom',
  points: 1850,
  rank: 3,
  avatar: 'M',
  color: 'from-blue-500 to-blue-600'
}, {
  name: 'Sis',
  points: 1200,
  rank: 4,
  avatar: 'S',
  color: 'from-purple-500 to-purple-600'
}];
export function MobileStats() {
  return <div className="h-full bg-[#0F1419] pt-20 px-4 overflow-y-auto pb-24">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-100 mb-1">
            Your Activity
          </h1>
          <p className="text-slate-400 text-sm">This Week • 124.5 km total</p>
        </div>
        <button className="p-2 rounded-full bg-slate-800/50 text-slate-400">
          <Calendar size={20} />
        </button>
      </div>

      {/* Main Graph Card */}
      <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 mb-6 relative overflow-hidden">
        <div className="flex justify-between items-center mb-6 relative z-10">
          <h3 className="text-slate-200 font-medium">Weekly Progress</h3>
          <span className="text-emerald-400 text-sm font-mono">+12%</span>
        </div>

        <div className="h-32 flex items-end gap-2 relative z-10">
          {[40, 65, 30, 85, 50, 90, 60].map((h, i) => <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
              <div className="w-full bg-slate-700/50 rounded-t-sm relative overflow-hidden transition-colors" style={{
            height: `${h}%`
          }}>
                {i === 5 && <div className="absolute inset-0 bg-emerald-500" />}
              </div>
              <span className="text-[10px] font-mono text-slate-500">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
              </span>
            </div>)}
        </div>

        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
      </div>

      {/* Family Leaderboard */}
      <div className="mb-8">
        <h2 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
          <Trophy size={14} className="text-amber-400" />
          Family Leaderboard
        </h2>
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl overflow-hidden">
          {leaderboard.map((user, i) => <div key={user.name} className={`flex items-center gap-4 p-4 border-b border-slate-700/30 last:border-0 ${user.isUser ? 'bg-emerald-500/5' : ''}`}>
              <div className="font-mono text-slate-500 w-6 text-center font-bold">
                {user.rank}
              </div>
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${user.color} flex items-center justify-center text-white font-bold text-sm shadow-lg`}>
                {user.avatar}
              </div>
              <div className="flex-1 text-slate-200 font-medium">
                {user.name}
                {user.isUser && <span className="ml-2 text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">
                    YOU
                  </span>}
              </div>
              <div className="font-mono font-bold text-slate-200">
                {user.points}{' '}
                <span className="text-xs text-slate-500 font-normal">pts</span>
              </div>
            </div>)}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {stats.map((stat, i) => <motion.div key={stat.label} initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: i * 0.1
      }} className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 active:scale-[0.98] transition-transform">
            <div className={`p-2 rounded-lg w-fit mb-3 ${stat.bg} ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div className="text-slate-500 text-xs uppercase tracking-wider mb-1">
              {stat.label}
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-slate-200 font-mono">
                {stat.value}
              </span>
              <span className="text-xs text-slate-500">{stat.unit}</span>
            </div>
          </motion.div>)}
      </div>

      {/* Battery Status */}
      <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-green-500/10 text-green-400">
            <Battery size={20} />
          </div>
          <div>
            <div className="text-slate-200 font-medium">Bike Battery</div>
            <div className="text-slate-500 text-xs">Est. 45km remaining</div>
          </div>
        </div>
        <div className="text-xl font-mono font-bold text-slate-200">84%</div>
      </div>
    </div>;
}