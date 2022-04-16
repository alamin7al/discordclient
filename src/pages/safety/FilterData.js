import React from 'react';

const FilterData = ({ filterItems }) => {
    return (
        <div>
            <div className="d-flex justify-content-evenly align-items-center">
                <button onClick={() => filterItems('saftyone')} className='btnsafty'>Safty Center</button>

                <button onClick={() => filterItems('saftytwo')} className='btnsafty'>Controlling Your Experience </button>
                <button onClick={() => filterItems('saftythree')} className='btnsafty'>Parents & Educators</button>
                <button onClick={() => filterItems('saftyfour')} className='btnsafty'>How We Enforce Rules</button>
            </div>
        </div>
    );
};

export default FilterData;