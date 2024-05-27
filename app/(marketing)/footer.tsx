
import { Button } from "@/components/ui/button";
import {
  BookOpenIcon,
  PuzzlePieceIcon,
  TrophyIcon,
  PencilSquareIcon,
} from '@heroicons/react/24/outline'

export const Footer = () => {
  return (
    <div className="hidden h-20 w-full border-t-2 border-slate-200 p-2 lg:block">
      <div className="mx-auto flex h-full max-w-screen-lg items-center justify-evenly">
        <Button size="lg" variant="ghost" className="w-full cursor-default">
        <BookOpenIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></BookOpenIcon>
          Leitura
        </Button>
        <Button size="lg" variant="ghost" className="w-full cursor-default">
        <PencilSquareIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></PencilSquareIcon>
          Prática
        </Button>
        <Button size="lg" variant="ghost" className="w-full cursor-default">
        <PuzzlePieceIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></PuzzlePieceIcon>
          Diversão
        </Button>
        <Button size="lg" variant="ghost" className="w-full cursor-default">
        <TrophyIcon className="h-10 w-10 pr-2 flex-none text-rose-500" aria-hidden="true"></TrophyIcon>
          Competição
        </Button>
      </div>
    </div>
  );
};
