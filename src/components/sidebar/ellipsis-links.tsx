import {
  Card,
  CardTitle,
} from "@/components/ui/card"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
export function EllipsisLinks() {
  return (
    <Card className="w-[220px] h-max p-2 bg-background border-border border-solid border-[1px] cursor-pointer">
      <a className="flex gap-2 p-1 items-center" href="https://github.com/plura-ai/docs" target="_blank">
        <GitHubLogoIcon />
        <CardTitle className="text-sm">Github</CardTitle>
      </a>
    </Card>
  )
}