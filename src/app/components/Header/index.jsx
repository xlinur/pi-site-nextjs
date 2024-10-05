import { useGetNavigation } from '@/app/hooks/useGetNavigation';
import request from '@/app/utils/request';
import Naviagation from './Naviagation';

const Header = async () => {
  const { fetchMenu } = useGetNavigation();

  const { mainNav, secondaryNav } = await fetchMenu();
  const { data: dictionaryData } = await request.get(
    '/api/strapi/global/dictionary',
  );
  const { data: settingsData } = await request.get(
    '/api/strapi/global/settings',
  );

  return (
    <Naviagation
      mainNav={mainNav}
      secondaryNav={secondaryNav}
      globalDictionary={dictionaryData.data.attributes}
      globalSettings={settingsData.data.attributes}
    />
  );
};

export default Header;
