import React, {useState} from 'react';
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import {dateNow} from "../../data/dateNow";
import Tabs from "react-bootstrap/Tabs";
import './CustomTabs.css'
import TabButton from "../TabButton/TabButton";

const CustomTabs = ({...props}) => {
    const [key, setKey] = useState('period');
    const onSelectSetKey = (key: string | null) => {
        if (key !== null)
        setKey(key)
    }


    /*(filed: string, value:sring) => {

        [].filter(el => el[filed] === value)
    }*/
    return (

        <Tabs className={"tabsContainer"}
              activeKey={key}
              onSelect={(k) => onSelectSetKey(k)}
              style={{paddingTop: "10px", paddingRight: "10px", paddingLeft: "10px",}}>

            <Tab tabClassName={"tab"}
                 className={"tab"}
                 eventKey="period"
                 title="Период"
                 color="#000"
                 style={{padding: "10px"}}
                 >
                <Form.Group style={{ padding: "5px",marginLeft: "20px"}}>
                    <Form.Label style={{color: "white"}}>С:</Form.Label>
                        <Form.Control type="date" defaultValue={dateNow} style={{width: "250px"}}/>
                        <Form.Control type="time" defaultValue={"00:00"} style={{width: "250px"}}/>
                </Form.Group>
                <Form.Group style={{ padding: "5px",marginLeft: "20px"}}>
                    <Form.Label style={{color: "white"}}>По:</Form.Label>
                        <Form.Control type="date" defaultValue={dateNow} style={{width: "250px"}}/>
                        <Form.Control  type="time" defaultValue={"23:59"} style={{width: "250px"}}/>
                </Form.Group>
                <TabButton name={'Обновить'} onClick={() => {}}/>
            </Tab>
            {props.param && <Tab eventKey="param" title="Параметры" style={{padding: "10px"}}>

                {props.children}
            </Tab>}
        </Tabs>
    );
};

export default CustomTabs;