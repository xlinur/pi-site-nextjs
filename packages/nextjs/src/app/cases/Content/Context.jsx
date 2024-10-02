import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  useContext,
} from 'react';
import request from '@/app/utils/request';

export const CasesContext = createContext();

export const CasesProvider = ({ children }) => {
  const [cases, setCases] = useState({ data: [], meta: { pagination: {} } });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({});

  const fetchCases = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage,
      });

      const { data } = await request.get(`/api/strapi/cases?${params}`);

      setCases(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCases();
  }, [currentPage, filter]);

  const changePage = useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const applyFilter = useCallback(
    (key, value) => {
      setFilter({
        ...filter,
        [key]: value,
      });
      setCurrentPage(1);
    },
    [filter],
  );

  const resetFilter = useCallback(
    (key) => {
      const newFilter = { ...filter };

      delete newFilter[key];

      setFilter(newFilter);
      setCurrentPage(1);
    },
    [filter],
  );

  const value = useMemo(
    () => ({
      cases,
      loading,
      currentPage,
      changePage,
      applyFilter,
      resetFilter,
      filter,
    }),
    [cases, loading, currentPage, changePage, applyFilter, resetFilter, filter],
  );

  return (
    <CasesContext.Provider value={value}>{children}</CasesContext.Provider>
  );
};

export const useCases = () => useContext(CasesContext);
