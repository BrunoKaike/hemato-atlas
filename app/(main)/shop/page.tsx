import { redirect } from "next/navigation";
import {
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'

import { FeedWrapper } from "@/components/feed-wrapper";
import { Quests } from "@/components/quests";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress, getUserSubscription } from "@/db/queries";

import { Items } from "./items";

const ShopPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />

        <Quests points={userProgress.points} />
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <ShoppingBagIcon className="h-20 w-20 pr-2 flex-none text-rose-500" aria-hidden="true"></ShoppingBagIcon>

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Loja
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Gaste seus pontos em coisas legais.
          </p>

          <Items
            hearts={userProgress.hearts}
            points={userProgress.points}
            hasActiveSubscription={isPro}
          />
        </div>
      </FeedWrapper>
    </div>
  );
};

export default ShopPage;
