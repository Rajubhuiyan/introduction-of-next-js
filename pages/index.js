import Navbar from "./Components/Navbar";


const index = () => {

  return (
    <>

      <Navbar />
      <h1>this is home</h1>
      <style jsx>
        {
          `
          h1{
          color:red
          }
         `
        }
      </style>
    </>
  );
};

export default index;