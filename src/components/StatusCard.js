import { Grid, Typography, useMediaQuery, Hidden } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 0,
    padding: 32,
    borderRadius: 10,
    background: "rgba(27, 44, 46, 0.02)",
  },
  sol: {
    background: theme.palette.primary.main,
    height: 8,
    marginTop: 8,
    width: "50%",
    borderRadius: 10,
  },
  cont: {
    paddingBottom: 80,
    paddingTop: 80,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 24,
      paddingTop: 24,
    },
  },
  description: {
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  title: {
    fontSize: 24,
    [theme.breakpoints.down("xs")]: {
      textAlign: "center",
    },
  },
  wrapper: {
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
    },
  },
}));
const StatusCard = (props) => {
  const classes = useStyles();
  const { arr, bg } = props;
  const xsMatch = useMediaQuery("(max-width:600px)");

  return (
    <Grid
      container
      justify="center"
      className={classes.cont}
      style={{ backgroundColor: bg ? bg : "#transparent" }}
    >
      <Grid container className="main-container">
        <Grid
          container
          spacing={xsMatch ? 2 : 7}
          justify="space-between"
          className={classes.wrapper}
        >
          {arr.map((r, index) => (
            <Grid key={index} item md={4} xs={12}>
              <Grid container className={classes.card}>
                <Grid container justify={xsMatch ? "center" : ""}>
                  <Typography
                    variant="h5"
                    component={"p"}
                    className={classes.title}
                  >
                    {r.title}
                  </Typography>
                </Grid>
                <Grid
                  container
                  justify={xsMatch ? "center" : ""}
                  style={{ marginTop: 16 }}
                >
                  <Typography variant="body1" className={classes.description}>
                    {r.description}
                  </Typography>
                </Grid>
                <Grid
                  container
                  className={classes.sol}
                  style={{ width: `calc( 120px + ${index * 60}px )` }}
                />
              </Grid>
              <Hidden mdUp>
                <div style={{ marginTop: 0 }} />
              </Hidden>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default StatusCard;
