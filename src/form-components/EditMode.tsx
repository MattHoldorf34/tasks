import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const [isEditing, setIsEditing] = useState<boolean>(false);

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEditing(event.target.checked);
    }
    function updateIsStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                label="Editing?"
                checked={isEditing}
                onChange={updateEditing}
            />
            {isStudent && !isEditing && <div>{name} is a student</div>}
            {!isStudent && !isEditing && <div>{name} is not a student</div>}
            {isEditing && (
                <div>
                    <Form.Group controlId="formPersonName">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student"
                        label="Student?"
                        checked={isStudent}
                        onChange={updateIsStudent}
                    />
                </div>
            )}
        </div>
    );
}
