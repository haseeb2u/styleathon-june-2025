
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  User, 
  Trophy, 
  Upload, 
  Archive, 
  Calendar,
  BarChart3,
  MessageSquare,
  Users,
  GraduationCap,
  X,
  Swords
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navigationItems = [
  {
    title: 'CORE PLATFORM',
    items: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'Dashboard', href: '/dashboard', icon: User },
      { name: 'Challenges', href: '/challenges', icon: Trophy },
      { name: 'Arena Hub', href: '/arenas', icon: Swords },
      { name: 'Submit Design', href: '/submit', icon: Upload },
      { name: 'StyleBox Library', href: '/stylebox', icon: Archive },
    ]
  },
  {
    title: 'PHASE 2',
    items: [
      { name: 'Seasonal Hub', href: '/seasonal', icon: Calendar },
      { name: 'Leaderboards', href: '/leaderboards', icon: BarChart3 },
    ]
  },
  {
    title: 'PHASE 3',
    items: [
      { name: 'Review Studio', href: '/review', icon: MessageSquare },
    ]
  },
  {
    title: 'PHASE 4',
    items: [
      { name: 'Mentorship', href: '/mentorship', icon: Users },
    ]
  },
  {
    title: 'PHASE 5',
    items: [
      { name: 'University Arena', href: '/university', icon: GraduationCap },
    ]
  }
];

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const location = useLocation();

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed lg:static inset-y-0 left-0 z-50 w-72 bg-gray-900 border-r border-gray-800 transform transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Styleathon</h2>
              <p className="text-xs text-gray-400">by Adorzia</p>
            </div>
          </div>
          <button 
            onClick={onToggle}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-6">
          {navigationItems.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const isActive = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => window.innerWidth < 1024 && onToggle()}
                      className={cn(
                        "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                        isActive 
                          ? "bg-purple-500/20 text-purple-400 border border-purple-500/30" 
                          : "text-gray-300 hover:text-white hover:bg-gray-800"
                      )}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}
