import React, { memo } from 'react';
import { MapPin, Compass, Award, Settings } from 'lucide-react';
const savedPlaces = [{
  name: 'Hidden Waterfall',
  type: 'Nature',
  date: '2 days ago',
  image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=200&h=150&fit=crop'
}, {
  name: 'Sunset Ridge',
  type: 'Viewpoint',
  date: '1 week ago',
  image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&h=150&fit=crop'
}, {
  name: 'Old Mill Cafe',
  type: 'Rest Stop',
  date: '2 weeks ago',
  image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=150&fit=crop'
}];
export function ProfileView() {
  return <div className="h-full bg-[#0F1419] pt-20 px-4 overflow-y-auto pb-24">
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center text-emerald-400 text-xl font-bold">
            JD
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-100">John Doe</h1>
            <p className="text-slate-400 text-sm">Adventure Cyclist</p>
          </div>
        </div>
        <button className="p-2 rounded-full bg-slate-800/50 text-slate-400">
          <Settings size={20} />
        </button>
      </div>

      {/* Exploration Stats */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-amber-400 mb-2">
            <Compass size={18} />
            <span className="text-xs font-bold uppercase">Explored</span>
          </div>
          <div className="text-2xl font-mono font-bold text-slate-100">12%</div>
          <div className="text-xs text-slate-500">of local map</div>
        </div>
        <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-emerald-400 mb-2">
            <MapPin size={18} />
            <span className="text-xs font-bold uppercase">Saved</span>
          </div>
          <div className="text-2xl font-mono font-bold text-slate-100">24</div>
          <div className="text-xs text-slate-500">memorable spots</div>
        </div>
      </div>

      {/* Saved Places List with Images */}
      <div className="mb-8">
        <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
          Recent Discoveries
        </h3>
        <div className="space-y-3">
          {savedPlaces.map((place, i) => <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-slate-800/20 border border-slate-700/30 active:scale-[0.98] transition-transform">
              <img src={place.image} alt={place.name} className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="text-sm font-medium text-slate-200">
                  {place.name}
                </div>
                <div className="text-xs text-slate-500">{place.type}</div>
              </div>
              <div className="text-xs text-slate-600">{place.date}</div>
            </div>)}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">
          Badges
        </h3>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {[1, 2, 3, 4].map((_, i) => <div key={i} className="flex-shrink-0 w-20 flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 ${i < 2 ? 'bg-amber-500/10 border-amber-500 text-amber-500' : 'bg-slate-800 border-slate-700 text-slate-600'}`}>
                <Award size={24} />
              </div>
              <span className="text-[10px] text-slate-400 text-center">
                Explorer Lvl {i + 1}
              </span>
            </div>)}
        </div>
      </div>
    </div>;
}