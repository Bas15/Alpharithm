import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

export default Layout;
