import { forwardRef } from 'react';
import Section from '../components/Section';
import PhilosophyCard from '../components/PhilosophyCard';
import { philosophyPillars } from '../data/philosophyPillars';

const PhilosophySection = forwardRef(({
  isVisible,
  color
}, ref) => {
  return (
    <Section id="philosophy" ref={ref} isVisible={isVisible}>
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ color }}>
          Ethical Testing
        </h2>

        <div className="bg-gray-800/50 border-l-4 p-6 mb-12 rounded-r-lg" style={{ borderColor: color }}>
          <p className="text-base md:text-lg text-gray-300 italic">
            [Personal statement placeholder: Your story about why you're drawn to QA, what drives you, and your core belief about technology's role in improving human experience—2-3 sentences]
          </p>
        </div>

        <div className="space-y-6 text-base md:text-lg text-gray-300 mb-12">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">First, Do No Harm. Then, Improve.</h3>
          <p>
            [Main philosophy paragraph: Expand on how tech should improve the human experience, QA's role in ensuring it does, and your framework for thinking about testing through this lens. NOTE: Include discussion of ethics in tech here.]
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {philosophyPillars.map((pillar, index) => (
            <PhilosophyCard
              key={index}
              title={pillar.title}
              description={pillar.description}
              color={color}
            />
          ))}
        </div>
      </div>
    </Section>
  );
});

PhilosophySection.displayName = 'PhilosophySection';

export default PhilosophySection;
