
import Hero from '@/src/components/Hero/Hero';
import Header from '../src/components/Header/Header';
import LearningManagementSection from '@/src/components/Sections/LearningManagementSection';
import TrainingSections from '@/src/components/Sections/TrainingSections';
import ManagementDevelopmentSection from '@/src/components/Sections/ManagementDevelopmentSection';
import TransformationTalkSection from '@/src/components/Sections/TransformationTalkSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LearningManagementSection />
      <TrainingSections />
      <ManagementDevelopmentSection />
      <TransformationTalkSection />
    </main>
  );
}