import "../Styles/loading.css"
import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type'

gsap.registerPlugin(ScrollTrigger);

interface LoadingProps {
  title: string
}

export function Loading({ title }: LoadingProps) {
  const main = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (titleRef.current) {
        const splitText = new SplitType(titleRef.current, { types: 'chars' });

        gsap.from(splitText.chars, {
          opacity: 0,
          x: 60,
          stagger: 0.1,
          duration: 1,
          ease: "back.out(1.7)"
        });
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [title]);

  useGSAP(() => {

    gsap.to(".box", {
      duration: 1,
      rotation: 540,
      scale: 5,

    });


    gsap.to(titleRef.current, {
      rotation: -360,
      duration: .2,
      scale: 4,

    });

  }, { scope: main });

  return (
    <>
      <section className="fixed inset-0 flex items-center justify-center z-50">
        <div ref={titleRef} className="title text-9xl font-bold">{title}</div>
      </section>
      <section className="load-body" ref={main}>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </section>
    </>
  )
}
