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
    active: boolean;
}

export type AppMenuProps = IAppMenuProps & RouteComponentProps<{}> & WithStyles<ComponentClassNames>;
export const AppMenu: React.SFC<AppMenuProps> = (props) => {

    const {classes} = props;
    const currentPath = props.location.pathname;

    const menuItems: MenuLinkProps[]  = [
        {path: '/', label: 'Home'},
        {path: '/video-editor', label: 'Video Editor'},
        {path: '/no-match', label: '404'},
    ].map((props: MenuLinkProps) => {
        return {...props, active: (currentPath == props.path)}
    });

    const LinkItem = (props: MenuLinkProps) => {
        const raised: boolean = props.active == true;
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
                        {props.title}
                    </Typography>
                    {menuItems.map(({path, label, active}) => { return (
                            <LinkItem key={path} path={path} label={label} active={active} />
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
