import {
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
  Button,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chip: {
    background: "#d2ff00",
    padding: "8px 16px",
    borderRadius: 10,
    fontWeight: 600,
  },
  card: {
    background: "white",
    borderRadius: 6,
    boxShadow: "0px 4px 4px 0px #00000040",
    minHeight: 280,
    padding: "31px 20px 32px 24px",
    [theme.breakpoints.only("md")]: {
      padding: 16,
    },
    [theme.breakpoints.only("xs")]: {
      padding: 20,
    },
  },
  cardTitle: {
    fontSize: 24,
  },
  cont: {
    background: "#1b2c2e",
    padding: "187px 0 132px",
    [theme.breakpoints.only("md")]: {
      padding: "100px 0",
    },
    [theme.breakpoints.down("sm")]: {
      padding: "32px 0",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "64px 0",
      overflow: "hidden",
    },
  },
  description: {
    fontSize: 20,
    [theme.breakpoints.down("xs")]: {
      fontSize: 16,
      textAlign: "center",
    },
  },
  imgHolder: {
    marginRight: 52,
    maxWidth: 496,
    [theme.breakpoints.only("md")]: {
      marginRight: 24,
    },
    [theme.breakpoints.only("sm")]: {
      marginRight: 0,
      marginBottom: 32,
      maxWidth: "100%",
    },
    [theme.breakpoints.only("xs")]: {
      marginRight: 0,
    },
  },
  title: {
    color: "white",
    fontSize: 45,
    fontWeight: 600,
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,

      textAlign: "center",
    },
  },
}));
const NewFaqs = (props) => {
  const { title, description, arrNeeds, mobileDescription, button } = props;
  const classes = useStyles();
  const xsMatch = useMediaQuery("(max-width:600px)");

  const renderCard = () => {
    return (
      <Grid item xs className={classes.imgHolder}>
        <Grid container justify="center" spacing={3}>
          {arrNeeds.map((r, index) => (
            <Grid item lg={6} md={6} sm={6} xs={8} key={index}>
              <Grid
                container
                direction="column"
                className={classes.card}
                style={
                  r.spec
                    ? { height: "100%", background: "#d2ff00" }
                    : { height: "100%" }
                }
                component={Link}
                to={r.link}
              >
                {r.icon && (
                  <Grid item>
                    <img alt="goodsted" src={r.icon} />
                  </Grid>
                )}
                <Grid item style={{ marginTop: 24 }}>
                  {" "}
                  <Typography
                    variant="h5"
                    component={"span"}
                    className={classes.cardTitle}
                  >
                    {r.title}
                  </Typography>
                  {r.subtitle && (
                    <Grid item style={{ marginTop: 16 }}>
                      <Typography
                        variant="subtitle1"
                        component={"span"}
                        className={classes.chip}
                        style={
                          r.spec
                            ? { background: "#1b2c2e", color: "white" }
                            : {}
                        }
                      >
                        {r.subtitle}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
                <Grid item style={{ marginTop: 18 }}>
                  {" "}
                  <Typography
                    variant="subtitle2"
                    component={"span"}
                    className={classes.cardDescription}
                  >
                    {r.description}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    );
  };

  return (
    <Grid container justify="center" className={classes.cont}>
      <Grid container className="main-container">
        <Grid container alignItems="center" spacing={2} justify="center">
          <Hidden xsDown>{renderCard()}</Hidden>

          <Grid item md={5} xs={12}>
            <Grid container justify={xsMatch ? "center" : ""}>
              <Typography
                variant="h1"
                component={"p"}
                className={classes.title}
              >
                {title}
              </Typography>
            </Grid>
            <Grid
              container
              justify={xsMatch ? "center" : ""}
              style={{ marginTop: 26 }}
            >
              <Typography
                variant="body1"
                style={{ color: "white" }}
                className={classes.description}
              >
                {xsMatch && mobileDescription ? mobileDescription : description}
              </Typography>
            </Grid>
            {button && (
              <Grid container>
                <Grid item md={6} xs={12}>
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    style={{
                      marginTop: 29,
                      minHeight: 58,
                      paddingLeft: 32,
                      paddingRight: 32,
                    }}
                  >
                    {button.text}
                  </Button>
                </Grid>
              </Grid>
            )}
          </Grid>
          <Hidden smUp>
            <Grid container style={{ marginTop: 64 }}>
              {renderCard()}
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NewFaqs;
