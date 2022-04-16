import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import logo from "../static/img/giorny.png";
import {
  Grid,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Hidden,
} from "@material-ui/core";
import { FaAlignLeft } from "react-icons/fa";
import Drawer from "./Drawer";

const useStyles = makeStyles((theme) => ({
  paper: {
    boxShadow: "unset",
  },
  root: {
    flexGrow: 1,
    marginBottom: 64,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" classes={{ root: classes.paper }}>
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              className="new-container"
            >
              <Grid item>
                <Grid container alignItems="center">
                  <img src={logo} width="121px" height={40} />
                </Grid>
              </Grid>
              <Grid item>
                <Grid container alignItems="center">
                  <Hidden xsDown>
                    <Grid item style={{ marginRight: 4 }}>
                      <Button
                        color="initial"
                        variant="text"
                        style={{ minWidth: 80, textDecoration: "underline" }}
                      >
                        About
                      </Button>
                    </Grid>
                  </Hidden>
                  <Hidden xsDown>
                    <Grid item style={{ marginRight: 16 }}>
                      <Button
                        color="initial"
                        variant="text"
                        style={{ minWidth: 80, textDecoration: "underline" }}
                      >
                        Team
                      </Button>
                    </Grid>
                  </Hidden>
                  <Grid item>
                    <Button
                      variant="container"
                      color="inherit"
                      style={{
                        background: "#1b2c2e",
                        color: "white",
                        fontWeight: 600,
                        minWidth: 120,
                        padding: 6,
                      }}
                    >
                      Pricing
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
