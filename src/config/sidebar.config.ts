import { FileText, GitFork, MessageCircleQuestion, ScrollText } from "lucide-react";

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
          url: "/guide/introduction/plura",
        },
        {
          title: "What is chatbot SDK?",
          url: "/guide/introduction/ai-sdk/chatbot",
        },
        {
          title: "What is agents SDK?",
          url: "/guide/introduction/ai-sdk/agents",
        }
      ],
    },
    {
      title: "Contribute",
      url: "/guide/contribute",
      icon: GitFork,
      isActive: true,
      items:[
        {
          title: "Plura",
          url: "/guide/contribute/plura",

        },
        {
            title:"Chatbot SDK",
            url:"/guide/contribute/ai-sdk/chatbot"
        },
        {
            title:"Agents SDK",
            url:"/guide/contribute/ai-sdk/agents"
        },
      ]
    },
    {
      title: "License",
      url: "/guide/license",
      icon: ScrollText,
      isActive: false,
      items: [
        {
          title: "Plura",
          url: "/guide/license/plura",

        },
        {
            title:"Chatbot SDK",
            url:"/guide/license/ai-sdk/chatbot"
        },
        {
            title:"Agents SDK",
            url:"/guide/license/ai-sdk/agents"
        },
      ],
    },
    {
      title: "Support",
      url: "/guide/support",
      icon: MessageCircleQuestion,
      isActive: false,
      items: [
        {
          title: "Discord Community",
          url: "https://l.devwtf.in/plura-dc",

        },
        {
            title:"Github Issues",
            url:"https://github.com/plura-ai"
        }
      ],
    },
  ],
  plura: [],
  aiSdk: [],
};
