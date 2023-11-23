import AppAddButton from "./components/AppAddButton";
import AppContainer from "./components/AppContainer";
import AppHeader from "./components/AppHeader";
import AppListing from "./components/AppListing";

function App() {
  return (
    <AppContainer>
      <div>
        <AppHeader />
        <AppListing />
      </div>
      <AppAddButton />
    </AppContainer>
  );
}

export default App;
