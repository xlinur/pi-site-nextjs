import { useGetNavigation } from '@/app/components/hooks/useGetNavigation';
import Naviagation from './Naviagation';

const Header = async () => {
  const { fetchMenu } = useGetNavigation();

  const { mainNav, secondaryNav } = await fetchMenu();

  return <Naviagation mainNav={mainNav} secondaryNav={secondaryNav} />;
};

export default Header;
