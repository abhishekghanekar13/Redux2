import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Container from "./Components/Paragraph";
import Button from "./Components/Button";
import Text from "./Components/Text";

function App() {
  return (
    <>
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header />
          <Text/>
         <Button/>
        </Container>
      </center>
    </>
  );
}

export default App;
