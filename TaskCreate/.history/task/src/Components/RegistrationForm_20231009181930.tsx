import Button from "../OwnStyles/button/button";
import Input from "../OwnStyles/input/input";

const RegistrationForm = () => {
    return (
        <form>
            <Input placeholder='Name' />
            <Input placeholder='LastName' />
            <Input placeholder='Email' />
            <Input />
            <Input />
            <Button type='submit' >Register</Button>
        </form>
    )
}
export default RegistrationForm