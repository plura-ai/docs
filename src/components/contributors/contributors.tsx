import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "../ui/button";
import { Github, GithubIcon, Users, X } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type Contributor = {
  login: string;
  avatar_url: string;
  id: string;
  type: string;
  contributions: number;
};

export async function ContributorsList({
  contributorUrl,
}: {
  contributorUrl: string;
}) {
  const response = await fetch(contributorUrl);
  const users: Contributor[] = await response.json();
  const contributors = users.filter(
    (contributor) =>
      contributor.type === "User" &&
      !contributor.login.toLowerCase().includes("bot")
  );

  return (
    <Card className="bg-transparent border-none shadow-none top-0 ">
        <CardTitle className="flex gap-1">
            <Users className="h-4 w-4 text-neutral-500" />
            <span className="text-xs text-neutral-500">Contributors</span>
        </CardTitle>
      <CardContent className="p-2 bg-neutral-900 rounded-lg mt-2 ">
        <div className="flex flex-wrap items-center gap-2">
          {contributors.map((contributor) => (
            <TooltipProvider key={contributor.id}>
              <Tooltip>
                <TooltipTrigger>
                  <Avatar className="h-10 w-10 transition-transform hover:scale-110">
                    <AvatarImage
                      src={contributor.avatar_url}
                      alt={contributor.login}
                    />
                    <AvatarFallback>
                      <Skeleton className="h-full w-full rounded-full" />
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent className="bg-transparent text-sm text-white">
                  <ContributorBox {...contributor} />
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

const ContributorBox = (Contributor: Contributor) => {
  return (
    <Card className="">
      <CardContent className="flex flex-col p-2">
        <div className="flex flex-row items-center justify-start gap-2">
          <div>
            <Avatar>
              <AvatarImage src={Contributor.avatar_url} />
              <AvatarFallback>
                <Skeleton className="h-24 w-24 rounded-full" />
              </AvatarFallback>
            </Avatar>
          </div>
          <span className="w-full flex-grow text-center ">{Contributor.login}</span>
          {Contributor.type === "User" && (
            <>
              <a href={`https://github.com/${Contributor.login}`}>
                <Button className="bg-neutral-800/60 w-7 h-8 hover:bg-neutral-700/30">
                  <FaGithub className="w-4 h-4 fill-white" />
                </Button>
              </a>
            </>
          )}
        </div>
        <span className="text-sm text-neutral-500 p-2">
          Total contributions{" "}
          <p className="text-green-500 inline-flex">
            {" "}+
            {Contributor.contributions}!
          </p>
        </span>
      </CardContent>
    </Card>
  );
};
