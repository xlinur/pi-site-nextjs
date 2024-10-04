import { useGetNavigation } from '@/app/hooks/useGetNavigation';
import getGlobalDictionary from '@/app/api/strapi/globalDictionary/route';
import getGlobalSettings from '@/app/api/strapi/globalSettings/route';
import Naviagation from './Naviagation';

const Header = async () => {
  const { fetchMenu } = useGetNavigation();

  const { mainNav, secondaryNav } = await fetchMenu();
  const globalDictionary = await getGlobalDictionary();
  const globalSettings = await getGlobalSettings();

  return (
    <Naviagation
      mainNav={mainNav}
      secondaryNav={secondaryNav}
      globalDictionary={globalDictionary}
      globalSettings={globalSettings}
    />
  );
};

export default Header;
