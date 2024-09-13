import React from "react";
import Navbar from "../components/Navbars/AuthNavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Charts from "../components/Charts/Charts";
import axios from "axios";

const Page = ({data}) => {

  return (
    <div>
      <div className="relative md:ml-64">
        <Sidebar/>
        <Navbar transparent/>
        <main>
          <section className="relative bg-blueGray-200 flex flex-col min-h-screen-75">
            <Charts initialData={data}/>
          </section>
        </main>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  try {
    const response = await axios.get(
      "https://api.twitch.tv/helix/videos",
      {
        params: {
          user_id: process.env.NEXT_PUBLIC_TWITCH_ID,
          first: 100,
          type: "archive"
        },
        headers: {
          "Client-Id": process.env.NEXT_PUBLIC_TWITCH_CLIENT_ID,
          "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TWITCH_ACCESS_TOKEN}`,
        }
      }
    );

    return {
      props: {
        data: response.data.data.reverse().slice(0, -1),
      },
      revalidate: 3600,
    };
  } catch (error) {
    console.error("Failed to retrieve Twitch data:", error);
    return {
      props: {
        data: [],
      },
      revalidate: 3600,
    };
  }
}

export default Page;