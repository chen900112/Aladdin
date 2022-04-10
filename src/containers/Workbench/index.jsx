import { useState, useRef, useEffect } from 'react';
import ScreenCanvas from "../../components/ScreenCanvas"
import VisWrapper from "../../components/VisWrapper"
import ScrollPanel from "../../components/ScrollPanel"


import ViewportCanvas from "./components/ViewportCanvas"
import { ScreenSimulator, VisCompSimulator } from './components/Simulator';
import VisLayer from './components/VisLayer';
import VisLibrary from './components/VisLibrary';
import OperatorPanel from "./components/OperatorPanel"

import styles from './Workbench.less';
import { Button } from 'antd';
const Workbench =()=>{
    const [list, setList] = useState([{ key: "a", width: 100, height: 100 }, { key: "b", width: 100, height: 100 }]);

    useEffect(()=>{
       
    })
   
    return <div className={styles.workbench}>
        <div className={styles.haderPanel} style={{height:36}} >topBar</div>
        <div className={styles.bodyPanel} style={{ height:`calc(100vh - 36px)` }}>
                <ScrollPanel defaultWidth={100}>
                    <VisLayer />
                </ScrollPanel>
                <ScrollPanel defaultWidth={100} >
                    <VisLibrary />
                 </ScrollPanel>
                <div style={{flex:1,display:'flex'}}>
                    {/* 安装场景模拟器 */}
                    <ScreenSimulator comp={ScreenCanvas}>
                        {list.map((d) => <VisCompSimulator key={d.key} comp={VisWrapper} config={d} />)}
                    </ScreenSimulator>
                </div>

                <ScrollPanel defaultWidth={300} >
                    <OperatorPanel/>
                </ScrollPanel>
            </div>
        </div>
}
export default Workbench