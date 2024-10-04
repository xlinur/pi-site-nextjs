'use client';

import { CasesProvider } from './Context';
import ResultsList from './ResultsList';

const Content = ({ spheresFilterTitle }) => {
  return (
    <CasesProvider>
      <ResultsList spheresFilterTitle={spheresFilterTitle} />
    </CasesProvider>
  );
};

export default Content;
