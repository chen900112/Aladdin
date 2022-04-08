import { useState, useRef, useEffect } from 'react';
import ScreenCanvas from "../../components/ScreenCanvas"
import VisWrapper from "../../components/VisWrapper"
import ScrollPanel from "../../components/ScrollPanel"

import ViewportCanvas from "./components/ViewportCanvas"
import { ScreenSimulator, VisCompSimulator } from './components/Simulator';
import VisLayer from './components/VisLayer';
import VisLibrary from './components/VisLibrary';

import styles from './Workbench.less';
import { Button } from 'antd';
const Workbench =()=>{
    const [ list, setList ] = useState([{key:"a"},{key:"b"}]);

    useEffect(()=>{
      
    })
   
    return <div className={styles.workbench}>
        <div className={styles.topPanel} >topBar</div>
            <div className='aa'>
                <ScrollPanel>
                    <VisLayer />
                </ScrollPanel>
                 <ScrollPanel>
                    <VisLibrary />
                 </ScrollPanel>
                <div>
                    <ViewportCanvas>
                        {/* 安装场景模拟器 */}
                        <ScreenSimulator comp={ScreenCanvas}>
                            {list.map(() => <VisCompSimulator comp={VisWrapper} />)}
                        </ScreenSimulator>
                    </ViewportCanvas>
                </div>
            </div>
        </div>
}
export default Workbench