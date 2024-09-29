import facebookSvg from '@/app/assets/icons/social/facebook.svg';
import instagramSvg from '@/app/assets/icons/social/instagram.svg';
import linkedinSvg from '@/app/assets/icons/social/linkedin.svg';

export const createSocialsData = ({ contacts }) => [
  {
    img: linkedinSvg,
    link: contacts.linkedin,
    name: 'LinkedIn',
  },
  {
    img: instagramSvg,
    link: contacts.instagram,
    name: 'Instagram',
  },
  {
    img: facebookSvg,
    link: contacts.facebook,
    name: 'Facebook',
  },
];
