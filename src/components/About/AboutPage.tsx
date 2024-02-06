import './About.css';
import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((props, ref)=> {
    return (
        <div id='about' className="bg-light p-5" ref={ref}>
    <div className="rounded pt-5 pb-1 text-dark">
        <h3 className="mb-3  text-center fw-bold">IDENTIDAD DE LA MARCA SUNRISE MULTISERVICES LLC.</h3>
    </div>
    
    <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button style={{width: '100%'}} className={"btn accordion-button"} type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne">
                    <h2>Misión</h2>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne">
                <div className="accordion-body py-3 px-5">
                    <i className="bi bi-caret-right-fill me-1"></i>
                    Servir a la comunidad de inmigrantes para que puedan vivir y trabajar
                    libremente en Estados Unidos junto a sus seres queridos.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo">
                    <h2>Visión</h2>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingTwo">
                <div className="accordion-body py-3 px-5">
                    <i className="bi bi-caret-right-fill me-1"></i>
                    Ser una empresa líder en el área de preparación de documentos de
                    inmigración, ofreciendo un servicio de excelencia y calidad a nuestros
                    clientes.
                </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                    aria-controls="panelsStayOpen-collapseThree">
                    <h2>Valores</h2>
                </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingThree">
                <div className="accordion-body">
                    <ul className="list-group">
                        <li className="mb-2 list-group-item"><span className="fw-bold">Cristianos:</span> somos una empresa familiar
                            fundada bajo principios
                            bíblicos cristianos.</li>
                        <li className="mb-2 list-group-item bg-light"><span className="fw-bold">Integridad:</span> nos manejamos con
                            honestidad, apegados a nuestros
                            valores cristianos y morales.</li>
                        <li className="mb-2 list-group-item"><span className="fw-bold">Orientación al cliente:</span> estamos
                            comprometidos con brindar
                            servicios de excelencia a nuestros clientes.</li>
                        <li className="mb-2 list-group-item bg-light"><span className="fw-bold">Respeto:</span> somos respetuosos con la
                            información suministrada por
                            nuestros clientes.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

    );
});

export default About;