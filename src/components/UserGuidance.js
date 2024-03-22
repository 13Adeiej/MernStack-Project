import React from 'react';
import { Button, Toast } from 'react-bootstrap';

function MyComponent() {
    const [showToast, setShowToast] = React.useState(false);

    const toggleToast = () => setShowToast(!showToast);

    return (
        <div>
            <Button onClick={toggleToast}>Show Notification</Button>

            <Toast show={showToast} onClose={toggleToast}>
                <Toast.Header>
                    <strong className="mr-auto">Notification</strong>
                </Toast.Header>
                <Toast.Body>Operation successful</Toast.Body>
            </Toast>
        </div>
    );
}

export default MyComponent;