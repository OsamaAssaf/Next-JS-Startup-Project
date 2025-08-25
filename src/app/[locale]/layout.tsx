import { Roboto } from "next/font/google";
import "../globals.css";
import {
  CssBaseline,
  InitColorSchemeScript,
  ThemeProvider,
} from "@mui/material";
import theme from "@/core/theme";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/core/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getLangDir } from "rtl-detect";
import RTLCacheProvider from "@/core/providers/RTLCacheProvider";
import { DialogProvider } from "@/core/components/UI/dialog/dialog-context";
import DialogSlide from "@/core/components/UI/dialog/dialog";
import { SnackbarProvider } from "@/core/components/UI/snackbar/snack-bar-context";
import CustomSnackbar from "@/core/components/UI/snackbar/snackbar";
import { ReactNode } from "react";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("appName"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Detect direction based on locale
  const direction = getLangDir(locale);

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html
      lang={locale}
      dir={direction}
      className={roboto.variable}
      suppressHydrationWarning
    >
      <body>
        <InitColorSchemeScript attribute="class" />
        <NextIntlClientProvider>
          <RTLCacheProvider direction={direction}>
            <ThemeProvider theme={theme}>
              <DialogProvider>
                <SnackbarProvider>
                  <CssBaseline />
                  {children}
                  <CustomSnackbar />
                </SnackbarProvider>
                <DialogSlide />
              </DialogProvider>
            </ThemeProvider>
          </RTLCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
