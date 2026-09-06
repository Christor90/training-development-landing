
import Hero from '@/src/components/Hero/Hero';
import Header from '../src/components/Header/Header';
import LearningManagementSection from '@/src/components/Sections/LearningManagementSection';
import TrainingSections from '@/src/components/Sections/TrainingSections';
import ManagementDevelopmentSection from '@/src/components/Sections/ManagementDevelopmentSection';
import TransformationTalkSection from '@/src/components/Sections/TransformationTalkSection';
import TrainingConsultantSection from '@/src/components/Sections/TrainingConsultantSection';
import CallToActionSection from '@/src/components/Sections/CallToActionSection';
import TestimonialsSection from '@/src/components/Sections/TestimonialsSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LearningManagementSection />
      <TrainingSections />
      <ManagementDevelopmentSection />
      <TransformationTalkSection />
      <TrainingConsultantSection />
      <CallToActionSection />
      <TestimonialsSection />
    </main>
  );
}