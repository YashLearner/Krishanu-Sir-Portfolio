
"use client";

import Image from "next/image";

export type CredentialBookItem = {
  type: "certificate" | "education";
  title: string;
  subtitle: string;
  period?: string;
  credentialId?: string;
  imageUrl?: string;
  description?: string;
  skills?: string[];
  grade?: string;
};

type CredentialBookProps = {
  item: CredentialBookItem;
  onClose: () => void;
};

export function CredentialBook({ item, onClose }: CredentialBookProps) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      className="credential-overlay fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/75 p-3 backdrop-blur-sm sm:p-6"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="credential-book relative my-auto w-full max-w-6xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close credential details"
          className="absolute -right-1 -top-12 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#141416] text-xl text-white transition hover:bg-[#D97706] sm:right-0"
        >
          ×
        </button>

        {/* Book cover and center spine */}
        <div className="credential-cover relative rounded-2xl border-[5px] border-[#172E49] bg-[#172E49] p-[3px] shadow-2xl sm:rounded-3xl sm:p-2">
          <div className="credential-spread relative grid grid-cols-1 overflow-hidden rounded-xl md:grid-cols-2">
            {/* LEFT PAGE */}
            <section className="credential-page credential-page-left relative flex min-h-[330px] flex-col bg-[#FAF7EF] p-4 sm:min-h-[460px] sm:p-7 lg:p-9">
              <div className="pointer-events-none absolute inset-2 border border-[#D97706]/30 sm:inset-4" />

              <div className="relative flex items-center justify-between gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B45309] sm:text-xs">
                  {item.type === "education"
                    ? "Academic Credential"
                    : "Professional Certification"}
                </span>
                <span className="text-xs text-zinc-500">
                  Official Record
                </span>
              </div>

              <div className="relative my-5 flex min-h-[220px] flex-1 items-center justify-center overflow-hidden rounded-xl border border-[#D6C8AA] bg-white/70 p-3 sm:my-7 sm:min-h-[300px] sm:p-5">
                {item.imageUrl ? (
                  <Image
                    src={item.imageUrl}
                    alt={`${item.title} credential`}
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="max-h-[55vh] w-full object-contain"
                    priority
                  />
                ) : (
                  <div className="px-4 py-10 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border-2 border-[#D97706]/40 text-3xl text-[#D97706]">
                      ✓
                    </div>
                    <h3 className="text-lg font-semibold text-[#141416]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-600">
                      {item.subtitle}
                    </p>
                    <p className="mt-5 text-xs uppercase tracking-widest text-zinc-500">
                      Credential Record
                    </p>
                  </div>
                )}
              </div>

              <p className="relative text-center text-[9px] font-semibold uppercase tracking-[0.22em] text-slate-500 sm:text-[10px]">
                Learning · Achievement · Growth
              </p>
            </section>

            {/* RIGHT PAGE */}
            <section className="credential-page credential-page-right relative flex min-w-0 flex-col border-t border-[#D6C8AA] bg-[#FFFEFA] p-5 sm:p-8 md:border-l md:border-t-0 lg:p-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B45309] sm:text-xs">
                Credential Details
              </p>

              <h2 className="mt-4 break-words font-serif text-2xl font-bold leading-tight text-[#141416] sm:text-3xl lg:text-4xl">
                {item.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base">
                {item.subtitle}
              </p>

              <div className="my-6 border-t border-zinc-200" />

              <dl className="grid gap-x-4 gap-y-4 text-sm sm:grid-cols-[95px_minmax(0,1fr)]">
                {item.period && (
                  <>
                    <dt className="text-zinc-500">Period</dt>
                    <dd className="font-semibold text-[#141416]">
                      {item.period}
                    </dd>
                  </>
                )}

                {item.credentialId && (
                  <>
                    <dt className="text-zinc-500">Reference</dt>
                    <dd className="break-all font-mono text-xs font-semibold text-[#141416] sm:text-sm">
                      {item.credentialId}
                    </dd>
                  </>
                )}

                {item.grade && (
                  <>
                    <dt className="text-zinc-500">Grade</dt>
                    <dd className="font-semibold text-[#141416]">
                      {item.grade}
                    </dd>
                  </>
                )}
              </dl>

              {item.description && (
                <div className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                    Overview
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-700">
                    {item.description}
                  </p>
                </div>
              )}

              {!!item.skills?.length && (
                <div className="mt-6">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                    Key Skills &amp; Competencies
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[#F59E0B]/30 bg-[#FFF4E5] px-3 py-1.5 text-xs font-medium text-amber-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto pt-6">
                <div className="mb-5 border-t border-zinc-200" />
                <p className="mb-4 text-xs leading-5 text-zinc-500">
                  Review the credential information and supporting record.
                </p>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full rounded-xl bg-[#D97706] px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#B45309] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] focus-visible:ring-offset-2"
                >
                  Close Credential
                </button>
              </div>
            </section>
          </div>

          {/* Center spine highlight */}
          <div
            aria-hidden="true"
            className="credential-spine pointer-events-none absolute bottom-0 left-1/2 top-0 z-10 hidden w-[3px] -translate-x-1/2 bg-gradient-to-r from-[#172E49] via-[#D6C8AA] to-[#172E49] md:block"
          />
        </div>
      </div>
    </div>
  );
}
