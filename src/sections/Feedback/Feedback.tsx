import { useState, useEffect } from "react";
import DecorLines from "../../components/ui/DecorLines/DecorLines";

const feedbacks = [
  {
    title: "EXCEPTEUR SINT",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    author: "ANGELA SANTAMARIA"
  },
  {
    title: "EXCEPTEUR SINT",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    author: "JOHN DOE"
  },
  {
    title: "EXCEPTEUR SINT",
    text: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."`,
    author: "ANOTHER USER"
  }
];

const clients = [
  "/client-1.svg",
  "/client-2.svg",
  "/client-1.svg",
  "/client-2.svg",
  "/client-1.svg",
  "/client-2.svg",
  "/client-1.svg"
];

export default function Feedback() {
  const [index, setIndex] = useState(0);
  const [visibleClients, setVisibleClients] = useState(7);

  useEffect(() => {
    const updateClients = () => {
      if (window.innerWidth < 640) {
        setVisibleClients(2);
      } else if (window.innerWidth < 1440) {
        setVisibleClients(4);
      } else {
        setVisibleClients(7);
      }
    };

    updateClients();

    window.addEventListener("resize", updateClients);

    return () => {
      window.removeEventListener("resize", updateClients);
    };
  }, []);

  const prev = () => {
    setIndex((i) => (i === 0 ? feedbacks.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i + 1) % feedbacks.length);
  };

  const leftCard = feedbacks[index];
  const rightCard = feedbacks[(index + 1) % feedbacks.length];

  return (
    <section
      className="
        relative w-full overflow-hidden bg-white flex justify-center
        h-[800px] md:h-[800px] lg:h-[940px] xl:h-[1050px] 2xl:h-[1240px] 3xl:h-[1277px]"
    >
      <div
        className="
          relative h-full w-full max-w-[430px] sm:max-w-[640px] md:max-w-[1100px]
          lg:max-w-[1450px] xl:max-w-[1800px] 2xl:max-w-[2200px] 3xl:w-[2500px]  3xl:max-w-none"
      >
        <div
          className="
            absolute top-0 h-full z-0 right-[20px] sm:right-[40px] md:right-[80px] lg:right-[180px]
            xl:right-[320px] 2xl:right-[410px] 3xl:right-[451px]"
        >
          <DecorLines count={1} position="right" />
        </div>

        <h2
          className="
            absolute z-10 left-[20px] sm:left-[40px] md:left-[80px] lg:left-[120px] xl:left-[240px]  2xl:left-[420px] 3xl:left-[557px]
            top-[40px] sm:top-[50px] md:top-[60px] lg:top-[60px] xl:top-[100px] 2xl:top-[190px] 3xl:top-[208px]
            font-heading font-normal uppercase whitespace-nowrap text-[#1C2C57]"
          style={{
            fontSize: "clamp(42px, 6vw, 120px)",
            lineHeight: "1.28"
          }}
        >
          OUR FEEDBACK
        </h2>

        <div
          className="
            absolute left-0 w-full z-10 border-t border-b border-[#EAEAEA]
            top-[120px] sm:top-[180px] md:top-[180px] lg:top-[200px] xl:top-[300px] 2xl:top-[435px] 3xl:top-[453px]
            min-h-[320px] sm:min-h-[340px] md:min-h-[320px] lg:min-h-[400px] xl:min-h-[360px] 3xl:h-[393px]"
        >
          <button
            onClick={prev}
            className="
              absolute z-20 transition hover:opacity-70 
              left-[10px] sm:left-[14px] md:left-[18px] lg:left-[40px] xl:left-[140px] 2xl:left-[320px] 3xl:left-[580px]
              top-1/2 -translate-y-1/2 w-[20px] h-[40px] md:w-[24px] md:h-[48px] lg:w-[26px] lg:h-[52px] 3xl:w-[37px] 3xl:h-[71px]"
          >
            <img
              src="/arrow-left.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </button>

          <button
            onClick={next}
            className="
              absolute z-20 transition hover:opacity-70
              right-[10px] sm:right-[14px] md:right-[18px] lg:right-[40px] xl:right-[140px] 2xl:right-[320px] 3xl:right-[580px]
              top-1/2 -translate-y-1/2 w-[20px] h-[40px] md:w-[24px] md:h-[48px] lg:w-[26px] lg:h-[52px] 3xl:w-[37px]3xl:h-[71px]"
          >
            <img
              src="/arrow-right.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </button>

          <div
            className="
              relative z-10 flex flex-col lg:flex-row justify-center items-start
              gap-[28px] md:gap-[30px] lg:gap-[36px] xl:gap-[53px]
              pt-[20px] sm:pt-[24px] md:pt-[26px] lg:pt-[30px] xl:pt-[36px] 3xl:pt-[49px]
              pb-[18px] sm:pb-[20px] md:pb-[16px] lg:pb-[22px] xl:pb-[0px]
              px-[48px] sm:px-[70px]  md:px-[90px]  lg:px-[140px]  xl:px-[260px] 2xl:px-[420px] 3xl:px-0"
          >

            <div className="w-full lg:w-[400px] xl:w-[460px] 2xl:w-[520px] 3xl:w-[591px]">
              <h3
                className="font-body font-normal uppercase text-[#1C2C57]"
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  lineHeight: "1"
                }}
              >
                {leftCard.title}
              </h3>

              <p
                className="mt-[16px] sm:mt-[18px] md:mt-[20px] lg:mt-[24px] xl:mt-[30px] 3xl:mt-[39px] text-[#1C2C57] font-body font-normal"
                style={{
                  fontSize: "clamp(15px, 1vw, 18px)",
                  lineHeight: "26px"
                }}
              >
                {leftCard.text}
              </p>

              <span
                className="mt-[14px] sm:mt-[16px] lg:mt-[18px] 3xl:mt-[23px] flex items-center font-body font-bold uppercase text-[#1C2C57]"
                style={{
                  fontSize: "16px",
                  lineHeight: "20px"
                }}
              >
                {leftCard.author}
              </span>
            </div>

            <div className="hidden lg:block lg:w-[400px] xl:w-[460px] 2xl:w-[520px] 3xl:w-[591px]">
              <h3
                className="font-body font-normal uppercase text-[#1C2C57]"
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  lineHeight: "1"
                }}
              >
                {rightCard.title}
              </h3>

              <p
                className="
                  mt-[16px] sm:mt-[18px] md:mt-[20px] lg:mt-[24px] xl:mt-[30px] 3xl:mt-[39px]
                text-[#1C2C57] font-body font-normal"
                style={{
                  fontSize: "clamp(15px, 1vw, 18px)",
                  lineHeight: "26px"
                }}
              >
                {rightCard.text}
              </p>

              <span
                className="
                  mt-[14px] sm:mt-[16px] lg:mt-[18px] 3xl:mt-[23px] flex items-center font-body font-bold uppercase text-[#1C2C57]"
                style={{
                  fontSize: "16px",
                  lineHeight: "20px"
                }}
              >
                {rightCard.author}
              </span>
            </div>

          </div>

        </div>

        <div
          className="
            absolute z-10 bg-[#E8F4F1] left-[20px] right-0 
            sm:left-[40px] sm:right-0 md:left-[60px] md:right-0 
            lg:left-[120px] lg:right-0 xl:left-[220px] xl:right-0 2xl:left-[420px] 2xl:right-0 3xl:left-[580px] 3xl:right-[2px]
            top-[550px] sm:top-[550px] md:top-[550px] lg:top-[650px] xl:top-[720px] 2xl:top-[875px] 3xl:top-[894px]
            min-h-[200px] sm:min-h-[230px] md:min-h-[220px] lg:min-h-[300px] 3xl:h-[383px]"
        >
          <h3
            className="
              absolute z-20 left-[-6px] sm:left-[-10px] md:left-[-16px] lg:left-[-18px] xl:left-[-20px] 2xl:left-[0px] 3xl:left-[-23px]
              top-[24px] sm:top-[30px] md:top-[24px] lg:top-[34px]  xl:top-[50px]  3xl:top-[54px]
              font-heading font-normal uppercase text-[#1C2C57]
              text-[42px] sm:text-[48px] md:text-[52px] lg:text-[58px] xl:text-[64px] 3xl:text-[70px]"
            style={{
              lineHeight: "1.2"
            }}
          >
            OUR CLIENTS
          </h3>

          <div
            className="
              absolute left-[24px] right-[24px] sm:left-[40px] sm:right-[40px] md:left-[60px] md:right-[60px]
              lg:left-[80px] lg:right-[80px] xl:left-[40px] xl:right-[40px]
              top-[110px] sm:top-[130px]  md:top-[120px]  lg:top-[140px] xl:top-[160px] 3xl:top-[201px]
              flex flex-wrap items-center gap-x-[40px] gap-y-[24px] lg:gap-x-[60px] xl:gap-x-[84px]"
          >

            {clients.slice(0, visibleClients).map((client, i) => (
              <img
                key={i}
                src={client}
                alt=""
                className={`
                  object-contain opacity-50

                  ${i % 2 === 0
                    ? "w-[72px] h-[72px] lg:w-[90px] lg:h-[92px] 3xl:w-[99px] 3xl:h-[101px]"
                    : "w-[70px] h-[70px] lg:w-[88px] lg:h-[88px] 3xl:w-[98px] 3xl:h-[98px]"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}