import { ResizableBox, ResizableBoxProps } from 'react-resizable';
import './resizable.css';

interface ResizableProps {
  direction: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

const Resizeable: React.FC<ResizableProps> = ({ direction, children }) => {
  let resizeableProps: ResizableBoxProps;

  if (direction === 'horizontal') {
    resizeableProps = {
      className: 'resize-horizontal',
      minConstraints: [window.innerWidth * .2, Infinity],
      maxConstraints: [window.innerWidth * .75, Infinity],
      height: Infinity,
      width: window.innerWidth * 0.75,
      resizeHandles: ['e'],
    };
  } else {
    resizeableProps = {
      className: 'resize-vertical',
      minConstraints: [Infinity, 48],
      maxConstraints: [Infinity, window.innerHeight * 0.9],
      height: 300,
      width: Infinity,
      resizeHandles: ['s'],
    };
  }

  return <ResizableBox {...resizeableProps}>{children}</ResizableBox>;
};

export default Resizeable;
