import DecorLines from "../../components/ui/DecorLines/DecorLines";

const items = [
  {
    title: "TIME",
    text: "Your time is valuable, and running a business isn’t easy. Instead of using AutoCAD, let our experts handle it while you focus on growing your business.",
    icon: "/why-1.svg"
  },
  {
    title: "MONEY",
    text: "Let’s face it – licensing AutoCAD isn’t cheap. We offer drafting services at an affordable price, helping you save overhead by partnering with Survey Drafters.",
    icon: "/why-2.svg"
  },
  {
    title: "SKILL",
    text: "Our team of experienced drafters has been working with land surveyors for decades. Get professional communication from start to finish.",
    icon: "/why-3.svg"
  }
];

export default function WhyUs() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-[#0FAC87] flex justify-center
        h-[1700px] sm:h-[1550px] md:h-[1300px] lg:h-[1380px] xl:h-[1220px] 2xl:h-[1160px] 3xl:h-[1084px]"
    >
      <div
        className="
          relative w-full h-full max-w-[430px] sm:max-w-[640px] md:max-w-[900px]
          lg:max-w-[1280px] xl:max-w-[1700px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
      >
        <div
          className="
            absolute top-0 h-full z-0 opacity-[0.15]
            left-[20px] sm:left-[40px] md:left-[80px] lg:left-[160px] xl:left-[260px] 2xl:left-[360px] 3xl:left-[414px]"
        >
          <DecorLines count={1} position="left" />
        </div>

        <div
          className="
            absolute top-0 h-full z-0 opacity-[0.15] right-[20px] sm:right-[40px] md:right-[80px]
            lg:right-[160px] xl:right-[280px] 2xl:right-[390px] 3xl:right-[451px]"
        >
          <DecorLines count={1} position="right" />
        </div>

        <div
          className="
            absolute left-0 w-full z-0 opacity-[0.15]
            top-[60px] sm:top-[70px] md:top-[90px] lg:top-[110px] xl:top-[130px] 2xl:top-[145px] 3xl:top-[151px]"
        >
          <DecorLines count={1} position="top" />
        </div>

        <div
          className="
            absolute left-0 w-full z-0 opacity-[0.15]
            top-[250px] sm:top-[280px] md:top-[320px] lg:top-[350px] xl:top-[380px] 2xl:top-[395px] 3xl:top-[403px]"
        >
          <DecorLines count={1} position="top" />
        </div>

        <div
          className="
            absolute left-0 w-full z-0 opacity-[0.15]
            bottom-[120px] sm:bottom-[130px] md:bottom-[145px] lg:bottom-[155px] xl:bottom-[162px] 2xl:bottom-[166px] 3xl:bottom-[168px]"
        >
          <DecorLines count={1} position="top" />
        </div>

        <div
          className="
            absolute left-0 w-full z-0 opacity-[0.15] bottom-[106px] sm:bottom-[116px] md:bottom-[131px]
            lg:bottom-[141px] xl:bottom-[148px] 2xl:bottom-[152px] 3xl:bottom-[154px]"
        >
          <DecorLines count={1} position="top" />
        </div>

        <div
          className="absolute left-0 w-full z-0 opacity-[0.15] bottom-[12px]"
        >
          <DecorLines count={1} position="top" />
        </div>

        <div className="hidden 3xl:block">
          <div className=" absolute left-[1087px] top-[571px] h-[290px] w-[1px] bg-[#EAEAEA]/15"/>

          <div className="absolute left-[1548px] top-[571px] h-[290px] w-[1px] bg-[#EAEAEA]/15"/>
          <h2
            className="absolute left-[713px] top-0 w-[1842px] h-[1024px] font-heading font-bold uppercase pointer-events-none select-none z-0 whitespace-nowrap"
            style={{
              fontSize: "400px",
              lineHeight: "512px",
              WebkitTextStroke: "2px rgba(228,228,228,0.18)",
              color: "transparent"
            }}
          >
            WHY
            <br />
            US
          </h2>
          <h3
            className="absolute left-[560px] top-[178px] font-heading font-normal uppercase text-white whitespace-nowrap z-10"
            style={{
              fontSize: "120px",
              lineHeight: "154px"
            }}
          >
            WHY US?
          </h3>

          <div className="absolute left-[560px] top-[480px] flex items-start gap-[86px] z-10">
            {items.map((item, i) => (
              <div
                key={i}
                className="relative w-[375px]"
              >
                <div className="h-[115px] flex items-center">
                  <img
                    src={item.icon}
                    alt=""
                    className={`
                      object-contain
                      ${
                        i === 0
                          ? "w-[98px] h-[98px]"
                          : i === 1
                          ? "w-[114px] h-[114px]"
                          : "w-[115px] h-[115px]"
                      }
                    `}
                  />
                </div>
                <h4
                  className="mt-[24px] font-heading font-normal uppercase text-white"
                  style={{
                    fontSize: "50px",
                    lineHeight: "64px"
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="mt-[31px] font-body font-normal text-white"
                  style={{
                    fontSize: "20px",
                    lineHeight: "25px"
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-[68px] z-10">
            <button
              className="
                w-[262px] h-[63px] border-[2px] border-white flex items-center justify-center
                font-body font-semibold uppercase text-white transition hover:bg-white hover:text-[#0FAC87]"
              style={{
                fontSize: "18px",
                lineHeight: "23px"
              }}
            >
              GET STARTED
            </button>
          </div>
        </div>
        <div className="3xl:hidden relative z-10 flex flex-col items-center">
          <h2
            className="
              absolute right-[-40px] top-[0px] font-heading font-bold uppercase
              pointer-events-none select-none text-white/10 whitespace-nowrap"
            style={{
              fontSize: "clamp(160px, 28vw, 360px)",
              lineHeight: "0.9",
              WebkitTextStroke: "2px rgba(228,228,228,0.12)",
              color: "transparent"
            }}
          >
            WHY
            <br />
            US
          </h2>
          <h3
            className="
              relative z-10 mt-[120px] sm:mt-[140px] md:mt-[170px] lg:mt-[190px]
              text-left font-heading font-normal uppercase text-white"
            style={{
              fontSize: "clamp(44px, 12vw, 92px)",
              lineHeight: "1"
            }}
          >
            WHY US?
          </h3>
          <div
            className="
              mt-[100px] sm:mt-[110px] md:mt-[120px] w-full
              grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
              gap-y-[90px] md:gap-y-[100px] gap-x-[70px]
              px-[40px] sm:px-[60px] md:px-[90px] lg:px-[140px] xl:px-[220px] 2xl:px-[320px]"
          >
            {items.map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                <div className="h-[100px] flex items-start justify-start">
                  <img
                    src={item.icon}
                    alt=""
                    className={`
                      object-contain
                      ${
                        i === 0
                          ? "w-[82px] h-[82px]"
                          : i === 1
                          ? "w-[94px] h-[94px]"
                          : "w-[96px] h-[96px]"
                      }
                    `}
                  />
                </div>
                <h4
                  className="mt-[22px] text-left font-heading font-normal uppercase text-white"
                  style={{
                    fontSize: "clamp(30px, 4vw, 42px)",
                    lineHeight: "1"
                  }}
                >
                  {item.title}
                </h4>
                <p
                  className="mt-[26px] text-left max-w-[360px] font-body font-normal text-white"
                  style={{
                    fontSize: "clamp(16px, 1.2vw, 19px)",
                    lineHeight: "25px"
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <button
            className="
              mt-[100px] md:mt-[110px] w-[240px] h-[58px] border-[2px] border-white
              flex items-center justify-center font-body font-semibold uppercase text-white
              transition hover:bg-white hover:text-[#0FAC87]"
            style={{
              fontSize: "17px",
              lineHeight: "22px"
            }}
          >
            GET STARTED
          </button>
        </div>
      </div>

    </section>
  );
}