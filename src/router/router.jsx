import {Route, Routes} from 'react-router-dom';
import Main from '../pages/Main';

const GlobalRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
};

export default GlobalRoute;
