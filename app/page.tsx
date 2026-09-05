
import Hero from '@/src/components/Hero/Hero';
import Header from '../src/components/Header/Header';
import LearningManagementSection from '@/src/components/Sections/LearningManagementSection';
import TrainingSections from '@/src/components/Sections/TrainingSections';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LearningManagementSection />
      <TrainingSections />
    </main>
  );
}