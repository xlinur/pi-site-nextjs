import { routes } from '@/config/routes';
import request from '@/app/utils/request';

export const useGetNavigation = () => {
  const fetchMenu = async () => {
    const { data } = await request.get('/api/strapi/spheres');
    const { data: dictionaryData } = await request.get(
      '/api/strapi/global/dictionary',
    );

    const { menu } = dictionaryData.data.attributes;

    const spheres = data.data;

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

    return {
      mainNav,
      secondaryNav,
    };
  };

  return {
    fetchMenu,
  };
};
