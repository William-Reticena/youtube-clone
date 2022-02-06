import { Route, Routes } from "react-router-dom";
import Home from '../pages/home';
import { HOME } from './paths';

const AppRoutes = () => (
  <Routes>
    <Route path={HOME} element={<Home />} />
  </Routes>
);

export default AppRoutes;
