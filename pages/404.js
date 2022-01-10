import Link from 'next/link';
import React from 'react';

const errorPage = () => {
    return (
        <div>
            <nav>
            <ul className="menu-bar">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/product">Product</Link>
                </li>
            </ul>
        </nav>
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ width: '500px' }}>
                    <h1 style={{ textAlign: 'center' }}>404</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod impedit at ex eveniet minima sint veniam, unde voluptatem consectetur laborum dicta officiis praesentium voluptates veritatis distinctio eaque dolor, deleniti sapiente?</p>
                    <h1><Link href="/">Go Back To Home</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default errorPage;