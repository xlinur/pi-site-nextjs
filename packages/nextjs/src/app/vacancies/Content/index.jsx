'use client';

import { VacanciesContextProvider } from './Context';
import ResultsList from './ResultsList';

const Content = ({ pageData }) => {
  return (
    <VacanciesContextProvider>
      <ResultsList pageData={pageData} />
    </VacanciesContextProvider>
  );
};

export default Content;
