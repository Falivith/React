import styles from './Post.module.css';
import { Comment } from './Comment'
import { Avatar } from './Avatar'

export function Post (){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src="https://github.com/rafamattia2.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Rafael Mattia</strong>
                        <span>Java Developer</span>
                    </div>
                </div>
                    <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30"> Publicado há 2h </time>
            </header>

            <div className = {styles.content}>
                    <p>Lorem, ipsum dolor sit amet consecteturp adipisicing elit. Cupiditate, officia quam sunt placeat suscipit, vero non laudantium debitis doloribus, magni dolore maxime temporibus culpa saepe dolor cumque. Eveniet, eum in!</p>
                    <p>
                        <a href="#">github.com</a>{'  '}
                        <a href="#">#newproject</a>{'  '}
                        <a href="#">#github</a>{'  '}
                        <a href="#">#new</a>
                    </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder="Deixe um comentário"></textarea>
                <footer>
                    <button type='submit'>Publicar</button>                    
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}