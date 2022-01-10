import Navbar from "../Navbar";


const Header = () => {
    return (
        <div>
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
        </div>
    );
};

export default Header;