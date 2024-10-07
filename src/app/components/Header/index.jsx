import { createNavigation } from '@/app/utils/createNavigation';
import fetchWrapper from '@/app/utils/fetchWrapper';
import Naviagation from './Naviagation';

const Header = async () => {
  const [dictionaryData, settingsData, spheresData] = await Promise.all([
    fetchWrapper('/api/global-dictionary?populate=deep'),
    fetchWrapper('/api/global?populate=deep'),
    fetchWrapper('/api/spheres?populate=deep'),
  ]);

  const { mainNav, secondaryNav } = createNavigation(
    dictionaryData,
    spheresData,
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
