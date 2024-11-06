import { render} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './Project/fakeStore/Redux/store/stateStore'; // Ensure this matches the path in index.js
import App from './App';

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
