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

    const actionBar = (
    <div>
        <Button onClick={handleClose} purpose={"primary"}>I Accept</Button>
    </div>
    );

    const modal =  (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>
    );

    return (
        <div className="relative">
            <Button onClick={handleClick} purpose="primary">
                Open Modal
                </Button>
            {showModal && modal}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin dui a fermentum blandit. Nulla sed purus dui. Proin sed dictum massa, nec placerat purus. Aliquam non dui in lacus ornare blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae libero sem. Nunc ornare dapibus leo, ut porttitor dolor efficitur eu. Aliquam pellentesque libero dui, quis finibus urna venenatis ut. Sed euismod diam ut diam efficitur, non iaculis libero elementum. Mauris hendrerit malesuada vulputate. Nulla facilisis ligula quam. Phasellus facilisis enim faucibus ante gravida congue. In hac habitasse platea dictumst. Nulla varius massa non ante tristique, non convallis risus imperdiet. Donec efficitur nec justo vel volutpat. Nullam sit amet nibh in risus ultricies sodales et et ligula.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin dui a fermentum blandit. Nulla sed purus dui. Proin sed dictum massa, nec placerat purus. Aliquam non dui in lacus ornare blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae libero sem. Nunc ornare dapibus leo, ut porttitor dolor efficitur eu. Aliquam pellentesque libero dui, quis finibus urna venenatis ut. Sed euismod diam ut diam efficitur, non iaculis libero elementum. Mauris hendrerit malesuada vulputate. Nulla facilisis ligula quam. Phasellus facilisis enim faucibus ante gravida congue. In hac habitasse platea dictumst. Nulla varius massa non ante tristique, non convallis risus imperdiet. Donec efficitur nec justo vel volutpat. Nullam sit amet nibh in risus ultricies sodales et et ligula.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin dui a fermentum blandit. Nulla sed purus dui. Proin sed dictum massa, nec placerat purus. Aliquam non dui in lacus ornare blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae libero sem. Nunc ornare dapibus leo, ut porttitor dolor efficitur eu. Aliquam pellentesque libero dui, quis finibus urna venenatis ut. Sed euismod diam ut diam efficitur, non iaculis libero elementum. Mauris hendrerit malesuada vulputate. Nulla facilisis ligula quam. Phasellus facilisis enim faucibus ante gravida congue. In hac habitasse platea dictumst. Nulla varius massa non ante tristique, non convallis risus imperdiet. Donec efficitur nec justo vel volutpat. Nullam sit amet nibh in risus ultricies sodales et et ligula.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin dui a fermentum blandit. Nulla sed purus dui. Proin sed dictum massa, nec placerat purus. Aliquam non dui in lacus ornare blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae libero sem. Nunc ornare dapibus leo, ut porttitor dolor efficitur eu. Aliquam pellentesque libero dui, quis finibus urna venenatis ut. Sed euismod diam ut diam efficitur, non iaculis libero elementum. Mauris hendrerit malesuada vulputate. Nulla facilisis ligula quam. Phasellus facilisis enim faucibus ante gravida congue. In hac habitasse platea dictumst. Nulla varius massa non ante tristique, non convallis risus imperdiet. Donec efficitur nec justo vel volutpat. Nullam sit amet nibh in risus ultricies sodales et et ligula.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin dui a fermentum blandit. Nulla sed purus dui. Proin sed dictum massa, nec placerat purus. Aliquam non dui in lacus ornare blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae libero sem. Nunc ornare dapibus leo, ut porttitor dolor efficitur eu. Aliquam pellentesque libero dui, quis finibus urna venenatis ut. Sed euismod diam ut diam efficitur, non iaculis libero elementum. Mauris hendrerit malesuada vulputate. Nulla facilisis ligula quam. Phasellus facilisis enim faucibus ante gravida congue. In hac habitasse platea dictumst. Nulla varius massa non ante tristique, non convallis risus imperdiet. Donec efficitur nec justo vel volutpat. Nullam sit amet nibh in risus ultricies sodales et et ligula.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin dui a fermentum blandit. Nulla sed purus dui. Proin sed dictum massa, nec placerat purus. Aliquam non dui in lacus ornare blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae libero sem. Nunc ornare dapibus leo, ut porttitor dolor efficitur eu. Aliquam pellentesque libero dui, quis finibus urna venenatis ut. Sed euismod diam ut diam efficitur, non iaculis libero elementum. Mauris hendrerit malesuada vulputate. Nulla facilisis ligula quam. Phasellus facilisis enim faucibus ante gravida congue. In hac habitasse platea dictumst. Nulla varius massa non ante tristique, non convallis risus imperdiet. Donec efficitur nec justo vel volutpat. Nullam sit amet nibh in risus ultricies sodales et et ligula.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin dui a fermentum blandit. Nulla sed purus dui. Proin sed dictum massa, nec placerat purus. Aliquam non dui in lacus ornare blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae libero sem. Nunc ornare dapibus leo, ut porttitor dolor efficitur eu. Aliquam pellentesque libero dui, quis finibus urna venenatis ut. Sed euismod diam ut diam efficitur, non iaculis libero elementum. Mauris hendrerit malesuada vulputate. Nulla facilisis ligula quam. Phasellus facilisis enim faucibus ante gravida congue. In hac habitasse platea dictumst. Nulla varius massa non ante tristique, non convallis risus imperdiet. Donec efficitur nec justo vel volutpat. Nullam sit amet nibh in risus ultricies sodales et et ligula.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sollicitudin dui a fermentum blandit. Nulla sed purus dui. Proin sed dictum massa, nec placerat purus. Aliquam non dui in lacus ornare blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae libero sem. Nunc ornare dapibus leo, ut porttitor dolor efficitur eu. Aliquam pellentesque libero dui, quis finibus urna venenatis ut. Sed euismod diam ut diam efficitur, non iaculis libero elementum. Mauris hendrerit malesuada vulputate. Nulla facilisis ligula quam. Phasellus facilisis enim faucibus ante gravida congue. In hac habitasse platea dictumst. Nulla varius massa non ante tristique, non convallis risus imperdiet. Donec efficitur nec justo vel volutpat. Nullam sit amet nibh in risus ultricies sodales et et ligula.</p>
        </div>
    )
}

export default ModalPage;