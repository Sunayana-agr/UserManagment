import Home from 'src/modules/home/Home';
import { BrowserRouter,Route } from 'react-router-dom';
import { Provider } from "react-redux"


export const AppRouter = (props) => {
  const { store } = props;

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="*" exact component={Home} />
      </BrowserRouter>
    </Provider>
  );
  }
