import { Route, Router } from "@solidjs/router";
import Layout from "./Layout";
import About from "../routes/About";
import Ask from "../routes/Ask";
import Episodes from "../routes/Episodes";
import Home from "../routes/Home";

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
