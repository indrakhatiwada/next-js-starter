"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const Providers = ({children}:{children:ReactNode}) => {

const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
       <NextThemesProvider attribute="class" >

        {children}
       </NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;