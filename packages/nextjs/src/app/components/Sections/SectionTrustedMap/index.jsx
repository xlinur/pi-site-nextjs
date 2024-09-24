import Image from 'next/image';
import styles from './styles.module.scss';

import earthSVG from '@/app/assets/icons/earth.svg';
import countriesSVG from '@/app/assets/icons/countries.svg';

const SectionTrustedMap = () => {
  const mok = {
    title: 'Trusted by companies smail and large around the globe',
    connectBtn: {
      name: '',
      linkTo: {
        url: '',
      },
    },
    variant: 'bigMap', // “bigMap” | “smallMap”
  };

  return (
    <section className={styles.sectionPlanet}>
      <h2>{mok.title}</h2>

      {mok.variant === 'bigMap' && (
        <div className={styles.planet}>
          <div>
            <Image src={earthSVG} alt="Image" width={882} height={882} />
          </div>
          <div>
            <Image src={countriesSVG} alt="Image" width={740} height={542} />
          </div>
        </div>
      )}
    </section>
  );
};

export default SectionTrustedMap;
