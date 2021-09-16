import './App.css';
import { PropsSample } from './components/props-sample/PropsSample';
import { EventSample } from './components/event-sample/EventSample';
import { ReducerSample } from './components/reducer-sample/ReducerSample';

function App() {
  return (
    <div className='App'>
      {/* <PropsSample /> */}
      {/* <EventSample /> */}
      <ReducerSample />
    </div>
  );
}

export default App;
