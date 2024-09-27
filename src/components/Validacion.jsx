import React, {useState} from 'react';

const Validar = (valoresIniciales) => {
    const [formData, setFormData] = useState(valoresIniciales);
    const [error,setError] = useState('');
    const handleChange = (e) => {
        const{ name, value } =e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //Envio del formulario
    const validarForm = () => {
        const {contraseña, confirmarContraseña}= formData;
        
        //Validar contraseña
        if(contraseña != confirmarContraseña)
        {
            setError('Alguna de las contraseñas no coincide');
            return false;
        }
        setError('');
        return true;
    };
    const resetFormData=()=>{
        setFormData(valoresIniciales);
    };
    return{formData,handleChange,validarForm,error, resetFormData};
}

export default Validar;