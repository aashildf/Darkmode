


import { ThemeProvider } from "./ThemeProvider.jsx";
import Header from "./Header.jsx";
import MainSection from './MainSection.jsx';


function App() {
  
  return (
    <>
    <ThemeProvider>
      <Header/>
      <MainSection/>
      </ThemeProvider>
    </>
  );
}

export default App;
