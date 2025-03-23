import AllRoutes from "./routes/AllRoutes";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const App = () => {
  return <AllRoutes />;
};

export default App;
