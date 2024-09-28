import { routes } from '@/config/routes';
import getGlobalDictionary from '@/app/api/strapi/globalDictionary/route';
import { getSpheres } from '@/app/api/strapi/pageSpheres/route';
import Naviagation from './Naviagation';

const Header = async () => {
  const { menu } = await getGlobalDictionary();
  const spheres = await getSpheres();

  const mainNav = [
    {
      title: menu.aboutUs,
      url: routes.aboutUs(),
    },
    {
      title: menu.services,
      childs: [
        {
          title: menu.recruitment,
          url: routes.itRecruitment(),
        },
        {
          title: menu.executiveSearch,
          url: routes.executiveSearch(),
        },
        {
          title: menu.consulting,
          url: routes.consulting(),
        },
        {
          title: menu.analytics,
          url: routes.analytics(),
        },
        {
          title: menu.relocation,
          url: routes.relocation(),
        },
      ],
    },
    {
      title: menu.industries,
      url: routes.industries(),
    },
    {
      title: menu.vacancies,
      url: routes.vacancies(),
    },
    {
      title: menu.earnWithUs,
      url: routes.earnWithUs(),
    },
    {
      title: menu.contacts,
      url: routes.contactUs(),
    },
  ];

  const secondaryNav = [
    {
      title: menu.reviews,
      url: routes.feedbacks(),
    },
    {
      title: menu.splitRecruitment,
      url: routes.splitRecruitment(),
    },
    {
      title: menu.cases,
      url: routes.cases(),
    },
    ...(spheres || []).map((sphere) => ({
      title: sphere.attributes.name,
      url: routes.sphere(sphere.attributes.slug),
    })),
  ];

  return <Naviagation mainNav={mainNav} secondaryNav={secondaryNav} />;
};

export default Header;
