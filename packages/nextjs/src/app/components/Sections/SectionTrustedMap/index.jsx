import Image from 'next/image';
import styles from './styles.module.scss';

import earthSVG from '@/app/assets/icons/earth.svg';
import countriesSVG from '@/app/assets/icons/countries.svg';
import countryMap from '@/app/assets/images/countryMap.svg';

import sectionTrustedMap from '@/app/api/strapi/sectionTrustedMap/route';
import Button from '../../Button';

export default async function SectionTrustedMap({ variant = 'bigMap' }) {
  const { title, contactUsBtn } = await sectionTrustedMap();

  const InlineMap = () => (
    <section className={styles.sectionMapImg}>
      <header>
        <h3 className="h1">{title}</h3>
        <Button name={contactUsBtn.name} />
      </header>

      <Image src={countryMap} alt="countries" width={693} height={422} />
    </section>
  );

  const BigMap = () => (
    <section className={styles.sectionPlanet}>
      <h2>{title}</h2>

      <div className={styles.planet}>
        <div>
          <Image src={earthSVG} alt="Image" width={882} height={882} />
        </div>
        <div>
          <Image src={countriesSVG} alt="Image" width={740} height={542} />
        </div>
      </div>
    </section>
  );

  return variant === 'bigMap' ? <BigMap /> : <InlineMap />;
}
