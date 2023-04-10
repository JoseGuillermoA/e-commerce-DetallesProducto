import Header from "@/components/header/header";
import Product from "@/components/producto/producto";

function IndexPage (){
  return(
    <div>

      <header>
        <title>Producto</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"></link>
      </header>

      <Header/>
      <Product/>

    </div>
  );
}

export default IndexPage;