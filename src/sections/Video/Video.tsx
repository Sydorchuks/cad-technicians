import DecorLines from "../../components/ui/DecorLines/DecorLines";

export default function Video() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-[#0FAC87]
        h-[400px] sm:h-[450px] md:h-[660px] lg:h-[760px] xl:h-[900px] 2xl:h-[1049px]
        flex justify-center"
    >
      <div
        className="
          relative w-full h-full
          max-w-[430px] sm:max-w-[560px] md:max-w-[760px] lg:max-w-[1280px] xl:max-w-[1700px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
      >

        <div
          className="
            absolute top-0 h-full z-0 opacity-15
            left-[20px] sm:left-[40px] md:left-[80px] lg:left-[160px] xl:left-[260px] 2xl:left-[360px] 3xl:left-[414px]"
        >
          <DecorLines count={1} position="left" />
        </div>

        <div
          className="
            absolute top-0 h-full z-0 opacity-15
            right-[20px] sm:right-[40px] md:right-[80px] lg:right-[160px] xl:right-[280px] 2xl:right-[390px] 3xl:right-[451px]"
        >
          <DecorLines count={1} position="right" />
        </div>

        <div
          className="
            absolute left-0 w-full z-0 opacity-15
            top-[36px] sm:top-[40px] md:top-[45px] lg:top-[49px]"
        >
          <DecorLines count={1} position="top" />
        </div>

        <div
          className="
            absolute left-0 w-full z-0 opacity-15
            bottom-[24px] sm:bottom-[28px] md:bottom-[34px] lg:bottom-[41px]"
        >
          <div className="hidden lg:block">
            <DecorLines count={12} position="bottom" />
          </div>

          <div className="hidden md:block lg:hidden">
            <DecorLines count={8} position="bottom" />
          </div>

          <div className="hidden sm:block md:hidden">
            <DecorLines count={6} position="bottom" />
          </div>

          <div className="sm:hidden">
            <DecorLines count={4} position="bottom" />
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <h2
            className="
              mt-[56px] sm:mt-[68px] md:mt-[82px] lg:mt-[100px] 2xl:mt-[112px]
              text-center whitespace-nowrap font-heading font-normal uppercase text-white"
            style={{
              fontSize: "clamp(30px, 5vw, 70px)",
              lineHeight: "1.2"
            }}
          >
            VIDEO GUIDES
          </h2>
          <div
            className="
              relative z-20
              mt-[22px] sm:mt-[24px] md:mt-[28px] lg:mt-[32px] 2xl:mt-[34px]
              w-[260px] sm:w-[420px] md:w-[620px] lg:w-[860px] xl:w-[1050px] 2xl:w-[1283px]
              h-[180px] sm:h-[260px] md:h-[360px] lg:h-[500px] xl:h-[580px] 2xl:h-[691px]
              bg-[#0E9676] flex items-center justify-center"
          >

            <div
              className="
                rounded-full bg-[#178F73] flex items-center justify-center cursor-pointer transition hover:scale-[1.03]
                w-[60px] h-[60px] sm:w-[72px] sm:h-[72px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] 2xl:w-[126px] 2xl:h-[126px]"
            >
              <div
                className="
                  ml-[3px] w-0 h-0 border-t-[10px] border-t-transparent
                  border-b-[10px] border-b-transparent border-l-[16px] border-l-white
                  sm:border-t-[12px] sm:border-b-[12px] sm:border-l-[18px]
                  md:border-t-[16px] md:border-b-[16px] md:border-l-[24px]
                  2xl:border-t-[20.5px] 2xl:border-b-[20.5px] 2xl:border-l-[31px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}