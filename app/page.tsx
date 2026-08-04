import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex min-h-dvh w-full items-center justify-center overflow-hidden bg-neutral-100 px-6 py-20 text-neutral-900 [font-family:var(--font-body)] dark:bg-neutral-950 dark:text-neutral-100 sm:px-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.85),transparent_38%),radial-gradient(circle_at_86%_78%,rgba(0,0,0,0.16),transparent_44%),linear-gradient(145deg,#f7f7f5_0%,#ebebe9_50%,#e7e7e5_100%)] dark:bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.08),transparent_42%),radial-gradient(circle_at_86%_78%,rgba(255,255,255,0.07),transparent_44%),linear-gradient(145deg,#111112_0%,#151516_50%,#121213_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] bg-size-[34px_34px] mask-[radial-gradient(circle_at_center,rgba(0,0,0,0.82),transparent_72%)] dark:bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]"
      />

      <section className="relative z-10 grid w-full max-w-6xl gap-6 border border-black/15 bg-white/65 p-6 backdrop-blur-xl dark:border-white/15 dark:bg-neutral-900/65 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
        <div className="flex flex-col justify-center">
          <h1 className="mt-2 text-6xl leading-none font-semibold tracking-[-0.04em] text-neutral-900 dark:text-neutral-100 sm:text-7xl lg:text-8xl">
            장서은
          </h1>
          <p className="mt-4 text-lg font-medium text-neutral-600 dark:text-neutral-300 sm:text-xl">
            Frontend Developer
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-neutral-700 dark:text-neutral-300 sm:text-lg">
            빠르고, 섬세하고, 기억에 남는 인터페이스를 만듭니다.
            <br />
            브랜드의 톤을 코드로 번역하는 프론트엔드 개발자입니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-neutral-900 bg-neutral-900 px-5 text-sm font-semibold text-neutral-100 transition hover:-translate-y-0.5 hover:bg-neutral-800 dark:border-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200"
              href="#projects"
            >
              프로젝트 보기
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-black/30 bg-transparent px-5 text-sm font-semibold text-neutral-900 transition hover:-translate-y-0.5 hover:bg-white/45 dark:border-white/35 dark:text-neutral-100 dark:hover:bg-white/10"
              href="mailto:jseoeun26@gmail.com"
            >
              협업 문의
            </a>
          </div>
        </div>

        <aside className="relative min-w-0" aria-label="프로필 사진">
          <div
            className="relative w-full overflow-hidden border border-black/30 bg-neutral-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] dark:border-white/25 dark:bg-neutral-800"
            style={{ aspectRatio: "4 / 5" }}
          >
            <Image
              src="/profile.png"
              alt="장서은 프로필 사진"
              fill
              priority
              sizes="(max-width: 1024px) 70vw, 32vw"
              className="object-cover"
            />
          </div>
          <p className="mt-3 text-xs tracking-widest text-neutral-500 uppercase dark:text-neutral-400">
            Jang Seoeun · Frontend Developer
          </p>
        </aside>
      </section>

      <div id="projects" className="sr-only" />
    </main>
  );
}
