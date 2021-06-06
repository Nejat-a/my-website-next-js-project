import Link from "next/link";
import { Footer } from "./Footer";
import { Header } from "./Header";
export const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <div className="container">{children}</div>
      <Footer />
    </>
  );
};
