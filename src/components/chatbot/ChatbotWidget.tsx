"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { ChatbotWindow } from "./ChatbotWindow";

const CHAT_PANEL_ID = "portfolio-chat-panel";

const chatbotWidgetStyles = {
  
  panel: "fixed inset-0 z-50",

  launcher:
    "fixed bottom-5 right-5 z-[60] inline-flex size-16 items-center justify-center rounded-full border-0 bg-transparent p-0 cursor-pointer transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-orange-500 sm:right-10 sm:size-20",

  launcherImage: "size-full rounded-full object-cover",
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
            src="/Images/chatbot-icon.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className={chatbotWidgetStyles.launcherImage}
            priority
          />
        </button>
      )}
    </>
  );
}

