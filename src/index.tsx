import 'bulmaswatch/superhero/bulmaswatch.min.css';
import { createRoot } from 'react-dom/client';
import CodeCell from './components/code-cell';
import TextEditor from './components/text-editor';
const App = () => {
  return (
    <>
      <TextEditor />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
