import Image from 'next/image';
import styles from './styles.module.scss';
import earthSVG from '@/app/assets/icons/earth.svg';
import countriesSVG from '@/app/assets/icons/countries.svg';
import countryMap from '@/app/assets/images/countryMap.svg';
import OpenModalFormButton from '@/app/components/OpenModalFormButton';
import request from '@/app/utils/request';

export default async function SectionTrustedMap({ variant = 'bigMap' }) {
  const { data } = await request.get('/api/strapi/shared/trusted-map');

  const { title, contactUsBtn } = data.data.attributes;

  const InlineMap = () => (
    <section className={styles.sectionMapImg}>
      <header>
        <h2>{title}</h2>
        <OpenModalFormButton name={contactUsBtn.name} />
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
