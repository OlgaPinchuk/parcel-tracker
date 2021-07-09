// NPM Packages
import { Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Project files
import { Header } from "../src/components/Header";
import { Home } from "../src/pages/Home";
import Parcel from "../src/pages/Parcel";
import SearchResults from "../src/pages/SearchResults";
import ParcelsLoader from './components/ParcelsLoader';
import "./styles/style.css";

//Global state
import rootReducer from './behavior/rootReducer';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {
  
  return (
    <Provider store={store}>
      <ParcelsLoader/>
    <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route component={Home} path="/" exact></Route>
              <Route component={Parcel} path="/parcels/:parcel_id" />
              <Route
                component={SearchResults}
                path="/results/:query"
              ></Route>
            </Suspense>
          </Switch>
        </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;