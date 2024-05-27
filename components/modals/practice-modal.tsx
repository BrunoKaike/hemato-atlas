"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { usePracticeModal } from "@/store/use-practice-modal";

export const PracticeModal = () => {
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = usePracticeModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image
              src="/mascotdandocoracao.svg"
              alt="Mascot dando coração"
              height={130}
              width={130}
            />
          </div>

          <DialogTitle className="text-center text-2xl font-bold">
            Recapitulando
          </DialogTitle>

          <DialogDescription className="text-center text-base">
            Use as lições de prática para recuperar corações e pontos. Você não pode perder corações ou pontos nas lições de prática.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mb-4">
          <div className="flex w-full flex-col gap-y-4">
            <Button
              variant="danger"
              className="w-full"
              size="lg"
              onClick={close}
            >
              Entendi
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
