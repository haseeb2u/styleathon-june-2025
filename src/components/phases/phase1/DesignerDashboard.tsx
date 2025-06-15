
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Trophy, 
  Star, 
  Clock, 
  TrendingUp, 
  Award,
  Target,
  Calendar,
  Eye
} from 'lucide-react';

export function DesignerDashboard() {
  const userStats = {
    rank: 142,
    level: 5,
    xp: 1240,
    xpToNext: 500,
    challengesCompleted: 18,
    wins: 3,
    winRate: 16.7
  };

  const recentActivity = [
    {
      type: 'submission',
      title: 'Submitted to Summer Minimalist Collection',
      time: '2 hours ago',
      status: 'pending'
    },
    {
      type: 'win',
      title: 'Won 1st place in Color Block Couture',
      time: '3 days ago',
      status: 'completed'
    },
    {
      type: 'feedback',
      title: 'Received mentor feedback on Street Style Design',
      time: '5 days ago',
      status: 'completed'
    },
    {
      type: 'submission',
      title: 'Submitted to Sustainable Fashion Challenge',
      time: '1 week ago',
      status: 'reviewed'
    }
  ];

  const activeChallenges = [
    {
      title: 'Summer Minimalist Collection',
      deadline: '3 days',
      progress: 60,
      submitted: false
    },
    {
      title: 'Vintage Revival Contest',
      deadline: '1 week',
      progress: 30,
      submitted: false
    },
    {
      title: 'Eco-Friendly Streetwear',
      deadline: '5 days',
      progress: 85,
      submitted: true
    }
  ];

  const achievements = [
    { name: 'First Win', icon: Trophy, earned: true },
    { name: 'Quick Submit', icon: Clock, earned: true },
    { name: 'Trending Designer', icon: TrendingUp, earned: false },
    { name: 'Mentor Favorite', icon: Star, earned: true },
    { name: 'Perfect Score', icon: Target, earned: false },
    { name: 'Streak Master', icon: Award, earned: false }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Designer Dashboard</h1>
          <p className="text-gray-400">Track your progress and manage challenges</p>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
          <div>
            <p className="text-lg font-semibold text-white">Alex Designer</p>
            <p className="text-sm text-gray-400">Level {userStats.level} • Rank #{userStats.rank}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div>
                <p className="text-2xl font-bold text-white">{userStats.wins}</p>
                <p className="text-xs text-gray-400">Total Wins</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Target className="w-8 h-8 text-blue-400" />
              <div>
                <p className="text-2xl font-bold text-white">{userStats.challengesCompleted}</p>
                <p className="text-xs text-gray-400">Completed</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-green-400" />
              <div>
                <p className="text-2xl font-bold text-white">{userStats.winRate}%</p>
                <p className="text-xs text-gray-400">Win Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Star className="w-8 h-8 text-purple-400" />
              <div>
                <p className="text-2xl font-bold text-white">{userStats.xp}</p>
                <p className="text-xs text-gray-400">Total XP</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Level Progress */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Level Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">Level {userStats.level}</div>
              <p className="text-gray-400">Fashion Designer</p>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">XP Progress</span>
                <span className="text-white">{userStats.xp}/{userStats.xp + userStats.xpToNext}</span>
              </div>
              <Progress 
                value={(userStats.xp / (userStats.xp + userStats.xpToNext)) * 100} 
                className="h-2"
              />
            </div>
            
            <p className="text-xs text-gray-400 text-center">
              {userStats.xpToNext} XP needed for Level {userStats.level + 1}
            </p>
          </CardContent>
        </Card>

        {/* Active Challenges */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Active Challenges
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activeChallenges.map((challenge, index) => (
              <div key={index} className="p-3 bg-gray-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-sm font-medium text-white">{challenge.title}</h4>
                  {challenge.submitted && (
                    <Badge variant="secondary" className="text-xs">Submitted</Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Progress</span>
                    <span className="text-orange-400">{challenge.deadline} left</span>
                  </div>
                  <Progress value={challenge.progress} className="h-1" />
                </div>
              </div>
            ))}
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Browse More Challenges
            </Button>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-3 p-2">
                <div className={`w-2 h-2 rounded-full mt-2 ${
                  activity.type === 'win' ? 'bg-green-400' :
                  activity.type === 'submission' ? 'bg-blue-400' :
                  'bg-purple-400'
                }`}></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-white">{activity.title}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
              <Eye className="w-4 h-4 mr-2" />
              View All Activity
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Achievements */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Achievements</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`p-4 rounded-lg text-center ${
                  achievement.earned 
                    ? 'bg-purple-500/20 border border-purple-500/30' 
                    : 'bg-gray-800 border border-gray-700'
                }`}
              >
                <achievement.icon className={`w-8 h-8 mx-auto mb-2 ${
                  achievement.earned ? 'text-purple-400' : 'text-gray-600'
                }`} />
                <p className={`text-xs font-medium ${
                  achievement.earned ? 'text-purple-400' : 'text-gray-500'
                }`}>
                  {achievement.name}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
