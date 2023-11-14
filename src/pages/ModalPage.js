import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
        setShowModal(false);
    }

    const handleClick = () => {
        setShowModal(true);
    }

    return (
        <div className="relative">
            <Button onClick={handleClick} purpose="primary">Open Modal</Button>
            {showModal && <Modal onClose={handleClose}/>}
        </div>
    )
}

export default ModalPage;