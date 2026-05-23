import DecorLines from "../../components/ui/DecorLines/DecorLines";

export default function WhatWeDo() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-white flex justify-center
        h-[760px] sm:h-[860px] md:h-[980px] lg:h-[1080px] xl:h-[1160px] 2xl:h-[1200px] 3xl:h-[1230px]"
    >
      <div className="relative w-full h-full">
        <div
          className="
            absolute top-0 h-full z-0
            right-[20px] sm:right-[40px] md:right-[80px] lg:right-[160px] xl:right-[280px] 2xl:right-[390px] 3xl:right-[451px] "
        >
          <DecorLines count={1} position="right" />
        </div>

        <div
          className="
            absolute left-0 w-full z-0
            top-[36px] sm:top-[40px] md:top-[45px] lg:top-[49px] xl:top-[52px] 2xl:top-[56px] 3xl:top-[98px]"
        >
          <DecorLines count={1} position="top" />
        </div>

        <div
          className="
            absolute left-0 w-full z-0
            bottom-[24px] sm:bottom-[28px] md:bottom-[34px] lg:bottom-[41px] xl:bottom-[48px] 2xl:bottom-[52px] 3xl:bottom-[58px]"
        >
          <DecorLines count={4} position="bottom" />
        </div>

        <h2
          className="
            absolute z-0 font-heading font-bold uppercase whitespace-nowrap pointer-events-none select-none
            left-[10px] top-[90px] sm:left-[20px] sm:top-[100px] md:left-[40px] md:top-[110px]
            lg:left-[80px] lg:top-[95px] xl:left-[140px] xl:top-[90px] 2xl:left-[260px] 2xl:top-[82px] 3xl:left-[528px] 3xl:top-[76px]"
          style={{
            fontSize: "clamp(120px, 18vw, 400px)",
            lineHeight: "100%",
            WebkitTextStroke: "2px rgba(228,228,228,0.4)",
            color: "transparent"
          }}
        >
          WHAT WE DO
        </h2>

        <div
          className="
            absolute z-10 left-1/2 -translate-x-1/2 text-center
            top-[180px] sm:top-[220px] md:top-[260px] lg:top-[250px] xl:top-[255px] 2xl:top-[258px] 3xl:top-[260px]
            w-[320px] sm:w-[420px] md:w-[560px] lg:w-[700px] xl:w-[820px] 2xl:w-[880px] 3xl:w-[920px]"
        >
          <h3
            className="font-heading font-normal uppercase text-[#1C2C57] text-center"
            style={{
              fontSize: "clamp(42px, 6vw, 120px)",
              lineHeight: "100%"
            }}
          >
            WHAT WE DO?
          </h3>

          <p
            className="
              mt-[18px] sm:mt-[20px] md:mt-[24px] lg:mt-[28px] xl:mt-[30px]
              mx-auto 3xl:w-[700px] 2xl:w-[650px] md:w-[600px] md:pr-[30px] font-body font-normal text-center text-[#1C2C57]"
            style={{
              fontSize: "clamp(14px, 2vw, 18px)",
              lineHeight: "26px"
            }}
          >
            Our business is a blend of technical knowledge and experienced customer service. From start to finish, you'll find that working
            with Survey Drafters is a pleasure. We offer a partnership that allows your business to skyrocket to the next level.
          </p>
        </div>
        <img
          src="/what-we-do.svg"
          alt=""
          className="
            absolute left-0 bottom-0 w-full
            h-[320px] sm:h-[380px] md:h-[470px] lg:h-[540px] xl:h-[610px] 2xl:h-[640px] 3xl:h-[668px] object-cover z-10"
        />
      </div>
    </section>
  );
}