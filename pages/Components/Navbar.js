import Link from "next/link";
import styles from '../../styles/Navbar.module.css';
const Navbar = () => {
    return (
        <>
            <nav>
                <ul className={styles.menu_bar}>
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
        </>
    );
};

export default Navbar;