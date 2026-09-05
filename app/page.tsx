
import Hero from '@/src/components/Hero/Hero';
import Header from '../src/components/Header/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
    </main>
  );
}