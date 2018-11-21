import React from 'react'; import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
///import { App } from './App';

///store.subscribe(() => console.log(store.getState()));
/// define a middleware that logs all of the actions fired
const actionLogger = store => next => action => {
	console.log(action);
	next(action);
};

const store = createStore(
	todoApp,
	applyMiddleware(actionLogger) 
	/*window.__REDUX_DEVTOOLS_EXTENSIONS__ && window.__REDUX_DEVTOOLS_EXTENSIONS__()*/
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
