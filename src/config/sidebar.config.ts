import { FileText, GitFork, ScrollText } from "lucide-react";

export const sidebarConfig = {
  projectOptions: [
    {
      title: "Plura",
      description: "Boost support with an AI-driven assistant.",
      imageSrc: "/plura-logo.png",
      path: "/plura"
    },
    {
      title: "Guide",
      description: "Easily set up and configure Plura.",
      imageSrc: "/plura-logo.png",
      path: "/guide"
    },
    {
      title: "@plura-ai",
      description: "Seamlessly automate support on your platform.",
      imageSrc: "/plura-logo.png",
      path: "/ai-sdk"
    }
  ],
  guide: [
    { 
      title: "Introduction",
      url: "/guide",
      icon: FileText,
      isActive: true,
      items: [
        {
          title: "What is Plura?",
          url: "/guide/introduction/what-is-plura",
        },
        {
          title: "Why Plura?",
          url: "/guide/introduction/why-plura",
        },
        {
          title: "Features",
          url: "/guide/introduction/features",
        },
        {
          title: "Who can use Plura?",
          url: "/guide/introduction/who-can-use-plura",
        },
      ],
    },
    {
      title: "Getting Started",
      url: "/guide/getting-started",
      icon: FileText,
      items: [
        {
          title: "Installation",
          url: "/guide/getting-started/installation",

        },{
            title:"Add to existing repository",
            url:"/guide/getting-started/add-to-existing-repository"
        },{
            title:"Add to new repository",
            url:"/guide/getting-started/add-to-new-repository"
        }
      ],
    },
    // {
    //   title: "Installation",
    //   url: "/guide/installation",
    //   icon: Code,
    // },
    {
      title: "License",
      url: "/guide/license",
      icon: ScrollText,
    },
    {
      title: "Contribute",
      url: "/guide/contribute",
      icon: GitFork,
      items:[
        {
            title:"GitHub",
            url:"https://github.com/Plura-App/Plura",
        }
      ]
    },
  ],
  plura: [],
  aiSdk: [],
};
