import Footer from "../UI/Footer";
import { PcBuilderNavbar } from "../UI/PcBuilderNavbar";

const RootLayout = ({ children }) => {
  return (
    <div className="max-w-[1600px] mx-auto min-h-screen flex flex-col justify-between">
      <div><PcBuilderNavbar /></div>
      <div className="flex-1">{children}</div>
      <div className="shadow-2xl shadow-black"><Footer /></div>
    </div>
  );
};
export default RootLayout;
