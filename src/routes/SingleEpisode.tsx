import type { Episode } from "../services/episode";
import EpisodeComponent from "../components/Episode";

export default function SingleEpisode() {
    return <EpisodeComponent episode={episode} expanded={true} />;
}
