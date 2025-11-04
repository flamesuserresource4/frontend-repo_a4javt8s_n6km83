import Header from "./components/Header";
import Marketplace from "./components/Marketplace";
import Tutorials from "./components/Tutorials";
import Community from "./components/Community";

function App() {
  return (
    <div className="min-h-screen bg-white font-inter text-green-900">
      <Header />
      <main>
        <Marketplace />
        <Tutorials />
        <Community />
      </main>
      <footer className="border-t border-green-100 bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-8 text-sm text-green-800/70">
          <p className="font-medium text-green-900">FarmConnect</p>
          <p className="mt-1">Learn, sell and innovate — connecting farmers, compost vendors, and learners.</p>
          <p className="mt-2">© {new Date().getFullYear()} FarmConnect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
