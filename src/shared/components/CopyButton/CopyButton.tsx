import { Button } from '@mui/material';
import { useState } from 'react';
import './CopyButton.css'

const CopyButton = () => {
    const [copySuccess, setCopySuccess] = useState('');

    const textToCopy = "lemylinh237@gmail.com";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopySuccess('Copied!');
            setTimeout(() => {
                setCopySuccess('');
            }, 2000); 
        }, (err) => {
            setCopySuccess('Failed to copy!');
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className='copy'>
            {copySuccess && <p className="copy-text">{copySuccess}</p>}
            <Button variant="outlined" onClick={copyToClipboard}>
                <span><i className="bi bi-copy"></i> Copy email</span>
            </Button>
        </div>
    );
};

export default CopyButton