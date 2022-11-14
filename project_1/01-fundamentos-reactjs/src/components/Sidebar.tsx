import styles from './Sidebar.module.css';

export function Sidebar () {
    return (
        <aside className={styles.sidebar}>
            <img 
                className = {styles.cover} 
                src="https://img.freepik.com/vetores-gratis/vetor-de-padrao-em-zigue-zague-sem-emenda-turquesa_53876-89883.jpg?w=500"
            />

            <div className = {styles.profile}>
                <img 
                    className={styles.avatar}
                    src="https://avatars.githubusercontent.com/u/93415191?v=4"
                />

                <strong>Gabriel Ramires</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    Editar seu Perfil
                </a>
            </footer>
        </aside>
    );
}