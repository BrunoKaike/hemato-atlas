import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import removeAccents from 'remove-accents';

interface ThemeCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ThemeCard = ({ title, description, imageSrc }: ThemeCardProps) => {
  return (
    <div className="flex flex-wrap gap-2 px-2 h-full min-h-[317px] min-w-[300px] cursor-pointer flex-col items-center justify-between rounded-xl border-2 border-b-[4px] p-3 pb-6 hover:bg-black/5 active:border-b-2">
      <Image
        src={imageSrc}
        alt={title}
        height={70}
        width={93.33}
        className="rounded-lg object-cover drop-shadow-md"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2 text-center">{title}</h2>
        <p className="text-gray-600 text-center pb-6">{description}</p>

        <Button size="lg" variant="dangerLine" className="w-full" asChild>
          <Link href={`/atlas/conteudos/${encodeURIComponent(removeAccents(title.toLowerCase()))}`}>Explorar</Link>
        </Button>
      </div>
    </div>
  );
};

export default ThemeCard;
