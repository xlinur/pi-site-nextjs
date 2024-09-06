import Image from 'next/image';
// gallery
import gallery01JPG from '@/app/assets/images/gallery/1.jpg';
import gallery02JPG from '@/app/assets/images/gallery/2.jpg';
import gallery03JPG from '@/app/assets/images/gallery/3.jpg';
import gallery04JPG from '@/app/assets/images/gallery/4.jpg';
import gallery05JPG from '@/app/assets/images/gallery/5.jpg';
import gallery06JPG from '@/app/assets/images/gallery/6.jpg';

import styles from './styles.module.scss';

const SectionMeetGallery = () => {
  return (
    <section className={styles.sectionMeet}>
      <header>
        <h3>Meet our team</h3>
      </header>

      <div className={styles.sectionMeetGallery}>
        <div>
          <Image
            src={gallery01JPG}
            alt="Gallery Image"
            width={290}
            height={290}
          />
        </div>
        <div>
          <Image
            src={gallery02JPG}
            alt="Gallery Image"
            width={290}
            height={290}
          />
        </div>
        <div>
          <Image
            src={gallery03JPG}
            alt="Gallery Image"
            width={290}
            height={290}
          />
        </div>
        <div>
          <Image
            src={gallery04JPG}
            alt="Gallery Image"
            width={290}
            height={290}
          />
        </div>
        <div>
          <Image src={gallery05JPG} alt="Gallery Image" fill />
        </div>
        <div className={styles.galleryCard}>
          <p>
            Now the team consists of 40 people (65 including external
            consultants) with 700+ clients worldwide whose drive is to be the
            part of your success!.
          </p>
        </div>
        <div>
          <Image
            src={gallery06JPG}
            alt="Gallery Image"
            width={290}
            height={290}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionMeetGallery;
