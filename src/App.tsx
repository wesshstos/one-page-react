import React from "react";
import Banner from "./components/banner";
import Cards from "./components/Cards";
import Form from "./components/Form";

const App:React.FC = () => {
  return(
    <div>
      <Banner />
      <Cards />
      <Form />
    </div>
  )
}

export default App