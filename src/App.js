import Button from "./Button";

function App(){
    return ( <div>
    <div>
        <Button purpose="primary" rounded>Click me!</Button>
    </div>
    <div>
    <Button purpose="secondary" outline>Buy now!</Button>
    </div>
    <div>
    <Button purpose="success" rounded outline>Cool stuff!</Button>
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

export default App;