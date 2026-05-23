import Container from "../../components/ui/Container/Container";
import HighlightText from "../../components/ui/HighlightText/HighlightText";

export default function Hero() {
  return (
    <section
      className="
        relative bg-primary overflow-hidden min-h-fit pb-[40px] 
        sm:min-h-[760px] md:min-h-[900px] lg:min-h-[820px] xl:min-h-[920px] 2xl:min-h-[1020px] 3xl:h-[1080px]"
    >
      <h1
        className="
          absolute left-0 top-[120px] text-[120px] leading-none font-bold uppercase font-lora
          pointer-events-none select-none z-0 whitespace-nowrap opacity-[0.12]
          sm:text-[150px] md:text-[220px] lg:text-[240px] xl:text-[320px] 2xl:text-[420px] 3xl:text-[500px] 3xl:top-[95px]"
        style={{
          WebkitTextStroke: "2px rgba(255,255,255,0.18)",
          color: "transparent",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, black 70%, transparent 100%)"
        }}
      >
        TECHNICIANS
      </h1>

      <Container className="!xl:px-[80px] !2xl:px-[120px] !3xl:px-[448px]">
        <div
          className="
            relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-start
            gap-[24px] sm:gap-[32px] md:gap-[36px] lg:gap-[24px] xl:gap-[28px] 2xl:gap-[32px] 3xl:gap-[36px]
            pt-[120px] sm:pt-[140px] md:pt-[150px] lg:pt-[220px] xl:pt-[260px] 2xl:pt-[300px]3xl:pt-[208px]"
        >
          <div
            className="
              relative z-20
              max-w-full sm:max-w-[90%] md:max-w-[100%] lg:max-w-[500px] xl:max-w-[620px] 2xl:max-w-[760px] 3xl:max-w-[684px]"
          >
            <p
              className="
                text-white font-body font-normal text-[24px] leading-[1.08]
                sm:text-[30px] md:text-[40px] lg:text-[32px] xl:text-[38px] 2xl:text-[46px] 2xl:leading-[1.08] 3xl:text-[50px] 3xl:leading-[51px]"
            >
              With decades of experience
              <br />
              working with land surveyors,
              <br />
              we provide precise AutoCAD
              <br />
              drawings that offer
              <br />
              high-quality{" "}
              <HighlightText>professionalism</HighlightText>
              <br />
              at a <HighlightText>reasonable price</HighlightText>
            </p>

            <button
              className="
                mt-[20px] xl:mt-[26px] 2xl:mt-[32px] 3xl:mt-[40px] text-white font-bold uppercase
                text-[13px] sm:text-[14px] md:text-[16px] lg:text-[16px] xl:text-[18px] 2xl:text-[19px] 3xl:text-[20px]
                relative after:content-[''] 
                after:block after:w-[60px] sm:after:w-[70px] md:after:w-[80px] lg:after:w-[85px]
                xl:after:w-[95px] 2xl:after:w-[105px] 3xl:after:w-[110px] 
                after:h-[2px] after:bg-white after:mt-[8px] 3xl:leading-[26px]"
            >
              TRY IT NOW
            </button>
          </div>

          <img
            src="/hero-map.svg"
            alt=""
            className="
              relative z-10 w-[260px] sm:w-[360px] md:w-[520px] 
              lg:w-[460px] xl:w-[560px] 2xl:w-[700px] 3xl:w-[847px]
              flex-shrink-0 block self-center lg:self-auto"
          />
        </div>
      </Container>
    </section>
  )
}