export default function ContactFormBlock() {
    return (
      <section
        className="
          relative w-full overflow-hidden bg-white flex justify-center
          h-[950px] sm:h-[920px] md:h-[980px] lg:h-[980px] xl:h-[950px] 2xl:h-[938px] 3xl:h-[938px]"
      >
        <div
          className="
            relative w-full h-full max-w-[430px] sm:max-w-[640px] md:max-w-[900px]
            lg:max-w-[1280px] xl:max-w-[1700px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none"
        >
          <div className="absolute left-0 w-full z-0 top-[19px] ">
            <div className="h-[1px] w-full bg-[#EAEAEA]" />
          </div>
          <div className="absolute left-0 w-full z-0 bottom-[27px]">
            <div className="space-y-[9px]">
              <div className="h-[1px] w-full bg-[#EAEAEA]" />
              <div className="h-[1px] w-full bg-[#EAEAEA]" />
              <div className="h-[1px] w-full bg-[#EAEAEA]" />
              <div className="h-[1px] w-full bg-[#EAEAEA]" />
              <div className="h-[1px] w-full bg-[#EAEAEA]" />
              <div className="h-[1px] w-full bg-[#EAEAEA]" />

            </div>

          </div>
          <div className="hidden 3xl:block">
            <div className="absolute left-[1019px] top-[60px] w-[463px]">
              <h2 className="w-[420px] font-heading font-normal uppercase text-[#1C2C57]"
                style={{
                  fontSize: "70px",
                  lineHeight: "90px"
                }}
              >
                <span className="block">
                  HAVE
                </span>
  
                <span className="block whitespace-nowrap">
                  A QUESTION?
                </span>
              </h2>
  
              <form className="mt-[27px] flex flex-col gap-[14px]">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-[463px] h-[75px] border-[2px] border-[#EAEAEA] pl-[40px] font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B] outline-none"
                  style={{
                    fontSize: "20px",
                    lineHeight: "26px"
                  }}
                />
  
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[463px] h-[75px] border-[2px] border-[#EAEAEA] pl-[40px] font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B]outline-none"
                  style={{
                    fontSize: "20px",
                    lineHeight: "26px"
                  }}
                />
  
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-[463px] h-[75px] border-[2px] border-[#EAEAEA] pl-[40px] font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B]outline-none"
                  style={{
                    fontSize: "20px",
                    lineHeight: "26px"
                  }}
                />
  
                <textarea
                  placeholder="Type your question"
                  className="w-[463px] h-[189px] border-[2px] border-[#EAEAEA] pt-[40px] pl-[40px] resize-none outline-none font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B]"
                  style={{
                    fontSize: "20px",
                    lineHeight: "26px"
                  }}
                />
  
                <button
                  className="
                    mt-[22px] w-[463px] h-[63px] border-[2px] border-[#008767]
                    flex items-center justify-center font-body font-bold uppercase
                    text-[#008767] transition-all duration-300 hover:bg-[#008767] hover:text-white"
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
  
          {/* ADAPTIVE */}
  
          <div className="3xl:hidden relative z-10 flex justify-center">
            <div
              className="
                w-full max-w-[320px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[560px] xl:max-w-[600px]
                pt-[120px] sm:pt-[130px] md:pt-[140px] lg:pt-[120px] "
            >
              <h2
                className="font-heading font-normal uppercase text-[#1C2C57] text-center"
                style={{
                  fontSize: "clamp(42px, 6vw, 70px)",
                  lineHeight: "110%"
                }}
              >
                <span className="block">
                  HAVE
                </span>
  
                <span className="block">
                  A QUESTION?
                </span>
              </h2>
  
              <form
                className=" mt-[32px] flex flex-col gap-[14px] "
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="
                    w-full h-[62px] sm:h-[66px] md:h-[72px] border-[2px] border-[#EAEAEA] px-[24px] 
                    font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B] outline-none"
                  style={{
                    fontSize: "18px",
                    lineHeight: "26px"
                  }}
                />
  
                <input
                  type="email"
                  placeholder="Email"
                  className="
                    w-full h-[62px] sm:h-[66px] md:h-[72px] border-[2px] border-[#EAEAEA] px-[24px]
                    font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B] outline-none"
                  style={{
                    fontSize: "18px",
                    lineHeight: "26px"
                  }}
                />
  
                <input
                  type="text"
                  placeholder="Phone"
                  className="
                    w-full h-[62px] sm:h-[66px] md:h-[72px] border-[2px] border-[#EAEAEA] px-[24px]
                    font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B] outline-none"
                  style={{
                    fontSize: "18px",
                    lineHeight: "26px"
                  }}
                />
  
                <textarea
                  placeholder="Type your question"
                  className="
                    w-full h-[170px] sm:h-[180px] md:h-[200px] border-[2px] border-[#EAEAEA]
                    pt-[24px] px-[24px] resize-none outline-none font-body font-normal text-[#1C2C57] placeholder:text-[#9B9B9B]"
                  style={{
                    fontSize: "18px",
                    lineHeight: "26px"
                  }}
                />
  
                <button
                  className="
                    mt-[18px] w-full h-[60px] sm:h-[63px] border-[2px] border-[#008767] flex items-center justify-center
                    font-body font-bold uppercase text-[#008767] transition-all duration-300 hover:bg-[#008767] hover:text-white "
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
        </div>

      </section>
    );
  }