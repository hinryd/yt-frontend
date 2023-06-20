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

<div class="transition-all dark:bg-slate-700 dark:text-white">
	<nav
		class="sticky top-0 z-50 h-14 px-5 flex justify-between items-center shadow-md bg-white dark:bg-slate-500"
	>
		<a class="font-bold" href="/">INVIDIOUS</a>

		<!-- <div class="flex">
			<input class="rounded-l h-9 px-2 border border-black" />
			<button class="rounded-r bg-indigo-700 h-9 w-9">
				<div class="i-mdi-search" />
			</button>
		</div> -->

		<button on:click={toggleDarkMode}>
			<div class="{$darkMode ? 'i-iconamoon-mode-dark' : 'i-iconamoon-mode-light'} h-7 w-7" />
		</button>
	</nav>

	{#key $page.url}
		<main class="max-w-7xl mx-auto px-auto px-8 my-8" in:fade|local={{ duration: 300 }}>
			<slot />
		</main>
	{/key}
</div>
