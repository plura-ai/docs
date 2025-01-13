"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { projectDetails } from "@/types"

export function ProjectSwitcher({
  options,
  defaultOption
}: {
  options: projectDetails[]
  defaultOption: projectDetails
}) {
  const [selectedOption, setSelectedOption] = React.useState<projectDetails>(defaultOption)
  const router = useRouter()

  function handleChange(title: string) {
    const option = options.find((option) => option.title === title)
    if (option) {
      setSelectedOption(option as projectDetails)
      router.push(option.path)
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              className="h-max rounded-xl bg-sidebar hover:bg-secondary"
            >
              <Image
                src={selectedOption.imageSrc}
                alt="logo"
                className="invert dark:invert-0 self-start"
                width={30}
                height={30}
              />
              <div className="flex flex-col gap-0.5 leading-none h-max">
                <span className="font-semibold">{selectedOption.title}</span>
                <span className="text-xs">{selectedOption.description}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] rounded-xl"
            align="start"
          >
            {options.map((option) => (
              <DropdownMenuItem
                key={option.title}
                onClick={() => handleChange(option.title)}
                className="rounded-xl"
              >
                <div className="flex justify-start items-center gap-2 cursor-pointer h-max">
                  <Image
                    src={option.imageSrc}
                    alt={option.title}
                    className="invert dark:invert-0 self-start"
                width={30}
                height={30}
                  />
                  <div className="flex flex-wrap flex-col justify-start">
                    <p className="text-sm font-semibold">{option.title}</p>
                    <p className="text-xs">{option.description}</p>
                  </div>
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
