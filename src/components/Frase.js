import styles from './Frase.module.css'

function Frase() {
    return (
        <div className={styles.fraseContainer}>
            <p> Este componente é uma frase</p>
            <p className={styles.fraseContent}>Este é o componente de uma frase na mesma div mas com className</p>
        </div>
    )
}

export default Frase