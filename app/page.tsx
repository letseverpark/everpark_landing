import Navbar from '@/components/Navbar';
import ProblemSection from '@/components/sections/ProblemSection';
import ContradictionSection from '@/components/sections/ContradictionSection';
import TransitionSection from '@/components/sections/TransitionSection';
import SolutionSection from '@/components/sections/SolutionSection';
import JourneySection from '@/components/sections/JourneySection';
import ClosingSection from '@/components/sections/ClosingSection';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      <Navbar />
      
      {/* Cinematic scroll experience */}
      <ProblemSection />
      <ContradictionSection />
      <TransitionSection />
      <SolutionSection />
      <JourneySection />
      <ClosingSection />
    </main>
  );
}
