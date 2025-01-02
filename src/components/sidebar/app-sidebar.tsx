"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { NavGuide } from "./nav-guide";
import { sidebarConfig } from "@/config/sidebar.config";
import { VersionSwitcher } from "./version-switcher";


export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <VersionSwitcher
          versions={sidebarConfig.versions}
          defaultVersion={sidebarConfig.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent>
      <NavGuide items={sidebarConfig.guide} />
      </SidebarContent>
    </Sidebar>
  )
}
