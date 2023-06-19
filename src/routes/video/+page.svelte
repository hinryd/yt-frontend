<script lang="ts">
	export let data;
</script>

{#if data.video}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video class="w-full max-h-3xl" controls autoplay>
		{#each data.video.captions as caption}
			<track
				kind="captions"
				src={`/api/captions?id=${data.video.videoId}&label=${caption.label}`}
				srclang={caption.languageCode}
				label={caption.label}
			/>
		{/each}

		{#each data.video.formatStreams as stream}
			<source src={stream.url} type={stream.type} />
		{/each}

		Your browser does not support the video tag.
	</video>

	<h3 class="font-bold text-2xl my-2">{data.video.title}</h3>

	<div class="flex flex-col gap-4">
		{#each data.comment.comments as comment}
			<figure class="flex">
				<img
					src={comment.authorThumbnails[0].url}
					alt={comment.author}
					class="w-10 h-10 rounded-full mr-3"
				/>
				<figcaption class="w-full">
					<div class="flex justify-between">
						<p class="font-bold text-sm">{comment.author}</p>
						<p class="text-xs">{comment.published}</p>
					</div>
					<p>{comment.content}</p>
					<p>{comment.replies?.replyCount ?? ''}</p>
				</figcaption>
			</figure>
		{/each}
	</div>
{/if}
