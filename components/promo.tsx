import Link from "next/link";

import {
  SparklesIcon,
} from '@heroicons/react/24/outline'

import { Button } from "@/components/ui/button";

export const Promo = () => {
  return (
    <div className="space-y-4 rounded-xl border-2 p-4">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <SparklesIcon className="h-8 w-8 flex-none text-rose-500" aria-hidden="true" />

          <h3 className="text-lg font-bold">Se torne Pro</h3>
        </div>

        <p className="text-muted-foreground">Tenha corações ilimitados!</p>
      </div>

      <Button variant="dangerLine" className="w-full" size="lg" asChild>
        <Link href="/shop">Se torne Pro agora</Link>
      </Button>
    </div>
  );
};
