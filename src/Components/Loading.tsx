import "../Styles/loading.css"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LoadingProps {
  title: string
}

export function Loading({ title }: LoadingProps) {
  const main = useRef(null);

  useGSAP(() => {
    gsap.to(".box", {
      duration: 1,
      rotation: 540,
      scale: 6
      // scrollTrigger: {
      //   trigger: ".box",
      //   markers: true,
      //   scrub: true,
      //   start: "top center",
      //   end: "bottom center"
      // }
    });
  }, { scope: main });

  return (

    <>
      <section className="fixed inset-0 flex items-center justify-center z-50">
        <div className="text-9xl font-bold">{title}</div>
      </section>
      <section className="load-body" ref={main}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </section>
    </>
  )
}