import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contacto.css"


const Contacto = () => {
    return (
        <div className='container'>
        <div className='row align-items-center'>
            <div className='col-lg-6 col-md-12'>
                <div className='contenedorTitulos text-center'>
                    <h1>Contactanos</h1>
                    <h3>¡Escribe tu informacion y dejanos tu consulta!</h3>
                    <h4>Te responderemos pronto</h4>
                </div>
    
                <Form id="mi-formulario" className="mx-auto">
                    <Form.Group className="mb-3 row" controlId="formBasicEmail">
                        <div className='col-md-6 mb-3'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control className='customLabel' type="text" placeholder="Ingrese su nombre" />
                        </div>
                        <div className='col-md-6 mb-3'>
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control className='customLabel' type="text" placeholder="Ingrese su apellido" />
                        </div>
                    </Form.Group>
    
                    <Form.Group className="mb-3 row" controlId="formBasicPhone">
                        <div className='col-md-6 mb-3'>
                            <Form.Label>Telefono</Form.Label>
                            <Form.Control className='customLabel' type="text" placeholder="Ingrese su numero telefonico" />
                        </div>
                        <div className='col-md-6 mb-3'>
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control className='customLabel' type="email" placeholder="Ingrese su correo electronico" />
                        </div>
                    </Form.Group>
    
                    <Form.Group className="mb-3 mt-5 row" controlId="formBasicMessage">
                        <Form.Label>Mensaje</Form.Label>
                        <div>
                            <textarea className='w-100' id='areaTexto' rows={10} />
                        </div>
                    </Form.Group>
    
                    <Button className='w-100 btn-dark' variant="primary" type="submit">
                        Enviar consulta
                    </Button>
                </Form>
            </div>
    
            <div className='col-lg-6 col-md-12 text-center'>
                <img className='img-fluid rounded' src='../../assets/perrito3.jpg' alt="Perrito" />
            </div>
        </div>
    </div>
    
    
        
      );
    }
    

export default Contacto