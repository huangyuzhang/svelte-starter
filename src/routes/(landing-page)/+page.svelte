<script lang="ts">
	import Separator from '$lib/components/separator.svelte';
	import { site } from '$lib/config/index';
	import { getLocale } from '$lib/paraglide/runtime';
	import FeaturedProducts from './featured-products.svelte';
	import Hero from './hero.svelte';
	import LatestPosts from './latest-posts.svelte';

	const locale = getLocale();
	const content = {
		en: {
			'lead-featured-products': 'Our featured products',
			'lead-latest-posts': 'Our latest posts'
		},
		zh: {
			'lead-featured-products': '我们的精选产品',
			'lead-latest-posts': '我们的最新文章'
		}
	};
</script>

<svelte:head>
	<title>{site.title} - {site.description}</title>
</svelte:head>

<Hero />
<Separator id="lead-featured-products" text={content[locale]['lead-featured-products']} />
<FeaturedProducts />
<Separator id="lead-latest-posts" text={content[locale]['lead-latest-posts']} />
<LatestPosts />
