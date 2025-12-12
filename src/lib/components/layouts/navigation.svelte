<script lang="ts">
	import { nav } from '$lib/config/index';
</script>

<nav
	class="relative z-30 flex flex-row-reverse justify-start w-full text-sm sm:justify-end text-neutral-500 dark:text-neutral-400 sm:flex-row"
>
	<div
		id="menu"
		class="flex flex-row items-center justify-end h-auto w-auto text-sm sm:text-sm sm:w-auto"
	>
		{#each nav.main as menu}
			<a
				href={menu.url}
				class="relative flex items-center justify-center px-3 py-2 font-medium tracking-wide text-center duration-200 ease-out sm:py-0 hover:text-neutral-900 dark:hover:text-white"
			>
				{menu.name}
			</a>
		{/each}
	</div>
</nav>
