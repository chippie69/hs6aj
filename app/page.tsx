import Hero from "@/components/Hero";
import History from "@/components/History";
import Members from "@/components/Members";
import Faq from "@/components/Faq";
import CheckNet from "@/components/CheckNet";
import Register from "@/components/Register";
import Activity from "@/components/Activity";
import Certificate from "@/components/Certificate";
import Article from "@/components/Article";
import NewMember from "@/components/NewMember";

export default function Home() {
  return (
    <>
      <Hero />
      <History />
      <Certificate />
      <CheckNet />
      <Register />
      <NewMember />
      <Activity />
      <Article />
      <Members />
      <Faq />
    </>
  );
}
