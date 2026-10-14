
"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, FormEvent } from "react";

import { knowledgeBase } from "@/data/knowledgeBase";
import { findAnswer } from "@/lib/findAnswer";

/* -------------------------------------------------------------------------- */
/* Types and configuration                                                    */
/* -------------------------------------------------------------------------- */
const ThinkingDelay = 1600;
type MessageRole = "assistant" | "user";

type ChatMessage = {
    id: string;
    role: MessageRole;
    content: string;
};

type ChatbotWindowProps = {
    onClose?: () => void;
};



const MAX_QUESTION_LENGTH = 500;
const QUESTION_INPUT_ID = "portfolio-chat-question";

const WELCOME_MESSAGE: ChatMessage = {
    id: "welcome-message",
    role: "assistant",
    content:
        "Hello! I'm the Assistant of Krishanu Kaundilya. Ask me abour my owner's profile, experience, expertise or projects."
};

const NO_ANSWER_RESPONSE =
    "I couldn't find a reliable answer in my knowledge base. " +
    "Try asking about the portfolio owner's profile, experience, skills, or projects.";


const SUGGESTED_QUESTIONS = knowledgeBase
    .map((faq) => faq.questions[0])
    .filter((question): question is string => Boolean(question))
    .slice(0, 3);

/* -------------------------------------------------------------------------- */
/* Tailwind classes                                                           */
/* -------------------------------------------------------------------------- */

const chatbotStyles = {
    window:
        "flex h-full min-h-0 w-full flex-col overflow-hidden bg-white text-slate-900",

    header:
        "flex min-h-[76px] shrink-0 items-center justify-between gap-3 border-b border-slate-100 bg-white px-4 py-3 sm:px-6",

    brandGroup: "flex min-w-0 items-center gap-3",

    brandLogo:
        "grid size-11 shrink-0 place-items-center rounded-xl border border-blue-100 bg-blue-50",

    brandName: "text-sm font-bold leading-tight text-slate-950 sm:text-base",

    brandSubtitle: "mt-1 text-xs text-blue-600",

    headerActions: "flex shrink-0 items-center gap-2",

    headerButton:
        "grid size-10 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",

    contentLayout:
        "flex min-h-0 min-w-0 flex-1 flex-col bg-white ",

    mainPanel: "flex min-h-0 min-w-0 flex-1 flex-col bg-white",

    conversation:
        "flex min-h-0 flex-1 flex-col gap-7 overflow-x-hidden overflow-y-auto px-4 py-6 sm:px-6 sm:py-7 lg:px-8",

    messageRow: "flex w-full min-w-0 items-start gap-3",

    messageAvatar:
        "mt-1 grid size-8 shrink-0 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600",

    messageContent: "flex min-w-0 max-w-[92%] flex-col gap-1.5 sm:max-w-[85%]",

    sender: "px-1 text-[11px] font-medium text-slate-500",

    messageBubble:
        "m-0 rounded-[20px] border px-4 py-3 text-sm leading-relaxed [overflow-wrap:anywhere] whitespace-pre-wrap sm:text-[15px]",

    assistantBubble:
        "rounded-tl-md border-[#dbe7e0] bg-[#edf4f0] text-slate-900",

    userBubble:
        "rounded-tr-md border-[#5271d3] bg-[#5271d3] text-white",

    messageLink: "break-words underline underline-offset-2",

    suggestions: "flex flex-col items-start gap-2 pl-11",

    suggestionsTitle: "text-xs font-semibold text-slate-500",

    suggestionButton:
        "max-w-full rounded-full border border-slate-200 bg-white px-3 py-2 text-left text-xs text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",

    composer:
        "flex shrink-0 items-center gap-3 border-t border-slate-100 bg-white px-4 py-3 sm:px-5 sm:py-4",

    questionInput:
        "min-w-0 flex-1 rounded-full border px-5 py-4 text-sm outline-none transition-colors placeholder:text-slate-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:text-[15px]",

    sendButton:
        "grid size-12 shrink-0 place-items-center rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 disabled:cursor-not-allowed disabled:opacity-50",

    sidebar:
        "hidden min-h-0 flex-col overflow-y-auto border-l border-slate-100 bg-white p-5 lg:flex",

    sidebarHeading:
        "mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400",

    moduleList: "mb-7 flex flex-col",

    moduleItem:
        "flex items-center gap-2 border-b border-slate-100 py-3 text-[13px] text-slate-600",

    moduleIndicator: "size-2 shrink-0 rounded-full bg-[#5271d3]",

    quickLink:
        "flex items-center justify-between gap-3 border-b border-slate-100 py-3 text-left text-[13px] text-slate-600 transition-colors hover:text-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",

    visuallyHidden:
        "absolute m-[-1px] size-px overflow-hidden whitespace-nowrap [clip:rect(0,0,0,0)]",
} as const;

