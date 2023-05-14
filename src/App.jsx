import { store } from './store/store'
import { Provider } from 'react-redux'

import { AppTheme } from "./theme";
import { ToDoPages } from "./toDo";




function App() {
  return (
    <Provider store={store}>
      <AppTheme>
        <ToDoPages />
      </AppTheme>
    </Provider>
  );
}

export default App;
