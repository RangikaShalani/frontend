"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import { AccountCircle, Search } from "@mui/icons-material";
import "./style/custom.css";
import InputBase from '@mui/material/InputBase';
import logoimage from "../../../public/logo2.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from 'react-router-dom';


export default function NavBar() {

    // const navigate = useNavigate();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuth(event.target.checked);
    };
  
    const cartPage = (event: React.MouseEvent<HTMLElement>) => {
        // navigate("/cart");
    };
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        // navigate("/cart");
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box sx={{ flexGrow: 1 }} className="main-nav-componet">
      <AppBar position="static"  className="">
        <Toolbar>
          <Image
            src={logoimage}
            width={100}
            height={100}
            alt="Picture of the author"
          />

       <div className="search-icon-wrapper">
       <InputBase
        sx={{ ml: 1, flex: 1 ,width: "85%"}}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search ' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
       </div>
       <div className="nav-bar-button-comp">
       <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={cartPage}
                color="inherit"
              >
         <ShoppingCartIcon />
              </IconButton>

       <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Favourite</MenuItem>
                <MenuItem onClick={handleClose}>My Orders</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
       <Button color="inherit">Login</Button>
       <Button color="inherit">Signup</Button>
       <Button color="inherit">Hotline : <a href="tel:0113552828">0113552828</a></Button>
       </div>
       

        </Toolbar>
      </AppBar>
    </Box>
  );
}

// export default navBar;