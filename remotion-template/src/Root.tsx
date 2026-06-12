import React from 'react';
import {Composition} from 'remotion';
import {TransparentOverlay} from './TransparentOverlay';
import {CoverStill} from './CoverStill';

export const Root: React.FC = () => (
  <>
    <Composition
      id="TransparentOverlay"
      component={TransparentOverlay}
      durationInFrames={2400}
      fps={60}
      width={1920}
      height={1080}
    />
    <Composition
      id="CoverStill"
      component={CoverStill}
      durationInFrames={1}
      fps={1}
      width={1080}
      height={1440}
    />
  </>
);

