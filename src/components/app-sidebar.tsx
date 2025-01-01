"use client"

import { Book, ChevronDown, FileText, GitFork, Home, ScrollText } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

const items = [
  {
    title: "Documentation",
    url: "/v1.0",
    icon: Book,
  },
  {
    title: "Installation",
    url: "/v1.0/installation",
    icon: FileText,
  },
  {
    title: "Components",
    url: "/v1.0/components",
    icon: Home,
  },
  {
    title: "License",
    url: "/v1.0/license",
    icon: ScrollText,
  },
  {
    title: "Contribute",
    url: "/v1.0/contribute",
    icon: GitFork,
  },
]

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarContent>
      <Collapsible defaultOpen className="group/collapsible">
        <SidebarGroup>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger>
            Plura
            <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={item.url === pathname}>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
          </CollapsibleContent>
        </SidebarGroup>
        </Collapsible>
      </SidebarContent>
    </Sidebar>
  )
}
