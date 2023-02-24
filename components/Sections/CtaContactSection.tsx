import { AnimatePresence, LazyMotion, m, useMotionValue } from 'framer-motion';
import { useRouter } from 'next/router';
import type { MouseEvent, ReactElement } from 'react';
import { useState } from 'react';

import localDe from '../../locales/de/common';
import localEn from '../../locales/en/common';
import Button from '../Buttons/Button';
import Heading from '../Text/Heading';
import Section from './Section';

// Async load framer-motion
const loadFramerMotionFeatures = () =>
  import('../../lib/framer-motion/framerMotionFeatures').then((res) => res.default);

// Animation variants
const gradientVariants = {
  focused: {
    opacity: 1,
  },
  unfocused: {
    opacity: 0,
  },
};

const CtaContactSection = (): ReactElement => {
  const [hovering, setHovering] = useState(false);

  const router = useRouter();
  const { locale } = router;
  const t = locale === 'en' ? localEn : localDe;

  const opacity = useMotionValue(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setHovering(true);
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <Section>
      <LazyMotion features={loadFramerMotionFeatures} strict>
        <m.div
          className="relative overflow-hidden rounded-[2rem]"
          onMouseMove={handleMouse}
          onMouseLeave={() => setHovering(false)}
          style={{
            '--cursor-x': x,
            '--cursor-y': y,
            '--x': 'calc((var(--cursor-x) * 1px))', // adds px unit
            '--y': 'calc((var(--cursor-y) * 1px))', // adds px unit
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
                    'radial-gradient(1600px circle at var(--x) var(--y),rgba(255,255,255,0.2),transparent 75%)',
                  opacity,
                }}
              />
            )}
          </AnimatePresence>
          {/* Content (with 1px margin around) */}
          <m.div className="m-px rounded-[calc(2rem-1px)] bg-gradient-to-tr from-rusty-900 to-rusty-800 px-6 py-12 sm:p-16 lg:p-24">
            {/* Animated background gradient */}
            <AnimatePresence>
              {hovering && (
                <m.div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      'radial-gradient(1600px circle at var(--x) var(--y),rgba(255,255,255,0.025),transparent 75%)',
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
