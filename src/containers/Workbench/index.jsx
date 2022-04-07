import { useRef, useEffect } from 'react';
import { Button } from 'antd';
import AA from './components/AA';
import { PatternRect } from "../../components/VisComps"

import styles from './styles.less';

console.log("PatternRect", PatternRect);
const Workbench =()=>{
    const AARef = useRef(null);
    console.log("AARef",AARef);
    useEffect(()=>{
        console.log(AARef);
      
    })

    const changeCount = ()=>{
        AARef.current.changeCount()
    }
    return <div className={styles.Workbench}>
        <div className={styles.topBar} >topBar</div>
        <Button onClick={changeCount}>改变</Button>
                <AA ref={AARef}></AA>
            </div>
}
export default Workbench