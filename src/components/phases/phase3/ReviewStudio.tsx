
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageSquare, 
  Star, 
  Download,
  Eye,
  ThumbsUp,
  ThumbsDown,
  BarChart3,
  User,
  Brain,
  History
} from 'lucide-react';

export function ReviewStudio() {
  const [selectedSubmission] = useState({
    id: 1,
    title: 'Minimalist Summer Elegance',
    designer: 'Alex Designer',
    challenge: 'Summer Minimalist Collection',
    submittedAt: '2 hours ago',
    images: ['/placeholder.svg'],
    description: 'A clean, sophisticated take on summer fashion with flowing lines and sustainable materials.'
  });

  const [aiCritique] = useState({
    fabricAlignment: 85,
    colorHarmony: 92,
    creativityIndex: 78,
    overallScore: 85,
    suggestions: [
      'Consider adding subtle texture variations to enhance visual interest',
      'The color palette could benefit from one more neutral tone',
      'Excellent use of negative space in the design layout'
    ]
  });

  const [juryScores, setJuryScores] = useState({
    creativity: [75],
    technicalSkill: [80],
    themeMatch: [90]
  });

  const [juryComment, setJuryComment] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = [
    'Runway Ready', 'Innovator', 'Technical Excellence', 'Creative Vision',
    'Commercial Viability', 'Trend Setter', 'Sustainable Choice', 'Bold Statement'
  ];

  const peerFeedback = [
    {
      reviewer: 'Sarah Kim',
      rating: 4,
      comment: 'Love the clean lines and color choices. Very wearable!',
      helpful: 12
    },
    {
      reviewer: 'Marcus Johnson',
      rating: 5,
      comment: 'Brilliant interpretation of the minimalist theme. The sustainability aspect is impressive.',
      helpful: 8
    }
  ];

  const submissionVersions = [
    { version: 1, date: '3 days ago', status: 'initial' },
    { version: 2, date: '1 day ago', status: 'revised' },
    { version: 3, date: '2 hours ago', status: 'current' }
  ];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Review Studio</h1>
          <p className="text-gray-400">Provide detailed feedback and critique for design submissions</p>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            <Download className="w-4 h-4 mr-2" />
            Export Review
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Eye className="w-4 h-4 mr-2" />
            Portfolio View
          </Button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Review Panel */}
        <div className="lg:col-span-2 space-y-6">
          {/* Submission Overview */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">{selectedSubmission.title}</CardTitle>
                  <p className="text-gray-400">by {selectedSubmission.designer}</p>
                </div>
                <Badge variant="secondary" className="bg-blue-500/20 text-blue-400">
                  {selectedSubmission.challenge}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <img 
                  src={selectedSubmission.images[0]} 
                  alt="Design submission"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-gray-300">{selectedSubmission.description}</p>
            </CardContent>
          </Card>

          {/* Review Tabs */}
          <Tabs defaultValue="ai-critique" className="space-y-6">
            <TabsList className="bg-gray-800 border-gray-700">
              <TabsTrigger value="ai-critique" className="data-[state=active]:bg-purple-600">
                <Brain className="w-4 h-4 mr-2" />
                AI Critique
              </TabsTrigger>
              <TabsTrigger value="jury-review" className="data-[state=active]:bg-purple-600">
                <Star className="w-4 h-4 mr-2" />
                Jury Review
              </TabsTrigger>
              <TabsTrigger value="peer-feedback" className="data-[state=active]:bg-purple-600">
                <MessageSquare className="w-4 h-4 mr-2" />
                Peer Feedback
              </TabsTrigger>
            </TabsList>

            <TabsContent value="ai-critique" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">AI Analysis Report</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Score Metrics */}
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Fabric Alignment</span>
                        <span className="text-white font-semibold">{aiCritique.fabricAlignment}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-2 bg-blue-500 rounded-full"
                          style={{ width: `${aiCritique.fabricAlignment}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Color Harmony</span>
                        <span className="text-white font-semibold">{aiCritique.colorHarmony}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-2 bg-green-500 rounded-full"
                          style={{ width: `${aiCritique.colorHarmony}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Creativity Index</span>
                        <span className="text-white font-semibold">{aiCritique.creativityIndex}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-2 bg-purple-500 rounded-full"
                          style={{ width: `${aiCritique.creativityIndex}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Overall Score</span>
                        <span className="text-white font-semibold">{aiCritique.overallScore}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full">
                        <div 
                          className="h-2 bg-yellow-500 rounded-full"
                          style={{ width: `${aiCritique.overallScore}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* AI Suggestions */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">Improvement Suggestions</h4>
                    <div className="space-y-2">
                      {aiCritique.suggestions.map((suggestion, index) => (
                        <div key={index} className="flex items-start space-x-3 p-3 bg-gray-800 rounded-lg">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                          <p className="text-gray-300 text-sm">{suggestion}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="jury-review" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Jury Evaluation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Scoring Sliders */}
                  <div className="space-y-6">
                    <div>
                      <label className="text-white font-medium mb-3 block">
                        Creativity ({juryScores.creativity[0]}/100)
                      </label>
                      <Slider
                        value={juryScores.creativity}
                        onValueChange={(value) => setJuryScores(prev => ({ ...prev, creativity: value }))}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="text-white font-medium mb-3 block">
                        Technical Skill ({juryScores.technicalSkill[0]}/100)
                      </label>
                      <Slider
                        value={juryScores.technicalSkill}
                        onValueChange={(value) => setJuryScores(prev => ({ ...prev, technicalSkill: value }))}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label className="text-white font-medium mb-3 block">
                        Theme Match ({juryScores.themeMatch[0]}/100)
                      </label>
                      <Slider
                        value={juryScores.themeMatch}
                        onValueChange={(value) => setJuryScores(prev => ({ ...prev, themeMatch: value }))}
                        max={100}
                        step={1}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div>
                    <label className="text-white font-medium mb-3 block">Jury Comments</label>
                    <Textarea
                      placeholder="Provide detailed feedback on the design..."
                      value={juryComment}
                      onChange={(e) => setJuryComment(e.target.value)}
                      className="bg-gray-800 border-gray-700 text-gray-100 min-h-[100px]"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <label className="text-white font-medium mb-3 block">Award Tags</label>
                    <div className="flex flex-wrap gap-2">
                      {availableTags.map((tag) => (
                        <button
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`px-3 py-1 text-sm rounded-full transition-colors ${
                            selectedTags.includes(tag)
                              ? 'bg-purple-500 text-white'
                              : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Submit Jury Review
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="peer-feedback" className="space-y-6">
              <Card className="bg-gray-900 border-gray-800">
                <CardHeader>
                  <CardTitle className="text-white">Community Feedback</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {peerFeedback.map((feedback, index) => (
                    <div key={index} className="p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <User className="w-5 h-5 text-gray-400" />
                          <span className="text-white font-medium">{feedback.reviewer}</span>
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`w-4 h-4 ${
                                  i < feedback.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'
                                }`} 
                              />
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <button className="text-gray-400 hover:text-green-400">
                            <ThumbsUp className="w-4 h-4" />
                          </button>
                          <span className="text-sm text-gray-400">{feedback.helpful}</span>
                        </div>
                      </div>
                      <p className="text-gray-300">{feedback.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Side Panel */}
        <div className="space-y-6">
          {/* Version History */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <History className="w-5 h-5 mr-2" />
                Version History
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {submissionVersions.map((version, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                  <div className="text-center min-w-[30px]">
                    <div className="text-lg font-bold text-white">v{version.version}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-400">{version.date}</p>
                    <Badge variant="secondary" className={`text-xs ${
                      version.status === 'current' ? 'bg-green-500/20 text-green-400' :
                      version.status === 'revised' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {version.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                <BarChart3 className="w-4 h-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                <Download className="w-4 h-4 mr-2" />
                Export to Portfolio
              </Button>
              <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact Designer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
