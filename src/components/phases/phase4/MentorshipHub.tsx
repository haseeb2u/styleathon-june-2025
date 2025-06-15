
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Star, 
  MessageSquare,
  TrendingUp,
  Award,
  Eye,
  Heart,
  BarChart3,
  User,
  Crown,
  Target
} from 'lucide-react';

export function MentorshipHub() {
  const mentorStats = {
    impactXP: 2840,
    studentsHelped: 156,
    avgRating: 4.8,
    totalReviews: 89
  };

  const topSubmissions = [
    {
      id: 1,
      title: 'Sustainable Evening Wear',
      designer: 'Emma Wilson',
      views: 1542,
      likes: 89,
      comments: 23,
      category: 'Formal'
    },
    {
      id: 2,
      title: 'Street Style Revolution',
      designer: 'Marcus Johnson',
      views: 1234,
      likes: 67,
      comments: 18,
      category: 'Casual'
    },
    {
      id: 3,
      title: 'Minimalist Workspace Fashion',
      designer: 'Sarah Kim',
      views: 987,
      likes: 54,
      comments: 12,
      category: 'Professional'
    }
  ];

  const designerInsights = [
    {
      designer: 'Alex Designer',
      level: 5,
      strengths: ['Color Theory', 'Silhouettes'],
      improvements: ['Fabric Selection', 'Technical Drawing'],
      submissions: 12,
      avgScore: 78.5
    },
    {
      designer: 'Maria Rodriguez',
      level: 4,
      strengths: ['Sustainability', 'Innovation'],
      improvements: ['Pattern Making', 'Color Harmony'],
      submissions: 8,
      avgScore: 82.1
    }
  ];

  const portfolioShowcase = [
    {
      designer: 'Sofia Martinez',
      university: 'Parsons',
      pieces: 24,
      aiScore: 4.7,
      mentorRating: 4.9,
      featured: true
    },
    {
      designer: 'Alex Chen',
      university: 'Central Saint Martins',
      pieces: 18,
      aiScore: 4.5,
      mentorRating: 4.8,
      featured: false
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Mentorship Hub</h1>
          <p className="text-gray-400">Guide emerging designers and earn Impact XP</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-xl font-bold text-purple-400">{mentorStats.impactXP} XP</div>
            <p className="text-sm text-gray-400">Impact Points</p>
          </div>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Start Mentoring
          </Button>
        </div>
      </div>

      {/* Mentor Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{mentorStats.studentsHelped}</div>
            <p className="text-sm text-gray-400">Students Helped</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{mentorStats.avgRating}</div>
            <p className="text-sm text-gray-400">Avg Rating</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <MessageSquare className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{mentorStats.totalReviews}</div>
            <p className="text-sm text-gray-400">Reviews Given</p>
          </CardContent>
        </Card>
        
        <Card className="bg-gray-900 border-gray-800">
          <CardContent className="p-4 text-center">
            <Award className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{mentorStats.impactXP}</div>
            <p className="text-sm text-gray-400">Impact XP</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="public-review" className="space-y-6">
        <TabsList className="bg-gray-800 border-gray-700">
          <TabsTrigger value="public-review" className="data-[state=active]:bg-purple-600">
            <Eye className="w-4 h-4 mr-2" />
            Public Review Feed
          </TabsTrigger>
          <TabsTrigger value="insights" className="data-[state=active]:bg-purple-600">
            <BarChart3 className="w-4 h-4 mr-2" />
            Designer Insights
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="data-[state=active]:bg-purple-600">
            <Crown className="w-4 h-4 mr-2" />
            Portfolio Showcase
          </TabsTrigger>
        </TabsList>

        <TabsContent value="public-review" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {topSubmissions.map((submission) => (
              <Card key={submission.id} className="bg-gray-900 border-gray-800 hover:border-purple-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                      {submission.category}
                    </Badge>
                    <div className="flex items-center space-x-2 text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span className="text-sm">{submission.views}</span>
                    </div>
                  </div>
                  <CardTitle className="text-white">{submission.title}</CardTitle>
                  <p className="text-gray-400">by {submission.designer}</p>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                    <img 
                      src="/placeholder.svg" 
                      alt={submission.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {submission.likes}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {submission.comments}
                      </span>
                    </div>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Review Design
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="insights" className="space-y-6">
          <div className="space-y-6">
            {designerInsights.map((insight, index) => (
              <Card key={index} className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-8 h-8 text-gray-400" />
                      <div>
                        <CardTitle className="text-white">{insight.designer}</CardTitle>
                        <p className="text-gray-400">Level {insight.level} Designer</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-purple-400">{insight.avgScore}</div>
                      <p className="text-sm text-gray-400">Avg Score</p>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-green-400 font-medium mb-2">Strengths</h4>
                      <div className="flex flex-wrap gap-2">
                        {insight.strengths.map((strength, i) => (
                          <Badge key={i} variant="secondary" className="bg-green-500/20 text-green-400">
                            {strength}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-orange-400 font-medium mb-2">Areas for Improvement</h4>
                      <div className="flex flex-wrap gap-2">
                        {insight.improvements.map((improvement, i) => (
                          <Badge key={i} variant="secondary" className="bg-orange-500/20 text-orange-400">
                            {improvement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <span className="text-gray-400">{insight.submissions} submissions reviewed</span>
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                      View Full Analysis
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-6">
          <div className="grid lg:grid-cols-2 gap-6">
            {portfolioShowcase.map((portfolio, index) => (
              <Card key={index} className={`bg-gray-900 border-gray-800 ${
                portfolio.featured ? 'ring-2 ring-yellow-500/50' : ''
              }`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-white flex items-center">
                        {portfolio.designer}
                        {portfolio.featured && <Crown className="w-5 h-5 text-yellow-400 ml-2" />}
                      </CardTitle>
                      <p className="text-gray-400">{portfolio.university}</p>
                    </div>
                    <Badge variant="secondary" className="bg-purple-500/20 text-purple-400">
                      {portfolio.pieces} pieces
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-yellow-400">{portfolio.aiScore}</div>
                      <p className="text-sm text-gray-400">AI Score</p>
                    </div>
                    <div className="text-center p-3 bg-gray-800 rounded-lg">
                      <div className="text-lg font-bold text-purple-400">{portfolio.mentorRating}</div>
                      <p className="text-sm text-gray-400">Mentor Rating</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800 flex-1 mr-2">
                      View Portfolio
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 flex-1">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Mentor
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
