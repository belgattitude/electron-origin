import React from 'react';
import { hot } from 'react-hot-loader';
import {Button, Reboot} from 'material-ui';
import Typography from 'material-ui/Typography';

import MediaPreview from '../components/MediaPreview';


interface Props {

}

class App extends React.Component<Props, {}> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        const text = 'Hello world';
        const filename = '/home/sebastien/Videos/MVI_0291.m4v';
        return (
            <div>
                <Reboot />
                <h3>Welcomes {text}</h3>
                <Button raised color="primary">
                    Click me
                </Button>
                <Typography component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                </Typography>
                <MediaPreview filename={filename}/>
            </div>
        );
    }
}

export default hot(module)(App);
