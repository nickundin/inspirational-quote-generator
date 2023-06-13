'use client';

import Image from 'next/image';
import { useState } from 'react';

// Components
import {
  BackgroundImage1,
  BackgroundImage2,
  FooterCon,
  FooterLink,
  GenerateQuoteButton,
  GenerateQuoteButtonText,
  GradientBackgroundCon,
  QuoteGeneratorCon,
  QuoteGeneratorInnerCon,
  QuoteGeneratorSubTitle,
  QuoteGeneratorTitle,
  RedSpan,
} from '@/components/QuoteGenerator/QuoteGeneratorElements';

// Assets
import Clouds1 from '../assets/cloud-and-thunder.png';
import Clouds2 from '../assets/cloudy-weather.png';

export default function Home() {
  // below, the null value is basically the default value
  // useEffect then "hydrates" this with actual data
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <main>
      {/* Background */}
      <GradientBackgroundCon>
        {/* Quote Generator Model Pop-Up*/}
        {/* <QuoteGeneratorModal/> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a
              random inspirational quote provided by{' '}
              <FooterLink
                href='https://zenquotes.io/'
                target='_blank'
                rel='noopener noreferrer'
              >
                ZenQuotes API
              </FooterLink>
              .
            </QuoteGeneratorSubTitle>
            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1 src={Clouds1} height='300' alt='cloudybackground1' />
        <BackgroundImage2 src={Clouds2} height='300' alt='cloudybackground1' />

        {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>♥</RedSpan> by
            <FooterLink
              href='https://github.com/nickundin'
              target='_blank'
              rel='noopener noreferrer'
            >
              @nickundin
            </FooterLink>
          </>
        </FooterCon>
      </GradientBackgroundCon>
    </main>
  );
}
