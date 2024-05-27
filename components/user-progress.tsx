import { InfinityIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  HeartIcon,
  BoltIcon,
} from '@heroicons/react/24/solid'

import { Button } from "@/components/ui/button";
import { courses } from "@/db/schema";

type UserProgressProps = {
  activeCourse: typeof courses.$inferSelect;
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const UserProgress = ({
  activeCourse,
  hearts,
  points,
  hasActiveSubscription,
}: UserProgressProps) => {
  return (
    <div className="flex w-full items-center justify-between gap-x-2">
      <Link href="/courses">
        <Button variant="ghost">
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className="rounded-md"
            width={32}
            height={32}
          />
        </Button>
      </Link>

      <Link href="/shop">
        <Button variant="ghost" className="text-slate-900">
         <BoltIcon className="h-8 w-8 flex-none text-rose-500 mr-2" aria-hidden="true" />
          {points}
        </Button>
      </Link>

      <Link href="/shop">
        <Button variant="ghost" className="text-slate-900">
          <HeartIcon className="h-8 w-8 flex-none text-rose-500 mr-2" aria-hidden="true" />
          {hasActiveSubscription ? (
            <InfinityIcon className="stroke-3 h-4 w-4" />
          ) : (
            hearts
          )}
        </Button>
      </Link>
    </div>
  );
};
