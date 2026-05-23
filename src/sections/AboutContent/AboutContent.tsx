import DecorLines from "../../components/ui/DecorLines/DecorLines";

export default function AboutContent() {
  return (
    <section
      className="
        relative w-full overflow-hidden bg-white flex justify-center
        h-[1700px] sm:h-[1750px] md:h-[1800px] lg:h-[1850px] xl:h-[1180px] 2xl:h-[1120px] 3xl:h-[1036px]"
    >
      <div
        className="
          relative w-full h-full max-w-[430px] sm:max-w-[640px] md:max-w-[900px] lg:max-w-[1280px]
          xl:max-w-[1700px] 2xl:max-w-[2200px] 3xl:w-[2500px] 3xl:max-w-none
        "
      >
        <div
          className="
            absolute left-0 w-full z-0
            top-[36px] sm:top-[40px] md:top-[45px] lg:top-[60px] xl:top-[78px] 2xl:top-[90px] 3xl:top-[101px]"
        >
          <DecorLines count={1} position="top" />
        </div>
        <div
          className="
            absolute top-0 h-full z-0 right-[20px] sm:right-[40px] md:right-[80px]
            lg:right-[160px] xl:right-[280px] 2xl:right-[390px] 3xl:right-[451px]"
        >
          <DecorLines count={1} position="right" />
        </div>
        <div
          className="
            absolute left-0 w-full z-0
            bottom-[24px] sm:bottom-[28px] md:bottom-[34px] lg:bottom-[42px] xl:bottom-[50px] 2xl:bottom-[54px] 3xl:bottom-[58px]"
        >
          <DecorLines count={4} position="bottom" />
        </div>

        <div className="hidden 3xl:block">
          <img
            src="/about-img.svg"
            alt=""
            className="absolute left-0 top-0 w-[773px] h-[978px] object-cover"
          />

          <div
            className="absolute left-[926px] top-[190px] w-[943px] text-[#1C2C57] font-body font-normal"
            style={{
              fontSize: "18px",
              lineHeight: "26px"
            }}
          >
            <p>
              When it comes to accurate AutoCAD drawings, you can’t afford to make a mistake or spend massive amounts of time on it. 
              How do you find the balance? At Survey Drafters we take out the guesswork by using your field data to create high-quality
              PDF and DWG files. We save you time and money, allowing you to maximize your business and increase client satisfaction.
            </p>
            <div className="h-[52px]" />

            <p>
              Think about your most recent client - picture in your mind how long it took for you to take field measurements and how much 
              longer it was to produce your AutoCAD drawings. Did you have other clients that had to wait until this particular project was 
              finished? Did it take longer than you thought it would?
            </p>
            <div className="h-[26px]" />

            <p>
              When it comes to running a successful land surveying company, you have to navigate a fine balance of efficiency and quality, 
              all the while trying to build your business. For most, they find they need a partner to turn to.
            </p>
            <div className="h-[26px]" />

            <p>
              That’s where Survey Drafters comes in, with a team of experienced drafters at the ready to turn your data into a completed project.
              How can you benefit?
            </p>
            <div className="h-[40px]" />

            <ul className="space-y-[8px]">
              <li className="flex items-start gap-[14px]">
                <span className="text-[#0FAC87] leading-[26px] flex-shrink-0">
                  •
                </span>
                <span>
                  You save on overhead - no longer do you have to rent a large
                  office space for all of your drafters
                </span>
              </li>

              <li className="flex items-start gap-[14px]">
                <span className="text-[#0FAC87] leading-[26px] flex-shrink-0">
                  •
                </span>

                <span>
                  You save time - we take the AutoCAD work off of your hands
                </span>
              </li>

              <li className="flex items-start gap-[14px]">
                <span className="text-[#0FAC87] leading-[26px] flex-shrink-0">
                  •
                </span>

                <span> You increase client satisfaction - our goal is to complete your drawings efficiently, allowing you to complete your projects more quickly </span>
              </li>

              <li className="flex items-start gap-[14px]">
                <span className="text-[#0FAC87] leading-[26px] flex-shrink-0">
                  •
                </span>

                <span> You save money - stop paying for expensive software licensing and let Survey Drafters do the work </span>
              </li>
            </ul>

            <div className="h-[26px]" />
            <p>
              We’ve partnered with businesses across the nation and have an easy online process to get your project started right away. Stop spending
              your time sitting in front of a computer and start building your business!
            </p>
          </div>
        </div>
          
        {/**ADAPTIVE PART */}
        <div
          className="
            3xl:hidden relative z-10 flex flex-col xl:flex-row items-center xl:items-start
            gap-[50px] sm:gap-[60px] md:gap-[70px] lg:gap-[80px] xl:gap-[90px]
            pt-[100px] sm:pt-[120px] md:pt-[40px] lg:pt-[0px] xl:pt-[170px]
            px-[20px] sm:px-[40px] md:px-[70px] lg:px-[120px] xl:px-[0px] 2xl:px-[0px]"
        >
          <img
            src="/about-img.svg"
            alt=""
            className="w-full sm:w-[520px] md:w-[720px] lg:w-[920px] xl:w-[560px] 2xl:w-[680px] object-cover flex-shrink-0"
          />
          <div className="w-full xl:max-w-[620px] 2xl:max-w-[760px] text-[#1C2C57] font-body font-normal text-[16px] sm:text-[17px] lg:text-[18px] leading-[24px] lg:leading-[26px]">
            <p>
              When it comes to accurate AutoCAD drawings, you can’t afford to make a mistake or spend massive amounts of time on it. How do you find the balance? 
              At Survey Drafters we take out the guesswork by using your field data to create high-quality PDF and DWG files. We save you time and money, allowing 
              you to maximize your business and increase client satisfaction.
            </p>
            <div className="h-[42px]" />

            <p>
              Think about your most recent client - picture in your mind how long it took for you to take field measurements and how much longer it was to produce 
              your AutoCAD drawings. Did you have other clients that had to wait until this particular project was finished? Did it take longer than you thought it would?
            </p>
            <div className="h-[24px]" />

            <p>
              When it comes to running a successful land surveying company, you have to navigate a fine balance of efficiency and quality, 
              all the while trying to build your business. For most, they find they need a partner to turn to.
            </p>
            <div className="h-[24px]" />

            <p>
              That’s where Survey Drafters comes in, with a team of experienced drafters at the ready to turn your data into a completed project. How can you benefit?
            </p>
            <div className="h-[32px]" />

            <ul className="space-y-[6px]">
              <li className="flex items-start gap-[12px]">
                <span className="text-[#0FAC87] flex-shrink-0">
                  •
                </span>

                <span> You save on overhead - no longer do you have to rent a large office space for all of your drafters </span>
              </li>

              <li className="flex items-start gap-[12px]">
                <span className="text-[#0FAC87] flex-shrink-0">
                  •
                </span>

                <span> You save time - we take the AutoCAD work off of your hands </span>
              </li>

              <li className="flex items-start gap-[12px]">
                <span className="text-[#0FAC87] flex-shrink-0">
                  •
                </span>

                <span>
                  You increase client satisfaction - our goal is to complete your drawings efficiently, allowing you to complete your projects more quickly
                </span>
              </li>

              <li className="flex items-start gap-[12px]">
                <span className="text-[#0FAC87] flex-shrink-0">
                  •
                </span>

                <span> You save money - stop paying for expensive software licensing and let Survey Drafters do the work </span>
              </li>
            </ul>

            <div className="h-[24px]" />
            <p>
              We’ve partnered with businesses across the nation and have an easy online process to get your project started right away. Stop spending
              your time sitting in front of a computer and start building your business!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}