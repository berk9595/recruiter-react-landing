import { Grid, Hidden, Typography, useMediaQuery } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import React from "react";

const styles = (theme) => ({
  footer: {
    padding: 24,
    background: "#1b2c2e",
    borderRadius: 10,
    margin: "24px 0 -8px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 56,
    },
  },
});

const Footer = ({ classes, ...props }) => {
  const f1 = ["About", "Team & Advisors", "Blog"];
  const f2 = ["Pricing"];
  const f3 = ["Terms of Use", "Privacy Policy"];
  const xsMatch = useMediaQuery("(max-width:600px)");
  return (
    <footer>
      <Grid container justifyContent="center">
        <Grid
          container
          className="new-container"
          style={{ overflow: "hidden" }}
        >
          <Grid
            container
            justifyContent="space-between"
            className={classes.footer}
          >
            <Hidden smDown>
              <Grid item>
                <Typography color="primary" variant="h5">
                  Made by Love.
                </Typography>
              </Grid>
            </Hidden>
            <Grid item xs>
              <Grid
                container
                justifyContent={xsMatch ? "flex-start" : "flex-end"}
                spacing={5}
              >
                <Grid item sm="auto" xs={12}>
                  <Typography color="primary">Home</Typography>
                  {f1.map((f11, index) => (
                    <Grid
                      key={f11}
                      item
                      xs={12}
                      style={{ marginTop: index === 0 ? 12 : 14 }}
                    >
                      <Typography
                        color="inherit"
                        variant="subtitle2"
                        style={{ fontSize: 14 }}
                      >
                        {f11}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                <Grid item sm="auto" xs={12}>
                  <Typography color="primary">Solutions</Typography>
                  {f2.map((f11, index) => (
                    <Grid
                      key={f11}
                      item
                      xs={12}
                      style={{ marginTop: index === 0 ? 12 : 14 }}
                    >
                      <Typography
                        color="inherit"
                        variant="subtitle2"
                        style={{ fontSize: 14 }}
                      >
                        {f11}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                <Grid item sm="auto" xs={12}>
                  <Typography color="primary">Support</Typography>
                  {f3.map((f11, index) => (
                    <Grid
                      key={f11}
                      item
                      xs={12}
                      style={{ marginTop: index === 0 ? 12 : 14 }}
                    >
                      <Typography
                        color="inherit"
                        variant="subtitle2"
                        style={{ fontSize: 14 }}
                      >
                        {f11}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
                <Grid item sm="auto" xs={12}>
                  <Typography color="primary">Community</Typography>
                  <Grid item xs={12} style={{ marginTop: 12 }}>
                    <Typography
                      color="inherit"
                      variant="subtitle2"
                      style={{ fontSize: 14 }}
                    >
                      Turkey, Izmir - Univenn
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  item: PropTypes.string,
};

export default withStyles(styles)(Footer);
