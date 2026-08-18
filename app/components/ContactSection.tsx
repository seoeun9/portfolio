export default function ContactSection() {
  return (
    <>
      <div className="mt-10 mb-10">
        <p className="text-[11px] font-bold tracking-[0.18em] text-[#8068bd] uppercase">
          Contact
        </p>
        <h3 className="mt-2 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
          Get in Touch
        </h3>
        <div className="mt-30 flex flex-col gap-5 items-center justify-center text-xl">
          <p>
            <span className="font-semibold">사용자 경험을 고려한 </span>
            <span>인터렉션과 UI 구현을 통해</span>
          </p>
          <p>
            <span className="font-semibold">
              브랜드와 제품의 가치를 높이는{" "}
            </span>
            프론트엔드 개발을 지향합니다.
          </p>
          <p className="pt-4">언제든 연락 주세요</p>
          <p className="pb-30">Call me baby.</p>
        </div>
      </div>
    </>
  );
}
