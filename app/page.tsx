import { MailIcon, PhoneIcon } from "lucide-react";
import { PageMotion } from "./components/PageMotion";
import { ProjectShowcase } from "./components/ProjectShowcase";
import { StickyHeader } from "./components/StickyHeader";
import CertificationSection from "./components/BackgroundSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  const projectExamples = [
    {
      title: "코딩 학습 지원 플랫폼",
      role: "Frontend Lead",
      result:
        "자대 학생들의 코딩 학습을 지원하는 플랫폼으로, 프론트엔드 개발을 주도하며 사용자 경험을 개선했습니다.",
      overview:
        "학생들이 학습 흐름을 놓치지 않도록 코딩 과제, 피드백, 진도 관리가 한 화면에서 이어지도록 설계한 프로젝트입니다.",
      details: [
        "학습 대시보드와 코딩 과제 화면을 재구성해 정보 우선순위를 정리했습니다.",
        "반응형 UI를 적용해 데스크톱과 모바일 환경에서 비슷한 학습 경험을 제공했습니다.",
        // "진도 추적과 알림 흐름을 함께 정리해 사용자가 다음 행동을 쉽게 이해하도록 개선했습니다.",
      ],
      links: [
        { label: "서비스 보기", href: "https://codedang.com" },
        { label: "GitHub", href: "https://github.com/skkuding/codedang" },
      ],
    },
    {
      title: "Moss Hexa & Moss Echo Renewal",
      role: "Frontend, Backend",
      result:
        "IoT 기기와 연동되는 앱의 프론트엔드와 백엔드를 담당해 실사용자의 피드백을 반영한 UI/UX 개선과 기능 구현을 진행했습니다.",
      overview:
        "실제 IoT 기기와 연결되는 서비스라 사용자 행동이 복잡하고, 설정 흐름이 자주 헷갈리는 문제를 개선하는 데 집중했습니다.",
      details: [
        "기기 연결, 상태 조회, 설정 변경 등 핵심 플로우를 단순화해 진입 장벽을 낮췄습니다.",
        "API 응답 구조를 정리하며 프론트와 백엔드 연동 흐름을 더 안정적으로 만들었습니다.",
        // "사용자 피드백을 반영해 설정 화면과 경고 안내를 더 직관적으로 재구성했습니다.",
      ],
      links: [
        {
          label: "서비스 보기",
          href: "https://apps.apple.com/kr/app/moss-hexa/id6761811728",
        },
        // { label: "GitHub", href: "https://github.com" },
      ],
    },
    {
      title: "Scheduly",
      role: "Frontend, UI/UX Design",
      result: "To-do List와 캘린더 기능을 결합한 일정 관리 앱",
      overview:
        "할 일과 일정이 서로 엇갈리지 않도록 보이기 위한 구조를 고민하며, 계획 관리 경험을 더 자연스럽게 만드는 데 초점을 맞췄습니다.",
      details: [
        "캘린더와 할 일 목록을 연동해 사용자가 시간 흐름을 훨씬 쉽게 파악하도록 구성했습니다.",
        "기존 일정 관리 앱의 복잡한 인터페이스를 줄이고, 핵심 이벤트에 집중할 수 있게 정리했습니다.",
        "다양한 일정 상태를 직관적으로 표현해 사용자에게 빠른 이해를 제공하도록 디자인했습니다.",
      ],
      links: [
        {
          label: "서비스 보기",
          href: "https://apps.apple.com/kr/app/%EC%8A%A4%EC%BC%80%EC%A4%84%EB%A6%AC-scheduly/id6798095601",
        },
        { label: "GitHub", href: "https://github.com/seoeun9/scheduly" },
      ],
    },
  ];

  return (
    <main className="page-enter relative min-h-dvh overflow-x-clip px-6 py-8 sm:px-10 lg:px-16">
      <PageMotion />

      <StickyHeader />

      <section
        id="overview"
        data-reveal
        className="scroll-reveal relative z-10 mt-16 grid w-full  gap-10  items-center justify-center"
      >
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm font-medium text-neutral-500 sm:text-base">
            Frontend Developer
          </p>
          <h1 className="mt-4 [font-family:var(--font-display)] text-4xl leading-none font-semibold tracking-[-0.04em] text-neutral-900 sm:text-5xl lg:text-6xl">
            Jang Seoeun
          </h1>
          <p className="mt-8 max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">
            <span>안녕하세요, 프론트엔드 개발자 </span>
            <span className="font-semibold text-[#8e53bb]">장서은</span>
            <span>입니다.</span>
            <br />
          </p>
        </div>
        <div className="mt-10 flex gap-3 items-center justify-center">
          <a
            className="inline-flex min-h-11 items-center rounded-full border border-[#cdc3ea] bg-white/80 px-5 text-sm font-semibold text-neutral-700 transition hover:border-[#a894e0] hover:text-[#6e4bd1]"
            href="mailto:jseoeun26@gmail.com"
          >
            <MailIcon className="mr-2 h-4 w-4" />
            <span>협업 문의</span>
          </a>
          <a
            className="inline-flex min-h-11 items-center rounded-full border border-[#cdc3ea] bg-white/80 px-5 text-sm font-semibold text-neutral-700 transition hover:border-[#a894e0] hover:text-[#6e4bd1]"
            href="tel:+821088028683"
          >
            <PhoneIcon className="mr-2 h-4 w-4" />
            <span>안부 전하기</span>
          </a>
        </div>
      </section>

      <section
        id="certifications"
        data-reveal
        className="scroll-reveal relative z-10 mx-auto mt-30 w-full max-w-6xl border-t border-black/10 pt-10"
      >
        <CertificationSection />
      </section>

      <section
        id="projects"
        data-reveal
        className="scroll-reveal relative z-10 mx-auto mt-30 w-full max-w-6xl border-t border-black/10 pt-10"
      >
        <ProjectShowcase projects={projectExamples} />
      </section>

      <section
        id="contact"
        data-reveal
        className="scroll-reveal relative z-10 mx-auto mt-30 w-full max-w-6xl border-t border-black/10 pt-10"
      >
        <ContactSection />
      </section>

      {/* <footer
        id="contact"
        data-reveal
        className="scroll-reveal relative z-10 mx-auto mt-16 flex w-full max-w-6xl flex-col gap-2 border-t border-[#d6ccec] pt-6 pb-6 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between"
      >
        <span>Jang Seoeun · Frontend Developer</span>
        <a
          className="transition hover:text-[#6e4bd1]"
          href="mailto:jseoeun26@gmail.com"
        >
          jseoeun26@gmail.com
        </a>
      </footer> */}
    </main>
  );
}
