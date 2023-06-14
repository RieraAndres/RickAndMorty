export default function validate(userData) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    let errors ={}
    if (!userData.email)
     {
      errors.email = 'Se requiere un email';
     }
     else{
        if (!regexEmail.test(userData.email)) {
            errors.email = 'Debe ser un correo electrónico';
           }
           if(userData.email.length>35)
           {
               errors.email='Debe tener menos de 35 caracteres'
           } 
     }
    
    
    if(!userData.password)
     {
     errors.password = 'Se requiere una contraseña';
     }
     else{
        if(userData.password.length < 6 || userData.password.length>10)
    {
        errors.password = 'Debe tener entre 6 y 10 caracteres'
    }
     }
    
     return errors;
  }