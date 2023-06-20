<script lang="ts">
	export let data;
</script>

{#if data.video}
	<!-- svelte-ignore a11y-media-has-caption -->
	<video class="w-full max-h-3xl" poster={data.video.videoThumbnails[1].url} controls autoplay>
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

	<h3 class="font-bold text-2xl my-5">{data.video.title}</h3>
	<figure class="flex">
		<img
			src={data.video.authorThumbnails[0].url}
			alt={data.video.author}
			class="w-10 h-10 rounded-full mr-3"
		/>
		<figcaption class="w-full">
			<div class="flex justify-between">
				<p class="font-bold text-sm">{data.video.author}</p>
				<p class="text-xs">{data.video.publishedText}</p>
			</div>
			<div class="max-h-40 overflow-y-auto">{@html data.video.descriptionHtml}</div>
		</figcaption>
	</figure>

	<h3 class="font-bold text-2xl my-5">{data.comment.commentCount} comments</h3>
	<div class="flex flex-col gap-8">
		{#each data.comment.comments as comment}
			<figure class="flex">
				<img
					src={comment.authorThumbnails[0].url}
					alt={comment.author}
					class="w-10 h-10 rounded-full mr-3"
				/>
				<figcaption class="w-full">
					<div class="flex justify-between">
						<p
							class="font-bold text-sm {comment.author === data.video.author &&
								'rounded-full bg-slate-100 px-3'}"
						>
							{comment.author}
						</p>
						<p class="text-xs">{comment.publishedText}</p>
					</div>
					<p>{comment.content}</p>
					{#if comment.replies && comment.replies.replyCount > 0}
						<p class="rounded-full bg-slate-400 px-3 w-fit">
							{comment.replies.replyCount} replies
						</p>
					{/if}
				</figcaption>
			</figure>
		{/each}
	</div>
{/if}
