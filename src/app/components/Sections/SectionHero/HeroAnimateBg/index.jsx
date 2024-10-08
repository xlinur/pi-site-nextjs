'use client';

import { config } from './config';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const HeroAnimateBg = ({ className }) => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(() => config, []);

  if (init) {
    return (
      <Particles id="tsparticles" options={options} className={className} />
    );
  }

  return <></>;
};

export default HeroAnimateBg;
