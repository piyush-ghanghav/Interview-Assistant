import { Award, BookOpen, Brain, Clock, Target, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: Users,
    title: 'Practice Mode',
    description: 'Real-time feedback sessions',
    gradient: 'from-blue-500 to-blue-600',
    bgGlow: 'bg-blue-500/10'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your improvement',
    gradient: 'from-green-500 to-emerald-600',
    bgGlow: 'bg-green-500/10'
  },
  {
    icon: Target,
    title: 'Skill Analysis',
    description: 'Personalized feedback',
    gradient: 'from-purple-500 to-purple-600',
    bgGlow: 'bg-purple-500/10'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Response timing practice',
    gradient: 'from-amber-500 to-orange-600',
    bgGlow: 'bg-amber-500/10'
  },
  {
    icon: Award,
    title: 'Performance Score',
    description: 'Detailed evaluation metrics',
    gradient: 'from-rose-500 to-pink-600',
    bgGlow: 'bg-rose-500/10'
  },
  {
    icon: Brain,
    title: 'AI Assistance',
    description: 'Smart interview guidance',
    gradient: 'from-slate-600 to-slate-700',
    bgGlow: 'bg-slate-500/10'
  },
  {
    icon: BookOpen,
    title: 'Your Resources',
    description: 'Access your interview materials',
    gradient: 'from-teal-500 to-cyan-600',
    bgGlow: 'bg-teal-500/10'
  }
];

interface StatItemProps {
  icon: any;
  title: string;
  description: string;
  gradient: string;
  bgGlow: string;
}

const StatItem = ({ icon: Icon, title, description, gradient, bgGlow }: StatItemProps) => (
  <div className="group relative overflow-hidden rounded-xl p-2 max-h-[50vh]">
    
    <div className="relative flex items-center gap-3">
      {/* Icon with Gradient */}
      <div className={`p-2.5 bg-gradient-to-br ${gradient} rounded-xl shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110`}>
        <Icon className="w-4 h-4 text-white" />
      </div>
      
      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-white group-hover:text-white/95 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-white/70 group-hover:text-white/80 transition-colors line-clamp-1">
          {description}
        </p>
      </div>
    </div>
  </div>
);

export function StatsGrid() {
  return (
    <div >
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          title={stat.title}
          description={stat.description}
          gradient={stat.gradient}
          bgGlow={stat.bgGlow}
        />
      ))}
    </div>
  );
}