"use client";

import {
  ArrowUpRight,
  File,
  Files,
  HomeIcon,
  Search,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
      variant={"outline"}
      className="rounded-xl"
       onClick={() => setOpen(true)}
      >
        <span className="flex grow items-center">
          <Search
            className="-ms-1 me-3 text-muted-foreground/80"
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span className="font-normal text-muted-foreground/70">Search</span>
        </span>
        <kbd className="-me-0 ms-10 inline-flex h-8 max-h-full items-center rounded border border-border bg-background px-1 font-[inherit] text-[0.725rem] font-medium text-muted-foreground/70">
          ⌘K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Quick start">
            <CommandItem>
              <HomeIcon
                size={16}
                strokeWidth={2}
                className=""
                aria-hidden="true"
              />
              <span>Home</span>
              {/* <CommandShortcut className="justify-center">⌘N</CommandShortcut> */}
            </CommandItem>
            <CommandItem>
              <Files
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Docs</span>
              {/* <CommandShortcut className="justify-center">⌘I</CommandShortcut> */}
            </CommandItem>
            <CommandItem>
              <File
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Blog</span>
              <CommandShortcut className="justify-center">⌘B</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Navigation">
            <CommandItem>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to dashboard</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to apps</span>
            </CommandItem>
            <CommandItem>
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Go to Github</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
