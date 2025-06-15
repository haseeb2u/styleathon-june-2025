
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from '@/components/navigation/Sidebar';
import { Header } from '@/components/navigation/Header';
import { HomePage } from '@/components/phases/phase1/HomePage';
import { DesignerDashboard } from '@/components/phases/phase1/DesignerDashboard';
import { ChallengesPage } from '@/components/phases/phase1/ChallengesPage';
import { SubmitDesignPage } from '@/components/phases/phase1/SubmitDesignPage';
import { StyleBoxLibrary } from '@/components/phases/phase1/StyleBoxLibrary';
import { SeasonalHub } from '@/components/phases/phase2/SeasonalHub';
import { LeaderboardsPage } from '@/components/phases/phase2/LeaderboardsPage';
import { ReviewStudio } from '@/components/phases/phase3/ReviewStudio';
import { MentorshipHub } from '@/components/phases/phase4/MentorshipHub';
import { UniversityArena } from '@/components/phases/phase5/UniversityArena';

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
          
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-950">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DesignerDashboard />} />
              <Route path="/challenges" element={<ChallengesPage />} />
              <Route path="/submit" element={<SubmitDesignPage />} />
              <Route path="/stylebox" element={<StyleBoxLibrary />} />
              <Route path="/seasonal" element={<SeasonalHub />} />
              <Route path="/leaderboards" element={<LeaderboardsPage />} />
              <Route path="/review" element={<ReviewStudio />} />
              <Route path="/mentorship" element={<MentorshipHub />} />
              <Route path="/university" element={<UniversityArena />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
