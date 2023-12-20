import React from "react";
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";

const Header = () => {
  return (
    <>
      <Box >
        <AppBar component={"nav"} sx={{ bgcolor: "#1B204E" }}>
          <Toolbar>

            <Typography
              sx={{ flex: 1 }}
            >
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/packages"}>Packages</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
            <Typography
              sx={{ flexGow: 1 }}
            >
              <Link to="/packages">
                <Button sx={{
                  fontWeight: '800',
                  color: 'white',
                  fontSize: '1.1rem', "&:hover": {
                    backgroundColor: 'white',
                    color: 'black'
                  },
                }}>Book Now</Button>
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
