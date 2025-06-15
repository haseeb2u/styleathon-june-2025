
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Upload, 
  Link as LinkIcon, 
  Clock, 
  HelpCircle,
  FileImage,
  ExternalLink,
  Save,
  Send
} from 'lucide-react';

export function SubmitDesignPage() {
  const [selectedChallenge] = useState({
    title: 'Summer Minimalist Collection',
    theme: 'Clean lines meet summer vibes',
    deadline: '2 days, 14 hours left',
    guidelines: {
      colorPalette: ['#F8F9FA', '#E9ECEF', '#6C757D', '#495057'],
      fabrics: ['Cotton', 'Linen', 'Silk'],
      silhouettes: ['A-line', 'Straight', 'Oversized'],
      embellishments: 'Minimal hardware, clean stitching'
    }
  });

  const [lifelines] = useState({
    available: 2,
    used: 1,
    total: 3
  });

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [referenceLinks, setReferenceLinks] = useState(['']);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setUploadedFiles([...uploadedFiles, ...files]);
  };

  const addReferenceLink = () => {
    setReferenceLinks([...referenceLinks, '']);
  };

  const updateReferenceLink = (index: number, value: string) => {
    const updated = [...referenceLinks];
    updated[index] = value;
    setReferenceLinks(updated);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Submit Design</h1>
          <p className="text-gray-400">Upload your creative solution to the challenge</p>
        </div>
        
        <div className="flex items-center space-x-2 text-orange-400">
          <Clock className="w-5 h-5" />
          <span className="font-mono">{selectedChallenge.deadline}</span>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Submission Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Design Submission</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Challenge Info */}
              <div className="p-4 bg-gray-800 rounded-lg">
                <h3 className="text-lg font-semibold text-white mb-2">{selectedChallenge.title}</h3>
                <p className="text-gray-400">{selectedChallenge.theme}</p>
              </div>

              {/* Title and Description */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title" className="text-white">Design Title</Label>
                  <Input
                    id="title"
                    placeholder="Give your design a creative title..."
                    className="bg-gray-800 border-gray-700 text-gray-100"
                  />
                </div>
                
                <div>
                  <Label htmlFor="description" className="text-white">Design Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe your design concept, inspiration, and key features..."
                    className="bg-gray-800 border-gray-700 text-gray-100 min-h-[100px]"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div>
                <Label className="text-white">Design Files</Label>
                <div className="mt-2 border-2 border-dashed border-gray-700 rounded-lg p-6 text-center hover:border-purple-500/50 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.ai,.psd"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">Supports: JPG, PNG, PDF, AI, PSD (Max 50MB each)</p>
                  </label>
                </div>
                
                {/* Uploaded Files */}
                {uploadedFiles.length > 0 && (
                  <div className="mt-4 space-y-2">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg">
                        <FileImage className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300 flex-1">{file.name}</span>
                        <span className="text-sm text-gray-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Reference Links */}
              <div>
                <Label className="text-white">Reference Links (Optional)</Label>
                <p className="text-sm text-gray-400 mb-3">Add inspiration sources, mood boards, or portfolio links</p>
                
                <div className="space-y-3">
                  {referenceLinks.map((link, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <LinkIcon className="w-5 h-5 text-gray-400" />
                      <Input
                        placeholder="https://..."
                        value={link}
                        onChange={(e) => updateReferenceLink(index, e.target.value)}
                        className="bg-gray-800 border-gray-700 text-gray-100"
                      />
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    onClick={addReferenceLink}
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                  >
                    <LinkIcon className="w-4 h-4 mr-2" />
                    Add Reference Link
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                  <Save className="w-4 h-4 mr-2" />
                  Save Draft
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 flex-1">
                  <Send className="w-4 h-4 mr-2" />
                  Submit Design
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Guidelines and Lifelines */}
        <div className="space-y-6">
          {/* Challenge Guidelines */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Challenge Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Color Palette */}
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Color Palette</h4>
                <div className="flex space-x-2">
                  {selectedChallenge.guidelines.colorPalette.map((color, index) => (
                    <div 
                      key={index}
                      className="w-8 h-8 rounded-full border border-gray-600"
                      style={{ backgroundColor: color }}
                      title={color}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Fabrics */}
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Recommended Fabrics</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedChallenge.guidelines.fabrics.map((fabric, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                    >
                      {fabric}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Silhouettes */}
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Silhouettes</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedChallenge.guidelines.silhouettes.map((silhouette, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                    >
                      {silhouette}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Embellishments */}
              <div>
                <h4 className="text-sm font-medium text-white mb-2">Embellishments</h4>
                <p className="text-sm text-gray-400">{selectedChallenge.guidelines.embellishments}</p>
              </div>
            </CardContent>
          </Card>

          {/* Lifelines */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white flex items-center">
                <HelpCircle className="w-5 h-5 mr-2" />
                Lifelines
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">{lifelines.available}</div>
                <p className="text-sm text-gray-400">Available Lifelines</p>
              </div>
              
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-blue-600 text-blue-400 hover:bg-blue-600/10"
                  disabled={lifelines.available === 0}
                >
                  Ask Mentor Question
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-green-600 text-green-400 hover:bg-green-600/10"
                  disabled={lifelines.available === 0}
                >
                  Get Color Suggestion
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-yellow-600 text-yellow-400 hover:bg-yellow-600/10"
                  disabled={lifelines.available === 0}
                >
                  Fabric Compatibility Check
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                Used {lifelines.used} of {lifelines.total} lifelines this challenge
              </p>
            </CardContent>
          </Card>

          {/* Quick Tips */}
          <Card className="bg-gray-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Submission Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>Include multiple angles and detail shots of your design</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>Explain your design choices and inspiration clearly</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>Follow the color palette and fabric guidelines closely</p>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
                <p>Submit early to avoid last-minute technical issues</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
