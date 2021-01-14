import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Layout from "./components/layout/Layout";
import People from "./components/People";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={() => <h3>Home</h3>} />

          <Route exact path="/products" component={() => <h3>Products</h3>} />

          <Route exact path="/solutions" component={() => <h3>Solutions</h3>} />
          <Route exact path="/partners" component={() => <h3>Partners</h3>} />
          <Route exact path="/support" component={() => <h3>Support</h3>} />
          <Route exact path="/company" component={() => <h3>Company</h3>} />
          <Route exact path="/news" component={() => <h3>News</h3>} />
          <Route exact path="/press" component={() => <h3>Press</h3>} />
          <Route exact path="/careers" component={() => <h3>Careers</h3>} />
          <Route exact path="/estimate" component={() => <h3>Estimate</h3>} />
          <Route exact path="/people" component={People} />
          {/* <Route exact path="/:id" component={() => <h3>Test</h3>} /> */}
          <Route component={() => <h3>Default</h3>} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
