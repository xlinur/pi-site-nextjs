'use client';

import { CasesProvider } from './Context';
import Content from './Content';

const ResultsList = ({ spheresFilterTitle }) => {
  return (
    <CasesProvider>
      <Content spheresFilterTitle={spheresFilterTitle} />
    </CasesProvider>
  );
};

export default ResultsList;
