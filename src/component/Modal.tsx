import cssModule from "./Modal.module.css"

const Modal = ({isOpen, onClose}) =>{
if (!isOpen) return null;
return (
    <div className={cssModule.modalOverlay}>
        <div className={cssModule.modal}>
            <button className={cssModule.closeButton} onClick={onClose}>X</button>
            <h2>Login</h2>
            <form>
                <div className={cssModule.formGroup}>
                    <label htmlFor='username'>Username</label>
                    <input type='text'  id='username' name='username' placeholder='Username'/>
                </div>
                <div className={cssModule.formGroup}>
                    <label htmlFor='username'>Password</label>
                    <input type='text'  id='password' name='password'placeholder='Password'/>
                </div>
                <div className={cssModule.formGroup}>   
                    <button type='submit'>Login</button>
                </div>
            </form>
        </div>
    </div>
);
}

export default Modal