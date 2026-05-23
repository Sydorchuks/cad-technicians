export default function ContactHero() {
    return (
      <section
        className="
          relative w-full overflow-hidden bg-white flex justify-center
          h-[600px] sm:h-[600px] md:h-[900px] lg:h-[879px] xl:h-[879px] 2xl:h-[879px] 3xl:h-[879px]"
      >
        <div
          className="
            relative w-full h-full max-w-[430px] sm:max-w-[640px] md:max-w-[900px]
            lg:max-w-[1280px] xl:max-w-[1700px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
        >
          <div className="hidden 3xl:block">
            <div
              className="absolute left-[526px] top-[292px] z-10"
            >
              <h1
                className="font-heading font-normal uppercase text-[#1C2C57] whitespace-nowrap"
                style={{
                  fontSize: "120px",
                  lineHeight: "154px"
                }}
              >
                CONTACT US
              </h1>
              <p
                className="mt-[20px] w-[753px] font-body font-normal text-[#1C2C57]"
                style={{
                  fontSize: "18px",
                  lineHeight: "26px"
                }}
              >
                Getting started with us couldn’t be easier, but we understand if you have a few questions.
                <br />
                Feel free to reach out and let us know how we can help.
              </p>
  
              <h2
                className="mt-[96px] font-heading font-semibold uppercase text-[#1C2C57]"
                style={{
                  fontSize: "35px",
                  lineHeight: "100%"
                }}
              >
                EMAIL
              </h2>
  
              <a
                href="mailto:support@cadtechnicians.com"
                className="mt-[17px] block w-fit font-body font-normal text-[#0FAC87]"
                style={{
                  fontSize: "18px",
                  lineHeight: "26px"
                }}
              >
                support@cadtechnicians.com
              </a>
            </div>
            <img
              src="/contact-hero-img.svg"
              alt=""
              className="absolute left-[1342px] top-[21px] w-[901px] h-[858px] object-contain z-10"
            />
          </div>

          {/* ADAPTIVE */}
          <div className="3xl:hidden relative w-full h-full">
            <div
              className="
                absolute z-10 left-1/2 -translate-x-1/2 top-[180px] sm:top-[200px] md:top-[220px]
                lg:left-[120px] lg:translate-x-0 lg:top-[240px] xl:left-[220px] 2xl:left-[220px]"
            >
              <h1
                className="font-heading font-normal uppercase text-[#1C2C57] text-center lg:text-left whitespace-nowrap"
                style={{
                  fontSize: "clamp(48px, 7vw, 100px)",
                  lineHeight: "100%"
                }}
              >
                CONTACT US
              </h1>
              <p
                className="
                  mt-[20px] w-[320px] sm:w-[420px] md:w-[560px] lg:w-[520px] xl:w-[620px] 2xl:w-[700px]
                  font-body font-normal text-[#1C2C57] text-left lg:text-left"
                style={{
                  fontSize: "clamp(16px, 1vw, 18px)",
                  lineHeight: "26px"
                }}
              >
                Getting started with us couldn’t be easier, but we understand if you have a few questions.
                <br />
                Feel free to reach out and let us know how we can help.
              </p>
  
              <h2
                className="mt-[72px] font-heading font-semibold uppercase text-[#1C2C57] text-center lg:text-left"
                style={{
                  fontSize: "clamp(24px, 3vw, 35px)",
                  lineHeight: "100%"
                }}
              >
                EMAIL
              </h2>
              <a
                href="mailto:support@cadtechnicians.com"
                className="mt-[17px] block font-body font-normal text-[#0FAC87] text-center lg:text-left"
                style={{
                  fontSize: "clamp(16px, 1vw, 18px)",
                  lineHeight: "26px"
                }}
              >
                support@cadtechnicians.com
              </a>
            </div>
            <img
              src="/contact-hero-img.svg"
              alt=""
              className="
                absolute hidden md:block left-1/2 -translate-x-1/2 bottom-0
                w-[320px] sm:w-[420px] md:w-[520px] lg:w-[520px] xl:w-[620px] 2xl:w-[760px]
                object-contain z-10 lg:left-auto lg:right-[80px] lg:translate-x-0 xl:right-[160px] 2xl:right-[220px]"
            />
          </div>
        </div>
      </section>
    );
  }