import { useRef, useEffect } from 'react';
import styles from './styles.less';
import AA from './components/AA';

const Workbench =()=>{
    const AARef = useRef(null);
    console.log(AARef);
    useEffect(()=>{
        console.log(AARef);
      
    })

    const changeCount = ()=>{
        AARef.current.changeCount()
    }
    return <div className={styles.Workbench}>
        <div className={styles.topBar} >topBar</div>
        <button onClick={changeCount}>改变</button>
                <AA ref={AARef}></AA>
            </div>
}
export default Workbench