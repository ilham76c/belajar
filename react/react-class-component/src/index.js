import React from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css';

class MyComponent extends React.Component {
  /**
   * Ketika Anda memanfaatkan constructor,
   * pastikan selalu memanggil base constructor (super) dan berikan nilai props.
   * Jika tidak, nilai this.props pada component akan bernilai undefined.
   */
  constructor(props) {
    super(props);
    console.log('Component created!');
  }

  render() {
    console.log(this);
    return <p>Hello, {this.props.name}!</p>;
  }
}
 
const root = createRoot(document.getElementById('root'));
root.render(
  <div>
    <MyComponent name="Dicoding" />
    <MyComponent name="John" />
    <MyComponent name="Doe" />
  </div> 
);