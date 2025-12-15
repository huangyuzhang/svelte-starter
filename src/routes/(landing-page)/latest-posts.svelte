<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import { getPostList } from '$lib/content';
	import PostCard from '$lib/components/collections/post-card.svelte';
	import PostListItem from '$lib/components/collections/post-list-item.svelte';

	const locale = getLocale();
	const content = {
		en: {
			title: 'Latest Posts',
			desc: 'Read the latest posts from the blog.'
		},
		zh: {
			title: '最新文章',
			desc: '阅读我们的最新文章。'
		}
	};

	const latestPosts = getPostList()
		.slice(0, 3) // 3 posts
		.map((post) => {
			return { ...post.metadata, slug: post.slug };
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
		<!-- <div class="grid grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3">
			{#each latestPosts as post}
				<PostCard {post} />
			{/each}
		</div> -->
		<div class="grid px-4 max-w-4xl">
			{#each latestPosts as post}
				<PostListItem {post} />
			{/each}
		</div>
		<div class="flex justify-center">
			<Button href="/posts" variant="outline">
				{m.read_more()}
			</Button>
		</div>
	</div>
</section>
