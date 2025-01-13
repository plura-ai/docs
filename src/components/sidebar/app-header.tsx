"use client"
import { Ellipsis, MessageCircleQuestion } from "lucide-react"
import Image  from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "../ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";


export function AppHeader() {

  return (
    <div className="flex items-center justify-between p-2 border-solid border-b-[1px] border-sidebar-border">
      <div className="flex items-center gap-2 select-none">
        <Image src="/plura-logo.png" alt="plura-logo" className="invert dark:invert-0" width={ 32 } height={ 32 }/>
        <h3 className="text-lg font-semibold">PLURA-AI</h3>
      </div>
      <div className="relative">
      <Popover>
      <PopoverTrigger>
          <Ellipsis className="size-5"/>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col w-60 items-start justify-center rounded-xl p-2">
          <Button variant={"ghost"} className="w-full justify-start">
          <GitHubLogoIcon /> GitHub
          </Button>

          <Button variant={"ghost"} className="w-full justify-start">
          <MessageCircleQuestion /> Support
          </Button>
          </PopoverContent>
          </Popover>
      </div>
    </div>
  )
}