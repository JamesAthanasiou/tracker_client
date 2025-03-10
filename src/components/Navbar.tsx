import { Link, useNavigate } from "@tanstack/react-router";
import LogoutButton from "./LogoutButton";
import { isAuthenticated } from "../services/auth";
import { useContext, useState } from "react";
import { UserContext } from "../app-context/user-context";
import { AppBar, Box, Button, Divider, Drawer, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
      
export default function Navbar() {
    // TODO, unify isAuthenticated, which checks we have a token, and UserContext, the context for triggering rerenders.
    const { user } = useContext(UserContext)

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
      setOpen(newOpen);
    };

    // TODO, move out?
    type NavRoutes =  "/" | "/person" | "/gamer" | "/login" | "/signup";

    const navigate = useNavigate()

    const navigateToRoute = (route: NavRoutes) => ()=> {
        navigate({
            to: route,
        });
    }

    const routeMap: Array<[string, NavRoutes]> = [['Home', '/'], ['People', '/person'], ['Play Game', '/gamer']];

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {routeMap.map((item, _) => (
                <ListItem key={item[1]} disablePadding>
                    <ListItemButton  onClick={navigateToRoute(item[1])} >
                        <Link to={item[1]}>
                            {item[0]}
                        </Link>
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            <LogoutButton />
        </Box>
    );
    
    return (
        <>
            <AppBar position="static" color={"secondary"}>
                <Toolbar variant="dense">
                    { isAuthenticated() && !!user ? (
                        <>
                            <Button onClick={toggleDrawer(true)} sx={{ mr: '2rem' }} variant="contained"><MenuIcon /></Button>
                            <Drawer open={open} onClose={toggleDrawer(false)}>
                                {DrawerList}
                            </Drawer>
                            <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                                Hello {user.username}
                            </Typography>
                        </>
                        ) : (
                        <Box>
                            <Button onClick={navigateToRoute("/login")} sx={{ mr: '2rem' }} variant="contained">  
                                Login
                            </Button>
                            <Button onClick={navigateToRoute("/signup")} variant="contained">
                                Signup
                            </Button>

                        </Box>
                        )
                    }
                </Toolbar>
            </AppBar>
        </>
    )
}