<script lang="ts">
	import { SquareLines } from "./background/square-lines";
	import Header from "./header.svelte";
	import Footer from "./footer.svelte";
    let { children } = $props();
</script>

<SquareLines class=""/>
<Header />
<div class="max-w-5xl min-h-screen mx-auto">
    {@render children?.()}
</div>
<Footer />
