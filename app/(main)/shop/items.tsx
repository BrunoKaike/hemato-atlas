"use client";

import { useTransition } from "react";

import {
  HeartIcon,
  BoltIcon,
} from '@heroicons/react/24/solid'

import {
  SparklesIcon
} from '@heroicons/react/24/outline'

import { toast } from "sonner";

import { refillHearts } from "@/actions/user-progress";
import { createStripeUrl } from "@/actions/user-subscription";
import { Button } from "@/components/ui/button";
import { MAX_HEARTS, POINTS_TO_REFILL } from "@/constants";

type ItemsProps = {
  hearts: number;
  points: number;
  hasActiveSubscription: boolean;
};

export const Items = ({
  hearts,
  points,
  hasActiveSubscription,
}: ItemsProps) => {
  const [pending, startTransition] = useTransition();

  const onRefillHearts = () => {
    if (pending || hearts === MAX_HEARTS || points < POINTS_TO_REFILL) return;

    startTransition(() => {
      refillHearts().catch(() => toast.error("Something went wrong."));
    });
  };

  const onUpgrade = () => {
    toast.loading("Redirecting to checkout...");
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if (response.data) window.location.href = response.data;
        })
        .catch(() => toast.error("Something went wrong."));
    });
  };

  return (
    <ul className="w-full">
      <div className="flex w-full items-center gap-x-4 border-t-2 p-4">
      <HeartIcon className="h-10 w-10 flex-none text-rose-500 mr-2" aria-hidden="true" />

        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Recarregue corações
          </p>
        </div>

        <Button
          onClick={onRefillHearts}
          disabled={
            pending || hearts >= MAX_HEARTS || points < POINTS_TO_REFILL
          }
          aria-disabled={
            pending || hearts >= MAX_HEARTS || points < POINTS_TO_REFILL
          }
        >
          {hearts >= MAX_HEARTS ? (
            "Máximo"
          ) : (
            <div className="flex items-center">
              <BoltIcon className="h-4 w-4 flex-none text-rose-500 mr-2" aria-hidden="true" />

              <p>{POINTS_TO_REFILL}</p>
            </div>
          )}
        </Button>
      </div>

      <div className="flex w-full items-center gap-x-4 border-t-2 p-4 pt-8">
        <HeartIcon className="h-10 w-10 flex-none text-rose-500" aria-hidden="true" />
        <SparklesIcon className="h-10 w-10 flex-none text-rose-500" aria-hidden="true" />

        <div className="flex-1">
          <p className="text-base font-bold text-neutral-700 lg:text-xl">
            Corações ilimitados
          </p>
        </div>

        <Button onClick={onUpgrade} disabled={true} aria-disabled={true}>
          {hasActiveSubscription ? "settings" : "upgrade"}
        </Button>
      </div>
    </ul>
  );
};
