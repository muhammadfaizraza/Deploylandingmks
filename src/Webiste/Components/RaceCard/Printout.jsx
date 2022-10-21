import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
import Card from './PrintCard';

class ComponentToPrint extends React.Component {
  render() {
    return (
     <Card />
    );
  }
}

const Test = () => {
  const componentRef = useRef();
  return (
    <div>
      <ReactToPrint
        trigger={() => <button className='PrintOutClass'>Print this out!</button>}
        content={() => componentRef.current}
      />
      <ComponentToPrint ref={componentRef} />
    </div>
  );
};
export default Test
