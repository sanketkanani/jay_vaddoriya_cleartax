import { BBSectionCard } from "@components";
import { EBooks } from "./EBooks";
import { Webinars } from "./Webinars";
import { useTitle } from "../../App";

const Resources = () => {
  const { setHeaderText } = useTitle();
  setHeaderText("Resources");
  return (
    <>
      <BBSectionCard title="E-Books" className="mb-5">
        <EBooks />
      </BBSectionCard>
      <BBSectionCard title="Webinars">
        <Webinars />
      </BBSectionCard>
    </>
  );
};

export default Resources;
