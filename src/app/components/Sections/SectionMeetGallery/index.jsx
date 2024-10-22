import Image from 'next/image';
import Markdown from '@/app/components/Markdown';
import fetchWrapper from '@/app/utils/fetchWrapper';
import styles from './styles.module.scss';

const SectionMeetGallery = async () => {
  const data = await fetchWrapper('/api/section-meet-our-team?populate=deep');

  const { title, text, images } = data.data.attributes;

  const [img1, img2, img3, img4, img5, img6] = images;

  const gallery01JPG = img1.image.data.attributes.url;
  const gallery02JPG = img2.image.data.attributes.url;
  const gallery03JPG = img3.image.data.attributes.url;
  const gallery04JPG = img4.image.data.attributes.url;
  const gallery05JPG = img5.image.data.attributes.url;
  const gallery06JPG = img6.image.data.attributes.url;

  return (
    <section className={styles.sectionMeet}>
      <header>
        <h3>{title}</h3>
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
          <Markdown>{text}</Markdown>
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
