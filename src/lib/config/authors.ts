export const authors: Record<string, Author> = {
	simon: {
		name: 'Simon Huang',
		bio: 'Frontend Developer & UI/UX Enthusiast',
		avatar: 'https://github.com/huangyuzhang.png',
		github: 'https://github.com/huangyuzhang'
	}
};

export type Author = {
	name: string;
	bio?: string;
	avatar?: string;
	github?: string;
	twitter?: string;
};
