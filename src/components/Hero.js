import { Grid, Hidden, Typography, withWidth } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backImage: {
    paddingBottom: 90,
    paddingTop: 56,
    position: "relative",
    [theme.breakpoints.up("lg")]: {
      minHeight: 680,
    },
    [theme.breakpoints.down("xs")]: {
      paddingBottom: 24,
      paddingTop: 24,
    },
  },
  body1: {
    fontSize: 21,
    marginTop: 32,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
      marginTop: 16,
      textAlign: "center",
    },
  },
  cov: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },

  h1: {
    fontSize: 50,
    fontWeight: 600,
    letterSpacing: -2,
    lineHeight: 1.3,
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
    },
  },
  img: {
    [theme.breakpoints.up("lg")]: {
      maxHeight: 600,
      paddingLeft: 48,
      width: "auto",
    },
    "& img": {
      maxHeight: 600,
      objectFit: "contain",
      width: "100%",
    },
    maxWidth: 590,
    width: "100%",
    [theme.breakpoints.only("md")]: {
      "& img": {
        width: "100%",
      },
      width: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      "& img": {
        marginLeft: 0,
        width: "100%",
      },
    },
  },
  reactPlayer: {
    borderRadius: 4,
    marginLeft: 64,
    marginTop: 40,
    overflow: "hidden",
    [theme.breakpoints.up("xl")]: {
      height: ["500px", "!important"],
    },
    [theme.breakpoints.down("md")]: {
      marginLeft: 32,
    },
    [theme.breakpoints.down("xs")]: {
      height: ["180px", "!important"],
      marginLeft: 0,
      marginTop: 16,
    },
  },
  tag: {
    background: theme.palette.primary.main,
    border: theme.palette.primary.main,
    borderRadius: 10,
    marginBottom: 16,
    padding: "6px 16px",
    width: "fit-content",
    "& h6": {
      fontWeight: 600,
      fontSize: 16,
    },
  },
  tagGap: {
    background: "transparent",
    marginBottom: 8,
    padding: "14px",
    width: "fit-content",
  },
  textCov: {
    zIndex: 1,
  },
}));
const Hero = (props) => {
  const classes = useStyles();
  const {
    backgroundImage,
    backgroundColor,
    title,
    description,
    mobileBackgroundImage,
    tag,
    width,
    backgroundImageMaxHeight,
  } = props;
  const gridStyle = {
    backgroundColor: `${backgroundColor}`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  return (
    <Grid container>
      <Grid
        container
        style={gridStyle}
        justify="center"
        className={classes.backImage}
      >
        <Grid
          container
          alignItems="flex-start"
          justify={width === "xl" ? "center" : "space-between"}
          className={`main-container ${classes.cov}`}
        >
          <Grid item xl={5} lg={6} md={7} className={classes.textCov}>
            {tag ? (
              <Grid item className={classes.tag}>
                <Grid container alignItems="center">
                  <Typography variant="subtitle1">{tag.text}</Typography>
                </Grid>
              </Grid>
            ) : (
              // imitate the tag gap above title if there's no tag
              <Grid item className={classes.tagGap} />
            )}
            <Typography
              variant="h5"
              component="h1"
              className={classes.h1}
              style={props.color ? { color: props.color } : {}}
            >
              {title}
            </Typography>
            {mobileBackgroundImage && (
              <Hidden smUp>
                <Grid container justify="center" style={{ marginTop: 28 }}>
                  <img
                    alt="goodsted"
                    src={mobileBackgroundImage}
                    style={{ objectFit: "contain" }}
                    width="100%"
                  />
                </Grid>
              </Hidden>
            )}
            <Typography
              variant="body1"
              className={classes.body1}
              style={props.color ? { color: props.color } : {}}
            >
              {description}
            </Typography>
            {props.buttons}
          </Grid>
          {backgroundImage && (
            <Hidden smDown>
              <Grid item xs className={classes.img}>
                <Grid item className={classes.tagGap} />
                <img
                  alt="goodsted"
                  src={backgroundImage}
                  style={{
                    maxHeight: backgroundImageMaxHeight
                      ? backgroundImageMaxHeight
                      : "600px",
                  }}
                />
              </Grid>
            </Hidden>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withWidth()(Hero);
