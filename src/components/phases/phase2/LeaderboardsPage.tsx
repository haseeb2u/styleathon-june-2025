
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Trophy, 
  Users, 
  Globe, 
  GraduationCap,
  Crown,
  Star,
  Award,
  TrendingUp,
  Medal,
  Target
} from 'lucide-react';

export function LeaderboardsPage() {
  const topDesigners = [
    {
      rank: 1,
      name: 'Sofia Martinez',
      university: 'Parsons School of Design',
      country: 'USA',
      points: 15420,
      wins: 12,
      level: 8,
      trend: 'up'
    },
    {
      rank: 2,
      name: 'Alex Chen',
      university: 'Central Saint Martins',
      country: 'UK',
      points: 14890,
      wins: 10,
      level: 7,
      trend: 'up'
    },
    {
      rank: 3,
      name: 'Emma Wilson',
      university: 'Fashion Institute of Technology',
      country: 'USA',
      points: 13750,
      wins: 9,
      level: 7,
      trend: 'down'
    }
  ];

  const topTeams = [
    {
      rank: 1,
      name: 'Design Innovators',
      leader: 'Sofia Martinez',
      members: 5,
      points: 45600,
      country: 'USA'
    },
    {
      rank: 2,
      name: 'Fashion Forward',
      leader: 'Alex Chen',
      members: 4,
      points: 42800,
      country: 'UK'
    }
  ];

  const topCountries = [
    {
      rank: 1,
      country: 'United States',
      flag: '🇺🇸',
      designers: 3240,
      totalPoints: 892400,
      avgScore: 275.4
    },
    {
      rank: 2,
      country: 'United Kingdom',
      flag: '🇬🇧',
      designers: 2180,
      totalPoints: 654200,
      avgScore: 300.1
    },
    {
      rank: 3,
      country: 'France',
      flag: '🇫🇷',
      designers: 1890,
      totalPoints: 578900,
      avgScore: 306.3
    }
  ];

  const topUniversities = [
    {
      rank: 1,
      name: 'Parsons School of Design',
      country: 'USA',
      students: 450,
      totalPoints: 156800,
      avgScore: 348.4
    },
    {
      rank: 2,
      name: 'Central Saint Martins',
      country: 'UK',
      students: 380,
      totalPoints: 142600,
      avgScore: 375.3
    },
    {
      rank: 3,
      name: 'Fashion Institute of Technology',
      country: 'USA',
      students: 420,
      totalPoints: 134200,
      avgScore: 319.5
    }
  ];

  const LeaderCard = ({ item, type }: { item: any, type: string }) => (
    <div className="flex items-center space-x-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="text-center min-w-[50px]">
        {item.rank === 1 ? (
          <Crown className="w-8 h-8 text-yellow-400 mx-auto" />
        ) : item.rank === 2 ? (
          <Star className="w-8 h-8 text-gray-300 mx-auto" />
        ) : item.rank === 3 ? (
          <Trophy className="w-8 h-8 text-orange-400 mx-auto" />
        ) : (
          <div className="text-2xl font-bold text-gray-400">#{item.rank}</div>
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <h3 className="text-white font-semibold">{item.name || item.country}</h3>
          {type === 'designers' && item.trend && (
            <TrendingUp className={`w-4 h-4 ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`} />
          )}
          {type === 'countries' && item.flag && (
            <span className="text-xl">{item.flag}</span>
          )}
        </div>
        
        {type === 'designers' && (
          <>
            <p className="text-sm text-gray-400">{item.university} • {item.country}</p>
            <div className="flex items-center space-x-4 mt-2">
              <span className="text-xs text-purple-400">Level {item.level}</span>
              <span className="text-xs text-yellow-400">{item.wins} wins</span>
            </div>
          </>
        )}
        
        {type === 'teams' && (
          <p className="text-sm text-gray-400">{item.members} members • Led by {item.leader}</p>
        )}
        
        {type === 'countries' && (
          <p className="text-sm text-gray-400">{item.designers.toLocaleString()} designers • Avg: {item.avgScore}</p>
        )}
        
        {type === 'universities' && (
          <p className="text-sm text-gray-400">{item.students} students • {item.country} • Avg: {item.avgScore}</p>
        )}
      </div>
      
      <div className="text-right">
        <div className="text-xl font-bold text-white">{item.points?.toLocaleString() || item.totalPoints?.toLocaleString()}</div>
        <p className="text-sm text-gray-400">points</p>
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Global Leaderboards</h1>
          <p className="text-gray-400">See how you rank among the world's best fashion designers</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            This Month
          </Button>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            All Time
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">1,247</div>
            <p className="text-sm text-gray-400">Your Rank</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">2,840</div>
            <p className="text-sm text-gray-400">Your Points</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">+156</div>
            <p className="text-sm text-gray-400">This Week</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <Medal className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">Level 5</div>
            <p className="text-sm text-gray-400">Current Level</p>
          </CardContent>
        </Card>
      </div>

      {/* Leaderboard Tabs */}
      <Tabs defaultValue="designers" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="designers" className="data-[state=active]:bg-purple-600">
            <Trophy className="w-4 h-4 mr-2" />
            Top Designers
          </TabsTrigger>
          <TabsTrigger value="teams" className="data-[state=active]:bg-purple-600">
            <Users className="w-4 h-4 mr-2" />
            Top Teams
          </TabsTrigger>
          <TabsTrigger value="countries" className="data-[state=active]:bg-purple-600">
            <Globe className="w-4 h-4 mr-2" />
            Top Countries
          </TabsTrigger>
          <TabsTrigger value="universities" className="data-[state=active]:bg-purple-600">
            <GraduationCap className="w-4 h-4 mr-2" />
            Top Universities
          </TabsTrigger>
        </TabsList>

        <TabsContent value="designers" className="space-y-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Global Top Designers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topDesigners.map((designer) => (
                <LeaderCard key={designer.rank} item={designer} type="designers" />
              ))}
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                View More Rankings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams" className="space-y-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Top Design Teams</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topTeams.map((team) => (
                <LeaderCard key={team.rank} item={team} type="teams" />
              ))}
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                View More Teams
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="countries" className="space-y-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Countries by Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topCountries.map((country) => (
                <LeaderCard key={country.rank} item={country} type="countries" />
              ))}
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                View All Countries
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="universities" className="space-y-4">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Top Fashion Schools</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {topUniversities.map((university) => (
                <LeaderCard key={university.rank} item={university} type="universities" />
              ))}
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                View All Universities
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
