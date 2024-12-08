import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Aside = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("/");
        break;
      case "/pending-files":
        setCurrentPage("/pending-files");
        break;
      case "/history":
        setCurrentPage("/history");
        break;
      case "/wallet":
        setCurrentPage("/wallet");
        break;
      case "/resources":
        setCurrentPage("/resources");
        break;
      case "/support":
        setCurrentPage("/support");
        break;
      case "/settings":
        setCurrentPage("/settings");
        break;
      case "/partner/dashboard":
        setCurrentPage("/partner/dashboard");
        break;
      case "/partner/resources":
        setCurrentPage("/partner/resources");
        break;
      case "/partner/support":
        setCurrentPage("/partner/support");
        break;
      case "/partner/settings":
        setCurrentPage("/partner/settings");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return { currentPage };
};
