 import React from "react"
import Link from "next/link"

// components

import Navbar from "components/Navbars/AuthNavbar.js"
import Footer from "components/Footers/Footer.js"
import Sidebar from "components/Sidebar/Sidebar"

export default function Index() {
  return (
    <>
      <div className="relative md:ml-64">
        <Sidebar/>
        <Navbar transparent/>
        <main>
          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('/img/index-bg.jpg')",
              }}
            >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
            </div>
            <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div>
                    <h1 className="text-white font-semibold text-5xl">
                      The Most Crazy Game Streamer in Japan
                    </h1>
                    <p className="mt-8 text-lg text-blueGray-200">
                      Tsukiji Market taught me how to enjoy games. Toyosu Market taught me the importance of family. I'm
                      teaching you the sadness of goodbye, In other words, ADEIOSU. I'm a game streamer.<br/>President
                      Kishida specially named me "Sekai no Hekokitai".
                    </p>
                    <h2 className="mt-8 text-white font-semibold text-3xl">
                      Yes, I am <br/>Sekai no Hekokitai.
                    </h2>
                    <p className="mt-8 text-lg text-blueGray-200">
                      Say, No Market, No Fish!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-16"
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
          </div>

          <section className="bg-blueGray-800 pt-8 pb-16 -mt-24">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap">
                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-blueGray-200">
                        <i className="fas fa-venus fa-lg"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Women Love Anything</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        I can attend all Japanese women.
                        I'll teach you guys pick up lines to attract women.
                        There are "DEMO", "IWASETE MORAU KEDO" and "IMA NO JIDAI". This is fine.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-blueGray-200">
                        <i className="far fa-smile fa-lg"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Can't Stop Laugh</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        I prefer to stream chit-chat over games.
                        To be honest, the game is terribly boring.
                        However, in order to earn a stable income, I have no choice but to distribute games.
                        Forgive me.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                  <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                      <div
                        className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full bg-blueGray-200">
                        <i className="fas fa-baseball-ball fa-lg"></i>
                      </div>
                      <h6 className="text-xl font-semibold">Baseball Professional Fan</h6>
                      <p className="mt-2 mb-4 text-blueGray-500">
                        My favorite baseball team, Yokohama DeNA BayStars, is on fire every day.
                        But this year, cool-headed Cy Young pitcher Trevor Bauer has joined the team.
                        I believe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center mt-8">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <Link href="https://www.twitch.tv/hekokitaiworld" passHref>
                    <a target="_blank" rel="noopener noreferrer"
                       className="text-violet-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                      <i className="fab fa-twitch fa-lg"></i>
                    </a>
                  </Link>
                  <h3 className="text-3xl mb-2 font-semibold text-white leading-normal">
                    July 1st, 2020 ~ (at age 37)
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                    YouTube is obsolete, and Nico Nico is even more obsolete.
                    Just as I was thinking that, I received an official broadcast offer from Twitch.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                    I will live solely on Twitch earnings. And I decided to stream the game I wanted to play.
                    I don't know the mood of the listener. I'm going to blow you away.
                  </p>
                  <Link href="https://www.twitch.tv/hekokitaiworld" passHref>
                    <a target="_blank" rel="noopener noreferrer"
                       className="font-bold text-blueGray-500 mt-8 hover:text-blueGray-300">
                      Check Twitch!
                    </a>
                  </Link>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                    <img
                      alt="..."
                      src="/img/index-twitch.png"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-blueGray-700 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Twitch
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        Twitch is an American video live streaming service that focuses on video game live streaming,
                        including broadcasts of esports competitions, in addition to offering music broadcasts, creative
                        content, and "in real life" streams.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blueGray-200 relative pt-8 pb-16">
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
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4">
              <div className="items-center flex flex-wrap">
                <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                  <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-300">
                    <img
                      alt="..."
                      src="/img/index-youtube.png"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-blueGray-200 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold">
                        YouTube
                      </h4>
                      <p className="text-md font-light mt-2">
                        YouTube is an American global online video sharing and social media platform headquartered in
                        San Bruno, California, United States.
                        It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim.
                        It is owned by Google and is the second most visited website, after Google Search.
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                  <div className="md:pr-12">
                    <Link href="https://www.youtube.com/channel/UCJ-v0H_xrQg5Hd2xrXrz0Qw" passHref>
                      <a target="_blank" rel="noopener noreferrer"
                         className="text-red-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-blueGray-200">
                        <i className="fab fa-youtube fa-lg"></i>
                      </a>
                    </Link>
                    <h3 className="text-3xl font-semibold">
                      August 27, 2019 ~ (at age 36)
                    </h3>
                    <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-500">
                      The days of Niconico Live were over.
                      This was the age of YouTube. On day one, I was streaming on both platforms and couldn't see
                      comments on both.
                    </p>
                    <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-500">
                      I finally got a taste of getting paid to stream.
                      Some made $1 million in just two hours of streaming.
                      However, I was not satisfied with this situation.
                    </p>
                    <Link href="https://www.youtube.com/channel/UCJ-v0H_xrQg5Hd2xrXrz0Qw" passHref>
                      <a target="_blank" rel="noopener noreferrer"
                         className="font-bold text-blueGray-500 mt-8 hover:text-blueGray-300">
                        Check YouTube!
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blueGray-800 relative pt-8 pb-16">
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
              <div className="flex flex-wrap items-center">
                <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                  <Link href="https://com.nicovideo.jp/community/co3800149" passHref>
                    <a target="_blank" rel="noopener noreferrer"
                       className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                      <i className="fas fa-video fa-lg"></i>
                    </a>
                  </Link>
                  <h3 className="text-3xl mb-2 font-semibold text-white leading-normal">
                    July 1st, 2011 ~ (at age 28)
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                    Around this time, Nico Nico Live Broadcasting was in its heyday.
                    I dived into that ocean. After all, the sea is the best.
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                    Streaming for five days without sleeping, challenging unprecedented hurdles, hugging reconciled
                    listeners, it felt like ordering a champagne tower every night.
                  </p>
                  <Link href="https://com.nicovideo.jp/community/co3800149" passHref>
                    <a target="_blank" rel="noopener noreferrer"
                       className="font-bold text-blueGray-500 mt-8 hover:text-blueGray-300">
                      Check Niconico!
                    </a>
                  </Link>
                </div>

                <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                  <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-700">
                    <img
                      alt="..."
                      src="/img/index-niconico.jpg"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <svg
                        preserveAspectRatio="none"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 583 95"
                        className="absolute left-0 w-full block h-95-px -top-94-px"
                      >
                        <polygon
                          points="-30,95 583,95 583,65"
                          className="text-blueGray-700 fill-current"
                        ></polygon>
                      </svg>
                      <h4 className="text-xl font-bold text-white">
                        Niconico
                      </h4>
                      <p className="text-md font-light mt-2 text-white">
                        Niconico (known before 2012 as Nico Nico Douga) is a Japanese video-sharing service on the web.
                        "Niconico" or "nikoniko" is the Japanese ideophone for smiling.
                        As of 2021, Niconico is the 34th most-visited website in Japan, according to Alexa Internet.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-blueGray-200 relative pt-8 pb-16">
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
                  className="text-blueGray-200 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>

            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center text-center mb-8">
                <div className="w-full lg:w-6/12 px-4">
                  <h2 className="text-4xl font-semibold">Here are my favorite games</h2>
                  <p className="text-lg leading-relaxed m-4 text-blueGray-500">
                    These games warmed my cold heart. I can't thank you enough. Now it is open to the public that I was
                    sorry for saying goodbye selfishly.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="..."
                      src="/img/index-game-1.jpg"
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Yakuza Like a Dragon</h5>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        Genre : Action-adventure, beat 'em up, role-playing
                      </p>
                      <div className="mt-6">
                        <Link href="https://yakuza.sega.com/" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pink-500 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </Link>
                        <Link href="https://twitter.com/ryugagotoku" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </Link>
                        <Link href="https://www.facebook.com/RyuStudio/" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-lightBlue-600 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </Link>
                        <Link href="https://www.youtube.com/user/ryuofficial" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="..."
                      src="/img/index-game-2.jpg"
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">eBaseball Powerful Pro Baseball</h5>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        Genre : Sports (baseball)
                      </p>
                      <div className="mt-6">
                        <Link href="https://www.konami.com/pawa/wbsc/en/" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pink-500 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </Link>
                        <Link href="https://twitter.com/pawapuro_pro" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCWzEh28vj3mQKpe0fzVTOUw" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="..."
                      src="/img/index-game-3.jpg"
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Final Fantasy</h5>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        Genre : Role-playing video game
                      </p>
                      <div className="mt-6">
                        <Link href="https://na.finalfantasy.com/" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pink-500 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </Link>
                        <Link href="https://twitter.com/FinalFantasy" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </Link>
                        <Link href="https://www.facebook.com/FinalFantasy/" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-lightBlue-600 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </Link>
                        <Link href="https://www.youtube.com/channel/UCH3sMKVJ2P7hm7ROBy5FHJg" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-red-600 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-youtube"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="..."
                      src="/img/index-game-4.jpg"
                      className="shadow-lg rounded-full mx-auto max-w-120-px"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Amagami</h5>
                      <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                        Genre : Harem, romantic comedy
                      </p>
                      <div className="mt-6">
                        <Link href="https://www.amagami.info/" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pink-500 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-dribbble"></i>
                          </a>
                        </Link>
                        <Link href="https://twitter.com/amagami_ouen" passHref>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-lightBlue-400 text-white w-8 h-8 rounded-full mr-1 mb-1 inline-flex items-center justify-center hover:shadow-md cursor-pointer"
                            type="button"
                          >
                            <i className="fab fa-twitter"></i>
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
    </>
  )
}
