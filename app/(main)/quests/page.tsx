import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { Promo } from "@/components/promo";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { Progress } from "@/components/ui/progress";
import { UserProgress } from "@/components/user-progress";
import { ACHIEVEMENTS, QUESTS } from "@/constants";
import { getUserProgress, getUserSubscription} from "@/db/queries";
import { Separator } from "@/components/ui/separator";

import {
  BoltIcon as OutlineBoltIcon,
} from '@heroicons/react/24/outline'

import {
  BoltIcon as SolidBoltIcon,
} from '@heroicons/react/24/solid'
import { TrophyIcon } from "lucide-react";

const QuestsPage = async () => {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ]);

  /*const achievementCompletionCriteria = {
    "Célula Corada": (progress) => (userProgressCourse ? userProgressCourse. >= 5 : false),
    "Analisador de Hemogramas": (progress) =>
      userProgressCourse
        ? userProgressCourse.filter((item) => [800, 801, 802].includes(item.challengeId)).length === 3
        : false,
    // Adicione mais conquistas e critérios de conclusão conforme necessário
  };*/

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
        {!isPro && <Promo />}
      </StickyWrapper>

      <FeedWrapper>
        <div className="flex w-full flex-col items-center">
          <OutlineBoltIcon className="h-20 w-20 flex-none text-rose-500" aria-hidden="true" />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Missões
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Complete missões ganhando pontos.
          </p>

          <ul className="w-full">
            {QUESTS.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100;

              return (
                <div
                  className="flex w-full items-center gap-x-4 border-t-2 p-4"
                  key={quest.title}
                >
                  <SolidBoltIcon className="h-8 w-8 flex-none text-rose-300 mr-3" aria-hidden="true" />

                  <div className="flex w-full flex-col gap-y-2">
                    <p className="text-xl font-bold text-neutral-700">
                      {quest.title}
                    </p>

                    <Progress value={progress} className="h-3" />
                  </div>
                </div>
              );
            })}
          </ul>

          <Separator className="mb-8 mt-8 h-0.5 rounded-full" />

          <TrophyIcon className="h-20 w-20 flex-none text-rose-500 mt-4" aria-hidden="true" />

          <h1 className="my-6 text-center text-2xl font-bold text-neutral-800">
            Conquistas
          </h1>
          <p className="mb-6 text-center text-lg text-muted-foreground">
            Explore e conquiste: desbloqueie suas conquistas agora!(feature em desenvolvimento)
          </p>
          
          <ul className="w-full">
          {ACHIEVEMENTS.map((achievement) => {
            const progress = (userProgress.points / achievement.value) * 100;
            const isCompleted = progress >= 100;

            return (
              <div
                className="flex w-full items-center gap-x-4 border-t-2 p-4"
                key={achievement.title}
              >
                {/* Condicional para exibir a imagem correspondente */}
                <Image
                  src={isCompleted ? achievement.completeImage : achievement.blockedImage}
                  alt={achievement.title}
                  height={100}
                  width={100}
                  className="block ml-4 lg:w-[130px] lg:h-[130px] mr-3"
                />

                <div className="flex w-full flex-col gap-y-2">
                  <p className="text-xl font-bold text-neutral-700">
                    {achievement.title}
                  </p>
                  <Progress value={progress} className="h-3" />
                  <p className="text-base font-thin text-neutral-400">
                    {achievement.quest}
                  </p>
                  {isCompleted && ( // Condicional para exibir a descrição apenas quando o achievement estiver completo
                    <p className="text-base font-thin text-neutral-500">
                      {achievement.description}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </ul>



        </div>
      </FeedWrapper>
    </div>
  );
};

export default QuestsPage;
