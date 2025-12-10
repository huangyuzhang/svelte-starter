import { IconBrandGithub, IconBrandInstagram, IconBrandX } from "@tabler/icons-svelte";

const site = {
    title: 'Svelte Starter',
    description: 'A starter template built with SvelteKit, Tailwind CSS and more',
    url: 'https://github.com/huangyuzhang/svelte-starter',
    author: 'Simon Huang',
}
const nav = {
    main: [
        {
            "name": "Home",
            "url": "/"
        },
        {
            "name": "Posts",
            "url": "/posts"
        },
        {
            "name": "Projects",
            "url": "/projects"
        },
        {
            "name": "About",
            "url": "/about"
        }
    ],
    footer: [
        {
            "icon": IconBrandGithub,
            "url": "https://github.com/huangyuzhang/svelte-starter"
        },
        {
            "icon": IconBrandX,
            "url": "#"
        },
        {
            "icon": IconBrandInstagram,
            "url": "#"
        }
    ]
}

export { site, nav };