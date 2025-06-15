
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  GraduationCap, 
  Trophy, 
  Users, 
  Globe,
  Plus,
  Star,
  Award,
  Target,
  Crown,
  Flag
} from 'lucide-react';

export function UniversityArena() {
  const userUniversity = {
    name: 'Fashion Institute of Technology',
    logo: '/placeholder.svg',
    country: 'USA',
    students: 420,
    rank: 3,
    totalPoints: 134200,
    avgScore: 319.5,
    badges: ['Innovation Hub', 'Sustainability Leader', 'Tech Pioneer']
  };

  const universityStats = [
    { label: 'Global Rank', value: '#3', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Active Students', value: '420', icon: Users, color: 'text-blue-400' },
    { label: 'Total Points', value: '134.2K', icon: Star, color: 'text-purple-400' },
    { label: 'Avg Score', value: '319.5', icon: Target, color: 'text-green-400' }
  ];

  const topUniversities = [
    {
      rank: 1,
      name: 'Parsons School of Design',
      country: 'USA',
      flag: '🇺🇸',
      students: 450,
      points: 156800,
      avgScore: 348.4
    },
    {
      rank: 2,
      name: 'Central Saint Martins',
      country: 'UK',
      flag: '🇬🇧',
      students: 380,
      points: 142600,
      avgScore: 375.3
    },
    {
      rank: 3,
      name: 'Fashion Institute of Technology',
      country: 'USA',
      flag: '🇺🇸',
      students: 420,
      points: 134200,
      avgScore: 319.5
    }
  ];

  const liveChallenge = {
    title: 'Inter-University Design Battle',
    theme: 'Future of Fashion Technology',
    timeLeft: '5 days, 12 hours',
    participating: 12,
    totalStudents: 1840,
    prize: '$25,000'
  };

  const leagueStandings = [
    { position: 1, university: 'Parsons', score: 2840, change: 'up' },
    { position: 2, university: 'Central Saint Martins', score: 2650, change: 'down' },
    { position: 3, university: 'FIT', score: 2420, change: 'up' },
    { position: 4, university: 'RISD', score: 2180, change: 'same' },
    { position: 5, university: 'Bunka', score: 1980, change: 'up' }
  ];

  const newStyleBoxes = [
    {
      type: 'Cultural StyleBox',
      title: 'Japanese Minimalism',
      description: 'Explore the essence of Japanese design philosophy',
      difficulty: 'Medium',
      xp: 150,
      participants: 234
    },
    {
      type: 'Skill-Based StyleBox',
      title: 'Print & Textile Mastery',
      description: 'Focus exclusively on pattern and textile design',
      difficulty: 'Hard',
      xp: 200,
      participants: 156
    },
    {
      type: 'Role Simulation',
      title: 'Sportswear Brand Intern',
      description: 'Design as if you\'re working for a major athletic brand',
      difficulty: 'Medium',
      xp: 175,
      participants: 189
    },
    {
      type: 'Reverse Engineering',
      title: 'Moodboard Recreation',
      description: 'Recreate a design concept from abstract inspiration',
      difficulty: 'Hard',
      xp: 250,
      participants: 98
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">University Arena</h1>
          <p className="text-gray-400">Compete as part of your university community</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            <Plus className="w-4 h-4 mr-2" />
            Join University
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Flag className="w-4 h-4 mr-2" />
            Create Team
          </Button>
        </div>
      </div>

      {/* University Profile */}
      <Card className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 border-blue-500/30">
        <CardHeader>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-blue-400" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-2xl text-white">{userUniversity.name}</CardTitle>
              <p className="text-blue-200">{userUniversity.country} • Rank #{userUniversity.rank} Globally</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {userUniversity.badges.map((badge, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-500/20 text-blue-400">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* University Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {universityStats.map((stat, index) => (
          <Card key={index} className="bg-gray-900 border-gray-800">
            <CardContent className="p-4">
              <div className="flex items-center space-x-3">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Live Inter-University Challenge */}
      <Card className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border-orange-500/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div>
                <CardTitle className="text-white text-xl">{liveChallenge.title}</CardTitle>
                <p className="text-orange-200">{liveChallenge.theme}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-yellow-400">{liveChallenge.prize}</div>
              <p className="text-sm text-gray-300">Prize Pool</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mb-4">
            <div>
              <div className="text-xl font-bold text-white">{liveChallenge.participating}</div>
              <p className="text-sm text-gray-300">Universities</p>
            </div>
            <div>
              <div className="text-xl font-bold text-white">{liveChallenge.totalStudents}</div>
              <p className="text-sm text-gray-300">Students</p>
            </div>
            <div>
              <div className="text-xl font-bold text-orange-400">{liveChallenge.timeLeft}</div>
              <p className="text-sm text-gray-300">Time Left</p>
            </div>
            <div>
              <Button className="bg-orange-600 hover:bg-orange-700">
                Join Battle
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* League Standings */}
        <div className="lg:col-span-1">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Inter-University League</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {leagueStandings.map((standing, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                  <div className="text-center min-w-[30px]">
                    {standing.position === 1 ? (
                      <Crown className="w-6 h-6 text-yellow-400" />
                    ) : (
                      <div className="text-lg font-bold text-gray-400">#{standing.position}</div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-white font-medium">{standing.university}</p>
                    <p className="text-sm text-gray-400">{standing.score} points</p>
                  </div>
                  
                  <div className={`w-2 h-2 rounded-full ${
                    standing.change === 'up' ? 'bg-green-400' :
                    standing.change === 'down' ? 'bg-red-400' :
                    'bg-gray-400'
                  }`}></div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Advanced StyleBoxes */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Advanced StyleBox Collection</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {newStyleBoxes.map((styleBox, index) => (
                  <div key={index} className="p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className={`text-xs ${
                        styleBox.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-red-500/20 text-red-400'
                      }`}>
                        {styleBox.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-1 text-purple-400">
                        <Star className="w-4 h-4" />
                        <span className="text-sm">{styleBox.xp} XP</span>
                      </div>
                    </div>
                    
                    <h4 className="text-white font-semibold mb-1">{styleBox.title}</h4>
                    <p className="text-xs text-purple-400 mb-2">{styleBox.type}</p>
                    <p className="text-gray-400 text-sm mb-3">{styleBox.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{styleBox.participants} attempts</span>
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                        Try Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Cross-Campus Collaboration */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Cross-Campus Collaboration</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Coming Soon</h3>
            <p className="text-gray-400 mb-4">
              Team up with students from other universities for collaborative design challenges
            </p>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Join Waitlist
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
