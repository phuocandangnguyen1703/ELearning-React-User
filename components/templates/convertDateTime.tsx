import React from 'react';

interface ConverDateTimeProps {
    dateString?: string;
}

const ConverDateTime: React.FC<ConverDateTimeProps> = ({ dateString }) => {
    const formattedDate = dateString
        ? new Date(dateString).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        : '';
    return <p>{formattedDate}</p>;

    return <p>{formattedDate}</p>;
};

export default ConverDateTime;
