"use client"
import { Ellipsis } from "lucide-react"
import Image  from 'next/image';
import { useState } from "react";
import { EllipsisLinks } from "./ellipsis-links";

export function AppHeader() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between p-2 border-solid border-b-[1px] border-sidebar-border">
      <div className="flex items-center gap-2">
        <Image src="/plura-logo.png" alt="plura-logo" className="invert dark:invert-0" width={ 32 } height={ 32 }/>
        <h3 className="font-bold text-xl tracking-wide">PLURA</h3>
      </div>
{/* flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground */}
      <div className="relative">
        <button className="hover:rounded-sm px-1 py-1 hover:bg-sidebar-hover" onClick={ () => setIsOpen(!isOpen) }>
          <Ellipsis className="hover:invert dark:invert-0"/>
        </button>

        <div className="absolute z-50 -left-24">
          { isOpen ? <EllipsisLinks /> : null }
        </div>
      </div>
    </div>
  )
}