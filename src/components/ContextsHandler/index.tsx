import { DataProvider } from "../../contexts/DataProvider";
import { AppThemeProvider } from "../../contexts/ThemeProvider";

import data from "../../../public/data.json";

interface IContextsHandler {
  children?: React.ReactNode;
}

function ContextsHandler({ children }: IContextsHandler) {

  return (
    <AppThemeProvider>
      <DataProvider data={data}>
        {children}
      </DataProvider>
    </AppThemeProvider>
  )
}

export {
  ContextsHandler
}