export default function Footer() {
  return (
    <footer
      className="
        relative w-full overflow-hidden bg-white border-t border-[#EAEAEA] flex justify-center
        h-[260px] sm:h-[280px] md:h-[300px] lg:h-[150px] xl:h-[138px] 2xl:h-[134px] 3xl:h-[131px]"
    >
      <div
        className="
          relative h-full w-full
          max-w-[430px] sm:max-w-[640px] md:max-w-[900px] lg:max-w-[1280px] xl:max-w-[1800px]
          2xl:max-w-[2300px] 3xl:w-[2500px] 3xl:max-w-none"
      >
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-[34px] flex flex-col items-center gap-[10px]
            md:top-[42px] lg:left-[40px] lg:translate-x-0 lg:flex-row lg:items-center lg:gap-[20px]
            xl:left-[180px] xl:gap-[28px] 2xl:left-[360px] 3xl:left-[549px] 3xl:top-[56px]"
        >
          <span
            className="
              font-body font-normal text-black whitespace-nowrap text-[16px]
              sm:text-[18px] lg:text-[15px] xl:text-[18px]"
            style={{
              lineHeight: "26px"
            }}
          >
            Private policy
          </span>

          <span
            className="
              font-body font-normal text-black whitespace-nowrap 
              text-[16px] sm:text-[18px] lg:text-[15px] xl:text-[18px]"
            style={{
              lineHeight: "26px"
            }}
          >
            Terms and condition
          </span>
        </div>

        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-[120px]
            flex items-center justify-center font-body font-normal
          text-[#0FAC87] whitespace-nowrap text-[16px]
            sm:text-[18px] md:top-[132px] lg:top-[52px] xl:left-[760px] 2xl:left-[980px] 3xl:left-[1084px]
            3xl:translate-x-0 lg:text-[15px] xl:text-[18px]"
          style={{
            lineHeight: "26px"
          }}
        >
          support@cadtechnicians.com
        </div>

        <div
          className="
            absolute left-1/2 -translate-x-1/2 bottom-[34px] flex items-center
            md:bottom-[42px] lg:bottom-auto lg:top-[42px] lg:right-[40px] lg:left-auto lg:translate-x-0
            xl:right-[120px] 2xl:right-[220px] 3xl:left-[1715px] 3xl:right-auto 3xl:top-[38px]
            gap-[12px] xl:gap-[14px] 2xl:gap-[16px] 3xl:gap-[19px]"
        >
          <span
            className="
              font-body font-bold text-black whitespace-nowrap
              text-[16px] sm:text-[18px] lg:text-[15px] xl:text-[18px]"
            style={{
              lineHeight: "26px"
            }}
          >
            Developed by
          </span>

          <img
            src="/ficus-logo.svg"
            alt="Ficus"
            className="object-contain w-[120px] sm:w-[145px] lg:w-[130px] xl:w-[150px] 3xl:w-[164px] h-auto"
          />
        </div>
      </div>
    </footer>
  );
}