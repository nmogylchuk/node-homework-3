import React from 'react';
import { LoadView } from './LoadView';

export const LoadsList = ({ loads = [] }) => {
    if (loads === []) {
        return (
            <div className="load__list">
                <p className="list__text">You don't have any loads.</p>
            </div>
        );
    }

    const LoadsList = loads.map((load) => {
        return (<LoadView load={load} />);
    });

    return (
        <div className="load__list">
            {LoadsList}
        </div>
    );
};
