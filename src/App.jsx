// NPM Packages
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import { RecoilRoot } from "recoil";

// Project files
import { Header } from "../src/components/Header";
import { Home } from "../src/pages/Home";
import { Parcel } from "../src/pages/Parcel";
import SearchResults from "../src/pages/SearchResults";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Header />
          <Switch>
            <Suspense fallback={<div>Loading...</div>}>
              <Route component={Home} path="/" exact></Route>
              <Route component={Parcel} path="/parcels/:parcel_id" />
            </Suspense>
            {/* <Route
              component={SearchResults}
              path="/parcels/results/:query"
            ></Route> */}
          </Switch>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
