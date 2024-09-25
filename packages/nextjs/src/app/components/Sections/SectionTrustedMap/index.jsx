import Image from 'next/image';
import styles from './styles.module.scss';

import earthSVG from '@/app/assets/icons/earth.svg';
import countriesSVG from '@/app/assets/icons/countries.svg';

import sectionTrustedMap from '@/app/api/strapi/sectionTrustedMap/route';

export default async function SectionTrustedMap({ variant = 'bigMap' }) {
  const { title } = await sectionTrustedMap();

  return (
    <section className={styles.sectionPlanet}>
      <h2>{title}</h2>

      {variant === 'bigMap' && (
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
}
