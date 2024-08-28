import { createContext, useContext, useEffect, useRef, useState } from "react";

export const NavContext = createContext();

function NavProvider({ children }) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const headerRef = useRef();
  console.log("💰", isNavVisible);

  function observerCallBack([entry]) {
    console.log(entry.isIntersecting);

    if (entry.isIntersecting) setIsNavVisible(true);
    if (!entry.isIntersecting) setIsNavVisible(false);
  }

  useEffect(() => {
    const el = headerRef.current;

    const observer = new IntersectionObserver(observerCallBack, {
      root: null,
      threshold: 0.5,
    });

    if (el) observer.observe(el);

    return () => el && observer.unobserve(el);
  }, []);

  return (
    <NavContext.Provider value={{ isNavVisible, headerRef }}>
      {children}
    </NavContext.Provider>
  );
}

function useNav() {
  const context = useContext(NavContext);
  if (context === undefined)
    throw new Error("You Are Using The Context Out Of The Provider 😐.");
  return context;
}

export { NavProvider, useNav };
