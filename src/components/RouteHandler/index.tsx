
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../../pages/Home';
import { ContextsHandler } from '../ContextsHandler';


function RouteHandler() {

  return (
    <BrowserRouter>
      <ContextsHandler>
        <Routes>
          <Route element={<App />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<>Jere</>} />
          </Route>
        </Routes>
      </ContextsHandler>
    </BrowserRouter>
  )
}

export {
  RouteHandler
}