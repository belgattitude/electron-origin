import React from 'react';

import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Button,
    WithStyles
} from 'material-ui';

import {Menu as MenuIcon} from 'material-ui-icons';
import withStyles from 'material-ui/styles/withStyles';
import {NavLink} from 'react-router-dom';
import {RouteComponentProps} from 'react-router';

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

export const AppMenu: React.SFC<IAppMenuProps & RouteComponentProps<{}> & WithStyles<ComponentClassNames>> = (props) => {
    const {classes} = props;
    const location = props.location;

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                         <MenuIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        {props.title} {location.pathname}
                    </Typography>
                    <Button component={btnProps => <NavLink {...btnProps} to="/" />} color="inherit" raised={true}>
                        Home
                    </Button>
                    <Button component={btnProps => <NavLink {...btnProps} to="/video-editor" />} color="inherit">
                        Video Editor
                    </Button>
                    <Button component={btnProps => <NavLink {...btnProps} to="/no-match" />} color="inherit">
                        404
                    </Button>
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const StyledAppMenu = withStyles(styles)(AppMenu);
export default StyledAppMenu;
