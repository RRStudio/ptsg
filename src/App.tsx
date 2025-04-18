import { Route, Router } from "@solidjs/router";
import About from "./components/About";
import Ask from "./components/Ask";
import Episodes from "./components/Episodes";
import Home from "./components/Home";
import Layout from "./components/Layout";

// TODO: 3 latest episodes on home page
// TODO: single episode page
// TODO: match google form colors
// TODO: about us
// TODO: footer
// TODO: copyright w/ current year
// TODO: content
// TODO: laptop
// TODO: mobile
// TODO: deploy somewhere
// TODO: google analytics: setup
// TODO: google analytics: log enter/exit pages
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
