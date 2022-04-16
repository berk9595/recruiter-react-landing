import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import React from "react";

const styles = (theme) => ({
  card: {
    "&:hover": {
      background: "#f7f7f9",
      transition: "all 0.3s",
    },
    background: "#FFFFFF",
    border: "1px solid #E5EAF4",
    borderRadius: 6,
    boxShadow: " 0px 15px 35px rgba(0, 0, 0, 0.05)",

    padding: "48px 24px  28px 24px",
    position: "relative",
    transition: "all 0.3s",
  },
  icon: {
    background: "#FFFFFF",
    borderRadius: 6,
    boxShadow: "0px 12px 16px rgba(0, 0, 0, 0.08)",
    padding: 16,
  },
});

const DocumentCard = ({ classes, title, text, image, url }) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={classes.card}
    >
      <Grid item className={classes.icon}>
        <img alt="goodsted" src={image} />
      </Grid>
      <Grid container style={{ marginTop: 42 }}>
        <Grid container justify="center">
          <Grid container justify="center">
            <Typography
              variant="h4"
              align="center"
              style={{ fontSize: 20, fontWeight: 600 }}
            >
              {title}
            </Typography>
          </Grid>
          <Typography variant="body2" align="center" style={{ marginTop: 14 }}>
            {text}
          </Typography>
          <Grid container justify="center">
            <a href={url} rel="noopener noreferrer" target="_blank">
              <Typography
                variant="body1"
                color="primary"
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  marginTop: 16,
                  textDecoration: "underline",
                }}
              >
                READ ARTICLE
              </Typography>
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default withStyles(styles, { withTheme: true })(DocumentCard);
