import React from "react";
import products from "./db";
import Fav from "./Fav";

function App() {
  const rek = products.map(item => <Fav products={item} />);

  return <div>{rek}</div>;
}
export default App;
