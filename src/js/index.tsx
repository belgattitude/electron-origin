import React from 'react';
import { render } from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store/index';
import createHistory from 'history/createBrowserHistory';
import App from './containers/App';
import '../style/style.scss';

const history = createHistory();

const renderApp = (Component: any, elementId: string) => {
    render(
        <ReduxProvider store={store}>
            <Component history={history}/>
        </ReduxProvider>,
        document.getElementById(elementId)
    );
};

renderApp(App, 'app');
