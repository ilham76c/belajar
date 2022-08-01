import React from 'react';
import { createRoot } from 'react-dom/client';
import IncreaseButton from './components/IncreaseButton';
import CounterDisplay from './components/CounterDisplay';
import ResetButton from './components/ResetButton';

class CounterApp extends React.Component {
  constructor(props) {
    super(props);
 
    // inisialisasi nilai count di dalam state
    this.state = {
      count: 0
    };

    // binding event handler
    this.onIncreaseEventHandler = this.onIncreaseEventHandler.bind(this);
    this.onResetEventHandler = this.onResetEventHandler.bind(this);
  }
 
  render() {
    return (
      <div>
        <IncreaseButton increase={this.onIncreaseEventHandler} />
        <CounterDisplay count={this.state.count} />
        <ResetButton reset={this.onResetEventHandler} />
      </div>
    );
  }

  onIncreaseEventHandler() {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1
      };
    });
  }

  onResetEventHandler() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
}
 
const root = createRoot(document.getElementById('root'));
root.render(<CounterApp />);