import emailSvg from '@/app/assets/icons/social/email.svg';
import whatsappSvg from '@/app/assets/icons/social/whatsapp.svg';
import telegramSvg from '@/app/assets/icons/social/telegram.svg';

export const createSupportData = ({ contacts }) => [
  {
    img: telegramSvg,
    link: contacts.telegram,
    name: 'Telegram',
  },
  {
    img: whatsappSvg,
    link: contacts.whatsapp,
    name: 'WhatsApp',
  },
  {
    img: emailSvg,
    link: contacts.email,
    name: contacts.email,
  },
];
