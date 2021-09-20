import './App.css';
import { PropsSample } from './components/props-sample/PropsSample';
import { EventSample } from './components/event-sample/EventSample';
import { ReducerSample } from './components/reducer-sample/ReducerSample';
import { UserContextProvider } from './components/context-sample/UserContext';
import { User } from './components/context-sample/User';
import { RefSample } from './components/ref-sample/RefSample';
import { StyleSample } from './components/styles-sample/StyleSample';

function App() {
  return (
    <div className='App'>
      {/* <PropsSample /> */}
      {/* <EventSample /> */}
      {/* <ReducerSample /> */}
      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}
      {/* <RefSample /> */}
      <StyleSample styles={{ border: '1px solid red' }} />
    </div>
  );
}

export default App;
