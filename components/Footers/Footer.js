import React from "react"
import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-800 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-800 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-white">Let's give me laugh!</h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-500">
                Find me on any of these platforms, I respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
                <Link href="https://twitter.com/hekoki2525" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-lightBlue-400 w-10 h-10 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                    type="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
                <Link href="https://www.instagram.com/hekokiii/" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-pink-400 w-10 h-10 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                    type="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300"/>
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} Sekai no Hekokitai.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
