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
    const [ list, setList ] = useState([{key:"a"},{key:"b"}]);

    useEffect(()=>{
       
    })
   
    return <div className={styles.workbench}>
        <div className={styles.haderPanel} style={{height:36}} >topBar</div>
        <div className={styles.bodyPanel} style={{ height:`calc(100vh - 36px)` }}>
                <ScrollPanel defaultWidth={100}>
                    <VisLayer />
                </ScrollPanel>
                <ScrollPanel defaultWidth={300} >
                    <VisLibrary />
                 </ScrollPanel>
                <div style={{flex:1}}>
                    <ViewportCanvas>
                        {/* 安装场景模拟器 */}
                        <ScreenSimulator comp={ScreenCanvas}>
                            {list.map((d) => <VisCompSimulator key={d.key} comp={VisWrapper} />)}
                        </ScreenSimulator>
                    </ViewportCanvas>
                </div>

                <ScrollPanel defaultWidth={300} >
                    <OperatorPanel/>
                </ScrollPanel>
            </div>
        </div>
}
export default Workbench