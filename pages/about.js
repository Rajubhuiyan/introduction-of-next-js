import Image from "next/image";
import Navbar from "./Components/Navbar";

const About = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <Navbar/>
            <h1>this is about</h1>
            {/* <Image src="/tom.jpg" alt="" width="400" height="300"></Image> */}
            <Image src="https://cdn.pixabay.com/photo/2020/05/11/15/38/tom-5158824_960_720.png" alt="" width="400" height="300"></Image>
        </div>
    );
};

export default About;