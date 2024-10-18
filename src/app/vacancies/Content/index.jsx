'use client';

import { VacanciesContextProvider } from './Context';
import ResultsList from './ResultsList';

const Content = ({ pageData, locale }) => {
  return (
    <VacanciesContextProvider locale={locale}>
      <ResultsList pageData={pageData} />
    </VacanciesContextProvider>
  );
};

export default Content;
