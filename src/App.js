import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import Landing from './scenes/Landing/index';
import PassCodeLogin from './scenes/PasscodeLogin';
import DetailsForm from './scenes/DetailsForm';
import LanguageSelect from './scenes/LanguageSelect';
import MainScene, { isObjectEmpty } from './scenes/MainScene';
import 'reactjs-popup/dist/index.css';
import store from './store/store';
import { Provider, useSelector } from 'react-redux';
import LanguageScreen from './scenes/LanguageScreen';
import FullAccessForm from './scenes/FullAccessForm';

const ProtectedRoute = ({ element }) => {
  const loggedUser = useSelector((appReducer) => appReducer.loggedUser) || {};
  const isAuthenticated = !isObjectEmpty(loggedUser);
  return isAuthenticated ? element : <Navigate to='/?lang' />;
};

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '/login',
      element: <PassCodeLogin />,
    },
    {
      path: '/details',
      element: <DetailsForm />,
    },
    {
      path: '/lang',
      element: <LanguageSelect />,
    },
    {
      path: '/langSelect',
      element: <LanguageScreen />,
    },
    {
      path: '/app',
      element: <ProtectedRoute element={<MainScene />} />,
    },
    {
      path: '/fullAccess',
      element: <FullAccessForm />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
