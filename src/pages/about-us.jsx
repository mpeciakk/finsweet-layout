import Head from "next/head"
import AboutUsContent from "@/components/AboutUs/AbousUsContent"
import Benefits from "@/components/Benefits"
import Stats from "@/components/Stats"
import AboutUsTeam from "@/components/AboutUs/AbousUsTeam"
import LightHero from "@/components/Hero/LightHero"
import AboutUsBenefits from "@/components/AboutUs/AboutUsBenefits"

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>finsweet</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <LightHero content={<div>
          <span>About us</span>
          <h1>Building stellar websites for early startups</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>} image={"/aboutus-hero.webp"} />

        <AboutUsContent />
        <AboutUsBenefits />
        <AboutUsTeam />
      </main>
    </>
  )
}