/* -------------------------------------------------------------------------- */
/* Inline styles                                                              */
/* -------------------------------------------------------------------------- */

const chatbotInlineStyles = {
    brandLogo: {
        color: "#5271d3",
    },

    assistantAvatar: {
        color: "#5271d3",
    },

    assistantBubble: {
        backgroundColor: "#edf4f0",
        borderColor: "#dce7e1",
        color: "#17211d",
    },

    userBubble: {
        backgroundColor: "#5271d3",
        borderColor: "#5271d3",
        color: "#ffffff",
    },

    questionInput: {
        backgroundColor: "#eef4f1",
        borderColor: "#dce7e1",
        color: "#24332d",
    },

    sendButton: {
        backgroundColor: "#edf4f0",
        color: "#98a5b5",
    },
} satisfies Record<string, CSSProperties>;


// thinking indicator
function ThinkingIndicator() {

    return (
        <div
            className = "flex w-full min-w-0 items-start gap-3"
            role = "status"
            aria-label="Thinking"
        >

            <div
                className="grid size-8 shrink-0 place-items-center rounded-lg border border-blue-100 bg-blue-50 text-blue-600"
                aria-hidden="true"
            >
                <AssistantIcon />
            </div>

            <div className="flex min-w-0 flex-col items-start gap-1.5">
                <span className="px-1 text-[11px] font-medium text-slate-500">
                    Krishanu Kaundilya AI
                </span>

                <div
                    className="flex items-center gap-3 rounded-xl border px-4 py-3"
                    style={{
                        backgroundColor: "#edf4f0",
                        borderColor: "#dce7e1",
                        color: "#17211d",
                    }}
                >


                    <span className="text-sm font-medium">
                        Thinking
                    </span>

                    <span
                        className="flex items-center gap-1.5"
                        aria-hidden="true"
                    >

                        <span
                            className="size-2 animate-bounce rounded-full bg-[#5271d3]"
                            style={{ animationDelay: "-0.3s" }}
                        />
                        <span
                            className="size-2 animate-bounce rounded-full bg-[#5271d3]"
                            style={{ animationDelay: "-0.15s" }}
                        />
                        <span
                            className="size-2 animate-bounce rounded-full bg-[#5271d3]"
                        />
                    </span>

                </div>

            </div>

        </div>
    )
}

/* -------------------------------------------------------------------------- */
/* Icons                                                                      */
/* -------------------------------------------------------------------------- */

function AssistantIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="23"
            height="23"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M5 5.75A2.75 2.75 0 0 1 7.75 3h8.5A2.75 2.75 0 0 1 19 5.75v6.5A2.75 2.75 0 0 1 16.25 15H12l-4.5 4v-4.12A2.75 2.75 0 0 1 5 12.25v-6.5Z"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinejoin="round"
            />
            <path
                d="M9 8h6M9 11h4"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ResetIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M20 11a8 8 0 0 0-14.9-3M4 4v4h4M4 13a8 8 0 0 0 14.9 3M20 20v-4h-4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="m6 6 12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}

function SendIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            width="19"
            height="19"
            fill="none"
            aria-hidden="true"
        >
            <path
                d="M5 12h14M13 5l7 7-7 7"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/* -------------------------------------------------------------------------- */
/* Message rendering                                                          */
/* -------------------------------------------------------------------------- */

