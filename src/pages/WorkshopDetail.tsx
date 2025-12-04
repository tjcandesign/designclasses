import React from 'react';
import { useParams } from 'react-router-dom';

const WorkshopDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div className="container py-lg">
            <h1 className="text-3xl font-bold mb-md">Workshop Detail</h1>
            <p>Details for workshop ID: {id}</p>
        </div>
    );
};

export default WorkshopDetail;
