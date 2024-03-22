import React from 'react';
import { Table , Button } from "react-bootstrap";

function DomainTable( { domains , deleteDomain , selectDomain }) {
    // Logic for displaying domains and DNS records
    return (
        <Table Table striped bordered hover className='mt-4'>
<thead>
                <tr>
                    <th>Domain</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {domains.map(domain => (
                    <tr key={domain.id}>
                        <td>{domain.name}</td>
                        <td>
                            <Button   varient ='info' onClick={() => selectDomain(domain)}>Edit</Button>
                            <Button  varient ='info' onClick={() => deleteDomain(domain.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    
    );
}





       

export default DomainTable;