import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import NavLink from "./nav-link";
import ThemedButton from "./button";
import { MdClose } from "react-icons/md";

const MobileMenu = ({ setMenuOpen }: { setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const menuRef = useRef(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animation du menu
    timeline
      .fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      )
      .fromTo(
        closeButtonRef.current,
        { scale: 0 },
        { scale: 1, duration: 0.3, ease: "back.out(1.7)" },
        "-=0.3"
      );

    // Animation des liens statiques
    linksRef.current.forEach((link, index) => {
      if (link) {
        timeline.fromTo(
          link,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
          `-=${0.2 * index}`
        );
      }
    });

    // Animation du bouton principal
    if (buttonRef.current) {
      timeline.fromTo(
        buttonRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "elastic.out(1, 0.5)" },
        "-=0.3"
      );
    }

    return () => {
      gsap.to(menuRef.current, {
        x: "100%",
        opacity: 0,
        duration: 0.5,
        ease: "power3.in",
      });
    };
  }, []);

  return (
    <div
      ref={menuRef}
      className="fixed top-0 right-0 w-[75%] h-full bg-secondary flex flex-col items-center gap-6 pt-16 container:hidden"
    >
      {/* Bouton de fermeture */}
      <button
        ref={closeButtonRef}
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={() => setMenuOpen(false)}
        aria-label="Close Menu"
      >
        <MdClose size={30} />
      </button>

      {/* Liens statiques */}
      <NavLink
        ref={(el) => { linksRef.current[0] = el; }}
        href="/"
      >
        Accueil
      </NavLink>
      <NavLink
        ref={(el) => { linksRef.current[1] = el; }}
        href="/s"
      >
        À propos
      </NavLink>
      <NavLink
        ref={(el) => { linksRef.current[2] = el; }}
        href="/x"
      >
        Nos services
      </NavLink>
      <NavLink
        ref={(el) => { linksRef.current[3] = el; }}
        href="/c"
      >
        Tarifs
      </NavLink>
      <NavLink
        ref={(el) => { linksRef.current[4] = el; }}
        href="/q"
      >
        FAQ
      </NavLink>
      <NavLink
        ref={(el) => { linksRef.current[5] = el; }}
        href="/f"
      >
        Blog
      </NavLink>

      {/* Bouton principal */}
      <ThemedButton
        ref={buttonRef}
        type="button"
        variant="light"
        outline
        className="mt-4"
      >
        Contactez-nous
      </ThemedButton>
    </div>
  );
};

export default MobileMenu;
