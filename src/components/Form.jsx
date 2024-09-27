import './formulario.css'
import Validar from './Validacion';


const Registro = () => {
    //ESTADOS:
    const {formData, handleChange, validarForm, error, resetFormData} = Validar({
        nombre:'',
        apellido:'',
        email:'',
        telefono:'',
        contraseña:'',
        confirmarContraseña: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!validarForm())
        {
            return;
        }
        resetFormData();
        setError('');
    };

    return( 
        <>
            <form onSubmit={handleSubmit} action="" className='form-group' /*onSubmit={handleSubmit(onSubmit)}*/>
                <h4>Registro: </h4>
                <input className='dato' type="text" name="nombre" value={formData.nombre} onChange={handleChange} required placeholder='Ingrese su Nombre'/>
                <input className='dato' type="text" name="apellido" value={formData.apellido} onChange={handleChange} required placeholder='Ingrese su Apellido'/>
                <input className='dato' type="email" name="email" value={formData.email} onChange={handleChange} required placeholder='Ingrese su Correo' />
                <input className='dato' type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required placeholder='Ingrese su Telefono' />
                <input className='dato' type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} required placeholder='Contraseña' />
                <input className='dato' type="password" name="confirmarContraseña" value={formData.confirmarContraseña} onChange={handleChange} required placeholder='Repita su Contraseña' />
                {error && <p>{error}</p>}
                <input className='boton' type="submit" value="Registrar" />
            </form>
        </>
    )
}   

export default Registro;


