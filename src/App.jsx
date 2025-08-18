import { AllRoutes } from "./route/AllRoutes";
import { Header, Footer} from "./component"
import './App.css';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;

