import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const errorPage = () => {

    const router  = useRouter();

    const handleInput = () => {
        router.push('/')
    }

    return (
        <div>
            <nav>
            <ul className="menu-bar">
                <li>
                    <Link href="/"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>about</a></Link>
                </li>
                <li>
                    <Link href="/contact"><a>contact</a></Link>
                </li>
                <li>
                    <Link href="/blog"><a>blog</a></Link>
                </li>
                <li>
                    <Link href="/product"><a>product</a></Link>
                </li>
            </ul>
        </nav>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '500px' }}>
                    <h1 style={{ textAlign: 'center' }}>404</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod impedit at ex eveniet minima sint veniam, unde voluptatem consectetur laborum dicta officiis praesentium voluptates veritatis distinctio eaque dolor, deleniti sapiente?</p>
                    {/* <h1 style={{cursor:'pointer'}}><a onClick={() => router.push('/')}>Return home</a></h1> */}
                    <h1 style={{cursor:'pointer'}}><a onClick={handleInput}>Return home</a></h1>
                </div>
            </div>
        </div>
    );
};

export default errorPage;