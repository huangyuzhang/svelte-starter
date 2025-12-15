// get list of items for a collection
export function getList(allItemsEager: Record<string, any>, collection: string) {
	const items = Object.entries(allItemsEager)
		.filter(([path, module]) => {
			// check path starts with collection
			if (!path.startsWith(`/src/collections/${collection}/`)) {
				return false;
			}
			return !module.metadata.hide; // exclude hidden items
		})
		.map(([path, module]) => {
			const slug = path
				.split('/')
				.pop()
				?.replace(/\.(md|svx)$/, '');
			return { slug, metadata: module.metadata };
		})
		.sort((a, b) => {
			return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
		});

	return items;
}

const allPostsEager = import.meta.glob('/src/collections/posts/**/**/*.{md,svx}', { eager: true });
export function getPostList() {
	return getList(allPostsEager, 'posts');
}

const allProductsEager = import.meta.glob('/src/collections/products/**/**/*.{md,svx}', {
	eager: true
});
export function getProductsList() {
	return getList(allProductsEager, 'products');
}
