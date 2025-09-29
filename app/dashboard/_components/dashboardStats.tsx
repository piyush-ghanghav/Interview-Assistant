import { Award, BookOpen, Brain, Clock, Target, TrendingUp, Users } from 'lucide-react';

const stats = [
  {
    icon: Users,
    title: 'Practice Mode',
    description: 'Real-time feedback sessions',
    color: 'blue'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your improvement',
    color: 'green'
  },
  {
    icon: Target,
    title: 'Skill Analysis',
    description: 'Personalized feedback',
    color: 'purple'
  },
  {
    icon: Clock,
    title: 'Time Management',
    description: 'Response timing practice',
    color: 'yellow'
  },
  {
    icon: Award,
    title: 'Performance Score',
    description: 'Detailed evaluation metrics',
    color: 'red'
  },
  {
    icon: Brain,
    title: 'AI Assistance',
    description: 'Smart interview guidance',
    color: 'black'
  },
  {
    icon: BookOpen,
    title: 'Your Resources',
    description: 'Access your interview materials',
    color: 'green'
  }
];

interface StatItemProps {
  icon: any;
  title: string;
  description: string;
  color: string;
}

const StatItem = ({ icon: Icon, title, description, color }: StatItemProps) => (
  <div className="flex items-center gap-3">
    <div className={`p-2 bg-${color}-100 rounded-lg`}>
      <Icon className={`w-4 h-4 text-${color}-600`} />
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-900">{title}</h3>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  </div>
);

export function StatsGrid() {
  return (
    <div className="bg-gray-50 rounded-xl p-4 space-y-4">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          icon={stat.icon}
          title={stat.title}
          description={stat.description}
          color={stat.color}
        />
      ))}
    </div>
  );
}