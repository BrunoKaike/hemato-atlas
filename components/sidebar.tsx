import { ClerkLoading, ClerkLoaded, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import { SidebarItem } from "./sidebar-item";

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <div
      className={cn(
        "left-0 top-0 flex h-full flex-col border-r-2 px-4 lg:fixed lg:w-[256px]",
        className
      )}
    >
      <Link href="/">
        <div className="flex items-center gap-x-1 pb-7 pl-4 pt-8">
          <Image src="/hematologo.png" alt="Mascot" height={40} width={110} />

          <h1 className="text-2xl font-thin tracking-wide text-rose-500">
            |
          </h1>
          <img className="h-6 w-auto" src="ufrn-sem-legenda.svg" alt="" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-y-2 ">
        <SidebarItem label="Voltar" href="/" iconSrc="/book.png" />
        <SidebarItem label="Exercícios" href="/learn" iconSrc="/online-test.png" />        
        <SidebarItem
          label="Ranking"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem label="Missões" href="/quests" iconSrc="/quests.svg" />
        <SidebarItem label="Loja" href="/shop" iconSrc="/quests.svg" />
        <SidebarItem label="Nos Avalie" href="/form" iconSrc="/book.png" />
      </div>

      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
        </ClerkLoading>

        <ClerkLoaded>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: { userButtonPopoverCard: { pointerEvents: "initial" } },
            }}
          />
        </ClerkLoaded>
      </div>
    </div>
  );
};
