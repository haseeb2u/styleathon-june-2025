
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Calendar, 
  Trophy, 
  Users, 
  Clock,
  Star,
  Award,
  Crown
} from 'lucide-react';

export function SeasonalHub() {
  const currentSeason = {
    title: 'Season 1: Summer Edition',
    theme: 'Beat the Heat with Style',
    progress: 65,
    timeLeft: '42 days',
    totalChallenges: 12,
    completedChallenges: 8,
    participants: 15240,
    totalPrize: '$50,000'
  };

  const seasonChallenges = [
    {
      week: 1,
      title: 'Beach Resort Collection',
      status: 'completed',
      winner: 'Sofia Martinez',
      participants: 2341
    },
    {
      week: 2,
      title: 'Urban Summer Vibes',
      status: 'completed',
      winner: 'Alex Chen',
      participants: 2198
    },
    {
      week: 3,
      title: 'Festival Fashion',
      status: 'active',
      participants: 1876,
      timeLeft: '3 days'
    },
    {
      week: 4,
      title: 'Sustainable Summer',
      status: 'upcoming',
      launchDate: 'Next Monday'
    }
  ];

  const topPerformers = [
    { rank: 1, name: 'Sofia Martinez', points: 2840, badge: 'Crown' },
    { rank: 2, name: 'Alex Chen', points: 2650, badge: 'Star' },
    { rank: 3, name: 'Emma Wilson', points: 2420, badge: 'Trophy' },
    { rank: 4, name: 'David Kim', points: 2180, badge: 'Award' },
    { rank: 5, name: 'Maria Garcia', points: 1980, badge: 'Star' }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Season Header */}
      <Card className="bg-gradient-to-r from-orange-900/50 to-yellow-900/50 border-orange-500/30">
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-2xl text-white mb-2">{currentSeason.title}</CardTitle>
              <p className="text-orange-200">{currentSeason.theme}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-yellow-400">{currentSeason.totalPrize}</div>
              <p className="text-sm text-gray-300">Total Prize Pool</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-white">{currentSeason.completedChallenges}/{currentSeason.totalChallenges}</div>
              <p className="text-sm text-gray-300">Challenges</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{currentSeason.participants.toLocaleString()}</div>
              <p className="text-sm text-gray-300">Participants</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-400">{currentSeason.timeLeft}</div>
              <p className="text-sm text-gray-300">Remaining</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">{currentSeason.progress}%</div>
              <p className="text-sm text-gray-300">Complete</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-300">
              <span>Season Progress</span>
              <span>{currentSeason.progress}%</span>
            </div>
            <Progress value={currentSeason.progress} className="h-3" />
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Challenge Timeline */}
        <div className="lg:col-span-2">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Season Timeline
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {seasonChallenges.map((challenge, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg">
                  <div className="text-center min-w-[60px]">
                    <div className="text-sm font-medium text-gray-400">Week</div>
                    <div className="text-xl font-bold text-white">{challenge.week}</div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-white font-semibold">{challenge.title}</h4>
                    {challenge.status === 'completed' && (
                      <p className="text-sm text-green-400">Winner: {challenge.winner}</p>
                    )}
                    {challenge.status === 'active' && (
                      <p className="text-sm text-orange-400">{challenge.timeLeft} left</p>
                    )}
                    {challenge.status === 'upcoming' && (
                      <p className="text-sm text-blue-400">Launches {challenge.launchDate}</p>
                    )}
                  </div>
                  
                  <div className="text-right">
                    <Badge variant="secondary" className={`${
                      challenge.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                      challenge.status === 'active' ? 'bg-orange-500/20 text-orange-400' :
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {challenge.status.charAt(0).toUpperCase() + challenge.status.slice(1)}
                    </Badge>
                    {challenge.participants && (
                      <p className="text-sm text-gray-400 mt-1">{challenge.participants} participants</p>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Season Leaderboard */}
        <Card className="bg-gray-900 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Trophy className="w-5 h-5 mr-2" />
              Season Leaders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topPerformers.map((performer, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                <div className="text-center min-w-[30px]">
                  {performer.rank === 1 ? (
                    <Crown className="w-6 h-6 text-yellow-400" />
                  ) : performer.rank === 2 ? (
                    <Star className="w-6 h-6 text-gray-300" />
                  ) : performer.rank === 3 ? (
                    <Trophy className="w-6 h-6 text-orange-400" />
                  ) : (
                    <div className="text-lg font-bold text-gray-400">#{performer.rank}</div>
                  )}
                </div>
                
                <div className="flex-1">
                  <p className="text-white font-medium">{performer.name}</p>
                  <p className="text-sm text-gray-400">{performer.points} points</p>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 mt-4">
              View Full Leaderboard
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Season Rewards */}
      <Card className="bg-gray-900 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Season Rewards</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-b from-yellow-900/30 to-transparent rounded-lg border border-yellow-500/30">
              <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Season Champion</h3>
              <p className="text-2xl font-bold text-yellow-400 mb-2">$25,000</p>
              <p className="text-sm text-gray-400">+ Exclusive mentorship</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-gray-700/30 to-transparent rounded-lg border border-gray-500/30">
              <Star className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Runner-up</h3>
              <p className="text-2xl font-bold text-gray-300 mb-2">$15,000</p>
              <p className="text-sm text-gray-400">+ Portfolio feature</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-b from-orange-900/30 to-transparent rounded-lg border border-orange-500/30">
              <Trophy className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Third Place</h3>
              <p className="text-2xl font-bold text-orange-400 mb-2">$10,000</p>
              <p className="text-sm text-gray-400">+ Industry connections</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
