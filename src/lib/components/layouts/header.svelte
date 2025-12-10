<script lang="ts">
    import { nav } from "$lib/config";
	import { cn } from "$lib/utils";
    import ModeToggle from "$lib/components/mode-toggle.svelte";
    import Logo from "$lib/components/layouts/logo.svelte";
    
    let isScrolled = $state(false);
    const unScrolledContainerClasses = ["border-transparent"];
        const scrolledContainerClasses = [
        "border-neutral-300/50",
        "bg-white/80",
        "dark:border-neutral-600/40",
        "dark:bg-neutral-900/60",
        "backdrop-blur-2xl",
    ];

    const evaluateHeaderPosition = () => {
        isScrolled = window.scrollY > 16;
    };
    
    $effect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener("scroll", evaluateHeaderPosition);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener("scroll", evaluateHeaderPosition);
            }
        };
    });
</script>

<!-- a placeholder for reserving space for the header -->
<div class="w-full h-20 opacity-0 pointer-events-none"></div>

<header 
    id="header" 
    class="fixed top-0 z-50 w-full duration-300 ease-out"
    class:h-20={!isScrolled}
    class:h-14={isScrolled}
>
    <div
        class={cn(
            "flex items-center justify-between h-full max-w-5xl pl-6 pr-4 mx-auto border-b border-l-0 border-r-0 select-none lg:border-r lg:border-l lg:rounded-b-xl duration-300 ease-out",
            isScrolled ? scrolledContainerClasses.join(' ') : unScrolledContainerClasses.join(' ')
        )}
    >
        <Logo />

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
            
            <ModeToggle />
        </nav>
    </div>
</header>