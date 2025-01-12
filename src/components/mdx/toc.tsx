"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import Newsletter from "../sidebar/newsletter";

interface TocEntry {
  items?: TocEntry[];
  url: string;
  title: string;
}

interface TocProps {
  toc: TocEntry[];
}

export function DashboardTableOfContents({ toc }: TocProps) {
  const itemIds = React.useMemo(
    () =>
      toc
        ? toc
            .flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
            .flat()
            .filter(Boolean)
            .map((id) => id?.split("#")[1])
        : [],
    [toc]
  );
  const activeHeading = useActiveItem(itemIds);
  const mounted = useMounted();

  return mounted ? (
    <div className="h-[calc(100vh-3.5rem)] flex flex-col justify-between pb-10">
      {/* Added a wrapper div with overflow styling */}
      <div className="space-y-2 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        <p className="font-medium sticky top-0 bg-background pt-2 pb-2">On this page</p>
        <div className="relative h-fit">
          <span className= "w-1 h-full bg-neutral-900 absolute -z-10"></span>
        
          <Tree tree={toc} activeItem={activeHeading} />
        </div>
      </div>

      {/* Newsletter component remains at bottom */}
      <div className="mt-4">
        <Newsletter />
      </div>
    </div>
  ) : null;
}

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -60% 0%` }
    );

    itemIds?.forEach((id) => {
      if (!id) {
        return;
      }

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) {
          return;
        }

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

interface TreeProps {
  tree: TocEntry[];
  level?: number;
  activeItem?: string | null;
}

function Tree({ tree, level = 1, activeItem }: TreeProps) {
  return tree.length && level < 3 ? (
    <ul className={cn("m-0 list-none text-sm", { "pl-4": level !== 1 })}>
      {tree.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 pt-2")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline px-1 py-0.5 rounded",
                item.url === `#${activeItem}`
                  ? "text-primary font-medium bg-secondary"
                  : "text-muted-foreground"
              )}
            >
              {item.title}
            </a>
            {item.items?.length ? (
              <Tree
                tree={item.items}
                level={level + 1}
                activeItem={activeItem}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}