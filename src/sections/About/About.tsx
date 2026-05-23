import DecorLines from "../../components/ui/DecorLines/DecorLines";

export default function About() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-white border-b border-[#EAEAEA]
        h-[550px] sm:h-[520px] md:h-[900px] lg:h-[920px] xl:h-[980px] 2xl:h-[1040px] 3xl:h-[1080px] flex justify-center"
    >
      <div
        className="
          relative w-full h-full shrink-0 max-w-[430px] sm:max-w-[640px] md:max-w-[1280px] lg:max-w-[1600px]
          xl:max-w-[1900px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
      >
        <div
          className="hidden md:block absolute left-0 w-full z-0 top-[42px] lg:top-[46px] xl:top-[50px] 2xl:top-[53px] 3xl:top-[55px]"
        >
          <div className="hidden lg:block">
            <DecorLines count={18} position="top" />
          </div>

          <div className="hidden md:block lg:hidden">
            <DecorLines count={12} position="top" />
          </div>
        </div>

        <div className="hidden md:block absolute left-0 w-full z-0 bottom-[44px] lg:bottom-[48px] xl:bottom-[52px] 2xl:bottom-[55px] 3xl:bottom-[58px]">
          <DecorLines count={6} position="bottom" />
        </div>

        <div className="absolute top-0 h-full z-0 left-[20px] sm:left-[40px] md:left-[80px] lg:left-[160px] xl:left-[260px] 2xl:left-[360px] 3xl:left-[414px]">
          <DecorLines count={1} position="left" />
        </div>

        <div className="absolute top-0 h-full z-0 right-[20px] sm:right-[40px] md:right-[80px] lg:right-[160px] xl:right-[280px] 2xl:right-[390px] 3xl:right-[451px]">
          <DecorLines count={1} position="right" />
        </div>

        <div className="absolute left-0 top-[590px] md:top-1/2 md:-translate-y-1/2 w-full z-0" >
          <DecorLines count={1} position="center-horizontal" />
        </div>

        <h2
          className="
            absolute z-[1] left-1/2 -translate-x-1/2 top-[12px] sm:top-[16px] md:left-[420px] md:translate-x-0 md:top-[120px]
            lg:left-[520px] lg:top-[82px] xl:left-[760px] xl:top-[84px] 2xl:left-[1040px] 2xl:top-[88px] 3xl:left-[1209px] 3xl:top-[90px]
            font-heading font-bold uppercase whitespace-nowrap pointer-events-none select-none"
          style={{
            fontSize: "clamp(90px, 18vw, 500px)",
            lineHeight: "1.28",
            WebkitTextStroke: "2px rgba(228,228,228,0.8)",
            color: "transparent"
          }}
        >
          ABOUT
        </h2>

        <img
          src="/logo-bg.svg"
          alt=""
          className="
            hidden md:block absolute z-[2] left-[40px] lg:left-[140px] xl:left-[240px] 2xl:left-[360px] 3xl:left-[431px]
            top-[320px] lg:top-[300px] xl:top-[260px] 2xl:top-[272px] 3xl:top-[279px] w-[320px] lg:w-[420px] xl:w-[560px] 2xl:w-[680px] 3xl:w-[746px]
            h-auto object-contain pointer-events-none select-none"
        />
        <div
          className="
            absolute z-20 left-[24px] right-[24px] sm:left-[48px] sm:right-[48px] md:left-[420px] md:right-auto lg:left-[520px] xl:left-[640px] 2xl:left-[980px] 3xl:left-[1122px]
            top-[140px] sm:top-[140px] md:top-[250px] lg:top-[320px] xl:top-[365px] 2xl:top-[385px] 3xl:top-[392px]"
        >
          <h3
            className="font-heading font-normal uppercase text-[#1C2C57] text-center md:text-left whitespace-nowrap"
            style={{
              fontSize: "clamp(44px, 5vw, 120px)",
              lineHeight: "1.28"
            }}
          >
            ABOUT US
          </h3>

          <p
            className="mt-[18px] sm:mt-[22px] 3xl:mt-[88px] w-full md:w-[340px] lg:w-[420px] xl:w-[620px] 2xl:w-[740px] 3xl:w-[788px] text-[#1C2C57]font-body font-normal"
            style={{
              fontSize: "clamp(16px, 1vw, 18px)",
              lineHeight: "26px"
            }}
          >
            Survey Drafters has decades of experience in the land surveying industry, and our ability to work virtually with professionals 
            across the country is what sets us apart from the rest. We minimize your expenses and maximize your productivity by using your field
            data to create high-quality AutoCAD drawings. You can take on more clients and promise a faster turnaround time to your clients by
            partnering with Survey Drafters.
          </p>

          <button
            className="
              mt-[24px] sm:mt-[28px] mx-auto md:mx-0 w-[180px] sm:w-[210px] md:w-[190px] lg:w-[210px] xl:w-[240px] 2xl:w-[252px] 3xl:w-[262px]
              h-[52px] sm:h-[56px] md:h-[48px] lg:h-[54px] xl:h-[60px] 2xl:h-[62px] 3xl:h-[63px] border-[2px] border-[#008767]
              text-[#008767] uppercase font-body font-bold flex items-center justify-center transition-all duration-300 hover:bg-[#008767] hover:text-white"
            style={{
              fontSize: "clamp(14px, 1vw, 18px)",
              lineHeight: "26px"
            }}
          >
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
}