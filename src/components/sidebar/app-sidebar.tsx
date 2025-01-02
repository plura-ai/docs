"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavGuide } from "./nav-guide";
import { sidebarConfig } from "@/config/sidebar.config";
import { VersionSwitcher } from "./version-switcher";
import DialogDemo from "../searchbar/Searchbar";
import ThemeToggler from "../theme/toggler";


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <VersionSwitcher
          versions={sidebarConfig.versions}
          defaultVersion={sidebarConfig.versions[0]}
        />
        <DialogDemo />
      </SidebarHeader>
      <SidebarContent>
        <NavGuide items={sidebarConfig.guide} />
      </SidebarContent>
     <SidebarFooter className="border-t ">
      <ThemeToggler />
     </SidebarFooter>
    </Sidebar>
  );
}
