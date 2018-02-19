import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import List from './List';
import pageNotFound from './pageNotFound';

class App extends React.Component {
    render() {
        return (
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={List} />
                <Route path="*" component={pageNotFound} />
              </Switch>
            </Router>
        );
    }
}

export default App;