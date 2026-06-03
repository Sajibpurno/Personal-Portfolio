import { lazy, Suspense } from "react";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";

const MainContainer = lazy(() => import("./components/MainContainer"));
const CharacterModel = lazy(() => import("./components/Character"));

const PageLoader = () => (
  <div style={{
    width: "100vw",
    height: "100vh",
    background: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "1.2rem",
    letterSpacing: "0.1em"
  }}>
    Loading...
  </div>
);

const App = () => {
  return (
    <LoadingProvider>
      <Suspense fallback={<PageLoader />}>
        <MainContainer>
          <Suspense fallback={null}>
            <CharacterModel />
          </Suspense>
        </MainContainer>
      </Suspense>
    </LoadingProvider>
  );
};

export default App;