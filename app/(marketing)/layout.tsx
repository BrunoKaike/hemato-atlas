"use client";

import type { PropsWithChildren } from "react";

import { Footer } from "./footer";
import Example from './header2';

const MarketingLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Example />

      <main className="flex flex-1 flex-col items-center">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MarketingLayout;
