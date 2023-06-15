import { useRoutes } from "react-router-dom";

import { APP_ROUTES } from './routes/routes';



function App() {

  const pages = useRoutes(APP_ROUTES);

  return <div className="app-wrapper">{pages}</div>
}

export default App;
