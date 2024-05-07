import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { watchImg, rightImg } from "../utils"
import VideoCarousel from "./VideoCarousel"
import scrollTrigger from "gsap/all"
gsap.registerPlugin(scrollTrigger)
import { animateWithGsap } from "../utils/animation"

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
    animateWithGsap("#title", {
      opacity: 1,
      y: 0,
      duration: 1,
    })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex ">
          <h1 id="title" className="section-heading">
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film 
              <img src={watchImg} alt="watch" className="ml-2"/>
            </p>

            <p className="link">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2"/>
            </p>
          </div>
        </div>
        <VideoCarousel></VideoCarousel>
      </div>
    </section>
  )
}

export default Highlights