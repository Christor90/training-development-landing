
'use client';

export default function CallToActionSection() {
  return (
    <section className="sm:py-10 bg-white pt-7">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#571244] rounded-2xl p-8 sm:p-12 md:p-16 text-center space-y-8">
          
          {/* Heading and Subtext */}
          <div className="space-y-4">
            {/* Main Heading */}
            <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-3xl text-white leading-tight max-w-6xl mx-auto">
              Want to accelerate professional growth and development at your organisation? See how we can help.
            </h2>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <button className="px-8 sm:px-10 py-3 sm:py-4 
              bg-white text-[#571244] font-semibold text-lg
              rounded-lg hover:bg-gray-100 transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
              transform hover:scale-105">
              Book a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}