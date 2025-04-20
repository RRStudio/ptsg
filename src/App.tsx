import { Route, Router } from "@solidjs/router";
import About from "./routes/About";
import Ask from "./routes/Ask";
import Episodes from "./routes/Episodes";
import SingleEpisode from "./routes/SingleEpisode";
import Home from "./routes/Home";
import Layout from "./components/Layout";

export default function App() {
    return (
        <Router>
            <Route path="/" component={Layout}>
                <Route path="/" component={Home} />
                <Route path="/episodes" component={Episodes} />
                <Route path="/episodes/:episode" component={SingleEpisode} />
                <Route path="/ask" component={Ask} />
                <Route path="/about" component={About} />
            </Route>
        </Router>
    );
}
