import { Code, FileText, GitFork, ScrollText } from "lucide-react";

export const sidebarConfig = {
    versions: ["1.0.1"],
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

        },
        {
            title: "Installation",
            url: "/guide/installation",
        icon: Code,
        },
        {
        title: "License",
        url: "/guide/license",
        icon: ScrollText,
        },
        {
        title: "Contribute",
        url: "/guide/contribute",
        icon: GitFork,
        },
    ]
}