<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { getLocale } from '$lib/paraglide/runtime';
	import { getProductsList } from '$lib/content';
	import ProductCard from '$lib/components/collections/product-card.svelte';

	const locale = getLocale();
	const content = {
		en: {
			title: 'Featured Products',
			desc: 'Check our featured products.',
			btn_check_all_products: 'Check all products'
		},
		zh: {
			title: '精选产品',
			desc: '查看我们的精选产品。',
			btn_check_all_products: '查看所有产品'
		}
	};

	const featuredProducts = getProductsList()
		.filter((product) => product.metadata.featured) // filter featured products
		.slice(0, 3) // 3 posts
		.map((product) => {
			return { ...product.metadata, slug: product.slug };
		});
</script>

<section id="latest-posts" class="bg-background scroll-m-15">
	<div class="mx-auto flex w-full flex-1 flex-col items-center justify-center gap-12">
		<div class="space-y-4 text-center">
			<h2 class="text-4xl font-bold capitalize tracking-tight">
				{content[locale].title}
			</h2>
			<p class="text-muted-foreground mx-auto max-w-2xl">
				{content[locale].desc}
			</p>
		</div>
		<div class="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
			{#each featuredProducts as product}
				<ProductCard {product} />
			{/each}
		</div>
		<div class="flex justify-center">
			<Button href="/products" variant="outline">
				{content[locale].btn_check_all_products}
			</Button>
		</div>
	</div>
</section>
