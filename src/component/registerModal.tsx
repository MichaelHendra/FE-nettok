import cssModule from './Modal.module.css'

//image
import Logo from '../assets/Logo.png'

const Register = ({isOpenRegister, onCloseRegister}) =>{
    if (!isOpenRegister) return null
    return(
        <div className={cssModule.modalOverlay}>
        <div className={cssModule.modal}>
        <button className={cssModule.closeButton} onClick={onCloseRegister}>X</button>
            <div className={cssModule.LineModal}>
                <img src={Logo} alt='Netfilx' />
                <h2>Register</h2>
            </div>
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
                    <label htmlFor='username'>Email</label>
                    <input type='text'  id='email' name='email'placeholder='Email'/>
                </div>
                <div className={cssModule.formGroup}>
                    <label htmlFor='username'>Telpon</label>
                    <input type='text'  id='telp' name='telp'placeholder='No Telpon'/>
                </div>
                <div className={cssModule.formGroup}>
                    <button type='submit'>Register</button>
                </div>
            </form>
        </div>
    </div>
    );
} 

export default Register