import type { ReactElement } from 'react';

import ReactIcon from '@/public/icons/fa-brands/react.svg';
import JavaScriptIcon from '@/public/icons/fa-brands/square-js.svg';
import WordPressIcon from '@/public/icons/fa-brands/wordpress-simple.svg';

/**
 * Component
 */
const HeroIconsBackground = (): ReactElement => (
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-[10%] -rotate-12 rounded-xl border border-rusty-800 bg-gradient-to-tr from-rusty-900 to-rusty-800 p-2 opacity-50 shadow-lg shadow-black md:left-[10%]">
      <ReactIcon className="h-12 text-black" fill="currentColor" />
    </div>
    <div className="absolute right-[10%] top-[40%] rotate-12 rounded-xl border border-rusty-800 bg-gradient-to-tr from-rusty-900 to-rusty-800 p-2 opacity-50 shadow-lg shadow-black">
      <JavaScriptIcon className="h-10 text-black" fill="currentColor" />
    </div>
    <div className="absolute bottom-[12%] left-60 -rotate-6 rounded-xl border border-rusty-800 bg-gradient-to-tr from-rusty-900 to-rusty-800 p-2 opacity-50 shadow-lg shadow-black md:bottom-[-10%] md:left-[30%]">
      <WordPressIcon className="h-8 text-black" fill="currentColor" />
    </div>
  </div>
);

export default HeroIconsBackground;
