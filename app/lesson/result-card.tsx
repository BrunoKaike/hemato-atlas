import { HeartIcon, BoltIcon } from '@heroicons/react/24/solid';
import { cn } from "@/lib/utils";

type ResultCardProps = {
  value: number;
  variant: "points" | "hearts";
};

export const ResultCard = ({ value, variant }: ResultCardProps) => {
  const icon = variant === "points" ? <BoltIcon className="h-6 w-6" /> : <HeartIcon className="h-6 w-6" />;

  return (
    <div
      className={cn(
        "w-full rounded-2xl border-2",
        variant === "points" && "border-rose-400 bg-rose-400",
        variant === "hearts" && "border-rose-500 bg-rose-500"
      )}
    >
      <div
        className={cn(
          "rounded-t-xl p-1.5 text-center text-xs font-bold uppercase text-white",
          variant === "points" && "bg-rose-400",
          variant === "hearts" && "bg-rose-500"
        )}
      >
        {variant === "hearts" ? "Corações restantes" : "XP Ganhos"}
      </div>

      <div
        className={cn(
          "flex items-center justify-center rounded-2xl bg-white p-6 text-lg font-bold",
          variant === "points" && "text-rose-400",
          variant === "hearts" && "text-rose-500"
        )}
      >
        {icon}
        {value === Infinity ? (
          <span className="text-xl">&#x221e;</span>
        ) : (
          value
        )}
      </div>
    </div>
  );
};
