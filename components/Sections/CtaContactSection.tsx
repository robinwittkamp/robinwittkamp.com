import { AnimatePresence, LazyMotion, m, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/router';
import type { MouseEvent, ReactElement } from 'react';
import { useState } from 'react';

import Button from '@/components/Buttons/Button';
import Section from '@/components/Sections/Section';
import Heading from '@/components/Text/Heading';
import localDe from '@/locales/de/common';
import localEn from '@/locales/en/common';

/**
 * Dynamic imports
 */
const loadFramerMotionFeatures = () =>
  import('@/lib/framer-motion/framerMotionFeatures').then((res) => res.default);

/**
 * Variants (Animation)
 */
const gradientVariants = {
  focused: {
    opacity: 1,
  },
  unfocused: {
    opacity: 0,
  },
};

/**
 * Component
 */
const CtaContactSection = (): ReactElement => {
  const [hovering, setHovering] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  const opacity = useMotionValue(0);
  const cursorPositionX = useMotionValue(0);
  const cursorPositionY = useMotionValue(0);
  const cursorPositionXWithUnit = useMotionTemplate`${cursorPositionX}px`;
  const cursorPositionYWithUnit = useMotionTemplate`${cursorPositionY}px`;

  const handleMouse = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    // Calculate mouse position relative to section card
    cursorPositionX.set(event.clientX - rect.left);
    cursorPositionY.set(event.clientY - rect.top);

    setHovering(true);
  };

  return (
    <Section>
      <LazyMotion features={loadFramerMotionFeatures} strict>
        <m.div
          className="relative overflow-hidden rounded-[2rem]"
          onMouseMove={handleMouse}
          onMouseLeave={() => setHovering(false)}
          style={{
            ['--cursor-x' as string]: cursorPositionXWithUnit,
            ['--cursor-y' as string]: cursorPositionYWithUnit,
          }}
        >
          {/* Border (Background with static gradient) */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-rusty-700/50 to-rusty-600/50" />
          {/* Border (Background with animated gradient) */}
          <AnimatePresence>
            {hovering && (
              <m.div
                className="absolute inset-0 -z-10"
                initial="unfocused"
                animate="focused"
                exit="unfocused"
                variants={gradientVariants}
                style={{
                  background:
                    'radial-gradient(800px circle at var(--cursor-x) var(--cursor-y),rgba(255,255,255,0.4),transparent 75%)',
                  opacity,
                }}
              />
            )}
          </AnimatePresence>
          {/* Content (with 1px margin around) */}
          <m.div className="m-px rounded-[calc(2rem-1px)] bg-gradient-to-tr from-rusty-900 to-rusty-800 px-6 py-12 sm:p-16 lg:p-24">
            {/* Background with animated gradient */}
            <AnimatePresence>
              {hovering && (
                <m.div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(800px circle at var(--cursor-x) var(--cursor-y),rgba(255,255,255,0.025),transparent 75%)',
                    opacity,
                  }}
                  initial="unfocused"
                  animate="focused"
                  exit="unfocused"
                  variants={gradientVariants}
                />
              )}
            </AnimatePresence>
            {/* Heading */}
            <Heading variant="h2" classes="sm:text-center">
              {t.ctaContactSection.heading}
            </Heading>
            {/* Subheading */}
            <p className="mt-8 max-w-lg text-xl text-rusty-400 sm:mx-auto sm:text-center lg:max-w-xl lg:text-2xl">
              {t.ctaContactSection.subheading}
            </p>
            {/* Button */}
            <div className="mt-8 sm:flex sm:justify-center">
              <Button href="/contact" variant="primary">
                {t.ctaContactSection.button}
              </Button>
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </Section>
  );
};

export default CtaContactSection;
