<script lang="ts">
	import { IconArrowDown } from '@tabler/icons-svelte';

	let { id, text }: { id?: string; text: string } = $props();
</script>

<div class="relative my-16 sm:my-32" {id}>
	<div class="relative w-full pl-5 overflow-x-hidden md:pl-0">
		<div
			class="absolute w-full h-px bg-linear-to-r from-transparent to-white md:from-white dark:from-transparent dark:to-neutral-950 md:dark:from-neutral-950 md:via-transparent md:dark:via-transparent md:to-white md:dark:to-neutral-950"
		></div>
		<div
			class="w-full h-px border-t border-dashed border-neutral-300 dark:border-neutral-600"
		></div>
	</div>
	<div
		class="absolute flex items-center justify-center w-auto h-auto px-3 py-1.5 uppercase tracking-widest space-x-1 text-xs md:-translate-x-1/2 -translate-y-1/2 border rounded-full bg-white dark:bg-neutral-900 text-neutral-400 left-0 md:ml-0 ml-5 md:left-1/2 border-neutral-100 dark:border-neutral-800 shadow-sm"
	>
		<p class="leading-none">{text}</p>
		<div
			class="flex items-center justify-center w-5 h-5 translate-x-1 border rounded-full border-neutral-100 dark:border-neutral-800"
		>
			<IconArrowDown class="size-3 animate-bounce" stroke="1" />
		</div>
	</div>
</div>
