import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';

import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => {
  return (
    <Provider store={store}>
      <TextEditor />
    </Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
