import { Contatos } from "./components/contatos";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { PProjetos } from "./components/princ-projetos";
import { Projetos } from "./components/projetos";
import { Sobre } from "./components/sobre";
import { AppProvider } from "./context/AppContext";
import { Global } from "./styles/globalStyle";
import { Competencias } from "./components/competencias";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Global />
        <Header></Header>
        <Home></Home>
        <Projetos></Projetos>
        <PProjetos></PProjetos>
        <Sobre></Sobre>
        <Competencias />
        <Contatos></Contatos>
      </AppProvider>
      <Analytics/>
    </div>
  );
}

export default App;
