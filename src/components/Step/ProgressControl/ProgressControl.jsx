import NextBtn from '../../Button/NextBtn/NextBtn'
import PrevBtn from '../../Button/PrevBtn/PrevBtn'
import SubmitBtn from '../../Button/SubmitBtn/SubmitBtn'
import styles from './ProgressControl.module.css'

export default function ProgressControl({page, setPage}){
    const handleNextPage = () => setPage(prevPage => prevPage = prevPage + 1)
    const handlePrevPage = () => setPage(prevPage => prevPage = prevPage - 1)

    return(
        <section className={styles.container}>
            {page === 1 && 
            <div className={styles.step1}>
                <NextBtn onClick={handleNextPage}/>
            </div>
            }

            {page === 2 && 
            <div className={styles.other_steps}>
                <PrevBtn onClick={handlePrevPage}/>
                <NextBtn onClick={handleNextPage}/>
            </div>
            }
            
            {page === 3 && 
            <div className={styles.other_steps}>
                <PrevBtn onClick={handlePrevPage}/>
                <SubmitBtn/>
            </div>
            }
        </section>
    )
}