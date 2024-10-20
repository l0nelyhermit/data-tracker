import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";
import {
  Radar,
  Hexagon,
  Folders,
  CreditCard,
  Settings,
  User,
} from "lucide-react";

const Sidebar = () => {
  return (
    <Command className="bg-secondary rounded-none">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Scan Data Results">
          <CommandItem>
            <Radar className="mr-2 h-4 w-4" />
            <Link href="/">Sonarqube</Link>
          </CommandItem>
          <CommandItem>
            <Hexagon className="mr-2 h-4 w-4" />
            <Link href="/">NexusIQ</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Quick Links">
          <CommandItem>Sonarqube UAT</CommandItem>
          <CommandItem>NexusIQ UAT</CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default Sidebar;
