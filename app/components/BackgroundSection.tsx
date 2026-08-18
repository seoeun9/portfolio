import { BadgeCheck, BriefcaseBusiness, GraduationCap } from "lucide-react";

const backgroundItems = [
  {
    category: "Education",
    label: "학력",
    icon: GraduationCap,
    period: "2022 — 2027",
    title: "성균관대학교",
    description: "경영학과 · 소프트웨어학과 복수전공",
  },
  {
    category: "Experience",
    label: "경력",
    icon: BriefcaseBusiness,
    period: "2026.02 — 2026.11",
    title: "타이가글로벌",
    description: "인턴",
  },
  {
    category: "Certification",
    label: "자격증",
    icon: BadgeCheck,
    period: "-",
    title: "SQLD",
    description: "한국데이터산업진흥원",
    secondaryTitle: "정보처리기사",
    secondaryDescription: "진짜 할거임",
  },
];

export default function BackgroundSection() {
  return (
    <div>
      <div className="mt-10 mb-10">
        <p className="text-[11px] font-bold tracking-[0.18em] text-[#8068bd] uppercase">
          Profile
        </p>
        <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Background
        </h3>
      </div>

      <div className="divide-y divide-black/8 border-y border-black/8">
        {backgroundItems.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.category}
              className="group grid gap-5 py-7 transition-colors hover:bg-[#faf8fd] sm:grid-cols-[10rem_1fr] sm:px-4"
            >
              <div className="flex items-center gap-3 self-start text-[#8068bd]">
                <span className="grid size-9 place-items-center rounded-full border border-[#d8ceee] bg-white transition-transform group-hover:-rotate-6 group-hover:scale-105">
                  <Icon className="size-4" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-[10px] font-bold tracking-[0.16em] uppercase">
                    {item.category}
                  </p>
                  <p className="mt-0.5 text-xs text-neutral-500">
                    {item.label}
                  </p>
                </div>
              </div>

              <div className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:items-baseline">
                <time className="text-xs font-medium text-neutral-500">
                  {item.period}
                </time>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-4">
                  <div>
                    <h4 className="text-lg font-semibold tracking-[-0.02em] text-neutral-900">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm leading-7 text-neutral-600">
                      {item.description}
                    </p>
                  </div>

                  {item.secondaryTitle && (
                    <>
                      <span
                        className="hidden h-10 w-px bg-[#d8ceee] sm:block"
                        aria-hidden="true"
                      />
                      <div>
                        <h4 className="text-lg font-semibold tracking-[-0.02em] text-neutral-900">
                          {item.secondaryTitle}
                        </h4>
                        <p className="mt-1 text-sm leading-7 text-neutral-600">
                          {item.secondaryDescription}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