function renderMessageContent(content: string) {
    return content.split(/(https?:\/\/[^\s]+)/g).map((part, index) => {
        if (index % 2 === 1) {
            return (
                <a
                    key={`${index}-${part}`}
                    href={part}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={chatbotStyles.messageLink}
                >
                    {part}
                </a>
            );
        }

        return <span key={`${index}-${part}`}>{part}</span>;
    });
}

function MessageItem({ message }: { message: ChatMessage }) {
    const isUserMessage = message.role === "user";

    return (
        <div
            className={`${chatbotStyles.messageRow} ${isUserMessage ? "justify-end" : "justify-start"
                }`}
        >
            {!isUserMessage && (
                <div
                    className={chatbotStyles.messageAvatar}
                    style={chatbotInlineStyles.assistantAvatar}
                    aria-hidden="true"
                >
                    <AssistantIcon />
                </div>
            )}

            <div
                className={`${chatbotStyles.messageContent} ${isUserMessage ? "items-end" : "items-start"
                    }`}
            >
                <span className={chatbotStyles.sender}>
                    {isUserMessage ? "You" : "CoreDhrishti AI"}
                </span>

                <p
                    className={`${chatbotStyles.messageBubble} ${isUserMessage
                        ? chatbotStyles.userBubble
                        : chatbotStyles.assistantBubble
                        }`}
                    style={
                        isUserMessage
                            ? chatbotInlineStyles.userBubble
                            : chatbotInlineStyles.assistantBubble
                    }
                >
                    {renderMessageContent(message.content)}
                </p>
            </div>
        </div>
    );
}

/* -------------------------------------------------------------------------- */
/* Header                                                                     */
/* -------------------------------------------------------------------------- */

type ChatHeaderProps = {
    onReset: () => void;
    onClose?: () => void;
};

function ChatHeader({ onReset, onClose }: ChatHeaderProps) {
    return (
        <header className={chatbotStyles.header}>
            <div className={chatbotStyles.brandGroup}>
                <div
                    className={chatbotStyles.brandLogo}
                    style={chatbotInlineStyles.brandLogo}
                    aria-hidden="true"
                >
                    <AssistantIcon />
                </div>

                <div className="min-w-0">
                    <h2 className={chatbotStyles.brandName}>
                        Krishanu Kaundilya AI
                    </h2>

                    <p className={chatbotStyles.brandSubtitle}>
                        AI Assistant · Krishanu Kaundilya
                    </p>
                </div>
            </div>

            <div className={chatbotStyles.headerActions}>
                <button
                    type="button"
                    className={chatbotStyles.headerButton}
                    onClick={onReset}
                    aria-label="Start a new conversation"
                    title="Start a new conversation"
                >
                    <ResetIcon />
                </button>

                {onClose && (
                    <button
                        type="button"
                        className={chatbotStyles.headerButton}
                        onClick={onClose}
                        aria-label="Close chat"
                        title="Close chat"
                    >
                        <CloseIcon />
                    </button>
                )}
            </div>
        </header>
    );
}



/* -------------------------------------------------------------------------- */
/* Main chatbot component                                                     */
/* -------------------------------------------------------------------------- */

