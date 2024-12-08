import { Container } from "@components";
import { Outlet } from "react-router-dom";

export const PartnerLayout = () => {
  return (
    <>
      <main className="vh-100">
        <Container className={"d-flex flex-column h-100"}>
          <div className="my-auto">
            <Outlet />
          </div>
        </Container>
      </main>
    </>
  );
};
