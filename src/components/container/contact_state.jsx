import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contactComponent';


const ContactState = () => {

    const defaultContact = new Contact('Edward', 'Cuesta', 'email@email.com', false );

    return (
        <div>
            <h1>
                Contacto
            </h1>
            <ContactComponent contact={defaultContact} ></ContactComponent>
        </div>
    );
};

export default ContactState;
