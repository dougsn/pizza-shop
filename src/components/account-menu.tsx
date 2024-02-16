import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator } from "./ui/dropdown-menu";

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>        
        <Button variant="outline" className="flex select-none items-center gap-2">
          PizzaShop
          <ChevronDown className="h-4 2-4"/>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex flex-col">
          <span>Douglas Nascimento</span>
          <span className="text-xs font-normal text-muted-foreground">
            douglas@gmail.com
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
        <span></span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
