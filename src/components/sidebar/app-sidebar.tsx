"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { SideBarNav } from "./sidebar-nav";
import { sidebarConfig } from "@/config/sidebar.config";
import { ProjectSwitcher } from "./project-switcher";
import ThemeToggler from "../theme/toggler";
import { Separator } from "../ui/separator";
import { AppHeader } from "./app-header";
import SearchBar from "./search-bar";
import { usePathname } from "next/navigation";


export function AppSidebar() {
  const pathname = usePathname();
  const sidebarItem = pathname.includes("guide") ? sidebarConfig.guide : pathname.includes("ai-sdk") ? sidebarConfig.aiSdk : sidebarConfig.plura;

  return (
    <Sidebar>
      <SidebarHeader>
        {/* Plura Logo with Github link in an ellipsis */}
        <AppHeader/>
        <ProjectSwitcher
          options={sidebarConfig.projectOptions}
          defaultOption={sidebarConfig.projectOptions[0]}
        />
        <SearchBar />
      </SidebarHeader>
      <SidebarContent>
        <SideBarNav items={sidebarItem} />
      </SidebarContent>
     <SidebarFooter  >
     <Separator />
      <ThemeToggler />
     </SidebarFooter>
    </Sidebar>
  );
}
