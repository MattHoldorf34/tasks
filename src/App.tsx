import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <p>Matthew Holdorf mholdorf@udel.edu</p>
            <p>Hello World</p>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <div>
                <h1>This is my header</h1>;
                <img
                    src="https://imgix.bustle.com/rehost/2016/9/13/cdeb5e9c-34ac-4ba0-96a6-a878a5187414.png?w=800&fit=crop&crop=faces&auto=format%2Ccompress"
                    alt="A picture of Simba"
                />
            </div>
            <div>
                <ul>
                    <li>Boosh</li>
                    <li>Whitney</li>
                    <li>Justice</li>
                </ul>
            </div>
            <div>
                <Button onClick={() => console.log("Hello World!")}>
                    Log Hello World
                </Button>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            Column 1
                            <div
                                style={{
                                    height: 34,
                                    width: 600,
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                        <Col>
                            Column 2
                            <div
                                style={{
                                    height: 34,
                                    width: 600,
                                    backgroundColor: "red"
                                }}
                            ></div>
                        </Col>
                    </Row>
                </Container>
            </div>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
