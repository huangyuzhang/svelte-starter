<script lang="ts">
	import Header from '$lib/components/layouts/header.svelte';
	import { Button } from '$lib/components/ui/button';
	import { site } from '$lib/config';
	import { getLocale } from '$lib/paraglide/runtime';
	import { IconArrowLeft } from '@tabler/icons-svelte';

	const locale = getLocale();

	const content = {
		en: {
			title: '404: Page Not Found',
			description: "Sorry, we couldn't find the page you're looking for.",
			btn_go_home: 'Go back home'
		},
		zh: {
			title: '404: 页面未找到',
			description: '抱歉，我们找不到您正在寻找的页面。',
			btn_go_home: '返回首页'
		}
	};
</script>

<svelte:head>
	<title>{content[locale].title} - {site.title}</title>
</svelte:head>

<Header />

<div class="flex h-[calc(100vh-150px)] flex-col items-center justify-center gap-2 text-center">
	<h1 class="text-4xl font-bold tracking-tighter sm:text-5xl">404</h1>
	<p
		class="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
	>
		{content[locale].description}
	</p>
	<div class="mt-4">
		<Button href="/" class="gap-2">
			<IconArrowLeft />
			{content[locale].btn_go_home}
		</Button>
	</div>
</div>
