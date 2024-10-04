import {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  useCallback,
} from 'react';
import request from '@/app/utils/request';

const VacanciesContext = createContext();

const defaultVacancies = {
  data: [],
};

const defaultFilters = [];

export const VacanciesContextProvider = ({ children }) => {
  const [vacancies, setVacancies] = useState(defaultVacancies);
  const [filters, setFilters] = useState(defaultFilters);
  const [pagination, setPagination] = useState();
  const [selectedFilters, setSelectedFilters] = useState({});

  const getVacancies = async () => {
    const data = await request.get('/api/vacancies');

    setVacancies(data);
  };

  const getFilters = async () => {
    const data = await request.get('/api/vacancies/filters');

    setFilters(data.filters);
  };

  const setFilter = useCallback(
    (id, value) => {
      setSelectedFilters({
        ...selectedFilters,
        [id]: value,
      });
    },
    [selectedFilters],
  );

  useEffect(() => {
    getVacancies();
    getFilters();
  }, []);

  const values = useMemo(
    () => ({
      vacancies,
      pagination,
      filters,
      setPagination,
      setFilter,
    }),
    [vacancies, pagination, filters, setPagination, setFilter],
  );

  return (
    <VacanciesContext.Provider value={values}>
      {children}
    </VacanciesContext.Provider>
  );
};

export const useVacanciesContext = () => useContext(VacanciesContext);
