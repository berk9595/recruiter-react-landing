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
      description: "Invite 5 new team members and start sharing your content.",
      subtitle: "£0 - month",
      title: "Free",
    },
    {
      description:
        "Invite 20 new team members, and get automated intros and reminders.",
      subtitle: "£15- month",
      title: "Starter",
      spec: true,
    },
    {
      description:
        "Invite an unlimited number of your team and use our platform to its fullest with all of the features available.",
      subtitle: "£95 - month",
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
        "Provide a preparation experience for new team members to quickly adapt to the corporate culture.",
      icon: "https://res.cloudinary.com/goodsted/image/upload/v1635792436/group-2-fill_5_1_clp36g.png",
      title: "Bond with your team",
    },
    {
      description:
        "Add and easily track your pre-prepared assignments, reminders, quizzes, and up-to-date courses.",
      icon: "https://res.cloudinary.com/goodsted/image/upload/v1635792449/tools-fill_1_i5a2je.png",
      title: "Learning Management System",
    },
    {
      description:
        "Turn your managers into coaches and contribute to company performance with the continuous improvement cycle you will create.",
      icon: "https://res.cloudinary.com/goodsted/image/upload/v1635792462/lightbulb-fill_1_1_g8v4n2.png",
      title: "Employee Development Cycle",
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
        title="Employee Management Tool"
        description="Why Giorny? Because we know very well that developing your company is about developing your team, development goes through appropriate progress options and follow-up. That's why Giorny is for you to train your team at the level you want."
      />
      <StatusCard arr={arr} />
      <NewFaqs
        arrNeeds={arrNeeds}
        button={{
          link: "/talk-to-us?tag=employee-purpose",
          text: "Talk to us",
        }}
        title="Choose Your Plan"
        description="Choose the payment plan that’s right for you. You can easily upgrade or cancel your payment plan anytime you want."
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
