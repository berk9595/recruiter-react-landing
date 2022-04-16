import "./App.css";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import customTheme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routers";
function App() {
  return (
    <Router>
      <MuiThemeProvider theme={customTheme("#d2ff00", "#fafafa")}>
        <CssBaseline />
        <Routes />
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
