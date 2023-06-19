<script lang="ts">
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind.css';
	import { darkMode } from '$lib/stores/darkMode';
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

	function toggleDarkMode() {
		if ($darkMode) {
			document.body.classList.remove('dark');
		} else {
			document.body.classList.add('dark');
		}
		darkMode.set(!$darkMode);
	}
</script>

<div class="dark:bg-slate-700 dark:text-white">
	<nav class="sticky top-0 h-14 px-5 flex justify-between items-center shadow-xl bg-gray-600">
		<a href="/">Invidious</a>

		<div class="flex">
			<input class="rounded-l h-9 px-2 border border-black" />
			<button class="rounded-r bg-indigo-700 h-9 w-9">
				<div class="i-mdi-search" />
			</button>
		</div>

		<button on:click={toggleDarkMode}>{$darkMode}</button>
	</nav>

	{#key $page.url}
		<main class="max-w-7xl mx-auto px-auto px-8 my-8" in:fade|local={{ duration: 500 }}>
			<slot />
		</main>
	{/key}
</div>
