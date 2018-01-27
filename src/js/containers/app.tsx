import React from 'react';
import {hot} from 'react-hot-loader';
import {ConnectedRouter} from 'react-router-redux';
import {Route, Link} from 'react-router-dom';
import { history } from '@src/store';
import Home from '@src/containers/home';
import ConnectedVideoEditor from '@src/containers/video-editor';

/*
const NoMatch = () => (
    <h1 style={{color:'red'}}>Page not found!</h1>
);
*/

class App extends React.Component<object, object> {
    public render(): React.ReactElement<App> {

        return (
            <div>
                {/* ConnectedRouter will use the store from Provider automatically */}
                <ConnectedRouter history={history}>
                    <div>
                        <header>
                            <Link to="/">Home</Link>
                            <Link to="/video-editor">Video editor</Link>
                        </header>
                        <main>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/video-editor" component={ConnectedVideoEditor}/>
                        </main>
                    </div>
                </ConnectedRouter>
            </div>
        );
    }
}

export default hot(module)(App);
