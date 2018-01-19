import React from 'react';
import { hot } from 'react-hot-loader';
import {Button, Reboot} from 'material-ui';
import Typography from 'material-ui/Typography';
import { connect } from 'react-redux';
import ConnectedMediaPreview from '../components/ConnectedMediaPreview';

import { addMedia } from '../actions/index';
const mapDispatchToProps = (dispatch: any) => {
    return {
        addMedia: (media: any) => dispatch(addMedia(media)),
    };
};

interface Props {
    addMedia: (media: any) => {};
}

class App extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.addMedia('/home/sebastien/Videos/Dance/Smoke/smoke_3_3.mp4');
    }

    render() {
        const text = 'Hello world';
        return (
            <div>
                <Reboot />
                <h3>Welcomes {text}</h3>
                <Button raised color="primary" onClick={this.onClick}>
                    Click me
                </Button>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                <ConnectedMediaPreview/>
            </div>
        );
    }
}
const ConnectedApp = connect(null, mapDispatchToProps)(App);
export default hot(module)(ConnectedApp);
