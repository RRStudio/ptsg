import { Route, Router } from "@solidjs/router";
import About from "./components/About";
import Ask from "./components/Ask";
import Episodes from "./components/Episodes";
import Home from "./components/Home";
import Layout from "./components/Layout";

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
