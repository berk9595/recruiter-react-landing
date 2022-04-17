import { Link } from "react-router-dom";
import { Avatar, Typography } from "@material-ui/core";
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

const UserCard = ({ classes, data }) => {
  return (
    <Grid container justifyContent="center">
      <Avatar src={data.img} style={{ width: 128, height: 128 }} />
      <Grid container justifyContent="center">
        <Typography style={{ marginTop: 16 }} align="center" variant="h5">
          {data.text}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles, { withTheme: true })(UserCard);
