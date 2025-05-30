import Sidebar from "../Components/Sidebar";
import WalletInput from "../Components/WalletInput";
import Header from "../Components/Header";

function App() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-grow">
          <main className="p-8">
            <WalletInput />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
