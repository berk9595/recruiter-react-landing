import Hero from "../components/Hero";
import StatusCard from "../components/StatusCard";
import NewFaqs from "../components/NewFaqs";
import { Grid, Button, useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Features from "../components/Features";
const useStyles = makeStyles((theme) => ({
  btn: {
    fontSize: 16,
    height: 60,
    width: 192,
    [theme.breakpoints.down("xs")]: {
      fontSize: 14,
      height: 48,
      minWidth: ["unset", "!important"],
      width: ["100%", "!important"],
    },
  },
  btnCon: {
    marginTop: 48,
    [theme.breakpoints.down("xs")]: {
      marginTop: 20,
    },
  },

  talkButton: {
    "&:hover": {
      backgroundColor: "transparent",
    },
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "transparent",
    border: "2px solid #1C2C2E",
    color: "#1C2C2E",
    display: "flex",
    fontSize: 16,
    height: 59,
    justifyContent: "center",
    lineHeight: "24px",
    marginLeft: 24,
    width: 212,
    [theme.breakpoints.down("md")]: {
      width: 128,
    },
    [theme.breakpoints.down("xs")]: {
      height: 48,
      margin: "unset",
      width: "100%",
    },
  },
}));
function Landing() {
  const tag = {
    text: "Impact Challenge",
  };
  const arrNeeds = [
    {
      description: "Invite 10 of your colleagues and start sharing your",
      subtitle: "£0 - month",
      title: "Free",
    },
    {
      description: "Invite up to 50 of your colleagues, share your skills",
      subtitle: "£179 - month",
      title: "Starter",
      spec: true,
    },
    {
      description: "Engage unlimited number of colleagues.",
      subtitle: "£479 - month",
      title: "Pro",
    },
    {
      description: "Get your own branded / private ecosystem.",
      subtitle: "Get a quote",
      title: "Enterprise",
    },
  ];
  const arr = [
    {
      description:
        "Join with teammates, or collaborate with colleagues you don’t usually.",
      icon: "https://res.cloudinary.com/goodsted/image/upload/v1635792436/group-2-fill_5_1_clp36g.png",
      title: "Bond with your team",
    },
    {
      description:
        "Put your skills to work for a cause you’re passionate about.",
      icon: "https://res.cloudinary.com/goodsted/image/upload/v1635792449/tools-fill_1_i5a2je.png",
      title: "Use your skills for good",
    },
    {
      description:
        "Learn and practice creative thinking, empathy and prototyping.",
      icon: "https://res.cloudinary.com/goodsted/image/upload/v1635792462/lightbulb-fill_1_1_g8v4n2.png",
      title: "Practice design thinking",
    },
  ];
  const classes = useStyles();
  const xsMatch = useMediaQuery("(max-width:600px)");
  return (
    <div className="App">
      <Hero
        tag={tag}
        buttons={
          <Grid container spacing={xsMatch ? 1 : 2} className={classes.btnCon}>
            <Grid item sm="auto" xs>
              <Button
                component={Link}
                variant="contained"
                color="primary"
                className={classes.btn}
                style={{ minWidth: 250 }}
                to="/impact-challenge/join-waitlist"
              >
                Join waitlist
              </Button>
            </Grid>
            <Grid item sm="auto" xs>
              <Button
                component={Link}
                variant="contained"
                color="primary"
                to="/talk-to-us?tag=impact-challenge"
                className={classes.talkButton}
              >
                Talk to us
              </Button>
            </Grid>
          </Grid>
        }
        mobileBackgroundImage={
          "https://res.cloudinary.com/goodsted/image/upload/v1635455211/Group_8516_zoouee.png"
        }
        backgroundImage={
          "https://res.cloudinary.com/goodsted/image/upload/v1635455195/Group_8515_pdsyf0.png"
        }
        backgroundColor={"#f4fefc"}
        title="Team building for social impact"
        description="Are you looking for an inspiring team building activity with a touch of skill development? Dedicate 2h a week over 5 weeks to support a nonprofit with a challenge! Have fun, and do-good.  "
      />
      <StatusCard arr={arr} />
      <NewFaqs
        arrNeeds={arrNeeds}
        button={{
          link: "/talk-to-us?tag=employee-purpose",
          text: "Talk to us",
        }}
        title="Fit to your needs"
        description="Choose the plan that’s right for you - whether you’re just starting out on your employee volunteering programmeand. "
      />
      <Grid container justifyContent="center">
        <Grid container className="new-container">
          <Features />
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
