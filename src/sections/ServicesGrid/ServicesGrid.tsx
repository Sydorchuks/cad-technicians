import DecorLines from "../../components/ui/DecorLines/DecorLines";

const services = [
  {
    title: "EXPERIENCE",
    text: "Our professionals have decades of combined experience, ensuring your drawings are precisely what you need. We pride ourselves on the quality of our team.",
    icon: "/icon-1.svg"
  },
  {
    title: "RELIABILITY",
    text: "At Survey Drafters we mean what we say, and every project we take on will be completed with unparalleled expertise. We've been in business for years and stand by our word.",
    icon: "/icon-2.svg"
  },
  {
    title: "LOWER YOUR OVERHEAD",
    text: "Don’t worry about equipment or office overhead, as we handle the day to day necessities, allowing you to do what you do best.",
    icon: "/icon-3.svg"
  },
  {
    title: "PROFESSIONALISM",
    text: "The team at Survey Drafters always communicates with our clients from a place of respect and professionalism.",
    icon: "/icon-4.svg"
  },
  {
    title: "STREAMLINED SERVICE",
    text: "We make the land surveying process simple. All you have to do is provide us with your data and we deliver impeccable AutoCAD drawings.",
    icon: "/icon-5.svg"
  },
  {
    title: "AUTOCAD LICENSING",
    text: "Software licensing can be expensive, so let Survey Drafters take care of that for you.",
    icon: "/icon-6.svg"
  },
  {
    title: "EFFICIENCY",
    text: "Too many job sites to visit this week? Offload some of your time consuming tasks to us.",
    icon: "/icon-7.svg"
  },
  {
    title: "TEAMWORK",
    text: "Survey Drafters is built from a dedicated team of drafters that love what they do.",
    icon: "/icon-8.svg"
  }
];

const positions = [
  {
    left: 501,
    iconTop: 81,
    titleTop: 170,
    textTop: 272
  },
  {
    left: 904,
    iconTop: 81,
    titleTop: 170,
    textTop: 272
  },
  {
    left: 1307,
    iconTop: 81,
    titleTop: 170,
    textTop: 272
  },
  {
    left: 1710,
    iconTop: 81,
    titleTop: 170,
    textTop: 272
  },
  {
    left: 501,
    iconTop: 535,
    titleTop: 624,
    textTop: 726
  },
  {
    left: 904,
    iconTop: 535,
    titleTop: 624,
    textTop: 726
  },
  {
    left: 1307,
    iconTop: 535,
    titleTop: 624,
    textTop: 726
  },
  {
    left: 1710,
    iconTop: 535,
    titleTop: 624,
    textTop: 726
  }
];

export default function ServicesGrid() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-white flex justify-center
        h-[3100px] sm:h-[3100px] md:h-[1900px] lg:h-[1900px] xl:h-[1550px] 2xl:h-[1550px] 3xl:h-[994px]"
    >
      <div
        className="
          relative w-full h-full max-w-[430px] sm:max-w-[640px] md:max-w-[900px]
          lg:max-w-[1280px] xl:max-w-[1700px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
      >
        <div
          className="
            absolute top-0 h-full z-0 left-[20px] sm:left-[40px] md:left-[80px] 
            lg:left-[160px] xl:left-[260px] 2xl:left-[360px] 3xl:left-[414px]"
        >
          <DecorLines count={1} position="left" />
        </div>

        <div
          className="
            absolute top-0 h-full z-0 right-[20px] sm:right-[40px] md:right-[80px] 
            lg:right-[160px] xl:right-[280px] 2xl:right-[390px] 3xl:right-[451px]"
        >
          <DecorLines count={1} position="right" />
        </div>

        {/**ADAPTIVE */}
        <div className="hidden 3xl:block">
          <div className="absolute left-[1249px] top-[501px] h-[1px] w-full -translate-x-1/2 z-0">
            <DecorLines count={1} position="center-horizontal" />
          </div>

          <div className="absolute left-0 bottom-[31px] w-full z-0">
            <DecorLines count={2} position="bottom" />
          </div>

          <div className="absolute left-[818px] top-0 h-full w-[1px] bg-[#EAEAEA]"/>
          <div className="absolute left-[1221px] top-0 h-full w-[1px] bg-[#EAEAEA]"/>
          <div className="absolute left-[1624px] top-0 h-full w-[1px] bg-[#EAEAEA]"/>

          {services.map((item, i) => (
            <div
              key={i}
              className="absolute w-[289px]"
              style={{
                left: `${positions[i].left}px`
              }}
            >
              <img
                src={item.icon}
                alt=""
                className="absolute left-0 w-[74px] h-[74px] object-contain block"
                style={{
                  top: `${positions[i].iconTop}px`
                }}
              />

              <h3
                className="absolute left-0 w-[289px] font-heading font-semibold uppercase text-[#1C2C57] "
                style={{
                  top: `${positions[i].titleTop}px`,
                  fontSize: "30px",
                  lineHeight: "100%"
                }}
              >
                {item.title}
              </h3>

              <p
                className="absolute left-0 w-[289px] font-body font-normal text-[#1C2C57]"
                style={{
                  top: `${positions[i].textTop}px`,
                  fontSize: "20px",
                  lineHeight: "25px"
                }}
              >
                {item.text}
              </p>

            </div>
          ))}
        </div>
        <div
          className="
            3xl:hidden grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3
            gap-y-[80px] md:gap-y-[100px] xl:gap-y-[120px] gap-x-[40px] md:gap-x-[60px] xl:gap-x-[80px]
            pt-[120px] sm:pt-[140px] md:pt-[160px] lg:pt-[180px]
            px-[40px] sm:px-[60px] md:px-[90px] lg:px-[140px] xl:px-[220px] 2xl:px-[320px]"
        >
          {services.map((item, i) => (
            <div
              key={i}
              className="relative min-h-[300px] md:min-h-[340px] xl:min-h-[360px]"
            >
              <img
                src={item.icon}
                alt=""
                className="w-[64px] h-[64px] md:w-[70px] md:h-[70px] object-contain block"
              />
              <h3
                className="
                  mt-[20px] font-heading font-semibold uppercase text-[#1C2C57]
                  text-[24px] md:text-[26px] xl:text-[28px] leading-[100%]"
              >
                {item.title}
              </h3>
              <p
                className="
                  mt-[40px] w-full font-body font-normal text-[#1C2C57]
                  text-[17px] md:text-[18px] xl:text-[19px] leading-[25px]"
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}