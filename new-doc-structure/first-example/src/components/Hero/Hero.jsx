import styles from './styles.module.css';
import React from 'react';
import Button from '../Button/Button';

const Hero = () => {
    return (
        <>
            <section className={styles.wrapper}>
                <section className={styles.hero}>
                    <div className={styles.heroContent}>
                        <h1>TASKANA</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente culpa maiores cupiditate aut corrupti, harum inventore. Dolore, blanditiis maiores. Placeat fuga labore facilis quibusdam consequatur voluptas debitis veritatis hic ratione.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, excepturi aspernatur? Similique repellat ipsa ad pariatur unde eveniet harum libero.
                        </p>
                        <Button>Learn More</Button>
                    </div>
                    <div className={styles.heroAsset}>
                        <h1>I'll be the right content ...</h1>
                    </div>
                </section>
            </section>
        </>
    );
};

export default Hero;