import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function LuxuryMotion() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    const timer = window.setTimeout(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], .stagger"));
      const isInViewport = (target: HTMLElement) => {
        const rect = target.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      };

      targets.forEach((target) => {
        if (target.classList.contains("stagger")) {
          Array.from(target.children).forEach((child, index) => {
            if (child instanceof HTMLElement) {
              child.style.setProperty("--stagger-index", String(Math.min(index, 11)));
              child.style.setProperty("--stagger-delay", `${Math.min(index, 11) * 80}ms`);
            }
          });
        }

        if (reduceMotion) {
          target.dataset.visible = "true";
        } else {
          target.dataset.visible = isInViewport(target) ? "true" : "false";
        }
      });

      document.documentElement.dataset.motionReady = "true";

      if (reduceMotion || targets.length === 0) {
        return;
      }

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              (entry.target as HTMLElement).dataset.visible = "true";
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -12% 0px",
          threshold: 0.12,
        },
      );

      frame = window.requestAnimationFrame(() => {
        targets.forEach((target) => observer?.observe(target));
      });
    }, 900);

    return () => {
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
