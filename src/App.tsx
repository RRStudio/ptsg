import { Router, Route } from "@solidjs/router";
import Home from "./components/Home";
import Episodes from "./components/Episodes";
import Ask from "./components/Ask";
import About from "./components/About";
import Layout from "./components/Layout";

// TODO: navigation menu
// TODO: embedded google form: https://forms.gle/bRmy3ycbKwPto4dT8
// TODO: match google form colors
// TODO: link: spotify
// TODO: link: apple music
// TODO: about us
// TODO: footer
// TODO: copyright w/ current year
// TODO: episodes
// TODO: listen to episode
// TODO: search episodes
// TODO: content
// TODO: desktop
// TODO: laptop
// TODO: mobile
// TODO: deploy somewhere
export default function App() {
  return (
    <Router>
      <Route path="/" component={Layout}>
        <Route path="/" component={Home} />
        <Route path="/episodes" component={Episodes} />
        <Route path="/ask" component={Ask} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  );
}
