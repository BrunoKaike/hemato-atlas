import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function MarketingPage() {
  return (
    <div className="mx-auto flex w-full flex-1 flex-col items-center justify-center gap-2 p-4 lg:flex-row">
      <div className="relative mb-8 h-[300px] w-[300px] lg:mb-0 lg:h-[530px] lg:w-[530px] lg:mr-10">
        <Image src="/banneratlas.png" alt="Hero" fill />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="max-w-[480px] text-center text-xl font-bold dark:text-neutral-200 text-neutral-600 lg:text-3xl">
          Aprenda, pratique e domine a área de Hematologia.
        </h1>

        <div className="flex w-full max-w-[330px] flex-col items-center gap-y-3">
          <ClerkLoading>
            <Loader className="h-5 w-5 animate-spin text-muted-foreground" />
          </ClerkLoading>

          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="danger" className="w-full">
                  Comece agora
                </Button>
              </SignUpButton>

              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="ghost" className="w-full">
                  Eu já tenho uma conta
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Button size="lg" variant="danger" className="w-full" asChild>
                <Link href="/learn">Continue Aprendendo</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
