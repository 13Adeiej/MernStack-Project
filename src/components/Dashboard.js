import React from "react";
import { useState  } from "react";
import { Button , Modal   } from "react-bootstrap";
import DomainTable from "./DomainTable";
import RecordForm from "./RecordForm";
import DomainDistributionChart from "./DomainChart";
import BulkUpload from "./BulkUpload";
import MyComponent from "./UserGuidance";

function Dashboard(){
    const [domains, setDomains] = useState([]);
    const [selectedDomain, setSelectedDomain] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

 // Function to handle search input

    const handleSearch = (term) => {
        setSearchTerm(term); };

// filter the Domain     
const filteredDomins = domains.filter(domain => domain.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
// Function to add a new domain
    const addDomain = (domain) => {
        setDomains([...domains, domain]);
    };

// Function to delete a domain
    const deleteDomain = (domainId) => {
        setDomains(domains.filter(domain => domain.id !== domainId));
    };

// Function to select a domain for editing
    const selectDomain = (domain) => {
          setSelectedDomain(domain);
          setShowForm(true);
    };

// Update Domain Name 
const updateDomain = (updatedDomain) => {
    setDomains(domains.map(domain => (domain.id === updatedDomain.id ? updatedDomain : domain)));
    setShowForm(false); // Close the form after updating
};

const handleBulkUpload = (data) => {
    // Assuming data contains domains/records to be uploaded
    // Merge the uploaded data with existing domains
    setDomains([...domains, ...data]);
};

return (
        <div className="container mt-4">
            <h1 className="mb-4">Domain Dashboard </h1>

            <Button  varient ="primary" 
              onClick={() => {setShowForm(true)}}> ADD DOMAIN </Button>

            <BulkUpload handleBulkUpload={handleBulkUpload} /> 
 
            


         <div className="mb-3">
           <input 
                type="text" 
                className="form-control"
                placeholder="Search domains" 
                value={searchTerm} 
                onChange={(e) => handleSearch(e.target.value)} />
                
                </div>  

            <DomainTable  domains = { filteredDomins } 
                         deleteDomain ={ deleteDomain} 
                         selectDomain = { selectDomain }  /> 

           <DomainDistributionChart domains={domains} />
           <MyComponent /> 

    <Modal show ={showForm} onHide={() => { setShowForm(false)}}>

        <Modal.Header closeButton>
             <Modal.Title>{ selectedDomain ? "Edit Domain " : "Add Domain" }</Modal.Title>
        </Modal.Header>  

       <Modal.Body>
          <RecordForm addDomain ={addDomain} selectedDomain ={selectedDomain} 
            updateDomain =  { updateDomain } /> 
       </Modal.Body>

    </Modal>
</div>
    );};

export default Dashboard ;
