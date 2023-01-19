import Head from "next/head"
import NavBar from "@/components/NavBar"
import Hero from "@/components/Hero"
import Footer from "@/components/Footer"
import AboutUsContent from "@/components/AboutUs/AbousUsContent"
import Benefits from "@/components/Benefits"
import Stats from "@/components/Stats"

export default function Features() {
  return (
    <>
      <Head>
        <title>finsweet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <NavBar />
        <Hero content={<div className="features-hero">
          <h1>All the features you need</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.</p>

          <button className="pricing">View pricing</button>
        </div>} image={"/features-hero.png"} />

        <Stats />
        <Benefits />

        <div className="features-lower-content">
          <Hero content={<div className="features-content-hero">
            <span>Use Client-first</span>
            <h1>Top agencies and freelancers around the world use
              Client-first </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          </div>} image={"/features-content-hero.jpg"} />
        </div>

        <Footer />
      </main>
    </>
  )
}