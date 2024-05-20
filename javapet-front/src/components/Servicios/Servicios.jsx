import "./Servicios.css";
import {Container, Row, Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import servicios1 from "../../assets/servicios1.png";

const Servicios = () => {
    return (
        <section id="home-outstanding" className="my-5">
            <Container>
                <Row>
                   


                    {/* <Col xs={12} md={3} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <Row className="align-items-center">
                                <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                                    <div className="rounded-head white-background"></div>
                                    <img alt="Pin" height="90px" src={servicios1} className="lazyload" />
                                    <noscript>
                                        <img
                                            src="https://www.kivet.com/wp-content/themes/kivet/assets/images/comodidad-value.png"
                                            alt="Pin"
                                            height="90px"
                                        />
                                    </noscript>
                                </Col>
                                <Col xs={12} md={8} className="mt-4 mt-md-0 text-left">
                                    <h3 className="h3 font-extra-bold white-color my-3">Kivet cerca de ti</h3>
                                    <p className="white-color">
                                        Más de 50 centros veterinarios Kivet entre España y Portugal.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <Row className="align-items-center">
                                <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                                    <div className="rounded-head white-background"></div>
                                    <img alt="Pin" height="90px" src={servicios1} className="lazyload" />
                                    <noscript>
                                        <img
                                            src="https://www.kivet.com/wp-content/themes/kivet/assets/images/comodidad-value.png"
                                            alt="Pin"
                                            height="90px"
                                        />
                                    </noscript>
                                </Col>
                                <Col xs={12} md={8} className="mt-4 mt-md-0 text-left">
                                    <h3 className="h3 font-extra-bold white-color my-3">Kivet cerca de ti</h3>
                                    <p className="white-color">
                                        Más de 50 centros veterinarios Kivet entre España y Portugal.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <Row className="align-items-center">
                                <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                                    <div className="rounded-head white-background"></div>
                                    <img alt="Pin" height="90px" src={servicios1} className="lazyload" />
                                    <noscript>
                                        <img
                                            src="https://www.kivet.com/wp-content/themes/kivet/assets/images/comodidad-value.png"
                                            alt="Pin"
                                            height="90px"
                                        />
                                    </noscript>
                                </Col>
                                <Col xs={12} md={8} className="mt-4 mt-md-0 text-left">
                                    <h3 className="h3 font-extra-bold white-color my-3">Kivet cerca de ti</h3>
                                    <p className="white-color">
                                        Más de 50 centros veterinarios Kivet entre España y Portugal.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <Row className="align-items-center">
                                <Col xs={12} md={4} className="text-center mb-4 mb-md-0">
                                    <div className="rounded-head white-background"></div>
                                    <img alt="Pin" height="90px" src={servicios1} className="lazyload" />
                                    <noscript>
                                        <img
                                            src="https://www.kivet.com/wp-content/themes/kivet/assets/images/comodidad-value.png"
                                            alt="Pin"
                                            height="90px"
                                        />
                                    </noscript>
                                </Col>
                                <Col xs={12} md={8} className="mt-4 mt-md-0 text-left">
                                    <h3 className="h3 font-extra-bold white-color my-3">Kivet cerca de ti</h3>
                                    <p className="white-color">
                                        Más de 50 centros veterinarios Kivet entre España y Portugal.
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    </Col> */}

                    <Col xs={12} md={6} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <div className="mb-4">
                                <div className="rounded-head white-background"></div>
                                <img
                                    alt="Pin"
                                    height="90px"
                                    src={servicios1}
                                    className="lazyload"
                                    //   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                    <img
                                        src="https://www.kivet.com/wp-content/themes/kivet/assets/images/comodidad-value.png"
                                        alt="Pin"
                                        height="90px"
                                    />
                                </noscript>
                            </div>
                            <div className="mt-4">
                                <h3 className="h3 font-extra-bold white-color my-3 text-left">Kivet cerca de ti</h3>
                                <p className="white-color">
                                    Más de 50 centros veterinarios Kivet entre España y Portugal.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <div className="mb-4">
                                <div className="rounded-head white-background"></div>
                                <img
                                    alt="Certificado"
                                    height="90px"
                                    src={servicios1}
                                    className="lazyload"
                                    //   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                    <img
                                        src="https://www.kivet.com/wp-content/themes/kivet/assets/images/confianza-value.png"
                                        alt="Certificado"
                                        height="90px"
                                    />
                                </noscript>
                            </div>
                            <div className="mt-4">
                                <h3 className="h3 font-extra-bold white-color my-3 text-left">
                                    Profesionales especializados
                                </h3>
                                <p className="white-color">
                                    Más de 250 expertos veterinarios que dedican el máximo cuidado y cariño a tu
                                    mascota.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <div className="mb-4">
                                <div className="rounded-head white-background"></div>
                                <img
                                    alt="Pin"
                                    height="90px"
                                    src={servicios1}
                                    className="lazyload"
                                    //   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                    <img
                                        src="https://www.kivet.com/wp-content/themes/kivet/assets/images/comodidad-value.png"
                                        alt="Pin"
                                        height="90px"
                                    />
                                </noscript>
                            </div>
                            <div className="mt-4">
                                <h3 className="h3 font-extra-bold white-color my-3 text-left">Kivet cerca de ti</h3>
                                <p className="white-color">
                                    Más de 50 centros veterinarios Kivet entre España y Portugal.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <div className="mb-4">
                                <div className="rounded-head white-background"></div>
                                <img
                                    alt="Certificado"
                                    height="90px"
                                    src={servicios1}
                                    className="lazyload"
                                    //   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                    <img
                                        src="https://www.kivet.com/wp-content/themes/kivet/assets/images/confianza-value.png"
                                        alt="Certificado"
                                        height="90px"
                                    />
                                </noscript>
                            </div>
                            <div className="mt-4">
                                <h3 className="h3 font-extra-bold white-color my-3 text-left">
                                    Profesionales especializados
                                </h3>
                                <p className="white-color">
                                    Más de 250 expertos veterinarios que dedican el máximo cuidado y cariño a tu
                                    mascota.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <div className="mb-4">
                                <div className="rounded-head white-background"></div>
                                <img
                                    alt="Pin"
                                    height="90px"
                                    src={servicios1}
                                    className="lazyload"
                                    //   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                    <img
                                        src="https://www.kivet.com/wp-content/themes/kivet/assets/images/comodidad-value.png"
                                        alt="Pin"
                                        height="90px"
                                    />
                                </noscript>
                            </div>
                            <div className="mt-4">
                                <h3 className="h3 font-extra-bold white-color my-3 text-left">Kivet cerca de ti</h3>
                                <p className="white-color">
                                    Más de 50 centros veterinarios Kivet entre España y Portugal.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6} className="text-center my-3">
                        <div className="primary-background-color rounded p-4 value-block">
                            <div className="mb-4">
                                <div className="rounded-head white-background"></div>
                                <img
                                    alt="Certificado"
                                    height="90px"
                                    src={servicios1}
                                    className="lazyload"
                                    //   src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                                />
                                <noscript>
                                    <img
                                        src="https://www.kivet.com/wp-content/themes/kivet/assets/images/confianza-value.png"
                                        alt="Certificado"
                                        height="90px"
                                    />
                                </noscript>
                            </div>
                            <div className="mt-4">
                                <h3 className="h3 font-extra-bold white-color my-3 text-left">
                                    Profesionales especializados
                                </h3>
                                <p className="white-color">
                                    Más de 250 expertos veterinarios que dedican el máximo cuidado y cariño a tu
                                    mascota.
                                </p>
                            </div>
                        </div>
                    </Col>
                  
                </Row>
            </Container>
        </section>
    );
};

export default Servicios;
