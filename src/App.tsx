import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css';

import { PropsSample } from './components/props-sample/PropsSample';
import { EventSample } from './components/event-sample/EventSample';
import { ReducerSample } from './components/reducer-sample/ReducerSample';
import { UserContextProvider } from './components/context-sample/UserContext';
import { User } from './components/context-sample/User';
import { RefSample } from './components/ref-sample/RefSample';
import { StyleSample } from './components/styles-sample/StyleSample';
//import { ReduxSample } from './components/redux-sample/ReduxSample';
//import { ReduxThunkSample } from './components/redux-sample/ReduxThunkSample';
import { EventSourceSample } from './components/event-source-sample/EventSourceSample';
import { EventSourceRefSample } from './components/event-source-sample/EventSourceRefSample';
import { VirtualizedSample } from './components/virtualized-sample/VirtualizedSample';
import { ErrorBoundrySample } from './components/error-boundry-sample/ErrorBoundrySample';
import { InfiniteScrollingSample } from './components/infinite-scrolling-sample/InfiniteScrollingSample';

/* If component has name export */
const ReduxSample = lazy(() => import('./components/redux-sample/ReduxSample')
  .then(({ ReduxSample }) => ({ default: ReduxSample })));

const ReduxThunkSample = lazy(() => import('./components/redux-sample/ReduxThunkSample')
  .then(({ ReduxThunkSample }) => ({ default: ReduxThunkSample })));

/* If component has default export */
const DefaultExport = lazy(() => import('./components/code-splitting-sample/DefaultExport'));

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
      {/* <VirtualizedSample /> */}

      {/* Code Splitting Sample */}
      {/* <Suspense fallback={<h3>Loading1...</h3>}>
        <ReduxSample />
      </Suspense>
      <Suspense fallback={<h3>Loading2...</h3>}>
        <ReduxThunkSample />
      </Suspense>
      <Suspense fallback={<h3>Loading3...</h3>}>
        <DefaultExport />
      </Suspense> */}

      {/* Router-based code splitting */}
      {/* <Router>
        <Suspense fallback={<h3>Loading...</h3>}>
          <Switch>
            <Route exact path='/' component={ReduxSample} />
            <Route path='/thunk' component={ReduxThunkSample} />
          </Switch>
        </Suspense>
      </Router> */}

      {/* <ErrorBoundrySample /> */}
      <InfiniteScrollingSample />
    </div>
  );
}

export default App;
