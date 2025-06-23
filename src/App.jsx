import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import LandingPage from "./components/LandingPage";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <LoadingScreen /> : <LandingPage />;
}

export default App;
