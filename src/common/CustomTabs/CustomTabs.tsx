import React from 'react';
import Tab from "react-bootstrap/Tab";

import Form from "react-bootstrap/Form";
import {dateNow} from "../../data/dateNow";
import {timeNow} from "../../data/timeNow";
import Tabs from "react-bootstrap/Tabs";
import './CustomTabs.scss'

const CustomTabs = () => {
    return (
        <div className={"tab-container"}>
        <Tabs className={"tabsContainer"} style={{paddingTop: "10px", paddingRight: "10px", paddingLeft: "10px",}}>

                <Tab className={"tab"}
                     eventKey="period"
                     title="Период"
                     color="#000"
                     style={{display: "flex", flexDirection: "column", alignItems: "flex-end", color: "black"}}>
                    <Form.Group style={{display: "flex", marginTop: "10px", marginRight: "10px", width: "250px"}}>
                        <span style={{display: "flex", color: "white", marginRight: "10px"}}>С:</span>
                        <div style={{width: "100%"}}>
                            <Form.Control type="date" defaultValue={dateNow}/>
                            <Form.Control type="time" defaultValue={"00:00"}/>
                        </div>
                    </Form.Group>
                    <Form.Group style={{display: "flex", marginTop: "10px", marginRight: "10px", width: "260px"}}>
                        <span style={{display: "flex", color: "white", marginRight: "10px"}}>По:</span>
                        <div style={{width: "100%"}}>
                            <Form.Control type="date" defaultValue={dateNow}/>
                            <Form.Control type="time" defaultValue={timeNow}/>
                        </div>
                    </Form.Group>
                    <button className={"sendButton"}>Обновить</button>
                </Tab>

            <Tab eventKey="param" title="Параметры">

            </Tab>
        </Tabs>
        </div>
    );
};

export default CustomTabs;