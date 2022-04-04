import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";

export const AddQuizModal = ({
    show,
    handleClose
}: {
    show: boolean;
    handleClose: () => void;
}) => {
    const [title, setTitle] = useState<string>("Example Quiz");
    const [body, setBody] = useState<string>("Example Description");

    return (
        <div>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Body>
                    <Form.Group controlId="formQuizId">
                        <Form.Label>Title: </Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setTitle(e.target.value)}
                        ></Form.Control>
                        <Form.Label>Description: </Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            value={body}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setBody(e.target.value)}
                        ></Form.Control>
                    </Form.Group>
                </Modal.Body>
            </Modal>
        </div>
    );
};
