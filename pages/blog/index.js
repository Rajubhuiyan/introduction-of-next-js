import React from 'react';
import Navbar from '../Components/Navbar';

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
        props: {
            data
        }
    }
}

const index = ({ data }) => {
    return (
        <div>

            <Navbar />
            <h1>this is blog</h1>


            {
            data?.slice(0, 5).map((dt) =>
                <div style={{margin:'40px', border: '1px solid red', padding: '20px'}} key={dt.id}>
                    <h3>{dt.id}</h3>
                    <h1>{dt.title}</h1>
                </div>
            )}


        </div>
    );
};

export default index;