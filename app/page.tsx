import Hero from "@/components/Hero";
import History from "@/components/History";
import Members from "@/components/Members";
import Faq from "@/components/Faq";
import CheckNet from "@/components/CheckNet";
import Register from "@/components/Register";
import Activity from "@/components/Activity";
import Certificate from "@/components/Certificate";

export default function Home() {
  return (
    <>
      <Hero />
      <History />
      <Certificate />
      <CheckNet />
      <Register />
      <Activity />
      <Members />
      <Faq />
    </>
  );
}
