import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Form , Button } from 'react-bootstrap';

function RecordForm({ addDomain, selectedDomain , updateDomain }) {

   
    const [domainName, setDomainName ] = useState('');

    useEffect(() => {
        if (selectedDomain) {
            setDomainName(selectedDomain.name);
        } else {
            setDomainName('');
        }
    }, [selectedDomain]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!domainName) return;
        
        if (selectedDomain) {
            // UPDATE existing domain 
            updateDomain({
                ...selectedDomain , name : domainName });
        } else {
            // add new domain 
            addDomain({ id: Date.now(), name: domainName });
        }

        setDomainName('');
    }; 

    return (
        <div>
          <Form onSubmit={handleSubmit}>
             <Form.Group controlId='domainName'>
               <Form.Label > Domain Name </Form.Label>
                 <Form.Control
                    type="text" 
                    placeholder="Domain Name" 
                    value={domainName} 
                    onChange={(e) => setDomainName(e.target.value)} 
                />
                </Form.Group>
              <Button varient ="primary" type="submit">{selectedDomain ? 'Update' : 'Add'}</Button>
            </Form>
        </div>
    );
};
    
export default RecordForm ;