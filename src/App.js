import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Landing from './scenes/Landing/index';
import PassCodeLogin from './scenes/PasscodeLogin';
import DetailsForm from './scenes/DetailsForm';
import LanguageSelect from './scenes/LanguageSelect';
import MainScene from './scenes/MainScene';
import 'reactjs-popup/dist/index.css';
import store from './store/store';
import { Provider } from 'react-redux'

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
      path: '/app',
      element: <MainScene />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
