import React from 'react';

const HighlightBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div style={{ border: '2px solid #007bff', padding: '10px', borderRadius: '8px' }}>
        {children}
    </div>
);

export default HighlightBox;
