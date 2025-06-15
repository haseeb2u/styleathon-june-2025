
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Clock, 
  Users, 
  Trophy, 
  Star,
  Calendar,
  Filter,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';

export function ChallengesPage() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const liveChallenges = [
    {
      id: 1,
      title: 'Summer Minimalist Collection',
      theme: 'Clean lines meet summer vibes',
      description: 'Design a 5-piece summer collection focusing on minimalist aesthetics',
      colorPalette: ['#F8F9FA', '#E9ECEF', '#6C757D', '#495057'],
      fabrics: ['Cotton', 'Linen', 'Silk'],
      silhouettes: ['A-line', 'Straight', 'Oversized'],
      embellishments: 'Minimal hardware, clean stitching',
      deadline: '3 days',
      participants: 342,
      difficulty: 'Medium',
      prize: '$2,500',
      submissions: 89,
      timeLeft: '72:15:30'
    },
    {
      id: 2,
      title: 'Sustainable Street Style',
      theme: 'Eco-friendly urban fashion',
      description: 'Create streetwear using sustainable materials and ethical practices',
      colorPalette: ['#2D5016', '#6A994E', '#A7C957', '#F2E8CF'],
      fabrics: ['Organic Cotton', 'Recycled Polyester', 'Hemp'],
      silhouettes: ['Relaxed fit', 'Cropped', 'Layered'],
      embellishments: 'Upcycled elements, natural dyes',
      deadline: '12 days',
      participants: 189,
      difficulty: 'Hard',
      prize: '$5,000',
      submissions: 45,
      timeLeft: '288:42:18'
    }
  ];

  const pastChallenges = [
    {
      id: 3,
      title: 'Color Block Couture',
      theme: 'Bold colors, bolder statements',
      winner: 'Maria Rodriguez',
      participants: 267,
      difficulty: 'Easy',
      completedDate: '2 weeks ago'
    },
    {
      id: 4,
      title: 'Vintage Revival Contest',
      theme: '70s meets modern day',
      winner: 'Alex Chen',
      participants: 145,
      difficulty: 'Medium',
      completedDate: '1 month ago'
    }
  ];

  const upcomingChallenges = [
    {
      id: 5,
      title: 'Winter Wonderland Gala',
      theme: 'Elegant evening wear for winter events',
      launchDate: 'In 3 days',
      difficulty: 'Hard',
      estimatedPrize: '$7,500'
    },
    {
      id: 6,
      title: 'Athletic Fusion Challenge',
      theme: 'Where sportswear meets high fashion',
      launchDate: 'In 1 week',
      difficulty: 'Medium',
      estimatedPrize: '$3,000'
    }
  ];

  const ChallengeCard = ({ challenge, type }: { challenge: any, type: 'live' | 'past' | 'upcoming' }) => (
    <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-colors">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={`${
            challenge.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
            challenge.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {challenge.difficulty}
          </Badge>
          {type === 'live' && (
            <div className="flex items-center space-x-2 text-orange-400">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-mono">{challenge.timeLeft}</span>
            </div>
          )}
        </div>
        <CardTitle className="text-white">{challenge.title}</CardTitle>
        <p className="text-gray-400 text-sm">{challenge.theme}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {type === 'live' && (
          <>
            <p className="text-gray-300 text-sm">{challenge.description}</p>
            
            {/* Color Palette */}
            <div>
              <h4 className="text-sm font-medium text-white mb-2">Color Palette</h4>
              <div className="flex space-x-2">
                {challenge.colorPalette.map((color: string, index: number) => (
                  <div 
                    key={index}
                    className="w-6 h-6 rounded-full border border-gray-600"
                    style={{ backgroundColor: color }}
                  ></div>
                ))}
              </div>
            </div>
            
            {/* Guidelines */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="text-white font-medium mb-1">Fabrics</h4>
                <p className="text-gray-400">{challenge.fabrics.join(', ')}</p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-1">Silhouettes</h4>
                <p className="text-gray-400">{challenge.silhouettes.join(', ')}</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-1">Embellishments</h4>
              <p className="text-gray-400 text-sm">{challenge.embellishments}</p>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4 text-gray-400">
                <span className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {challenge.participants}
                </span>
                <span className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1" />
                  {challenge.submissions} submissions
                </span>
              </div>
              <span className="text-purple-400 font-semibold">{challenge.prize}</span>
            </div>
          </>
        )}
        
        {type === 'past' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400">Winner: {challenge.winner}</span>
              <span className="text-green-400">Completed</span>
            </div>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <span>{challenge.participants} participants</span>
              <span>{challenge.completedDate}</span>
            </div>
          </div>
        )}
        
        {type === 'upcoming' && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-blue-400">{challenge.launchDate}</span>
              <span className="text-purple-400 font-semibold">{challenge.estimatedPrize}</span>
            </div>
          </div>
        )}
        
        <Button 
          className={`w-full ${
            type === 'live' ? 'bg-purple-600 hover:bg-purple-700' :
            type === 'upcoming' ? 'bg-blue-600 hover:bg-blue-700' :
            'bg-gray-600 hover:bg-gray-700'
          }`}
        >
          {type === 'live' ? 'Join Challenge' :
           type === 'upcoming' ? 'Set Reminder' :
           'View Results'}
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Design Challenges</h1>
          <p className="text-gray-400">Compete, create, and showcase your talent</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search challenges..."
              className="pl-10 bg-gray-800 border-gray-700 text-gray-100 w-64"
            />
          </div>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="live" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="live" className="data-[state=active]:bg-purple-600">
            Live Challenges
          </TabsTrigger>
          <TabsTrigger value="upcoming" className="data-[state=active]:bg-purple-600">
            Upcoming
          </TabsTrigger>
          <TabsTrigger value="past" className="data-[state=active]:bg-purple-600">
            Past Challenges
          </TabsTrigger>
        </TabsList>

        <TabsContent value="live" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {liveChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} type="live" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="upcoming" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} type="upcoming" />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="past" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} type="past" />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
