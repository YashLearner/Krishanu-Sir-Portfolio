"use client";

import { useEffect, useRef, useState } from "react";

import { ChatbotWindow } from "./ChatbotWindow";
import Image from "next/image";

const CHAT_PANEL_ID = "portfolio-chat-panel";

const chatbotWidgetStyles = {
  panel: "fixed inset-0 z-50",

  launcher:
    "fixed bottom-5 right-5 z-[60] flex size-[76px] items-center justify-center overflow-hidden rounded-full border-0 bg-transparent p-0 shadow-none transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 sm:bottom-8 sm:right-8",

  launcherImage:
    "block size-full shrink-0 rounded-full object-cover p-0 m-0",
} as const;

export function ChatbotWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const launcherButtonRef = useRef<HTMLButtonElement>(null);
  const hasOpenedChatRef = useRef(false);

  useEffect(() => {
    if (!isChatOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setIsChatOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isChatOpen]);

  useEffect(() => {
    if (isChatOpen) {
      hasOpenedChatRef.current = true;
      return;
    }

    if (hasOpenedChatRef.current) {
      launcherButtonRef.current?.focus();
    }
  }, [isChatOpen]);

  function handleOpenChat(): void {
    setIsChatOpen(true);
  }

  function handleCloseChat(): void {
    setIsChatOpen(false);
  }

  return (
    <>
      {isChatOpen ? (
        <div
          id={CHAT_PANEL_ID}
          className={chatbotWidgetStyles.panel}
          role="dialog"
          aria-label="Portfolio chat assistant"
          aria-modal="false"
        >
          <ChatbotWindow onClose={handleCloseChat} />
        </div>
      ) : (
        <button
          ref={launcherButtonRef}
          type="button"
          className={chatbotWidgetStyles.launcher}
          onClick={handleOpenChat}
          aria-label="Open portfolio chat assistant"
          aria-haspopup="dialog"
          title="Open portfolio chat assistant"
        >
          <Image
            src="/Images/chatbot-icon.jpg"
            alt=""
            aria-hidden="true"
            width={120}
            height={120}
            className={chatbotWidgetStyles.launcherImage}
            priority
          />
        </button>
      )}

    </>
  );
}

