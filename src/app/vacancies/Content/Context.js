'use client';

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
  totalCount: 0,
  totalPages: 0,
  vacancies: [],
};

const defaultFilters = {
  skills: [],
  types: [],
  locations: [],
};

const defaultSelectedFilters = {};

const defaultPage = 1;

export const VacanciesContextProvider = ({ children, locale }) => {
  const [vacancies, setVacancies] = useState(defaultVacancies);
  const [filters, setFilters] = useState(defaultFilters);
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const [selectedFilters, setSelectedFilters] = useState(
    defaultSelectedFilters,
  );
  const [appliedFilters, setAppliedFilters] = useState(defaultSelectedFilters);
  const [isLoadingFilters, setIsLoadingFilters] = useState(false);
  const [isLoadingVacancies, setIsLoadingVacancies] = useState(false);

  const getVacancies = useCallback(async () => {
    try {
      setIsLoadingVacancies(true);

      const params = new URLSearchParams({
        filters: JSON.stringify(appliedFilters),
        page: currentPage,
        pageSize: 10,
        locale,
      });

      const data = await request.get(`/api/vacancies?${params}`);

      setVacancies(data.data);
    } finally {
      setIsLoadingVacancies(false);
    }
  }, [currentPage, appliedFilters, locale]);

  const getFilters = async () => {
    try {
      setIsLoadingFilters(true);

      const params = new URLSearchParams({
        locale,
      });

      const data = await request.get(`/api/vacancies/filters?${params}`);

      setFilters(data.data);
    } finally {
      setIsLoadingFilters(false);
    }
  };

  const setFilter = useCallback((id, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  }, []);

  const applyFilters = useCallback(() => {
    setAppliedFilters(selectedFilters);
    setCurrentPage(defaultPage);
  }, [selectedFilters]);

  const resetFilters = useCallback(() => {
    setSelectedFilters(defaultSelectedFilters);
    setAppliedFilters(defaultSelectedFilters);
    setCurrentPage(defaultPage);
  }, []);

  useEffect(() => {
    getVacancies();
  }, [currentPage, appliedFilters, getVacancies]);

  useEffect(() => {
    getFilters();
  }, []);

  const values = useMemo(
    () => ({
      vacancies,
      filters,
      currentPage,
      setCurrentPage,
      isLoadingFilters,
      isLoadingVacancies,
      selectedFilters,
      setFilter,
      resetFilters,
      applyFilters,
    }),
    [
      vacancies,
      filters,
      currentPage,
      isLoadingFilters,
      isLoadingVacancies,
      selectedFilters,
      setFilter,
      resetFilters,
      applyFilters,
    ],
  );

  return (
    <VacanciesContext.Provider value={values}>
      {children}
    </VacanciesContext.Provider>
  );
};

export const useVacanciesContext = () => useContext(VacanciesContext);
