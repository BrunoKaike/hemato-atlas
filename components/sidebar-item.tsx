"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TrophyIcon,
  ArrowUturnLeftIcon,
  PencilSquareIcon,
  BoltIcon,
  ShoppingBagIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

import { Button } from "@/components/ui/button";

type SidebarItemProps = {
  label: string;
  iconSrc: string;
  href: string;
};

const getIconByLabel = (label: string) => {
  switch (label) {
    case 'Voltar':
      return <ArrowUturnLeftIcon className="h-8 w-8 flex-none text-rose-500 mr-3" aria-hidden="true" />;
    case 'Exercícios':
      return <PencilSquareIcon className="h-8 w-8 flex-none text-rose-500 mr-3" aria-hidden="true" />;
    case 'Ranking':
      return <TrophyIcon className="h-8 w-8 flex-none text-rose-500 mr-3" aria-hidden="true" />;
    case 'Missões':
      return <BoltIcon className="h-8 w-8 flex-none text-rose-500 mr-3" aria-hidden="true" />;
    case 'Loja':
      return <ShoppingBagIcon className="h-8 w-8 flex-none text-rose-500 mr-3" aria-hidden="true" />;
    case 'Nos Avalie':
      return <StarIcon className="h-8 w-8 flex-none text-rose-500 mr-3" aria-hidden="true" />;
    default:
      return null; // Retorne null ou um ícone padrão caso nenhum rótulo corresponda
  }
};

export const SidebarItem = ({ label, href }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Button
      variant={isActive ? "sidebarOutline" : "sidebar"}
      className="h-[52px] w-full justify-start"
      asChild
    >
      <Link href={href}>
        {getIconByLabel(label)}
        {label}
      </Link>
    </Button>
  );
};

