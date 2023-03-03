import Head from "next/head";
import Carousel from "@/components/Carousel";
import Collection from "@/components/Collection";
export default function Home() {
  return (
    <>
      <Head>
        <title>Super Space defenders</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Carousel />
      <Collection />
    </>
  );
}
