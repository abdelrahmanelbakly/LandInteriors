import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import "./Layout.css";

interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header></Header>
      <div className='content'>{children}</div>
      <div className='backgroundTop'></div>
      <div className='backgroundBottom'></div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
