"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";

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
    <div className="space-y-2">
      <p className="font-medium">On this page</p>
      <div className="flex flex-col space-x-1 relative">
        <div className="w-1 flex h-full  bg-neutral-900 absolute"></div>
        <Tree tree={toc} activeItem={activeHeading} />
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
      { rootMargin: `0% 0% -40% 0%` }
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
  console.log
  return tree.length && level < 5 ? (
    <ul className={cn("m-0 list-none text-sm")}>
      {tree.map((item, index) => {
        return (
          <li key={index} className={cn("mt-0 ")}>
            <a
              href={item.url}
              className={cn(
                "inline-block no-underline py-2 p-2 relative rounded hover:text-neutral-200 transition-all duration-300 ease-in-out",
                item.url === `#${activeItem}`
                  ? "text-primary font-medium "
                  : "text-muted-foreground"
              )}
            >
              {item.url === `#${activeItem}` && (
                <span className="bg-neutral-400 rounded h-full w-1 ml-[-3px] absolute left-0 top-0"></span>
              )}
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
