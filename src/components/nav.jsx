import React from 'react'

function Nav() {
  return (
      <div><header className="header  w-full   bg-[#4F282B] h-[75px] text-white md:h-[50px] ">
          <div className="container h-full *:h-full mx-auto">
              <nav className="h-full">
                  <div className="flex items-center justify-center w-full h-full">
                      <div className="w-full md:w-6/12">
                          <marquee
                              behavior="smooth"
                              direction="left"
                              className="font-sans text-xl"
                          >
                              60% Off on all products Get them before they end
                          </marquee>
                      </div>
                  </div>
              </nav>
          </div>
      </header></div>
  )
}

export default Nav