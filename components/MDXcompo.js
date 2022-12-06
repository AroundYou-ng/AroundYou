import styles from "../styles/MDX.module.css"

const MDXcompo = {
    h1: (props) => <h1 className={styles.h1} {...props} />,
    h2: (props) => <p className={styles.h2} {...props} />,
    h3: (props) => <h3 className={styles.h3} {...props} />,
    p: (props) => <p className={styles.p} {...props}/>,
    img: (props) => <img className={styles.imgBlog} {...props} />,
    ul: (props) => <ul className={styles.ul} {...props} />,
    li: (props) => <li className={styles.li}  {...props} />
}


export default MDXcompo