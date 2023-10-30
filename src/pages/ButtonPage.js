import Button from "../components/Button";
import {GoBell, GoBookmarkFill,GoClock } from 'react-icons/go';

function ButtonPage(){
    

    return ( <div>
    <div>
        <Button purpose="primary" rounded className="mb-5" ><GoBell />Click me!</Button>
    </div>
    <div>
    <Button purpose="secondary" outline ><GoBookmarkFill/>Buy now!</Button>
    </div>
    <div>
    <Button purpose="success" rounded outline ><GoClock/>Cool stuff!</Button>
    </div>
    <div>
    <Button purpose="warning" rounded>Free stuff</Button>
    </div>
    <div>
    <Button purpose="danger" outline>Nicee</Button>
    </div>
</div>
    );
}

export default ButtonPage;