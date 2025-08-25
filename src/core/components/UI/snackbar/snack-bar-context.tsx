"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";

interface SnackbarOptions {
  title?: string;
  content?: string;
  autoHide?: boolean;
  autoHideDuration?: number;
}

interface SnackbarType {
  isOpen: boolean;
  show: (options: SnackbarOptions) => void;
  hide: () => void;
  options: SnackbarOptions | null;
}

const SnackbarContext = createContext<SnackbarType | undefined>(undefined);

export function useSnackbar() {
  const snackbarContext = useContext(SnackbarContext);
  if (!snackbarContext) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return snackbarContext;
}

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<SnackbarOptions | null>(null);

  const show = useCallback((options: SnackbarOptions) => {
    setOptions(options);
    setIsOpen(true);
  }, []);

  function hide() {
    setOptions(null);
    setIsOpen(false);
  }

  return (
    <SnackbarContext
      value={{
        isOpen,
        show,
        hide,
        options,
      }}
    >
      {children}
    </SnackbarContext>
  );
}
