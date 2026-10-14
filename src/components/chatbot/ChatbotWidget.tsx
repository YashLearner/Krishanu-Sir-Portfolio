"use client";

import { useEffect, useRef, useState } from "react";

import { ChatbotWindow } from "./ChatbotWindow";
import Image from "next/image";

const CHAT_PANEL_ID = "portfolio-chat-panel";

const chatbotWidgetStyles = {

  panel: "fixed inset-0 z-50",

  launcher:
    "fixed bottom-5 right-5 z-[60] inline-flex min-h-[58px] items-center justify-center gap-3 rounded-full border border-blue-200 bg-white px-5 py-3 text-[#5271d3] shadow-lg shadow-blue-950/5 transition-all duration-200 hover:border-blue-300 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 sm:bottom-8 sm:right-8",

  launcherImage: "size-7 shrink-0 object-contain",
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
            src="/Images/Chatbot.png"
            alt=""
            aria-hidden="true"
            width={80}
            height={80}
            className={chatbotWidgetStyles.launcherImage}
            priority />

          <span className="whitespace-nowrap text-sm font-semibold sm:text-base">
            Chatbot
          </span>

          <span
            className="size-2 shrink-0 rounded-full bg-[#5271d3]"
            aria-hidden="true"
          />
        </button>
      )}
    </>
  );
}

