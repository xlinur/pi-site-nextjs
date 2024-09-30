import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from 'react';
import { getCasesRoute } from '@/app/api/strapi/pageCases/route';

const CasesContext = createContext();

export const CasesProvider = ({ children }) => {
  const [casesFilters, setCasesFilters] = useState({});
  const [page, setPage] = useState(1);
  const [casesData, setCasesData] = useState(null);
  const [loading, setLoading] = useState(false);

  const updateCaseFilter = useCallback(
    (filterId, filterValue) => {
      const newFilters = { ...casesFilters, [filterId]: filterValue };

      setCasesFilters(newFilters);

      updateUrlParams({ ...newFilters, page: 1 });
    },
    [casesFilters],
  );

  const updatePage = useCallback(
    (newPage) => {
      setPage(newPage);
      updateUrlParams({ ...casesFilters, page: newPage });
    },
    [casesFilters],
  );

  const updateUrlParams = (params) => {
    const queryString = new URLSearchParams(params).toString();
    const newUrl = `${window.location.pathname}?${queryString}`;
    window.history.pushState(null, '', newUrl);
  };

  const fetchCasesData = async (params) => {
    setLoading(true);
    const response = await getCasesRoute(params);
    setCasesData(response);
    setLoading(false);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const initialPage = parseInt(urlParams.get('page')) || 1;
    const filtersFromUrl = {};

    urlParams.forEach((value, key) => {
      if (key !== 'page') {
        filtersFromUrl[key] = value;
      }
    });

    setCasesFilters(filtersFromUrl);
    setPage(initialPage);

    fetchCasesData({ ...filtersFromUrl, page: initialPage });
  }, []);

  useEffect(() => {
    fetchCasesData({ ...casesFilters, page });
  }, [casesFilters, page]);

  const values = useMemo(
    () => ({
      casesFilters,
      updateCaseFilter,
      page,
      updatePage,
      casesData,
      loading,
    }),
    [casesFilters, updateCaseFilter, page, updatePage, casesData, loading],
  );

  return (
    <CasesContext.Provider value={values}>{children}</CasesContext.Provider>
  );
};

export const useCases = () => {
  return useContext(CasesContext);
};
