
import Header from '../src/components/Header/Header';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Placeholder for next section */}
      <section className="h-96 bg-gray-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Hero section coming in Phase 3...</p>
      </section>
    </main>
  );
}