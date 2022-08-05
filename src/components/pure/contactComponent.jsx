import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from "../../models/contact.class";

const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Nombre: { contact.firtsName }
            </h2>
            <h2>
                Apellido: { contact.lastName }
            </h2>
            <h4>
                Email: { contact.email }
            </h4>
            <h5>
                Contacto { contact.status ? ' En Linea' : ' No disponible' }
            </h5>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf( Contact )
};


export default ContactComponent;
