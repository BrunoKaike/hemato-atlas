import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { QUESTS } from "@/constants";

import {
  BoltIcon,
} from '@heroicons/react/24/outline'

type QuestsProps = { points: number };

export const Quests = ({ points }: QuestsProps) => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4">
      <div className="flex w-full items-center justify-between space-y-2">
        <h3 className="text-lg font-bold">Missões</h3>

        <Link href="/quests">
          <Button size="sm" variant="dangerOutline">
            Ver todas
          </Button>
        </Link>
      </div>

      <ul className="w-full space-y-4">
        {QUESTS.map((quest) => {
          const progress = (points / quest.value) * 100;

          return (
            <div
              className="flex w-full items-center gap-x-3 pb-4"
              key={quest.title}
            >
              <BoltIcon className="h-10 w-10 pr-2 flex-none text-rose-300" aria-hidden="true"></BoltIcon>

              <div className="flex w-full flex-col gap-y-2">
                <p className="text-sm font-bold text-neutral-700">
                  {quest.title}
                </p>

                <Progress value={progress} className="h-2" />
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
