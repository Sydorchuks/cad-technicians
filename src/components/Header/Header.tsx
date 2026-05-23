import Container from "../ui/Container/Container"

export default function Header({ variant = "light-bg" }) {
  const isDark = variant === "dark-bg"

  const logoSrc = isDark
    ? "/logo-white.png"
    : "/logo-black.png"

  return (
    <header className="absolute top-0 left-0 w-full z-50 border-b-[1px] border-[#EAEAEA]/20 pb-[23px]">
      <Container>
        <div className="flex justify-center">
          <div
            className="
              w-full max-w-[1000px] lg:max-w-[1100px] xl:max-w-[1280px] 2xl:max-w-[1450px] 3xl:max-w-[1574px]
              flex items-center justify-between pt-lg md:max-w-[760px] md:pt-[28px] sm:max-w-full sm:pt-[20px]"
          >
            <img
              src={logoSrc}
              alt="logo"
              className="h-[58px] xl:h-[72px] 2xl:h-[86px] 3xl:w-[160px] 3xl:h-[111px] lg:h-[50px] md:h-[42px] sm:h-[36px]"
            />
            <div
              className="flex flex-col items-end gap-[10px] xl:gap-[16px] 2xl:gap-[20px] 3xl:gap-[27px] md:gap-[8px]"
            >
              <button
                className={`
                  px-[20px] py-[8px] border-[2px] text-[13px] font-semibold uppercase tracking-wide
                  ${
                    isDark
                      ? "border-white text-white"
                      : "border-[#0FAC87] text-[#0FAC87]"
                  }
                  xl:px-[22px] xl:py-[9px] xl:text-[14px] 2xl:w-[220px] 2xl:h-[56px] 2xl:px-0 2xl:py-0 2xl:text-[15px]
                  3xl:w-[262px] 3xl:h-[63px] 3xl:text-[18px] lg:text-[12px] 
                  md:text-[11px] md:px-[16px] md:py-[7px] sm:text-[10px] sm:px-[12px] sm:py-[6px]
                `}
              >
                LOGIN / REGISTRATION
              </button>
              <nav
                className="flex gap-[28px] xl:gap-[30px] 2xl:gap-[34px] 3xl:gap-0 lg:gap-[20px] md:gap-[14px] max-sm:hidden"
              >
                <a
                  href="/"
                  className={`
                    text-[13px] font-semibold uppercase 2xl:text-[16px] 3xl:mr-[44px] 3xl:text-[22px] lg:text-[12px] md:text-[11px]
                    ${
                      isDark
                        ? "text-white"
                        : "text-[#0FAC87]"
                    }
                  `}
                >
                  HOME
                </a>
                <a
                  href="/about"
                  className={`
                    text-[13px] font-semibold uppercase 2xl:text-[16px] 3xl:mr-[26px] 3xl:text-[22px] lg:text-[12px] md:text-[11px]
                    ${
                      isDark
                        ? "text-white"
                        : "text-[#0FAC87]"
                    }
                  `}
                >
                  ABOUT
                </a>

                <a
                  href="/services"
                  className={`
                    text-[13px] font-semibold uppercase 2xl:text-[16px] 3xl:mr-[26px] 3xl:text-[22px] lg:text-[12px] md:text-[11px]
                    ${
                      isDark
                        ? "text-white"
                        : "text-[#0FAC87]"
                    }
                  `}
                >
                  OUR SERVICES
                </a>

                <a
                  href="/contact"
                  className={`
                    text-[13px] font-semibold uppercase 2xl:text-[16px] 3xl:text-[22px] lg:text-[12px] md:text-[11px]
                    ${
                      isDark
                        ? "text-white"
                        : "text-[#0FAC87]"
                    }
                  `}
                >
                  CONTACT US
                </a>

              </nav>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}