
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { 
  Globe, 
  MapPin, 
  Building2, 
  Trophy, 
  Search,
  Filter,
  Users,
  Star,
  Crown,
  Medal
} from 'lucide-react';

export function ArenaHub() {
  const [searchQuery, setSearchQuery] = useState('');

  const globalArenaStats = {
    totalDesigners: '45.2K',
    activeChallenges: 18,
    thisWeekWinners: 127,
    continents: 6
  };

  const cityArenas = [
    {
      id: 1,
      name: 'Karachi Design Arena',
      country: 'Pakistan',
      flag: '🇵🇰',
      designers: 1240,
      activeChallenges: 5,
      topDesigner: 'Fatima Khan',
      badge: 'Top in Karachi',
      trending: 'Minimalist Streetwear'
    },
    {
      id: 2,
      name: 'London Fashion Hub',
      country: 'United Kingdom',
      flag: '🇬🇧',
      designers: 2180,
      activeChallenges: 8,
      topDesigner: 'Emma Richardson',
      badge: 'London Style Legend',
      trending: 'Sustainable Luxury'
    },
    {
      id: 3,
      name: 'Mumbai Style Arena',
      country: 'India',
      flag: '🇮🇳',
      designers: 1890,
      activeChallenges: 6,
      topDesigner: 'Arjun Patel',
      badge: 'Mumbai Trendsetter',
      trending: 'Fusion Wear'
    }
  ];

  const brandedArenas = [
    {
      id: 1,
      name: 'Nike Design Arena',
      brand: 'Nike',
      theme: 'Athletic Innovation',
      bgColor: 'from-orange-600 to-red-600',
      logo: 'N',
      participants: 892,
      prize: '$10,000',
      deadline: '12 days',
      briefSummary: 'Design the future of athletic wear'
    },
    {
      id: 2,
      name: "Levi's Urban Fit Challenge",
      brand: "Levi's",
      theme: 'Denim Revolution',
      bgColor: 'from-blue-800 to-indigo-900',
      logo: 'L',
      participants: 654,
      prize: '$7,500',
      deadline: '8 days',
      briefSummary: 'Reimagine classic denim for urban lifestyle'
    },
    {
      id: 3,
      name: 'Adidas Sustainable Streetwear',
      brand: 'Adidas',
      theme: 'Eco-Forward Fashion',
      bgColor: 'from-green-700 to-emerald-800',
      logo: 'A',
      participants: 1120,
      prize: '$15,000',
      deadline: '15 days',
      briefSummary: 'Create streetwear using sustainable materials'
    }
  ];

  const myActiveArenas = [
    {
      type: 'City',
      name: 'Karachi Design Arena',
      status: 'Active',
      rank: 23,
      submissions: 4
    },
    {
      type: 'Branded',
      name: 'Nike Design Arena',
      status: 'Pending Review',
      rank: 156,
      submissions: 1
    },
    {
      type: 'Global',
      name: 'Global Arena',
      status: 'Active',
      rank: 2847,
      submissions: 8
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Arena Hub</h1>
          <p className="text-gray-400">Compete in city leagues, global competitions, and branded challenges</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search arenas..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
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
      <Tabs defaultValue="global" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="global" className="data-[state=active]:bg-purple-600">
            <Globe className="w-4 h-4 mr-2" />
            Global Arena
          </TabsTrigger>
          <TabsTrigger value="city" className="data-[state=active]:bg-purple-600">
            <MapPin className="w-4 h-4 mr-2" />
            City Arena
          </TabsTrigger>
          <TabsTrigger value="branded" className="data-[state=active]:bg-purple-600">
            <Building2 className="w-4 h-4 mr-2" />
            Branded Arena
          </TabsTrigger>
          <TabsTrigger value="active" className="data-[state=active]:bg-purple-600">
            <Trophy className="w-4 h-4 mr-2" />
            My Active Arenas
          </TabsTrigger>
        </TabsList>

        {/* Global Arena */}
        <TabsContent value="global" className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-8 h-8 text-blue-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{globalArenaStats.totalDesigners}</p>
                    <p className="text-xs text-gray-400">Global Designers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{globalArenaStats.activeChallenges}</p>
                    <p className="text-xs text-gray-400">Active Challenges</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Crown className="w-8 h-8 text-purple-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{globalArenaStats.thisWeekWinners}</p>
                    <p className="text-xs text-gray-400">This Week Winners</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Medal className="w-8 h-8 text-green-400" />
                  <div>
                    <p className="text-2xl font-bold text-white">{globalArenaStats.continents}</p>
                    <p className="text-xs text-gray-400">Continents</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Global Hall of Fame</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {['World Finalist', 'Continental Champion', 'Global Trendsetter'].map((title, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                        <Crown className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Designer Name</p>
                        <p className="text-sm text-gray-400">{title}</p>
                      </div>
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-400">{title}</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* City Arena */}
        <TabsContent value="city" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityArenas.map((city) => (
              <Card key={city.id} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{city.flag}</span>
                      <div>
                        <CardTitle className="text-lg text-white">{city.name}</CardTitle>
                        <p className="text-sm text-gray-400">{city.country}</p>
                      </div>
                    </div>
                    <Badge className="bg-blue-500/20 text-blue-400">{city.badge}</Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Designers</p>
                      <p className="text-white font-semibold">{city.designers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Active Challenges</p>
                      <p className="text-white font-semibold">{city.activeChallenges}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Top Designer</p>
                    <p className="text-white font-medium">{city.topDesigner}</p>
                  </div>
                  
                  <div>
                    <p className="text-gray-400 text-sm">Trending Style</p>
                    <p className="text-purple-400 font-medium">{city.trending}</p>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Join City Arena
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Branded Arena */}
        <TabsContent value="branded" className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandedArenas.map((arena) => (
              <Card key={arena.id} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-colors overflow-hidden">
                <div className={`h-24 bg-gradient-to-r ${arena.bgColor} relative`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4 flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">{arena.logo}</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">{arena.name}</h3>
                      <p className="text-white/80 text-sm">{arena.theme}</p>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <p className="text-gray-300 text-sm">{arena.briefSummary}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-400">Participants</p>
                      <p className="text-white font-semibold">{arena.participants}</p>
                    </div>
                    <div>
                      <p className="text-gray-400">Deadline</p>
                      <p className="text-orange-400 font-semibold">{arena.deadline}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Badge className="bg-green-500/20 text-green-400">{arena.prize}</Badge>
                    <Badge className="bg-purple-500/20 text-purple-400">Branded Challenge</Badge>
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${arena.bgColor} hover:opacity-90`}>
                    Enter {arena.brand} Arena
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* My Active Arenas */}
        <TabsContent value="active" className="space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">My Active Arenas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {myActiveArenas.map((arena, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        arena.type === 'City' ? 'bg-blue-500/20' :
                        arena.type === 'Branded' ? 'bg-purple-500/20' :
                        'bg-green-500/20'
                      }`}>
                        {arena.type === 'City' ? <MapPin className="w-5 h-5 text-blue-400" /> :
                         arena.type === 'Branded' ? <Building2 className="w-5 h-5 text-purple-400" /> :
                         <Globe className="w-5 h-5 text-green-400" />}
                      </div>
                      <div>
                        <p className="text-white font-medium">{arena.name}</p>
                        <p className="text-sm text-gray-400">{arena.type} Arena</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <p className="text-sm text-gray-400">Rank #{arena.rank}</p>
                        <p className="text-sm text-gray-400">{arena.submissions} submissions</p>
                      </div>
                      <Badge className={
                        arena.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        arena.status === 'Pending Review' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-gray-500/20 text-gray-400'
                      }>
                        {arena.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
