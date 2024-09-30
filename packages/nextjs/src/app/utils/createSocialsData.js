import facebookSvg from '@/app/assets/icons/social/facebook.svg';
import instagramSvg from '@/app/assets/icons/social/instagram.svg';
import linkedinSvg from '@/app/assets/icons/social/linkedin.svg';
import facebookWhiteSvg from '@/app/assets/icons/social/facebook-white.svg';
import instagramWhiteSvg from '@/app/assets/icons/social/instagram-white.svg';
import linkedinWhiteSvg from '@/app/assets/icons/social/linkedin-white.svg';

export const createSocialsData = ({ contacts }) => [
  {
    img: linkedinSvg,
    imgWhite: facebookWhiteSvg,
    link: contacts.linkedin,
    name: 'LinkedIn',
  },
  {
    img: instagramSvg,
    imgWhite: instagramWhiteSvg,
    link: contacts.instagram,
    name: 'Instagram',
  },
  {
    img: facebookSvg,
    imgWhite: linkedinWhiteSvg,
    link: contacts.facebook,
    name: 'Facebook',
  },
];
