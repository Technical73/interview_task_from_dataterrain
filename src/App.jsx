import { Header } from "./components/index";
import Main_Page from "./pages/Main_Page";

function App() {
  return (
    <>
      {/* Main container starts from over here */}
      <section className="min-w-screen min-h-dvh gap-4 flex justify-start flex-col items-center bg-slate-200">
        <Header />
        <Main_Page />
      </section>

      {/* Main container ends over here */}
    </>
  );
}

export default App;
