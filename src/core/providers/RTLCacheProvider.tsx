"use client";

import { PropsWithChildren } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import rtlPlugin from "@mui/stylis-plugin-rtl";
import { prefixer } from "stylis";

interface RTLCacheProviderProps extends PropsWithChildren {
  direction: "rtl" | "ltr";
}

export default function RTLCacheProvider({
  direction,
  children,
}: RTLCacheProviderProps) {
  return (
    <AppRouterCacheProvider
      options={{
        enableCssLayer: true,
        key: direction === "rtl" ? "mui-rtl" : "mui",
        stylisPlugins: direction === "rtl" ? [prefixer, rtlPlugin] : [prefixer],
      }}
    >
      {children}
    </AppRouterCacheProvider>
  );
}
