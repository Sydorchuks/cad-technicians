import DecorLines from "../../components/ui/DecorLines/DecorLines";

export default function ContactBlock() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-white flex justify-center
        h-[1500px] sm:h-[1550px] md:h-[1650px] lg:h-[980px] xl:h-[1080px] 2xl:h-[1160px] 3xl:h-[1198px]"
    >
      <div
        className="
          relative h-full w-full max-w-[430px] sm:max-w-[640px] md:max-w-[900px] lg:max-w-[1280px]
          xl:max-w-[1800px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
      >
        <div className="absolute left-0 top-[40px] sm:top-[50px] md:top-[70px] lg:top-[90px] 3xl:top-[98px] w-full z-0">
          <DecorLines count={1} position="top" />
        </div>

        <div
          className="
            absolute top-0 h-full z-0 right-[20px] sm:right-[40px] md:right-[80px] lg:right-[140px]
            xl:right-[260px] 2xl:right-[410px] 3xl:right-[451px]"
        >
          <DecorLines count={1} position="right" />
        </div>

        <div
          className="
            hidden lg:block absolute z-0 left-[50%] -translate-x-1/2 xl:left-[52%]
            top-[120px] xl:top-[140px] 2xl:top-[160px] 3xl:top-[167px]
            h-[760px] xl:h-[860px] 2xl:h-[940px] 3xl:h-[1026px]"
        >
          <DecorLines count={1} position="center-vertical" />
        </div>

        <div className="absolute left-0 w-full z-0 bottom-[18px] sm:bottom-[20px] md:bottom-[24px] lg:bottom-[28px] 3xl:bottom-[31px]">
          <DecorLines count={6} position="bottom" />
        </div>

        <div
          className="
            absolute z-10 left-0 bg-[#0FAC87]
            top-[90px] sm:top-[110px] md:top-[130px] lg:top-[160px] xl:top-[170px] 3xl:top-[172px]
            w-full lg:w-[48%] xl:w-[52%] 3xl:w-[1249px]
            min-h-[520px] md:min-h-[560px] lg:min-h-[700px] xl:min-h-[760px] 3xl:h-[862px]"
        >
          <div className="absolute left-0 w-full h-[1px] top-[40px] md:top-[50px] 3xl:top-[63px] bg-white/30 " />
          <div className=" absolute left-0 w-[90%] xl:w-[110%] 3xl:w-[1341px] h-[1px] bottom-[50px] md:bottom-[70px] 3xl:bottom-[97px] bg-white/30" />
          <h2
            className="
              absolute left-[24px] sm:left-[40px] md:left-[60px] lg:left-[80px] xl:left-[180px] 2xl:left-[320px] 3xl:left-[549px]
              top-[60px] md:top-[80px] lg:top-[90px] 3xl:top-[108px] font-heading font-normal uppercase text-white"
            style={{
              fontSize: "clamp(42px, 5vw, 70px)",
              lineHeight: "1.2"
            }}
          >
            READY
            <br />
            TO START?
          </h2>
          <p
            className="
              absolute left-[24px] right-[24px] sm:left-[40px] sm:right-[40px] md:left-[60px] md:right-[60px] lg:left-[80px] lg:right-[80px]
              xl:left-[180px] xl:right-[120px] 2xl:left-[320px] 2xl:right-[120px] 3xl:left-[549px] 3xl:right-auto top-[220px] md:top-[250px]
              lg:top-[290px] 3xl:top-[329px] 3xl:w-[538px] font-body font-normal text-white"
            style={{
              fontSize: "clamp(16px, 1vw, 20px)",
              lineHeight: "30px"
            }}
          >
            Working with Survey Drafters allows you to save time and focus on building your business. With the ability to connect with us online
            and have a team of experienced drafters at your service, we think there’s no better partnership.
          </p>

          <button
            className="
              absolute left-[24px] sm:left-[40px] md:left-[60px] lg:left-[80px] xl:left-[180px] 2xl:left-[320px] 3xl:left-[549px]
              bottom-[50px] md:bottom-[70px] lg:bottom-[90px] 3xl:bottom-[286px] w-[220px] md:w-[240px] 3xl:w-[262px]
              h-[56px] 3xl:h-[63px] border-[2px] border-white 
              flex items-center justify-center font-body font-bold uppercase text-white transition-all duration-300 hover:bg-white hover:text-[#0FAC87]"
            style={{
              fontSize: "18px",
              lineHeight: "26px"
            }}
          >
            START PROJECT
          </button>
        </div>

        <div
          className="
            absolute z-10 left-[24px] right-[24px] sm:left-[40px] sm:right-[40px] md:left-[60px] md:right-[60px] lg:left-[56%] lg:right-[60px]
            xl:left-[60%] xl:right-[120px] 2xl:left-[64%] 2xl:right-[180px] 3xl:left-[1421px] 3xl:right-auto
            top-[700px] md:top-[760px] lg:top-[220px] xl:top-[240px] 2xl:top-[260px] 3xl:top-[274px] 3xl:w-[463px]"
        >
          <h2 className="font-heading font-normal uppercase text-[#1C2C57]"
            style={{
              fontSize: "clamp(42px, 5vw, 70px)",
              lineHeight: "1.2"
            }}
          >
            <span className="block">
              HAVE
            </span>

            <span className="block whitespace-nowrap">
              A QUESTION?
            </span>
          </h2>
          <form className="mt-[20px] md:mt-[24px] 3xl:mt-[27px] flex flex-col gap-[12px] 3xl:gap-[14px] ">
            <input
              type="text"
              placeholder="Name"
              className="w-full h-[64px] 3xl:h-[75px] border-[2px] border-[#EAEAEA] px-[24px] 3xl:pl-[40px] font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B] outline-none"
              style={{
                fontSize: "20px",
                lineHeight: "26px"
              }}
            />

            <input
              type="email"
              placeholder="Email"
              className="w-full h-[64px] 3xl:h-[75px] border-[2px] border-[#EAEAEA] px-[24px] 3xl:pl-[40px] font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B]outline-none"
              style={{
                fontSize: "20px",
                lineHeight: "26px"
              }}
            />

            <input
              type="text"
              placeholder="Phone"
              className="w-full h-[64px] 3xl:h-[75px] border-[2px] border-[#EAEAEA] px-[24px] 3xl:pl-[40px] font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B] outline-none"
              style={{
                fontSize: "20px",
                lineHeight: "26px"
              }}
            />

            <textarea
              placeholder="Type your question"
              className="
                w-full h-[160px] 3xl:h-[189px] border-[2px] border-[#EAEAEA] pt-[24px] pl-[24px] 3xl:pt-[40px] 3xl:pl-[40px] 
                resize-none outline-none font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B]"
              style={{
                fontSize: "20px",
                lineHeight: "26px"
              }}
            />

            <button
              className="
                mt-[18px] 3xl:mt-[22px] w-full h-[58px] 3xl:h-[63px] border-[2px] border-[#008767] flex items-center justify-center
                font-body font-bold uppercase text-[#008767] transition-all duration-300 hover:bg-[#008767] hover:text-white"
              style={{
                fontSize: "18px",
                lineHeight: "26px"
              }}
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}