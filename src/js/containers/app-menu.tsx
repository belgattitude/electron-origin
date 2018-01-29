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

export interface MenuLinkProps {
    path: string;
    label: string;
    raised: boolean;
}

export const AppMenu: React.SFC<IAppMenuProps & RouteComponentProps<{}> & WithStyles<ComponentClassNames>> = (props) => {

    const {classes} = props;
    const currentLocation = props.location;
    console.log('MENUPROPS', props);

    const menuItems: MenuLinkProps[]  = [
        {path: '/', label: 'Home'},
        {path: '/video-editor', label: 'Video Editor'},
        {path: '/no-match', label: '404'},
    ].map((props: MenuLinkProps) => {
        return {...props, raised: (currentLocation.pathname == props.path)}
    });

    console.log('menuItems', menuItems);

    const LinkItem = (props: MenuLinkProps) => {
        console.log('LINKITEM', props);
        const raised: boolean = props.raised == true;
        return (
            <Button component={
                btnProps => <NavLink {...btnProps} to={props.path} />
            } color="inherit" raised={raised}>
                {props.label}
            </Button>
        )
    };

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography type="title" color="inherit" className={classes.flex}>
                        {props.title} {currentLocation.pathname}
                    </Typography>
                    {menuItems.map((props) => { return (
                            <LinkItem key={props.path} path={props.path} label={props.label} raised={props.raised} />
                        )}
                    )}
                    <Button color="inherit">About</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

const StyledAppMenu = withStyles(styles)(AppMenu);
export default StyledAppMenu;
