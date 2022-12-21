
import styles from './style.module.css'
function UiHeadingCollection() {
    const abcd = "Aa Bb Cc Dd Ee"
    return (
        <div className={`${styles.headings__collection} bg-primary-300`}>
            <div className={styles.heading__item}>
                <h1 style={{fontSize: "80px"}} 
                    className="ff-inter fs-h100 fw-bold text-color-100">{abcd}</h1>
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 1 <span className='ff-inter fs-body-100 fw-semi-bold text-color-400'>- 80px</span></p>
            </div>
            <div className={styles.heading__item}>
                <h2 style={{fontSize: "60px"}} 
                    className="ff-inter fs-h200 fw-bold text-color-100">{abcd}</h2>
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 2 <span className='ff-inter fs-body-100 fw-semi-bold-semi text-color-400'> - 60px</span></p>
            </div>
            <div className={styles.heading__item}>
                <h3 style={{fontSize: "48px"}}
                    className="ff-inter ff-inter fs-h300 fw-bold text-color-100">{abcd}</h3> 
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 3 <span className='ff-inter fs-body-100 fw-semi-bold text-color-400'> - 48px</span></p>             
            </div>
            <div className={styles.heading__item}>
                <h4 style={{fontSize: "40px"}}
                    className="ff-inter fs-h400 fw-bold text-color-100">{abcd}</h4>
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 4 <span className='ff-inter fs-body-100 fw-semi-bold text-color-400'> - 40px</span></p>            
            </div> 
            <div className={styles.heading__item}>
                <h5 style={{fontSize: "32px"}}
                    className="ff-inter fs-h500 fw-bold text-color-100">{abcd}</h5>
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 5 <span className='ff-inter fs-body-100 fw-semi-bold text-color-400'> - 32px</span></p>           
            </div> 
            <div className={styles.heading__item}>
                <h6 style={{fontSize: "28px"}}
                    className="ff-inter fs-h600 fw-bold text-color-100">{abcd}</h6>
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 6 <span className='ff-inter fs-body-100 fw-semi-bold text-color-400'> - 28px</span></p>              
            </div> 
            <div className={styles.heading__item}>
                <p  style={{fontSize: "26px"}}
                    className="ff-inter fs-h700 fw-bold text-color-100">{abcd}</p>
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 7 <span className='ff-inter fs-body-100 fw-semi-bold text-color-400'> - 26px</span></p>
            </div>
            <div className={styles.heading__item}>
                <p  style={{fontSize: "24px"}}
                    className="ff-inter fs-h800 fw-bold text-color-100">{abcd}</p>
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 8 <span className='ff-inter fs-body-100 fw-semi-bold text-color-400'> - 24px</span></p>           
            </div>
            <div className={styles.heading__item}>
                <p  style={{fontSize: "22px"}}
                    className="ff-inter fs-h900 fw-bold text-color-100">{abcd}</p>
                <p className="ff-inter fs-body-100 fw-semi-bold text-color-300">Heading 9 <span className='ff-inter fs-body-100 fw-semi-bold text-color-400'> - 22px</span></p>
            </div>
        </div>
    )
}
export default UiHeadingCollection