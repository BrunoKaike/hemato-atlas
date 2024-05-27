"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useExitModal } from "@/store/use-exit-modal";

export const ExitModal = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const { isOpen, close } = useExitModal();

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="mb-5 flex w-full items-center justify-center">
            <Image
              src="/mascot sad.svg"
              alt="Mascot Sad"
              height={130}
              width={130}
            />
          </div>

          <DialogTitle className="text-center text-2xl font-bold">
            Espere, não vá!
          </DialogTitle>

          <DialogDescription className="text-center text-base">
            Você está prestes a sair da lição. Tem certeza?
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
              Continuar aprendendo
            </Button>

            <Button
              variant="dangerOutline"
              className="w-full"
              size="lg"
              onClick={() => {
                close();
                router.push("/learn");
              }}
            >
              Finalizar tarefa
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
