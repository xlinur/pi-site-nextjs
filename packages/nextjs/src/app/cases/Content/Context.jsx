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
  const [filter, setFilter] = useState(null);

  const fetchCases = async () => {
    setLoading(true);
    try {
      const { data } = await request.get('/api/strapi/cases?populate=deep');

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

  const applyFilter = useCallback((newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  }, []);

  const value = useMemo(
    () => ({ cases, loading, currentPage, changePage, applyFilter }),
    [cases, loading, currentPage, changePage, applyFilter],
  );

  return (
    <CasesContext.Provider value={value}>{children}</CasesContext.Provider>
  );
};

export const useCases = () => useContext(CasesContext);
