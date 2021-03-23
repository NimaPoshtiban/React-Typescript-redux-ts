import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoriesList from './RepositoriesList';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="container">
        <h3 className="label">Search for a Package</h3>
        <RepositoriesList  />
      </div>
    </Provider>
  );
};

export default App;
