import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimatedHeading({ type, children }) {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;

    if (!heading) return; // Ensure the element exists

    gsap.fromTo(
      heading,
      { opacity: 0, y: 20 }, // Starting state
      {
        opacity: 1,
        y: 0, // Ending state
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heading,
          start: "top 85%", // Start when the top of the heading reaches the center of the viewport
          //   end: "bottom+=100% center", // End when the bottom of the heading reaches the center
          toggleActions: "play reverse play reverse", // Re-triggers the animation on scroll
          //   markers: true, // Debug markers for troubleshooting
        },
      }
    );

    // Cleanup function to kill ScrollTrigger on component unmount
    return () => {
      ScrollTrigger.getById(heading)?.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return type === "h2" ? (
    <h2 ref={headingRef} style={{ fontWeight: "500" }}>
      {children}
    </h2>
  ) : type === "p" ? (
    <div>
      <p ref={headingRef}>{children}</p>
    </div>
  ) : null;
}

export default AnimatedHeading;
