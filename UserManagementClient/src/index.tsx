import ReactDOM from 'react-dom';
import { AppRouter } from './AppRouter';
import './index.css';
import configureStore from './redux/store';

const store = configureStore();

ReactDOM.render(
  <>
    <AppRouter store={store} />
  </>,
  document.getElementById('root')
);

