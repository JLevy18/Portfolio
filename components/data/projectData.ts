interface StackIcon {
    src: string;
    alt: string;
}

interface ProjectVersion {
    version: string;
    stackIcons: StackIcon[];
    thumbnailSrc?: string;
    viewLink?: string;
    sourceLink?: string;
}

interface Project {
    id: string;
    title: string;
    description: string;
    versions: ProjectVersion[];
}

const projectsData: Project[] = [
    {
        id: 'pine',
        title: 'Pine',
        description: "Pine is a desktop overlay that allows users to draw on their screen. It was inspired by the annotation feature in Zoom and was built to be used primarily as a presentation tool.",
        versions: [
            {
                version: '1',
                stackIcons: [
                    { src: '/assets/stack/electron.svg', alt: 'ElectronJS' },
                    { src: '/assets/stack/tailwind.svg', alt: 'TailwindCSS' },
                    { src: '/assets/stack/git.svg', alt: 'Git' },
                    { src: '/assets/stack/react.svg', alt: 'React' },
                    { src: '/assets/stack/html5.svg', alt: 'HTML5' },
                    { src: '/assets/stack/css3.svg', alt: 'CSS3' },
                    { src: '/assets/stack/typescript.svg', alt: 'TypeScript' },
                ],
                thumbnailSrc: '/assets/thumbnails/Pine.png',
                viewLink: 'https://github.com/JLevy18/pine/releases/tag/v1.1.1',
                sourceLink: 'https://github.com/JLevy18/pine',
            }
        ]
    },
    {
        id: 'goblinsplunder',
        title: 'GoblinsPlunder',
        description: "GoblinsPlunder is a Minecraft Spigot plugin that I developed for a public server. It allows players to each have unique loot inside chests among other features.",
        versions: [
            {
                version: '1',
                stackIcons: [
                    { src: '/assets/stack/java.svg', alt: 'Java' },
                    { src: '/assets/stack/spigot.png', alt: 'Spigot/Bukkit' },
                    { src: '/assets/stack/minecraft.svg', alt: 'Minecraft' },
                    { src: '/assets/stack/sql.svg', alt: 'MySQL' },
                    { src: '/assets/stack/git.svg', alt: 'Git' },
                ],
                thumbnailSrc: '/assets/thumbnails/GoblinsPlunder.png',
                viewLink: '',
                sourceLink: 'https://github.com/JLevy18/goblins-plunder',
            }
        ]
    },
    {
        id: 'portfolio',
        title: 'Portfolio',
        description: "My portfolio showcases my skills and projects while also hosting a blog for my viewers. It provides a comprehensive view of my expertise and engages my community with valuable content.",
        versions: [
            {
                version: '1',
                stackIcons: [
                    { src: '/assets/stack/netlify.svg', alt: 'Netlify' },
                    { src: '/assets/stack/next.svg', alt: 'NextJS' },
                    { src: '/assets/stack/js.svg', alt: 'JavaScript' },
                    { src: '/assets/stack/git.svg', alt: 'Git' },
                    { src: '/assets/stack/html5.svg', alt: 'HTML5' },
                    { src: '/assets/stack/css3.svg', alt: 'CSS3' },
                    { src: '/assets/stack/tailwind.svg', alt: 'TailwindCSS' },
                ],
                thumbnailSrc: '/assets/thumbnails/Portfolio.png',
                viewLink: 'https://levthedev-portfolio-old.netlify.app/',
                sourceLink: 'https://github.com/JLevy18/portfolio-old',
            },
            {
                version: '2',
                stackIcons: [
                    { src: '/assets/stack/netlify.svg', alt: 'Netlify' },
                    { src: '/assets/stack/next.svg', alt: 'NextJS' },
                    { src: '/assets/stack/typescript.svg', alt: 'TypeScript' },
                    { src: '/assets/stack/git.svg', alt: 'Git' },
                    { src: '/assets/stack/html5.svg', alt: 'HTML5' },
                    { src: '/assets/stack/css3.svg', alt: 'CSS3' },
                    { src: '/assets/stack/tailwind.svg', alt: 'TailwindCSS' },
                ],
                thumbnailSrc: '/assets/thumbnails/Portfolio.png',
                viewLink: '',
                sourceLink: 'https://github.com/JLevy18/portfolio',
            }
        ]
    },
    {
        id: 'budgetbites',
        title: 'BudgetBites',
        description: "BudgetBites is a meal planning and grocery list application. It aims to help users save time, money, and reduce food waste, by providing them with meal plans and grocery lists based on their budget and their existing pantry inventory.",
        versions: [
            {
                version: '1',
                stackIcons: [
                    { src: '/assets/stack/git.svg', alt: 'Git' },
                    { src: '/assets/stack/spring.svg', alt: 'Spring' },
                ],
                thumbnailSrc: '/assets/thumbnails/BudgetBites.png',
                viewLink: 'https://google.com',
                sourceLink: '',
            }
        ]
    },
];

export default projectsData;
