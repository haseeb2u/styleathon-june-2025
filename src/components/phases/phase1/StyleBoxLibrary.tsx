
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Star, 
  Clock, 
  Trophy, 
  Target,
  Calendar,
  Users,
  Filter,
  Play
} from 'lucide-react';

export function StyleBoxLibrary() {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const styleBoxes = {
    easy: [
      {
        id: 1,
        title: 'Color Harmony Challenge',
        description: 'Create a monochromatic outfit using different shades of blue',
        duration: '30 minutes',
        xpReward: 50,
        attempts: 1234,
        successRate: 78,
        tags: ['Color Theory', 'Basics']
      },
      {
        id: 2,
        title: 'Pattern Mixing Basics',
        description: 'Combine stripes and polka dots in a cohesive look',
        duration: '45 minutes',
        xpReward: 75,
        attempts: 890,
        successRate: 65,
        tags: ['Patterns', 'Coordination']
      },
      {
        id: 3,
        title: 'Silhouette Fundamentals',
        description: 'Design three looks showcasing A-line, straight, and fit-and-flare silhouettes',
        duration: '60 minutes',
        xpReward: 100,
        attempts: 567,
        successRate: 82,
        tags: ['Silhouettes', 'Fundamentals']
      }
    ],
    medium: [
      {
        id: 4,
        title: 'Seasonal Transition Wardrobe',
        description: 'Create a capsule wardrobe that transitions from summer to fall',
        duration: '90 minutes',
        xpReward: 150,
        attempts: 456,
        successRate: 58,
        tags: ['Capsule Wardrobe', 'Seasonal']
      },
      {
        id: 5,
        title: 'Texture Play Challenge',
        description: 'Design an outfit incorporating 5 different textures harmoniously',
        duration: '75 minutes',
        xpReward: 125,
        attempts: 678,
        successRate: 62,
        tags: ['Textures', 'Advanced Coordination']
      },
      {
        id: 6,
        title: 'Budget Luxury Look',
        description: 'Create a high-end appearance using only affordable pieces under $50 each',
        duration: '120 minutes',
        xpReward: 200,
        attempts: 234,
        successRate: 45,
        tags: ['Budget Fashion', 'Luxury Aesthetic']
      }
    ],
    hard: [
      {
        id: 7,
        title: 'Avant-Garde Interpretation',
        description: 'Reinterpret a classic design through an avant-garde lens while maintaining wearability',
        duration: '180 minutes',
        xpReward: 300,
        attempts: 123,
        successRate: 28,
        tags: ['Avant-Garde', 'Innovation']
      },
      {
        id: 8,
        title: 'Cultural Fusion Couture',
        description: 'Blend elements from three different cultural fashion traditions respectfully',
        duration: '240 minutes',
        xpReward: 400,
        attempts: 89,
        successRate: 22,
        tags: ['Cultural Fashion', 'Fusion']
      },
      {
        id: 9,
        title: 'Sustainable Innovation Challenge',
        description: 'Design using only upcycled materials and zero-waste techniques',
        duration: '300 minutes',
        xpReward: 500,
        attempts: 67,
        successRate: 18,
        tags: ['Sustainability', 'Innovation', 'Zero Waste']
      }
    ]
  };

  const weeklyHighlights = [
    {
      title: 'Designer Spotlight: Minimalist Masters',
      description: 'Celebrating the best minimalist designs from this week',
      featured: 12,
      likes: 1543
    },
    {
      title: 'Trending: Bold Geometric Patterns',
      description: 'Geometric patterns are taking over the fashion world',
      featured: 8,
      likes: 982
    }
  ];

  const monthlyChallenge = {
    title: 'October Fashion Revolution',
    theme: 'Revolutionize classic designs with modern twists',
    participants: 2847,
    timeLeft: '18 days',
    grandPrize: '$10,000'
  };

  const StyleBoxCard = ({ box, difficulty }: { box: any, difficulty: string }) => (
    <Card className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-colors">
      <CardHeader>
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className={`${
            difficulty === 'easy' ? 'bg-green-500/20 text-green-400' :
            difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
            'bg-red-500/20 text-red-400'
          }`}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
          <div className="flex items-center space-x-1 text-purple-400">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">{box.xpReward} XP</span>
          </div>
        </div>
        <CardTitle className="text-white text-lg">{box.title}</CardTitle>
        <p className="text-gray-400 text-sm">{box.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4 text-gray-400">
            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {box.duration}
            </span>
            <span className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {box.attempts}
            </span>
          </div>
          <span className="text-green-400">{box.successRate}% success</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {box.tags.map((tag: string, index: number) => (
            <span 
              key={index}
              className="px-2 py-1 text-xs bg-gray-800 text-gray-400 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <Button className="w-full bg-purple-600 hover:bg-purple-700">
          <Play className="w-4 h-4 mr-2" />
          Start StyleBox
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">StyleBox Library</h1>
          <p className="text-gray-400">Practice and perfect your design skills with focused challenges</p>
        </div>
        
        <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
      </div>

      {/* Monthly Challenge Highlight */}
      <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Trophy className="w-8 h-8 text-yellow-400" />
              <div>
                <CardTitle className="text-white text-xl">{monthlyChallenge.title}</CardTitle>
                <p className="text-gray-300">{monthlyChallenge.theme}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-purple-400">{monthlyChallenge.grandPrize}</div>
              <p className="text-sm text-gray-400">Grand Prize</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {monthlyChallenge.participants} participants
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {monthlyChallenge.timeLeft} left
              </span>
            </div>
            <Button className="bg-yellow-600 hover:bg-yellow-700">
              Join Monthly Challenge
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Highlights */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Weekly Highlights</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {weeklyHighlights.map((highlight, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <h3 className="text-white font-semibold mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{highlight.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>{highlight.featured} featured designs</span>
                  <span>{highlight.likes} likes</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* StyleBox Categories */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="all" className="data-[state=active]:bg-purple-600">
            All Levels
          </TabsTrigger>
          <TabsTrigger value="easy" className="data-[state=active]:bg-green-600">
            Easy
          </TabsTrigger>
          <TabsTrigger value="medium" className="data-[state=active]:bg-yellow-600">
            Medium
          </TabsTrigger>
          <TabsTrigger value="hard" className="data-[state=active]:bg-red-600">
            Hard
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {Object.entries(styleBoxes).map(([difficulty, boxes]) => (
            <div key={difficulty}>
              <h3 className="text-lg font-semibold text-white mb-4 capitalize">
                {difficulty} StyleBoxes
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {boxes.map((box) => (
                  <StyleBoxCard key={box.id} box={box} difficulty={difficulty} />
                ))}
              </div>
            </div>
          ))}
        </TabsContent>

        {(['easy', 'medium', 'hard'] as const).map(difficulty => (
          <TabsContent key={difficulty} value={difficulty} className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {styleBoxes[difficulty].map((box) => (
                <StyleBoxCard key={box.id} box={box} difficulty={difficulty} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
