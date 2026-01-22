import { useState, useEffect, useRef } from 'react';
import { format, parseISO, addDays, subDays } from 'date-fns';
import { IoMdArrowDropleft, IoMdArrowDropright } from 'react-icons/io';

import "../../styles/calendar.css"

const Calendar= ({selectedDate, onChange})=>{

    const calendarRef = useRef(null);
    const containerRef = useRef(null);
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    // Handle calendar change
    useEffect(() => {
        const calendar = calendarRef.current;
        
        const handleChange = (e) => {
            const newDate = parseISO(e.target.value);
            console.log(newDate)
            onChange(newDate);
            setIsCalendarOpen(false); // Close after selection
        };

        calendar?.addEventListener('change', handleChange);
        return () => calendar?.removeEventListener('change', handleChange);
    }, [isCalendarOpen]);

    // Close calendar when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
        if (containerRef.current && !containerRef.current.contains(e.target)) {
            setIsCalendarOpen(false);
        }
        };

        if (isCalendarOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isCalendarOpen]);

    // Update calendar when selectedDate changes
    useEffect(() => {
        if (calendarRef.current) {
        calendarRef.current.value = selectedDate;
        }
    }, [selectedDate]);

    const handlePrevDay = () => {
        onChange(prev => subDays(prev, 1));
    };

    const handleNextDay = () => {
        onChange(prev => addDays(prev, 1));
    };

    return (
        <div ref={containerRef} className="calendar-container">
        {/* Date Display with Arrows */}
        <div className="calendar-btns">
            {!isCalendarOpen && (
                <button 
                    onClick={handlePrevDay}
                    className="arrow-btn"
                >
                <   IoMdArrowDropleft size={20} />
                </button>
            )}
            
            <button
                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                className="date-btn"
            >
            {format(selectedDate, 'MMMM d, yyyy')}
            </button>
            
            {!isCalendarOpen && (
                <button 
                    onClick={handleNextDay}
                    className="arrow-btn"
                >
                <IoMdArrowDropright size={20} />
                </button>
            )}
        </div>

        {/* Calendar Popup */}
        {isCalendarOpen && (
            <div className="full-calendar">
            <calendar-date
                ref={calendarRef}
                value={format(selectedDate, 'yyyy-MM-dd')}
                className="calendar-content"
            >
                <IoMdArrowDropleft slot="previous"/>
                <IoMdArrowDropright slot="next"/>
                <calendar-month></calendar-month>
            </calendar-date>
            </div>
        )}
        </div>
    );
}

export default Calendar