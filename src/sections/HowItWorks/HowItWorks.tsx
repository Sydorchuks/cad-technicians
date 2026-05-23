import DecorLines from "../../components/ui/DecorLines/DecorLines";

const steps = [
  {
    id: 1,
    icon: "/hiw-1.svg",
    text: "Register your account through a fast, easy, and secure process. We’ve worked with dozens of land surveying businesses across the country."
  },
  {
    id: 2,
    icon: "/hiw-2.svg",
    text: "Upload your data files. We’ll create an AutoCAD drawing for you to approve. Survey Drafters works efficiently to reduce your turnaround time with clients."
  },
  {
    id: 3,
    icon: "/hiw-3.svg",
    text: "Submit your payment through our secure system. Our low prices save you time and overhead, allowing you to focus on building your business."
  },
  {
    id: 4,
    icon: "/hiw-4.svg",
    text: "Receive your professionally generated PDF and DWG files. Everything is completed electronically for your convenience."
  }
];

export default function HowItWorks() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-white
        h-[1450px] md:h-[1480px] lg:h-[1180px]
        xl:h-[1120px] 2xl:h-[1120px] 3xl:h-[1156px]
        flex justify-center"
    >
      <div
        className="
          relative w-full h-full shrink-0 max-w-[430px] md:max-w-[760px]
          lg:max-w-[1280px] xl:max-w-[1700px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
      >
        <div
          className="
            absolute top-0 h-full z-0 left-[20px] md:left-[80px] 
            lg:left-[160px] xl:left-[260px] 2xl:left-[360px] 3xl:left-[414px]"
        >
          <DecorLines count={1} position="left" />
        </div>

        <div
          className="
            absolute top-0 h-full z-0 right-[20px] md:right-[80px] 
            lg:right-[160px] xl:right-[280px] 2xl:right-[390px] 3xl:right-[451px]"
        >
          <DecorLines count={1} position="right" />
        </div>

        <div
          className="
            absolute left-1/2 -translate-x-1/2 z-0 top-[1180px] md:top-[1230px]
            lg:top-[860px] xl:top-[820px] 2xl:top-[790px] 3xl:top-[782px]
            h-[470px] md:h-[470px] lg:h-[320px] xl:h-[300px] 2xl:h-[380px] 3xl:h-[374px]"
        >
          <DecorLines count={1} position="center-horizontal" />
        </div>

        <h2
          className="
            absolute z-[1] font-heading font-bold uppercase pointer-events-none select-none
            left-[20px] md:left-[60px] lg:left-[70px] xl:left-[120px] 2xl:left-[200px] 3xl:left-[252px]
            leading-[0.9] text-left whitespace-normal xl:whitespace-nowrap"
          style={{
            fontSize: "clamp(120px, 18vw, 500px)",
            WebkitTextStroke: "1.5px rgba(228,228,228,0.66)",
            color: "transparent"
          }}
        >
          <span className="block xl:inline">HOW IT</span>

          <span className="block xl:inline 3xl:ml-[20px]">
            WORKS
          </span>
        </h2>

        <h3
          className="
            absolute z-20 font-heading font-normal uppercase text-[#1C2C57] whitespace-nowrap
            left-[16px] md:left-[80px] lg:left-[140px] xl:left-[280px] 2xl:left-[520px] 3xl:left-[792px]
            top-[300px] md:top-[220px] lg:top-[185px] xl:top-[188px] 2xl:top-[189px] 3xl:top-[190px]"
          style={{
            fontSize: "clamp(46px, 8vw, 120px)",
            lineHeight: "1.15"
          }}
        >
          HOW IT WORKS
        </h3>

        <div className="hidden 3xl:block">
          <div className="absolute left-[632px] top-[449px] z-20">
            <span
              className="absolute left-0 top-0 font-heading font-bold uppercase text-[#F1F1F1] leading-none"
              style={{
                fontSize: "200px",
                lineHeight: "256px"
              }}
            >
              1
            </span>

            <div className="absolute left-[65px] top-[35px]">

              <img
                src={steps[0].icon}
                alt=""
                className="w-[92px] h-[92px] object-contain"
              />

              <p
                className="mt-[17px] w-[444px] text-[#1C2C57] font-body font-normal "
                style={{
                  fontSize: "20px",
                  lineHeight: "25px"
                }}
              >
                {steps[0].text}
              </p>
            </div>
          </div>

          <div className="absolute left-[1318px] top-[449px] z-20">
            <span
              className="absolute left-0 top-0 font-heading font-bold uppercase text-[#F1F1F1] leading-none"
              style={{
                fontSize: "200px",
                lineHeight: "256px"
              }}
            >
              2
            </span>

            <div className="absolute left-[66px] top-[43px]">
              <img
                src={steps[1].icon}
                alt=""
                className="w-[83px] h-[83px] object-contain"
              />

              <p
                className="mt-[20px] w-[505px] text-[#1C2C57] font-body font-normal"
                style={{
                  fontSize: "20px",
                  lineHeight: "25px"
                }}
              >
                {steps[1].text}
              </p>
            </div>
          </div>

          <div className="absolute left-[632px] top-[799px] z-20">
            <span
              className="absolute left-0 top-0 font-heading font-bold uppercase text-[#F1F1F1] leading-none"
              style={{
                fontSize: "200px",
                lineHeight: "256px"
              }}
            >
              3
            </span>

            <div className="absolute left-[56px] top-[33px]">
              <img
                src={steps[2].icon}
                alt=""
                className="w-[98px] h-[98px] object-contain"
              />
              <p
                className="mt-[15px] w-[463px] text-[#1C2C57] font-body font-normal"
                style={{
                  fontSize: "20px",
                  lineHeight: "25px"
                }}
              >
                {steps[2].text}
              </p>
            </div>
          </div>

          <div className="absolute left-[1324px] top-[802px] z-20">
            <span
              className="absolute left-0 top-0 font-heading font-bold uppercase text-[#F1F1F1] leading-none"
              style={{
                fontSize: "200px",
                lineHeight: "256px"
              }}
            >
              4
            </span>

            <div className="absolute left-[55px] top-[45px]">
              <img
                src={steps[3].icon}
                alt=""
                className="w-[91px] h-[91px] object-contain"
              />
              <p
                className="mt-[10px] w-[504px] text-[#1C2C57]font-body font-normal"
                style={{
                  fontSize: "20px",
                  lineHeight: "25px"
                }}
              >
                {steps[3].text}
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            3xl:hidden absolute z-20
            left-[18px] md:left-[90px] lg:left-[120px] xl:left-[180px] 2xl:left-[280px]
            top-[420px] md:top-[420px] lg:top-[360px] xl:top-[390px] 2xl:top-[430px]
            grid grid-cols-1 lg:grid-cols-2 gap-y-[80px] md:gap-y-[60px] lg:gap-y-[120px] xl:gap-y-[110px] 2xl:gap-y-[120px]
            lg:gap-x-[90px] xl:gap-x-[120px]2xl:gap-x-[150px]"
        >
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative w-[320px] md:w-[500px] lg:w-[420px] xl:w-[470px] 2xl:w-[520px] h-[170px] md:h-[190px] xl:h-[210px]"
            >
              <span
                className="absolute left-0 top-0 font-heading font-bold uppercase text-[#F1F1F1] leading-none select-none"
                style={{
                  fontSize: "clamp(120px, 10vw, 180px)",
                  lineHeight: "1"
                }}
              >
                {step.id}
              </span>

              <div className="absolute left-[58px] md:left-[72px] xl:left-[78px] top-[24px] md:top-[34px] xl:top-[38px]">
                <img
                  src={step.icon}
                  alt=""
                  className="w-[72px] h-[72px] md:w-[82px] md:h-[82px] xl:w-[86px] xl:h-[86px] object-contain"/>
                <p
                  className="mt-[16px] w-[250px] md:w-[360px] lg:w-[300px] xl:w-[360px] 2xl:w-[420px] text-[#1C2C57] font-body font-normal"
                  style={{
                    fontSize: "clamp(15px, 1vw, 20px)",
                    lineHeight: "25px"
                  }}
                >
                  {step.text}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}