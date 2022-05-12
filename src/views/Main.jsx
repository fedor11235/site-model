import {Header} from "../components/Header"
import {Presentation} from "../components/Presentation"
import {AgeCards} from "../components/AgeCards"
import {AboutСompany} from "../components/AboutСompany"
import {InfoСlients} from "../components/InfoСlients"
import {InfoСustomers} from "../components/InfoСustomers"
import {Footer} from "../components/Footer"

export const Main = () => {
  return (
      <div>
        <Header/>
        <Presentation/>
        <AgeCards/>
        <AboutСompany/>
        <InfoСlients/>
        <Footer/>
      </div>
  );
}
