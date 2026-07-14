import Header from "./components/layout/Header/Header.tsx";
import HomeBanner from "./components/sections/HomeBanner/HomeBanner.tsx";
import InfiniteBanner from "./components/sections/InfiniteBanner/InfiniteBanner.tsx";

function App() {
  return (
      <>
        <Header />

        <main>
            <HomeBanner />
            <InfiniteBanner />
        </main>
      </>
  )
}

export default App
