

import HeroSection from "../components/heroSection";
import TargetAudienceSection from "../components/targetAudienceSection";
import OurServices from "../components/ourServices";
import GridVideo from "../components/GridVideo";
import WhyChoose from "../components/whyChoose";
import Logo from "../components/logo";
import Tabs from "../components/tabs";
import TransformSection from "../components/TransformSection";
import Header from "../components/header";
import Footer from "../components/footer";

export default async function Page() {
  const baseUrl = "https://chevxokeratin.com";

  const res = await fetch(`${baseUrl}/site.json`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return <main>Failed to load content.</main>;
  }

  const data = await res.json();
  const site = Array.isArray(data) ? data[0] : data;

  const pageData = site?.pages?.find((p) => p.route === "home");

  if (!pageData) return <main>Page not found.</main>;

  const getSection = (type) =>
    pageData?.components?.find((c) => c.type === type);

  return (
    <main>
      

      {/* ✅ HERO */}
      <HeroSection {...getSection("hero-section")?.props} site={site} />

      {/* ✅ TARGET */}
      <TargetAudienceSection {...getSection("target-audience")?.props} />

      {/* ✅ SERVICES */}
      <OurServices {...getSection("our-services")?.props} />

      {/* ✅ VIDEO */}
      <GridVideo {...getSection("grid-video")?.props} />

      {/* ✅ WHY */}
      <WhyChoose {...getSection("why-choose")?.props} />

      {/* ✅ LOGO */}
      <Logo {...getSection("logo-section")?.props} />

      {/* ✅ TABS */}
      <Tabs {...getSection("tabs-section")?.props} />

      {/* ✅ TRANSFORM */}
      <TransformSection {...getSection("transform-section")?.props} />

      {/* <h1>
        Helo World
      </h1> */}

     
    </main>
  );
}
