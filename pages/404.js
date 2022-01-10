import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';


const errorPage = () => {

    const router = useRouter();

    const handleInput = () => {
        router.push('/')
    };


    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000)

    }, [router])

    return (
        <div>
            <Navbar/>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '500px' }}>
                    <h1 style={{ textAlign: 'center' }}>404</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod impedit at ex eveniet minima sint veniam, unde voluptatem consectetur laborum dicta officiis praesentium voluptates veritatis distinctio eaque dolor, deleniti sapiente?</p>
                    {/* <h1 style={{cursor:'pointer'}}><a onClick={() => router.push('/')}>Return home</a></h1> */}
                    <h1 style={{ cursor: 'pointer' }}><a onClick={handleInput}>Return home</a></h1>
                </div>
            </div>
        </div>
    );
};

export default errorPage;