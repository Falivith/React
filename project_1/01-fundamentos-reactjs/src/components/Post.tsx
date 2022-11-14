import styles from './Post.module.css';

export function Post (){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://scontent.fcxj1-1.fna.fbcdn.net/v/t39.30808-6/298224412_3155183981398399_4588645305864048923_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHKQ_ZV-h4TtLJQ65NcegIS-HTPLhaAk0j4dM8uFoCTSC9ZYoWfStlRH9xRoORgl9wAkob8t0LHCBH-JM95DU-j&_nc_ohc=7hJU8et3UtwAX8h4Fcz&_nc_ht=scontent.fcxj1-1.fna&oh=00_AfDrdTHCu9bX6eXi_W2F-7xinh9bCckCfX5LqddD-vcdNw&oe=6377CC78"
                    />
                    <div className={styles.authorInfo}>
                        <strong>Júlia Braga</strong>
                        <span>English Teacher</span>
                    </div>
                </div>
                    <time 
                        title="11 de Maio às 08:13h" 
                        dateTime="2022-05-11 08:13:30">
                    </time>
            </header>
            <div className = {styles.content}>
                    <p> Lorem, ipsum dolor sit amet consecteturp adipisicing elit. Cupiditate, officia quam sunt placeat suscipit, vero non laudantium debitis doloribus, magni dolore maxime temporibus culpa saepe dolor cumque. Eveniet, eum in!</p>
                    <a href="#"><p>github.com</p></a>
                    <a href="#"><p>#newproject #github #new</p></a> 
            </div>
        </article>
    );
}