<script>
	import { site } from '$lib/config/index';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';
	import ContactForm from './contact-form.svelte';

	const locale = getLocale();

	const content = {
		en: {
			title: 'Contact Us',
			description: 'Please fill out the form to contact us.'
		},
		zh: {
			title: '联系我们',
			description: '请填写表单联系我们.'
		}
	};
</script>

<svelte:head>
	<title>{content[locale].title} - {site.title}</title>
</svelte:head>

<!-- Page Content -->
<ContactForm />
