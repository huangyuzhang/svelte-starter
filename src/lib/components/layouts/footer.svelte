<script lang="ts">
	import { nav, site } from "$lib/config";
	import Logo from "./logo.svelte";
</script>

<section
    class="text-gray-700 bg-white border-t sm:mt-20 dark:bg-neutral-950 border-neutral-200 dark:border-neutral-800"
>
    <div
        class="container flex flex-col items-center py-8 mx-auto px-7 max-w-5xl sm:flex-row"
    >
        <Logo />
        <p
            class="mt-4 text-sm text-neutral-700 dark:text-neutral-100 sm:ml-4 sm:pl-4 sm:border-l sm:border-neutral-300 dark:sm:border-neutral-700 sm:mt-0"
        >
            © {new Date().getFullYear()} {site.title} All Rights Reserved.
        </p>
        <span
            class="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start"
        >
            {#each nav.footer as item}
                <a
                    href={item.url}
                    target="_blank"
                    class="text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                >
                    <svelte:component this={item.icon} />
                </a>
            {/each}
        </span>
    </div>
</section>