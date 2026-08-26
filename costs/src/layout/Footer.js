import {Fafacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer() {
    return (
       <footer className={styles.footer}>
        <ul>
            <li>
                <Fafacebook />
            </li>
            <li>
                <FaInstagram />
            </li>
            <li>
                <FaLinkedin />
            </li>
        </ul>
        <p><span>© 2023 Costs. Todos os direitos reservados.</span></p>
       </footer>
    )
}   

export default Footer;