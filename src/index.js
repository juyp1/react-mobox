import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import App from './Router/index';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react'
import store from './store/index'
import IndexComponent from './page/index/index'
ReactDOM.render(
    <Provider {...store}>
    <Router>
        <div>
            <Switch>
              
                    <Route path='/' exact component={IndexComponent}></Route>
             
            </Switch>
        </div>
    </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
