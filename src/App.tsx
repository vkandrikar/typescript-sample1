import './App.css';
import { PropsSample } from './components/props-sample/PropsSample';
import { EventSample } from './components/event-sample/EventSample';
import { ReducerSample } from './components/reducer-sample/ReducerSample';
import { UserContextProvider } from './components/context-sample/UserContext';
import { User } from './components/context-sample/User';
import { RefSample } from './components/ref-sample/RefSample';
import { StyleSample } from './components/styles-sample/StyleSample';
import { ReduxSample } from './components/redux-sample/ReduxSample';
import { ReduxThunkSample } from './components/redux-sample/ReduxThunkSample';
import { EventSourceSample } from './components/event-source-sample/EventSourceSample';
import { EventSourceRefSample } from './components/event-source-sample/EventSourceRefSample';
import { VirtualizedSample } from './components/virtualized-sample/VirtualizedSample';

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
      {/* <StyleSample styles={{ border: '1px solid red' }} /> */}
      {/* <ReduxSample /> */}
      {/* <ReduxThunkSample /> */}
      {/* <EventSourceSample /> */}
      {/* <EventSourceRefSample /> */}
      <VirtualizedSample />
    </div>
  );
}

export default App;
