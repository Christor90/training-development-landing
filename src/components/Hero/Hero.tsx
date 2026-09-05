import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[550px] flex items-center justify-center overflow-hidden">
      
      {/* Background Image - Dark tech/professional theme */}
      <Image
        src="/heroImg.jpg"
        alt="Training and Development background"
        fill
        className="object-cover"
        priority
        quality={100}
      />

      {/* Dark Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="mb-8">
          <div className="inline-block px-6 py-2 rounded-full bg-gray-800/60 backdrop-blur-md border border-gray-700">
            <span className="text-white text-sm font-medium tracking-wider">
              WHAT WE DO
            </span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Training and Development
        </h1>

        {/* Subheading/Description */}
        <p className="text-base sm:text-lg md:text-xl text-gray-100 mb-12 mx-auto leading-relaxed">
          Our comprehensive range of programs and resources is designed to enhance skills, 
          broaden knowledge, and propel careers forward in today's ever-evolving landscape.
        </p>

        {/* CTA Button */}
        <button className="inline-block px-8 py-3 rounded-lg bg-[#571244] hover:bg-[#9a2f7c]
          text-white font-semibold transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2
          transform hover:scale-105">
          Book a Consultation
        </button>
      </div>
    </section>
  );
}