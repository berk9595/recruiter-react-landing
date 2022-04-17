import { Grid, Typography, useMediaQuery, Hidden } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import UserCard from "./Cards/UserCard";

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
const Team = (props) => {
  const classes = useStyles();
  const { arr, bg } = props;
  const xsMatch = useMediaQuery("(max-width:600px)");
  let tea = [
    {
      img: "https://univenn.com/assets/berkayvali.jpg",
      text: "Berk Ayvalı",
    },
  ];
  return (
    <Grid
      container
      justify="center"
      className={classes.cont}
      style={{ backgroundColor: bg ? bg : "#transparent" }}
    >
      <Grid container>
        {tea.map((t, index) => (
          <Grid item md={4} sm={6} xs={12} key={index}>
            <UserCard data={t} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Team;
