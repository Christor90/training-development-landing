
import Image from 'next/image';
import { Zap, ArrowUpRight } from 'lucide-react';

interface TransformationItem {
  label: string;
}

interface TransformationTalkData {
  subtitle: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: TransformationItem[];
}

const transformationTalkData: TransformationTalkData = {
  subtitle: 'Learning With Our CEO:',
  title: 'Transformation Hub With Jite Newton',
  description:
    'Transformation Hub with Jite Newton is a flagship webinar series curated by the CEO, Dr. Jite Newton. Designed to elevate career trajectories and leadership capabilities, this exclusive event offers invaluable insights and strategies for personal and professional growth. Whether you\'re seeking to advance your career or enhance your leadership skills, the Transformation Hub provides a transformative learning experience to unlock your full potential and drive success in your endeavours.',
  imageSrc: '/transtalk.jpg',
  imageAlt: 'Transformation Talk with Jite Newton',
  items: [
    { label: 'Strategic Career Guidance' },
    { label: 'Leadership Development' },
    { label: 'CV Development' },
    { label: 'Sustainability Leadership' },
    { label: 'Communication Skills' },
    { label: 'Business Model' },
  ],
};

export default function TransformationTalkSection() {
  return (
    <section className="sm:py-10 pt-7  bg-[#EF435333]/15 rounded-3xl mx-4 sm:mx-6 lg:mx-8 my-16 sm:my-20 md:my-24 lg:my-32">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 lg:space-y-12">
          
          {/* Header Content */}
          <div className="space-y-4">
            {/* Subtitle */}
            <p className="text-blue-600 text-lg sm:text-xl font-semibold italic">
              {transformationTalkData.subtitle}
            </p>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl font-bold text-[#571244] italic">
              {transformationTalkData.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              {transformationTalkData.description}
            </p>
          </div>

          {/* Image and Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Image - Left */}
            <div className="order-1 md:order-1">
              <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={transformationTalkData.imageSrc}
                  alt={transformationTalkData.imageAlt}
                  fill
                  className="object-cover"
                  quality={100}
                  priority
                />
              </div>
            </div>

            {/* Items Grid - Right (2 columns x 3 rows) */}
            <div className="order-2 md:order-2 bg-white/30 py-4 px-3 rounded-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {transformationTalkData.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1 bg-white rounded-lg px-4 sm:px-6 py-4 sm:py-5 shadow-md hover:shadow-lg transition-shadow duration-200"
                  >
                    <Zap
                      size={20}
                      className="text-[#571244] flex-shrink-0"
                      fill="currentColor"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-800 font-medium text-base sm:text-base">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Learn More Button */}
              <div className="mt-8 sm:mt-10">
                <button className="inline-flex items-center space-x-2 px-6 py-3 
                  bg-[#571244] hover:bg-[#712a5d] text-white font-semibold rounded-lg
                  transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2
                  transform hover:translate-x-1">
                  <span>Learn More</span>
                  <ArrowUpRight size={20} strokeWidth={2}/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



