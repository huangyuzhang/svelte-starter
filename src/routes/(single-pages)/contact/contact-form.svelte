<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { Label } from '$lib/components/ui/label';
	import { Textarea } from '$lib/components/ui/textarea';
	import { getLocale } from '$lib/paraglide/runtime';
	import { IconInfoCircle } from '@tabler/icons-svelte';
	const locale = getLocale();

	const content = {
		en: {
			title: 'Contact Us',
			description: 'Please fill out the form below to contact us.',
			form: {
				basic_information: 'Basic Information',
				contact_name: 'Contact Name',
				organization_name: 'Organization',
				message: 'Message',
				save_as_draft: 'Save as Draft',
				send: 'Send'
			}
		},
		zh: {
			title: '联系我们',
			description: '请填写下面的表单，我们将会尽快回复您。',
			form: {
				basic_information: '基本信息',
				contact_name: '称呼',
				organization_name: '组织',
				message: '消息',
				save_as_draft: '保存为草稿',
				send: '发送'
			}
		}
	};
</script>

<div class="not-prose mx-auto max-w-[530px] p-8">
	<div class="mb-8 text-center">
		<h1 class="mb-2 font-semibold text-3xl tracking-tight">{content[locale].title}</h1>
		<p class="text-balance text-muted-foreground">
			{content[locale].description}
		</p>
	</div>

	<form class="space-y-8">
		<div class="space-y-4">
			<h2 class="flex items-center gap-2 font-semibold text-xl">
				<IconInfoCircle class="size-5" />
				{content[locale].form.basic_information}
			</h2>
			<div class="grid gap-4 md:grid-cols-2">
				<div class="space-y-2">
					<Label for="contact_name">{content[locale].form.contact_name}</Label>
					<Input id="contact_name" placeholder={content[locale].form.contact_name} required />
				</div>
				<div class="space-y-2">
					<Label for="organizer">{content[locale].form.organization_name}</Label>
					<Input id="organization_name" placeholder={content[locale].form.organization_name} />
				</div>
			</div>
			<div class="space-y-2">
				<Label for="message">{content[locale].form.message}</Label>
				<Textarea id="message" placeholder={content[locale].form.message} rows={5} />
			</div>
		</div>
		<div class="flex justify-end space-x-4">
			<Button type="button" variant="outline">{content[locale].form.save_as_draft}</Button>
			<Button type="submit">{content[locale].form.send}</Button>
		</div>
	</form>
</div>
