import styles from '../Form/Form.module.css'
import rymlogin from '../Form/rymlogin.jpg'
import validate from '../Form/validation.js'
import { useState } from 'react';

function Form ({login}) {
    const [userData , setUserData] = useState({
        email:"",
        password:""
      })
    
    const [errors ,setErrors] = useState({})


      function handleChange(event) {
        setUserData({
          ...userData,
          [event.target.name]: event.target.value,
        })

        setErrors(
            validate({
              ...userData,
              [event.target.name]: event.target.value,
            }))
      };
    
      function handleSubmit(event) {
        event.preventDefault();
        login(userData);
      }
     
    
    return(
        <div className={styles.divForm}>
            <form className={styles.Form} onSubmit={handleSubmit}>
            <h1>INGRESA</h1>
            <img src={rymlogin} alt=""/>
            <label>Email</label>
            <input name="email" 
            type="text" 
            placeholder="Ingresa tu Email"
            className={styles.input}
            value={userData.email}
            onChange={handleChange}
            >
            </input>
            <label className={styles.label}>{errors.email}</label>
            <label>Contraseña</label>
            <input name="password"
            type="password"
            placeholder="Ingresa tu Contraseña"
            className={styles.input}
            value={userData.password}
            onChange={handleChange}
            >
            </input>
            <label className={styles.label}>{errors.password}</label>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form;