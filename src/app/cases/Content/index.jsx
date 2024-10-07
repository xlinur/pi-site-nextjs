'use client';

import { CasesProvider } from './Context';
import ResultsList from './ResultsList';

const Content = ({ spheresFilterTitle, settingsData }) => {
  return (
    <CasesProvider>
      <ResultsList
        spheresFilterTitle={spheresFilterTitle}
        settingsData={settingsData}
      />
    </CasesProvider>
  );
};

export default Content;
