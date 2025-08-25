"use client";

import { createContext, ReactNode, useContext, useState } from "react";

export interface DialogOptions {
  title?: string;
  content?: ReactNode;
  onConfirm?: () => void | Promise<void>;
  onCancel?: () => void | Promise<void>;
  confirmText?: string;
  cancelText?: string;
  // type?: "alert" | "confirm" | "custom";
  showCancelButton?: boolean;
}

interface DialogType {
  isOpen: boolean;
  show: (options: DialogOptions) => void;
  hide: () => void;
  options: DialogOptions | null;
}

const DialogContext = createContext<DialogType | undefined>(undefined);

export function useDialog() {
  const dialogContext = useContext(DialogContext);
  if (!dialogContext) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return dialogContext;
}

export function DialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<DialogOptions | null>(null);

  function show(options: DialogOptions) {
    setIsOpen(true);
    setOptions(options);
  }

  function hide() {
    setIsOpen(false);
    setOptions(null);
  }

  return (
    <DialogContext value={{ isOpen, options, show, hide }}>
      {children}
    </DialogContext>
  );
}
