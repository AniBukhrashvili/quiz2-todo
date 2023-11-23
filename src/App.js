import { useState } from "react";
import AppAddButton from "./components/AppAddButton";
import AppContainer from "./components/AppContainer";
import AppHeader from "./components/AppHeader";
import AppListing from "./components/AppListing";
import AppModal from "./components/AppModal";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <AppContainer>
      <div>
        <AppHeader />
        <AppListing />
      </div>
      <AppAddButton onChange={() => setIsVisible(!isVisible)} />
      {isVisible && (
        <AppModal
          isVisible={isVisible}
          onChange={() => setIsVisible(!isVisible)}
        />
      )}
    </AppContainer>
  );
}

export default App;
