"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { useMounted } from "@/hooks/use-mounted";
import { ListTree, PencilLine } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Newsletter from "../sidebar/newsletter";

interface TocEntry {
  items?: TocEntry[];
  url: string;
  title: string;
}

interface TocProps {
  toc: TocEntry[];
  github?: string;
}

export function DashboardTableOfContents({ toc, github }: TocProps) {
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
  
  const [activeHeading, setActiveHeading] = React.useState<string>("");
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            setActiveHeading(id);
            // Update URL hash without scrolling
            window.history.replaceState(null, '', `#${id}`);
          }
        });
      },
      { 
        rootMargin: '-0% 0% -25% 0%',
        threshold: 1.0 
      }
    );

    itemIds?.forEach((id) => {
      if (!id) return;
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      itemIds?.forEach((id) => {
        if (!id) return;
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  const mounted = useMounted();

  const handleClick = React.useCallback((url: string) => {
    const id = url.slice(1);
    const element = document.getElementById(id);
    if (element) {
      // Prevent default scroll behavior
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      setActiveHeading(id);
    }
  }, []);

  return mounted ? (
    <div className="space-y-2">
      <div className="flex flex-row gap-2 text-muted-foreground">
        <ListTree className="size-4" />
        <p className="font-medium">On this page</p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 h-full w-0.5 bg-muted" />
        <Tree 
          tree={toc} 
          activeItem={activeHeading} 
          onItemClick={handleClick}
        />
      </div>

      <div className="flex flex-col border-t py-5 w-full gap-10">
        <Link href={github || "#"}>
          <Button size={"sm"} variant={"secondary"}>
            <span>Edit this page on GitHub</span>
            <PencilLine className="h-4 w-4" />
          </Button>
        </Link>

        <Newsletter/>
      </div>
    </div>
  ) : null;
}

interface TreeProps {
  tree: TocEntry[];
  level?: number;
  activeItem?: string;
  onItemClick: (url: string) => void;
}

function Tree({ tree, level = 1, activeItem, onItemClick }: TreeProps) {
  return tree.length && level < 5 ? (
    <ul className={cn("m-0 list-none text-sm", level !== 1 && "ml-4")}>
      {tree.map((item, index) => {
        const isActive = item.url === `#${activeItem}`;
        const hasChildren = item.items?.length ?? 0 > 0;
        const isParentActive = item.items?.some(
          (child) => `#${activeItem}` === child.url
        );
        return (
          <li key={index} className={cn("mt-0 relative")}>
            {level !== 1 && (
              <div 
                className={cn(
                  "absolute w-3 h-full border-l-2 border-b-2 rounded-bl-xl -left-4 top-0",
                  (isActive || isParentActive) ? "border-primary" : "border-muted"
                )}
                style={{
                  height: hasChildren ? '20%' : '50%'
                }}
              />
            )}
            <button
              onClick={() => onItemClick(item.url)}
              className={cn(
                "w-full text-left py-2 px-4 relative rounded hover:text-primary transition-all duration-300 ease-in-out",
                isActive ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              {isActive && (
                <span className="bg-primary rounded-xl h-[30px] w-0.5 absolute left-0 top-0" />
              )}
              {item.title}
            </button>
            {item.items?.length ? (
              <Tree 
                tree={item.items}
                level={level + 1}
                activeItem={activeItem}
                onItemClick={onItemClick}
              />
            ) : null}
          </li>
        );
      })}
    </ul>
  ) : null;
}

export default DashboardTableOfContents;