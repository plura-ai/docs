import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarInput } from "@/components/ui/sidebar";
export default function Newsletter() {
  return (
    <Card className="shadow-none p-2">
        <CardHeader className="p-2">
          <CardTitle className="text-sm">Get quick updates!</CardTitle>
          <CardDescription>
            Opt-in to receive updates and news about the Plura.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2.5 p-2">
          <SidebarInput type="email" placeholder="Email" />
          <Button
            size="sm"
          >
            Subscribe
          </Button>
        </CardContent>
    </Card>
  );
}
