
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Users, Calendar, Star } from 'lucide-react';

export function HomePage() {
  const stats = [
    { label: 'Active Challenges', value: '24', icon: Trophy, color: 'text-yellow-400' },
    { label: 'Global Designers', value: '15.2K', icon: Users, color: 'text-blue-400' },
    { label: 'Monthly Submissions', value: '3.8K', icon: Calendar, color: 'text-green-400' },
    { label: 'Expert Mentors', value: '156', icon: Star, color: 'text-purple-400' },
  ];

  const featuredChallenges = [
    {
      title: 'Summer Minimalist Collection',
      theme: 'Clean lines meet summer vibes',
      deadline: '5 days left',
      participants: 342,
      difficulty: 'Medium',
      prize: '$2,500'
    },
    {
      title: 'Sustainable Street Style',
      theme: 'Eco-friendly urban fashion',
      deadline: '12 days left', 
      participants: 189,
      difficulty: 'Hard',
      prize: '$5,000'
    },
    {
      title: 'Color Block Couture',
      theme: 'Bold colors, bolder statements',
      deadline: '8 days left',
      participants: 267,
      difficulty: 'Easy',
      prize: '$1,000'
    }
  ];

  return (
    <div className="p-6 space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900 via-gray-900 to-pink-900 p-8 md:p-12">
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Styleathon</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Where fashion meets competition. Join thousands of designers in real-world challenges, 
            get expert feedback, and build your creative portfolio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Start Your Journey
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              Explore Challenges
            </Button>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-gray-900 border-gray-800">
            <CardContent className="p-6">
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

      {/* Featured Challenges */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Featured Challenges</h2>
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            View All
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredChallenges.map((challenge, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      challenge.difficulty === 'Easy' 
                        ? 'bg-green-500/20 text-green-400' 
                        : challenge.difficulty === 'Medium'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {challenge.difficulty}
                    </span>
                    <span className="text-purple-400 font-semibold">{challenge.prize}</span>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{challenge.title}</h3>
                    <p className="text-gray-400 text-sm mb-3">{challenge.theme}</p>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{challenge.participants} participants</span>
                    <span className="text-orange-400">{challenge.deadline}</span>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Join Challenge
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Platform Features */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Compete & Win</h3>
            <p className="text-gray-400 text-sm">
              Join design challenges with real prizes and global recognition
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Learn & Grow</h3>
            <p className="text-gray-400 text-sm">
              Get feedback from industry experts and improve your skills
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-6 text-center">
            <Star className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Build Portfolio</h3>
            <p className="text-gray-400 text-sm">
              Showcase your best work and connect with fashion industry professionals
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
