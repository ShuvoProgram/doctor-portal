import React from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    
    return (
        <header className='my-6'>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist-chair' className="max-w-sm lg:w-1/2 rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            min={1}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;