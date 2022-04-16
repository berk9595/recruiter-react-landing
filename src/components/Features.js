import { Box, Typography, useMediaQuery } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import EveryoneCard from "./Cards/EveryoneCard";
import Grid from "@material-ui/core/Grid";
import React from "react";
import every11 from "../static/img/every11.svg";
import every12 from "../static/img/every12.svg";
import every13 from "../static/img/every13.svg";
import every7 from "../static/img/every7.svg";
import every8 from "../static/img/every8.svg";
import every9 from "../static/img/every9.svg";

const styles = (theme) => ({
  box: {
    backgroundColor: "#1b2c2e",
    color: theme.palette.primary.main,
    padding: "4px 16px",
    marginLeft: 8,
    borderRadius: 10,
  },
  background: {
    overflow: "hidden",
    position: "relative",
  },
  cardsCon: {
    marginTop: 120,
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
    },
  },
  holder: {
    paddingBottom: 129,
    paddingTop: 105,
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 60,
      paddingTop: 60,
    },
  },
  holderTextrs: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  iphone: {
    left: -100,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      left: 0,
    },
  },
  mainGridMobile: {
    marginBottom: 100,
    marginTop: 32,
  },
  mainHolder: {
    left: "0",
    position: "absolute",
    top: "18%",
  },
  mobileArrange: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: 40,
    },
  },
  pcMargin: {
    marginRight: 56,
    [theme.breakpoints.down("xs")]: {
      marginRight: 0,
      width: "100%",
    },
  },
  hel: {
    marginTop: 72,
    [theme.breakpoints.down("xs")]: {
      marginTop: 40,
    },
  },
  slideCont: {
    background: "rgba(231, 110, 60, 0.04)",
  },
  sliderArrows: {
    marginTop: 141,
  },
  work: {
    marginTop: 208,
    [theme.breakpoints.down("xs")]: {
      marginTop: 100,
    },
  },
});

const Features = ({ classes, ...props }) => {
  const xsMatch = useMediaQuery("(max-width:600px)");
  return (
    <Grid container justify="center" className={classes.cardsCon}>
      <Typography
        component={Grid}
        container
        justifyContent="center"
        alignItems="center"
        align="center"
        variant="h1"
        style={{ fontSize: 45, fontWeight: 600 }}
      >
        Our Main <Box className={classes.box}>Features</Box>
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        spacing={2}
        className={classes.hel}
      >
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          style={{ marginBottom: xsMatch ? 16 : 32 }}
        >
          <EveryoneCard
            marginTop={12}
            hideLearnMore={true}
            url={"/individuals"}
            image={every11}
            reverse
            title="Company page"
            text="Your unique page with your company brand and social purpose"
          />
        </Grid>
        <Grid
          item
          md={5}
          sm={12}
          xs={12}
          style={{ marginBottom: xsMatch ? 16 : 32 }}
        >
          <EveryoneCard
            marginTop={12}
            hideLearnMore={true}
            url={"/individuals"}
            image={every12}
            title="Private feed"
            text="Endorse opportunities that fit with your company’s social purpose."
          />
        </Grid>
        <Grid
          item
          md={5}
          sm={12}
          xs={12}
          style={{ marginBottom: xsMatch ? 16 : 32 }}
        >
          <EveryoneCard
            marginTop={12}
            hideLearnMore={true}
            url={"/individuals"}
            image={every13}
            title="Team volunteering"
            text="Have your employees volunteer as a team to address different opportunities."
          />
        </Grid>
        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          style={{ marginBottom: xsMatch ? 16 : 32 }}
        >
          <EveryoneCard
            marginTop={12}
            hideLearnMore={true}
            url={"/individuals"}
            image={every7}
            reverse
            title="Search by skills"
            text="Intelligent skill matching to put the right person in the right project"
          />
        </Grid>

        <Grid
          item
          md={6}
          sm={12}
          xs={12}
          style={{ marginBottom: xsMatch ? 16 : 32 }}
        >
          <EveryoneCard
            marginTop={12}
            hideLearnMore={true}
            url={"/individuals"}
            image={every8}
            reverse
            title="Receive recommendations"
            text="Evidence your impact with feedback & recommendations from non-profits."
          />
        </Grid>
        <Grid
          item
          md={5}
          sm={12}
          xs={12}
          style={{ marginBottom: xsMatch ? 16 : 32 }}
        >
          <EveryoneCard
            marginTop={12}
            hideLearnMore={true}
            url={"/individuals"}
            image={every9}
            title="Newsfeed & updates"
            text="Have your employees collaborate, share updates, and communicate achievements"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles, { withTheme: true })(Features);
