'use client';

import Image from 'next/image';

// Components
import {
  BackgroundImage1,
  BackgroundImage2,
  GradientBackgroundCon,
} from '@/components/QuoteGenerator/QuoteGeneratorElements';

// Assets
import Clouds1 from '../assets/cloud-and-thunder.png';
import Clouds2 from '../assets/cloudy-weather.png';

export default function Home() {
  return (
    <main>
      {/* Background */}
      <GradientBackgroundCon>
        <BackgroundImage1 src={Clouds1} height='300' alt='cloudybackground1' />
        <BackgroundImage2 src={Clouds2} height='300' alt='cloudybackground1' />
      </GradientBackgroundCon>
    </main>
  );
}
