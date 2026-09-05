

import Image from 'next/image';
import { Zap } from 'lucide-react';

interface TrainingItem {
  id: number;
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
}

const trainingSectionsData: TrainingItem[] = [
  {
    id: 1,
    title: 'Corporate Trainings',
    description:
      'Empower your team with our customised Corporate Training programs designed to address the unique needs and objectives of your organisation. Our expert facilitators work closely with your team to deliver tailored learning experiences that align with your company\'s goals and values.',
    items: [
      'Leadership Training',
      'Strategic Planning and Implementation',
      'Project Management',
      'Sustainability Training',
      'Customised Training',
    ],
    imageSrc: '/coporate-tn.jpg',
    imageAlt: 'Corporate Training Session',
    imagePosition: 'right',
  },
  {
    id: 2,
    title: 'Personalised Individual Training',
    description:
      'Begin a journey of lifelong learning and professional development with Tobams Group\'s diverse range of training programs for individuals. From technical skills mastery to soft skills enhancement, our courses cover a wide spectrum of topics to meet the evolving needs of today\'s professionals.',
    items: [
      'Leadership Development',
      'Soft Skills Development',
      'Industry Specific Knowledge',
      'Technical Skills Enhancement',
      'Time Management and Productivity',
      'Career Development',
    ],
    imageSrc: '/personalize-img.jpg',
    imageAlt: 'Personalised Individual Training',
    imagePosition: 'left',
  },
  {
    id: 3,
    title: 'Capacity Development',
    description:
      'At Tobams Group, we empower individuals and organisations through tailored training programs, expert-led workshops, and personalized mentorship. We are committed to your success and growth. We are dedicated to providing a comprehensive suite of benefits designed to foster your development and success:',
    items: [
      'Tailored Training Programs',
      'Expert-Led Workshops',
      'Personalized Mentorship',
      'Technical Skills Enhancement',
      'Collaborative Learning Environment',
      'Ongoing Support and Resources',
    ],
    imageSrc: '/capacity-dev.jpg',
    imageAlt: 'Capacity Development',
    imagePosition: 'right',
  },
];

function TrainingCard({ section }: { section: TrainingItem }) {
  const isImageRight = section.imagePosition === 'right';

  return (
    <section className="py-16 sm:py-20 md:py-8 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center`}
        >
          {/* Content */}
          <div className={isImageRight ? '' : 'md:order-2'}>
            <div className="space-y-6">
              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900">
                {section.title}
              </h2>

              {/* Description */}
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {section.description}
              </p>

              {/* Bullet Points with Lightning Icons */}
              <div className="space-y-2 sm:space-y-2">
                {section.items.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Zap
                      size={20}
                      className="text-[#571244] flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      strokeWidth={2.5}
                    />
                    <span className="text-gray-700 font-medium text-base sm:text-lg">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={isImageRight ? 'md:order-2' : 'md:order-1'}>
            <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-lg bg-gray-200">
              <Image
                src={section.imageSrc}
                alt={section.imageAlt}
                fill
                className="object-cover"
                quality={100}
                priority={section.id === 1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TrainingSections() {
  return (
    <>
      {trainingSectionsData.map((section) => (
        <TrainingCard key={section.id} section={section} />
      ))}
    </>
  );
}