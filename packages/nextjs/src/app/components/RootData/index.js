import { createContext, useContext } from 'react';
import globalSettingsRequest from '@/app/api/strapi/globalSettings/route';

const RootDataContext = createContext(null);

export const RootDataProvider = async ({ children }) => {
  const globalSettings = await globalSettingsRequest();

  return (
    <RootDataContext.Provider value={globalSettings}>
      {children}
    </RootDataContext.Provider>
  );
};

export function useRootData() {
  return useContext(RootDataContext);
}
