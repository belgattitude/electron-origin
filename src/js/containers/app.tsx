import React from 'react';
import {hot} from 'react-hot-loader';
import {ConnectedRouter} from 'react-router-redux';
import {Route} from 'react-router-dom';
import { history } from '@src/store';
import Home from '@src/containers/home';
import { VideoEditorConnected } from '@src/connected';
import {Switch} from 'react-router';
import { AppBarConnected } from '@src/connected/app-bar-connected';
import VideoCanvas from '@src/containers/video-canvas';

const NoMatch = () => (
    <h1 style={{color: 'red'}}>Page not found!</h1>
);

class App extends React.Component<object, object> {
    public render(): React.ReactElement<App> {

        return (
            <div>
                <ConnectedRouter history={history}>
                    <div>
                        <header>
                            <AppBarConnected title="Video editor" />
                        </header>
                        <main>
                            <Switch>
                                <Route exact={true} path="/" component={Home}/>
                                <Route exact={true} path="/video-editor" component={VideoEditorConnected}/>
                                <Route exact={true} path="/video-canvas" component={VideoCanvas}/>
                                <Route component={NoMatch}/>
                            </Switch>
                        </main>
                    </div>
                </ConnectedRouter>
            </div>
        );
    }
}

export default hot(module)(App);
