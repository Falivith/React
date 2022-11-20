import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
                className = {styles.cover} 
                src="https://img.freepik.com/vetores-gratis/vetor-de-padrao-em-zigue-zague-sem-emenda-turquesa_53876-89883.jpg?w=500"
            />

            <div className = {styles.profile}>
                <Avatar src="https://github.com/Falivith.png"/>
                <strong>Gabriel Ramires</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size = {20}/>
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}