import Container from "../../components/ui/Container/Container";
import DecorLines from "../../components/ui/DecorLines/DecorLines";

interface Props {
  bgText: string;
  title: string;
  description?: string;

  linesBottom?: number;
  leftLine?: number;
 rightLine?: number;
  topLine?: number;
  centerHLine?: number;
}

export default function GenericHero({
  bgText,
  title,
  description,

  linesBottom = 6,
  leftLine,
  rightLine,
  topLine,
  centerHLine
}: Props) {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-[#0FAC87] flex justify-center
        h-[550px] sm:h-[580px] md:h-[640px] lg:h-[700px] xl:h-[760px] 2xl:h-[790px] 3xl:h-[816px]"
    >
      <div
        className="
          relative w-full h-full max-w-[430px] sm:max-w-[560px] md:max-w-[760px]
          lg:max-w-[1280px] xl:max-w-[1700px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
      >
        {topLine && (
        <div
          className="
            absolute left-0 w-full z-0 opacity-15
            top-[36px] sm:top-[40px] md:top-[45px] lg:top-[49px] 2xl:top-[55px] 3xl:top-[55px]"
        >
          <DecorLines
            count={topLine}
            position="top"
          />
        </div>
      )}

      {leftLine && (
        <div
          className="
            absolute top-0 h-full z-0 opacity-15
            left-[20px] sm:left-[40px] md:left-[80px] lg:left-[160px] xl:left-[260px] 2xl:left-[360px] 3xl:left-[414px]"
        >
          <DecorLines
            count={leftLine}
            position="left"
          />
        </div>
      )}

      {rightLine && (
        <div
          className="
            absolute top-0 h-full z-0 opacity-15
            right-[20px] sm:right-[40px] md:right-[80px] lg:right-[160px] xl:right-[280px] 2xl:right-[390px] 3xl:right-[451px]"
        >
          <DecorLines
            count={rightLine}
            position="right"
          />
        </div>
      )}

      {centerHLine && (
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-0 h-full z-0 opacity-15"
        >
          <DecorLines
            count={centerHLine}
            position="center-horizontal"
          />
        </div>
      )}

      {linesBottom && (
        <div
          className="
            absolute left-0 w-full z-0 opacity-15
            bottom-[24px] sm:bottom-[28px] md:bottom-[34px] lg:bottom-[41px] 2xl:bottom-[52px] 3xl:bottom-[58px]"
        >
          <DecorLines
            count={linesBottom}
            position="bottom"
          />
        </div>
      )}

        <h1
          className="
            absolute z-0 pointer-events-none select-none uppercase whitespace-nowrap font-heading font-bold leading-none
            left-[20px] top-[140px] sm:left-[40px] sm:top-[150px] md:left-[80px] md:top-[140px] lg:left-[120px] lg:top-[120px]
            xl:left-[180px] xl:top-[120px] 2xl:left-[240px] 2xl:top-[120px] 3xl:left-[277px] 3xl:top-[130px]"
          style={{
            fontSize: "clamp(120px, 22vw, 400px)",
            WebkitTextStroke: "1px rgba(255,255,255,0.4)",
            color: "transparent",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 72%, transparent 100%)",
            maskImage:
              "linear-gradient(to bottom, black 72%, transparent 100%)"
          }}
        >
          {bgText}
        </h1>

        <Container className="!px-0">
          <div className="relative z-10 w-full h-full flex flex-col items-center">
            <h2
              className="
                absolute left-1/2 -translate-x-1/2 text-center font-heading font-normal uppercase text-white whitespace-nowrap
                top-[240px] sm:top-[270px] md:top-[290px] lg:top-[310px] xl:top-[330px] 2xl:top-[340px] 3xl:top-[347px]"
              style={{
                fontSize: "clamp(44px, 6vw, 120px)",
                lineHeight: "1"
              }}
            >
              {title}
            </h2>

            {description && (
              <p
                className="
                  absolute left-1/2  -translate-x-1/2 text-center font-body font-normal text-[#FFFFFF] 
                  w-[400px] sm:w-[420px] md:w-[560px] lg:w-[620px] xl:w-[720px] 2xl:w-[820px] 3xl:w-[920px]
                  top-[320px] sm:top-[360px] md:top-[390px] lg:top-[430px] xl:top-[470px] 2xl:top-[500px] 3xl:top-[521px]"
                style={{
                  fontSize: "clamp(14px, 1vw, 18px)",
                  lineHeight: "26px"
                }}
              >
                {description}
              </p>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}