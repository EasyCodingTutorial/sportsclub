import styles from "./page.module.css";

// For Components
import { MainBg } from "@/app/Components/MainBg/MainBg";
import { Match } from "@/app/Components/Match/Match";
import { Wrapper } from "@/app/Components/Wrapper/Wrapper";
import { OurClasses } from "@/app/Components/OurClasses/OurClasses";
import { SecondHeader } from "@/app/Components/SecondHeader/SecondHeader";
import { ShopNow } from "@/app/Components/ShopNow/ShopNow";
import { ContactForm } from "@/app/Components/ContactForm/ContactForm";

export default function Home() {
  return (
    <>
      <MainBg
        h6Text="Easy Sports"
        h5Text="Kick Off Your Passion!"
        LinkText="Join Classes"
        LinkTo=""
      />


      <Wrapper>
        {/* for Match */}
        <Match
          Team1="/assets/team1.png"
          Team2="/assets/team2.png"
        />

        {/* For Classes */}
        <OurClasses />
      </Wrapper>

      {/* For Second Header */}
      <SecondHeader />

      {/* For Shop Now */}
      <Wrapper>
        <ShopNow />


        {/* For Contact Form */}
        <ContactForm />

      </Wrapper>



    </>
  );
}
