
import { createContext } from 'react';
import { IArt } from '../../types/IArts';

interface IDataContext {
  arts?: IArt[];
}

const DataContext = createContext<IDataContext>({});

interface IDataProvider {
  children?: React.ReactNode;
  data?: IArt[];
}

function DataProvider({ children, data }: IDataProvider) {

  return (
    <DataContext.Provider value={{ arts: data }}>
      {children}
    </DataContext.Provider>
  )
}

export {
  DataContext,
  DataProvider
}