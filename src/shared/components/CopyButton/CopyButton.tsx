import { useState } from 'react';
import './CopyButton.css';

const CopyButton = () => {
    const [copySuccess, setCopySuccess] = useState('');

    const textToCopy = 'lemylinh237@gmail.com';

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
            {copySuccess && <p className='copy-text'>{copySuccess}</p>}
            <button 
                type='button' className='btn btn-outline-primary copy-btn' onClick={copyToClipboard}
            >
                <span className='copy-subcontainer'>
                    <i className='bi bi-copy'></i> <span>Copy email</span></span>
            </button>
        </div>
    );
};

export default CopyButton