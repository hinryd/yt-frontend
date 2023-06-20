<script lang="ts">
	export let data;
</script>

{#await data.popular}
	<h2 class="text-2xl underline">Loading information...</h2>
{:then popularVideos}
	<div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-4">
		{#each popularVideos as vid}
			<a class="group flex flex-col" href={`video?id=${vid.videoId}`}>
				<img
					class="w-full h-48 object-cover rounded-xl group-hover:rounded-none transition-all"
					src={vid.videoThumbnails[3].url}
					alt={vid.title}
					loading="eager"
				/>

				<div>
					<p class="font-bold leading-snug group-hover:opacity-80">{vid.title}</p>
					<a class="text-xs hover:opacity-50" href={`https://www.youtube.com${vid.authorUrl}`}
						>{vid.author}</a
					>
				</div>
			</a>
		{/each}
	</div>
{/await}
