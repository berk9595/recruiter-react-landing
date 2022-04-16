import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";

const styles = (theme) => ({
  leftStick: {
    width: 8,
    background: theme.palette.primary.main,
    borderRadius: 8,
    height: "auto",
  },
  card: {
    background: "#FFFFFF",

    //marginBottom: 32,
    height: "100%",
    padding: "28px",
    position: "relative",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  icon: {
    left: 0,
    position: "absolute",
    top: -36,
  },
});

const EveryoneCard = ({
  classes,
  theme,
  title,
  text,
  image,
  url,
  hideLearnMore,
  marginTop,
  reverse,
}) => {
  return (
    <Grid container>
      <Grid
        item
        className={classes.leftStick}
        style={reverse ? { background: "#1b2c2e" } : {}}
      />
      <Grid item xs>
        <Grid
          container
          direction="column"
          alignItems="center"
          className={classes.card}
          style={reverse ? { background: "#1b2c2e05" } : {}}
        >
          <Grid container style={{ marginTop: marginTop ? marginTop : 18 }}>
            <Grid container>
              <Grid container>
                <Typography variant="h5">{title}</Typography>
              </Grid>
              <Typography
                variant="body1"
                style={{ color: theme.palette.grey[700], marginTop: 8 }}
              >
                {text}
              </Typography>
              {!!!hideLearnMore &&
                (url ? (
                  <Typography
                    component={Link}
                    to={url}
                    variant="body1"
                    color="primary"
                    style={{ fontSize: 18, fontWeight: 600, marginTop: 16 }}
                  >
                    Learn more{" "}
                    <svg
                      style={{ marginLeft: 0 }}
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="12"
                      viewBox="0 0 17 12"
                      fill="none"
                    >
                      <path
                        d="M16.5358 6.53033C16.8287 6.23744 16.8287 5.76256 16.5358 5.46967L11.7628 0.696699C11.4699 0.403806 10.995 0.403806 10.7021 0.696699C10.4093 0.989593 10.4093 1.46447 10.7021 1.75736L14.9448 6L10.7021 10.2426C10.4093 10.5355 10.4093 11.0104 10.7021 11.3033C10.995 11.5962 11.4699 11.5962 11.7628 11.3033L16.5358 6.53033ZM0.935547 6.75H16.0054V5.25H0.935547V6.75Z"
                        fill={theme.palette.primary.main}
                      />
                    </svg>
                  </Typography>
                ) : (
                  <Typography
                    variant="body1"
                    color="primary"
                    style={{ fontSize: 18, fontWeight: 600, marginTop: 16 }}
                  >
                    Coming Soon{" "}
                  </Typography>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles, { withTheme: true })(EveryoneCard);
