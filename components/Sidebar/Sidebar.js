import React from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import NotificationDropdown from "components/Dropdowns/NotificationDropdown.js"
import UserDropdown from "components/Dropdowns/UserDropdown.js"

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden")
  const router = useRouter()
  return (
    <>
      <nav
        className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-2xl bg-black flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6 hidden-scrollbar">
        <div
          className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-white opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-black m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <ul className="md:flex-col md:min-w-full flex flex-col list-none">
            <li className="items-center">
              {/*TODO Edit : ルートページの場合はリンクなしにする*/}
              <Link href="/">
                <a
                  className="text-xs md:pb-2 py-3 font-bold block text-blueGray-100 flex"
                >
                  <img src="/img/icon-sht.png" className="rounded-full w-9 h-9"/>
                  <div className="ml-2 align-middle">
                    <div className="text-sm">世界の屁こき隊</div>
                    <div className="text-xs">Sekai no Hekokitai</div>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative">
              <NotificationDropdown/>
            </li>
            <li className="inline-block relative">
              <UserDropdown/>
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:shadow-none shadow-2xl absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Form */}
            <form className="mt-6 mb-4 md:hidden">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-100 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>

            {/* Divider */}
            <hr className="my-4 md:min-w-full"/>
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              APP
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                {/*TODO EDIT Change links*/}
                <Link href="/chart">
                  <a
                    className="text-blueGray-500 hover:text-blueGray-300 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-chart-line text-blueGray-100 w-5 mr-2 text-sm"></i>{" "}
                    Chart
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/">
                  <a
                    className="text-blueGray-500 hover:text-blueGray-300 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-music text-blueGray-100 w-5 mr-2 text-sm"></i>{" "}
                    Hekoki GPT (May 1, 2023...)
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full"/>
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-100 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Stream
            </h6>

            {/* Navigation */}
            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="https://www.twitch.tv/hekokitaiworld" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/dashboard") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-500 hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fab fa-twitch w-5 mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-blueGray-100")
                      }
                    ></i>{" "}
                    Twitch
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="https://twitter.com/hekoki2525" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/settings") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-500 hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fab fa-twitter w-5 mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/settings") !== -1
                          ? "opacity-75"
                          : "text-blueGray-100")
                      }
                    ></i>{" "}
                    Twitter
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="https://www.youtube.com/channel/UCJ-v0H_xrQg5Hd2xrXrz0Qw" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/tables") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-500 hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fab fa-youtube w-5 mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/tables") !== -1
                          ? "opacity-75"
                          : "text-blueGray-100")
                      }
                    ></i>{" "}
                    YouTube
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="https://com.nicovideo.jp/community/co3800149" passHref>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (router.pathname.indexOf("/admin/maps") !== -1
                        ? "text-lightBlue-500 hover:text-lightBlue-600"
                        : "text-blueGray-500 hover:text-blueGray-300")
                    }
                  >
                    <i
                      className={
                        "fas fa-video w-5 mr-2 text-sm " +
                        (router.pathname.indexOf("/admin/maps") !== -1
                          ? "opacity-75"
                          : "text-blueGray-100")
                      }
                    ></i>{" "}
                    Niconico
                  </a>
                </Link>
              </li>
            </ul>

            {/* Divider */}
            {/*<hr className="my-4 md:min-w-full"/>*/}
            {/* Heading */}
            {/*<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">*/}
            {/*  Auth Layout Pages*/}
            {/*</h6>*/}
            {/* Navigation */}

            {/*<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">*/}
            {/*  <li className="items-center">*/}
            {/*    <Link href="/auth/login">*/}
            {/*      <a*/}
            {/*        href="#pablo"*/}
            {/*        className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"*/}
            {/*      >*/}
            {/*        <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}*/}
            {/*        Login*/}
            {/*      </a>*/}
            {/*    </Link>*/}
            {/*  </li>*/}

            {/*  <li className="items-center">*/}
            {/*    <Link href="/auth/register">*/}
            {/*      <a*/}
            {/*        href="#pablo"*/}
            {/*        className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"*/}
            {/*      >*/}
            {/*        <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}*/}
            {/*        Register*/}
            {/*      </a>*/}
            {/*    </Link>*/}
            {/*  </li>*/}
            {/*</ul>*/}

            {/*/!* Divider *!/*/}
            {/*<hr className="my-4 md:min-w-full"/>*/}
            {/*/!* Heading *!/*/}
            {/*<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">*/}
            {/*  No Layout Pages*/}
            {/*</h6>*/}
            {/*/!* Navigation *!/*/}

            {/*<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">*/}
            {/*  <li className="items-center">*/}
            {/*    <Link href="/landing">*/}
            {/*      <a*/}
            {/*        href="#pablo"*/}
            {/*        className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"*/}
            {/*      >*/}
            {/*        <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}*/}
            {/*        Landing Page*/}
            {/*      </a>*/}
            {/*    </Link>*/}
            {/*  </li>*/}

            {/*  <li className="items-center">*/}
            {/*    <Link href="/profile">*/}
            {/*      <a*/}
            {/*        href="#pablo"*/}
            {/*        className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"*/}
            {/*      >*/}
            {/*        <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}*/}
            {/*        Profile Page*/}
            {/*      </a>*/}
            {/*    </Link>*/}
            {/*  </li>*/}
            {/*</ul>*/}

            {/*/!* Divider *!/*/}
            {/*<hr className="my-4 md:min-w-full"/>*/}
            {/*/!* Heading *!/*/}
            {/*<h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">*/}
            {/*  Documentation*/}
            {/*</h6>*/}
            {/*/!* Navigation *!/*/}
            {/*<ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">*/}
            {/*  <li className="inline-flex">*/}
            {/*    <a*/}
            {/*      href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus"*/}
            {/*      target="_blank"*/}
            {/*      className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"*/}
            {/*    >*/}
            {/*      <i className="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>*/}
            {/*      Styles*/}
            {/*    </a>*/}
            {/*  </li>*/}

            {/*  <li className="inline-flex">*/}
            {/*    <a*/}
            {/*      href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus"*/}
            {/*      target="_blank"*/}
            {/*      className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"*/}
            {/*    >*/}
            {/*      <i className="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>*/}
            {/*      CSS Components*/}
            {/*    </a>*/}
            {/*  </li>*/}

            {/*  <li className="inline-flex">*/}
            {/*    <a*/}
            {/*      href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"*/}
            {/*      target="_blank"*/}
            {/*      className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"*/}
            {/*    >*/}
            {/*      <i className="fab fa-angular mr-2 text-blueGray-300 text-base"></i>*/}
            {/*      Angular*/}
            {/*    </a>*/}
            {/*  </li>*/}

            {/*  <li className="inline-flex">*/}
            {/*    <a*/}
            {/*      href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"*/}
            {/*      target="_blank"*/}
            {/*      className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"*/}
            {/*    >*/}
            {/*      <i className="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>*/}
            {/*      Javascript*/}
            {/*    </a>*/}
            {/*  </li>*/}

            {/*  <li className="inline-flex">*/}
            {/*    <a*/}
            {/*      href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"*/}
            {/*      target="_blank"*/}
            {/*      className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"*/}
            {/*    >*/}
            {/*      <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>*/}
            {/*      NextJS*/}
            {/*    </a>*/}
            {/*  </li>*/}

            {/*  <li className="inline-flex">*/}
            {/*    <a*/}
            {/*      href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"*/}
            {/*      target="_blank"*/}
            {/*      className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"*/}
            {/*    >*/}
            {/*      <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>*/}
            {/*      React*/}
            {/*    </a>*/}
            {/*  </li>*/}

            {/*  <li className="inline-flex">*/}
            {/*    <a*/}
            {/*      href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"*/}
            {/*      target="_blank"*/}
            {/*      className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"*/}
            {/*    >*/}
            {/*      <i className="fas fa-link mr-2 text-blueGray-300 text-base"></i>*/}
            {/*      Svelte*/}
            {/*    </a>*/}
            {/*  </li>*/}

            {/*  <li className="inline-flex">*/}
            {/*    <a*/}
            {/*      href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"*/}
            {/*      target="_blank"*/}
            {/*      className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"*/}
            {/*    >*/}
            {/*      <i className="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>*/}
            {/*      VueJS*/}
            {/*    </a>*/}
            {/*  </li>*/}
            {/*</ul>*/}
          </div>
        </div>
      </nav>
    </>
  )
}
