import React from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    WithStyles
} from "material-ui";

import {Menu as MenuIcon} from 'material-ui-icons';
import withStyles from "material-ui/styles/withStyles";
import {Link} from 'react-router-dom';

// import {TypographyProps} from 'material-ui/Typography';


type ComponentClassNames = 'root' | 'flex' | 'menuButton';
const styles = {
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

interface IAppMenuProps {
    title: string;
}

export const AppMenu: React.SFC<IAppMenuProps & WithStyles<ComponentClassNames>> = (props) => {
    const {classes} = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                         <MenuIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        {props.title}
                    </Typography>
                    <Link to="/">Home</Link>
                    <Link to="/no-match">InvalidRoute</Link>

                    <Link to="/video-editor">Video editor</Link>
                    <Button component={props => <Link {...props} to="/" />} color="inherit">Home</Button>
                    <Button component={props => <Link {...props} to="/video-editor" />} color="inherit">Video Editor</Button>
                    <Button component={props => <Link {...props} to="/no-match"/>} color="inherit">404</Button>
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};


const StyledAppMenu = withStyles(styles)(AppMenu);
export default StyledAppMenu;
