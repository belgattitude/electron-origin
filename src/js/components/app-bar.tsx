import React from 'react';

import MaterialAppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import {WithStyles} from 'material-ui';
import MenuIcon from 'material-ui-icons/Menu';
import withStyles from 'material-ui/styles/withStyles';
import {Link} from 'react-router-dom';
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

export interface MenuLinkProps {
    path: string;
    label: string;
    active: boolean;
}

interface IAppMenuProps {
    title: string;
    //menuLinks: MenuLinkProps[];
}

export type AppMenuProps = IAppMenuProps & RouteComponentProps<{}> & WithStyles<ComponentClassNames>;

export const AppBarComponent: React.SFC<AppMenuProps> = (props) => {

    const {classes} = props;
    const currentPath = props.location.pathname;

    //const menuItems = menu
    const menuItems: MenuLinkProps[]  = [
        {path: '/', label: 'Home'},
        {path: '/video-editor', label: 'Editor'},
        {path: '/video-canvas', label: 'Canvas'},
        {path: '/gl-test', label: 'GLTest'},
        {path: '/no-match', label: '404'},
    ].map((menuLinkProps: MenuLinkProps) => {
        return {...menuLinkProps, active: (currentPath == menuLinkProps.path)};
    });

    const LinkItem = (props: MenuLinkProps) => {
        return (
            <Button color="inherit"
                    variant={props.active ? 'raised' : undefined}
                    component={(btnProps: any) => <Link to={props.path} {...btnProps} />}
            >
                {props.label}
            </Button>
        );
    };

    return (
        <div className={classes.root}>
            <MaterialAppBar position="fixed">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        {props.title}
                    </Typography>
                    {menuItems.map(({path, label, active}) => { return (
                            <LinkItem key={path} path={path} label={label} active={active} />
                        )}
                    )}
                    <Button color="inherit">About</Button>
                </Toolbar>
            </MaterialAppBar>
        </div>
    );
};

export const AppBar = withStyles(styles)(AppBarComponent);
