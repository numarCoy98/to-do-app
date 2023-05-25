import { store } from './store/store'
import { Provider } from 'react-redux'

import { AppTheme } from "./theme";
import { AppRouter } from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';




function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppTheme>
          <AppRouter />
        </AppTheme>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
