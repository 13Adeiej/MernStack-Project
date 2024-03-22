import React from 'react';
import CSVReader from 'react-csv-reader';

function BulkUpload({ handleBulkUpload }) {
    const handleFileUpload = (data) => {
        // Assuming data is an array of objects representing domains/records
        // Example data format: [{ name: 'example.com' }, { name: 'example2.com' }, ...]
        handleBulkUpload(data);
    };

    return (
        <CSVReader 
            onFileLoaded={handleFileUpload} 
            parserOptions={{ header: true, skipEmptyLines: true }}
        />
    );
}

export default BulkUpload;