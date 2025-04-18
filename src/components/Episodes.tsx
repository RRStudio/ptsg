import { For, Show, createSignal, onCleanup } from "solid-js";
import logo from "../assets/ptsg.png";
import { useEpisodes } from "../services/feed";

export default function Episodes() {
	const {
		episodes,
		loading,
		currentPage,
		setCurrentPage,
		totalPages,
		searchTerm,
		setSearchTerm,
		currentPlaying,
		setCurrentPlaying,
	} = useEpisodes();

	const [expandedEpisode, setExpandedEpisode] = createSignal<string | null>(
		null,
	);
	let searchTimeout: number | null = null;

	const handleNextPage = () => {
		setCurrentPage((p) => Math.min(totalPages(), p + 1));
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	const handleSearch = (e: Event) => {
		e.preventDefault();
		setCurrentPage(1);
	};

	const handleSearchInput = (value: string) => {
		if (searchTimeout) {
			window.clearTimeout(searchTimeout);
		}

		searchTimeout = window.setTimeout(() => {
			setSearchTerm(value);
			setCurrentPage(1);
		}, 300);
	};

	onCleanup(() => {
		if (searchTimeout) {
			window.clearTimeout(searchTimeout);
		}
	});

	const handleEpisodeClick = (episode: { audioUrl: string; title: string }) => {
		if (currentPlaying() === episode.audioUrl) {
			setCurrentPlaying(null);
			setExpandedEpisode(null);
		} else {
			setCurrentPlaying(episode.audioUrl);
			setExpandedEpisode(episode.audioUrl);
		}
	};

	return (
		<div class="w-full h-full flex flex-col items-center gap-8">
			<div class="text-4xl font-900 text-center">פרקים</div>

			<form onSubmit={handleSearch} class="w-full max-w-4xl flex gap-2">
				<input
					type="text"
					value={searchTerm()}
					onInput={(e) => handleSearchInput(e.currentTarget.value)}
					placeholder="חיפוש פרקים..."
					class="flex-1 px-4 py-2 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
			</form>

			<Show when={!loading()} fallback={<div>טוען...</div>}>
				<Show
					when={episodes().length > 0}
					fallback={
						<div class="text-center text-neutral-600">
							<p class="text-xl">לא נמצאו פרקים</p>
							<p class="mt-2">נסה לשנות את מונחי החיפוש</p>
						</div>
					}
				>
					<div class="w-full max-w-4xl grid grid-cols-1 gap-4">
						<For each={episodes()}>
							{(episode) => (
								<div
									class="flex gap-6 p-6 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
									onKeyPress={(e) => {
										if (e.key === " ") {
											handleEpisodeClick(episode);
										}
									}}
									onClick={() => handleEpisodeClick(episode)}
								>
									<img
										src={logo}
										alt={episode.title}
										class="w-32 h-32 object-cover rounded-lg"
									/>
									<div class="flex-1">
										<h2 class="text-2xl font-bold mb-2">{episode.title}</h2>
										<div
											class={`text-neutral-600 prose prose-neutral ${
												expandedEpisode() === episode.audioUrl
													? ""
													: "line-clamp-3"
											}`}
											innerHTML={episode.description}
										/>
										<p class="text-sm text-neutral-400 mt-2">{episode.date}</p>
										<Show when={currentPlaying() === episode.audioUrl}>
											<div class="mt-4">
												<audio
													src={episode.audioUrl}
													controls
													class="w-full"
													onEnded={() => {
														setCurrentPlaying(null);
														setExpandedEpisode(null);
													}}
												>
													<track kind="captions" />
												</audio>
											</div>
										</Show>
									</div>
								</div>
							)}
						</For>
					</div>

					<Show when={totalPages() > 1}>
						<div class="flex gap-2 mt-8">
							<button
								type="button"
								onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
								disabled={currentPage() === 1}
								class="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50"
							>
								הקודם
							</button>
							<span class="px-4 py-2">
								עמוד {currentPage()} מתוך {totalPages()}
							</span>
							<button
								type="button"
								onClick={handleNextPage}
								disabled={currentPage() === totalPages()}
								class="px-4 py-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 disabled:opacity-50"
							>
								הבא
							</button>
						</div>
					</Show>
				</Show>
			</Show>
		</div>
	);
}