export function ChatbotWindow({ onClose }: ChatbotWindowProps) {

    const [pendingQuestion, setPendingQuestion] =
    useState<string | null>(null);

const isThinking = pendingQuestion !== null;

    const [messages, setMessages] = useState<ChatMessage[]>([
        WELCOME_MESSAGE,
    ]);
    const [inputValue, setInputValue] = useState("");

    const messageIdCounter = useRef(0);
    const conversationEndRef = useRef<HTMLDivElement>(null);
    const questionInputRef = useRef<HTMLInputElement>(null);

    const showSuggestedQuestions =
        messages.length === 1 && SUGGESTED_QUESTIONS.length > 0;

    useEffect(() => {
        conversationEndRef.current?.scrollIntoView({
            behavior: "auto",
            block: "end",
        });
    }, [messages ,pendingQuestion]);


    useEffect( () =>{
        if(pendingQuestion === null){
            return;

        }

        const responseTimer = window.setTimeout(() =>{
            const answer = findAnswer(pendingQuestion) ?? NO_ANSWER_RESPONSE;


            messageIdCounter.current += 1;

            const assistantMessage: ChatMessage ={
                id : `assistant=${messageIdCounter.current}`,
                role:"assistant",
                content: answer,
            };

            setMessages((currentMessages) => [
                ...currentMessages,
                assistantMessage,

            ]);

            setPendingQuestion(null);
        },ThinkingDelay);

        return () =>{
            window.clearTimeout(responseTimer);
        }
    },[pendingQuestion]);

    function createMessage(
        role: MessageRole,
        content: string,
    ): ChatMessage {
        messageIdCounter.current += 1;

        return {
            id: `${role}-${messageIdCounter.current}`,
            role,
            content,
        };
    }

   
function sendQuestion(rawQuestion: string): void {
    const question = rawQuestion.trim();

    if (
        !question ||
        question.length > MAX_QUESTION_LENGTH ||
        isThinking
    ) {
        return;
    }

    const userMessage = createMessage("user", question);

    setMessages((currentMessages) => [
        ...currentMessages,
        userMessage,
    ]);

    setInputValue("");
    setPendingQuestion(question);
}


    function handleSubmit(
        event: FormEvent<HTMLFormElement>,
    ): void {
        event.preventDefault();
        sendQuestion(inputValue);
    }

    function handleResetConversation(): void {
        setMessages([WELCOME_MESSAGE]);
        setPendingQuestion(null);
        setInputValue("");
        questionInputRef.current?.focus();
    }

    function handleSelectQuickLink(question: string): void {
        setInputValue(question);
        questionInputRef.current?.focus();
    }

    return (
        <section
            className={chatbotStyles.window}
            aria-label="CoreDhrishti AI chat"
        >
            <ChatHeader
                onReset={handleResetConversation}
                onClose={onClose}
            />

            <div className={chatbotStyles.contentLayout}>
                <main className={chatbotStyles.mainPanel}>
                    <div
                        className={chatbotStyles.conversation}
                        role="log"
                        aria-label="Conversation messages"
                        aria-live="polite"
                        aria-relevant="additions text"
                    >
                        {messages.map((message) => (
                            <MessageItem
                                key={message.id}
                                message={message}
                            />
                        ))}

                        {isThinking && <ThinkingIndicator />}

                        {showSuggestedQuestions && (
                            <div className={chatbotStyles.suggestions}>
                                <p className={chatbotStyles.suggestionsTitle}>
                                    Try asking
                                </p>

                                {SUGGESTED_QUESTIONS.map((question) => (
                                    <button
                                        key={question}
                                        type="button"
                                        className={chatbotStyles.suggestionButton}
                                        onClick={() => sendQuestion(question)}
                                    >
                                        {question}
                                    </button>
                                ))}
                            </div>
                        )}

                        <div ref={conversationEndRef} aria-hidden="true" />
                    </div>

                    <form
                        className={chatbotStyles.composer}
                        onSubmit={handleSubmit}
                        aria-label="Send a message"
                    >
                        <label
                            htmlFor={QUESTION_INPUT_ID}
                            className={chatbotStyles.visuallyHidden}
                        >
                            Ask Krishanu Kaundilya AI a question
                        </label>

                        <input
                            ref={questionInputRef}
                            id={QUESTION_INPUT_ID}
                            className={chatbotStyles.questionInput}
                            style={chatbotInlineStyles.questionInput}
                            type="text"
                            name="question"
                            value={inputValue}
                            onChange={(event) => setInputValue(event.target.value)}
                            placeholder="Ask Krishanu Kaundilya AI anything..."
                            autoComplete="off"
                            maxLength={MAX_QUESTION_LENGTH}
                        
                        />

                        <button
                            type="submit"
                            className={chatbotStyles.sendButton}
                            style={{
                                ...chatbotInlineStyles.sendButton,
                                ...(inputValue.trim()
                                    ? {
                                        backgroundColor: "#5271d3",
                                        color: "#ffffff",
                                    }
                                    : {}),
                            }}
                            disabled={!inputValue.trim()}
                            aria-label="Send question"
                        >
                            <SendIcon />
                        </button>
                    </form>
                </main>


            </div>
        </section>
    );
}
