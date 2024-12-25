import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../Styles/hero.css';

interface HeroProps {
  video: string;
  title: string;
}

export const Hero: React.FC<HeroProps> = ({ video, title }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    gsap.set(container.querySelectorAll("h1"), { y: 100 });
    gsap.set(container.querySelector(".counter p"), { y: 35 });

    const tl = gsap.timeline({ delay: 1.75 });
    const movements = [-100, 300, 150, -300, -90, 100, -200];

    tl.to(container.querySelectorAll("h1"), {
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.1,
    });

    tl.to(
      container.querySelector(".counter p"),
      {
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.5"
    );

    tl.to(".counter p", {
      y: -35,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.5,
    });

    tl.to(".counter p", {
      y: -70,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.5,
    });

    tl.to(".counter p", {
      y: -105,
      duration: 0.5,
      ease: "power3.out",
      delay: 0.75,
    });

    tl.from(
      ".tagline",
      {
        y: 40,
        opacity: 0,
        stagger: 0.2,
      },
      "-=4"
    );

    tl.to("h1", {
      fontSize: "15vw",
      duration: 1,
      ease: "power3.out",
    });

    tl.to(
      ".header-item",
      {
        clipPath: "none",
        duration: 0.1,
      },
      "<"
    );

    tl.to(
      ".block",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        duration: 0.5,
        stagger: {
          amount: 0.5,
          from: "random",
          ease: "power3.out",
        },
      },
      "<"
    );

    movements.forEach((move, index) => {
      tl.to(
        `.h-${index + 1}`,
        {
          y: move,
          duration: 1,
          ease: "power3.out",
        },
        "<"
      );
    });

    tl.from(container.querySelectorAll(".logo, .link, footer p"), {
      y: 40,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <div ref={containerRef} className="container">
      <nav>
        <div className="logo">
          <a href="#">Ninety-Nine</a>
        </div>
        <div className="links">
          <div className="link">
            <a href="#"></a>
          </div>
        </div>
      </nav>
      <footer>
        <p>&copy;2024</p>
        <p>Somewhere</p>
      </footer>
      <div className="hero-video">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="blocks">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="block"></div>
        ))}
      </div>
      <div className="header">
        {title.split('').map((letter, i) => (
          <div key={i} className="header-item">
            <div className={`header-item-wrapper h-${i + 1}`}><h1>{letter}</h1></div>
          </div>
        ))}
      </div>
      <div className="counter">
        <p>
          3 <br />
          2 <br />
          1
        </p>
      </div>
      <div className="tagline">
        <p>
          all vinyl
        </p>
      </div>
    </div>
  );
};
