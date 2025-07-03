import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { WalletProvider } from "./contexts/WalletContext";

function App() {
  return (
    <WalletProvider>
      <div className="min-h-screen">
        <Navbar />
        <Home />
      </div>
    </WalletProvider>
  );
}

export default App;
