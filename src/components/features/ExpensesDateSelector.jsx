import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { months } from '../../../public/constants';

function ExpensesDateSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const currentDate = new Date();
  const currentMonth= currentDate.toLocaleDateString('en-US', { month: 'long' });
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [amount] = useState(1248);

  return (
    <>      
      <div className="month-amount">
        ${amount.toLocaleString()} <span className="words">this month</span>
      </div>

      <div className="month-selector">
        <button className='btn-dropdown' onClick={() => setIsOpen(!isOpen)}>
          {selectedMonth} ▾
        </button>     

        <button className="search-btn">
          <IoIosSearch/>
        </button>
      </div>
      
      {isOpen && (
        <div className="dropdown-menu frosted-card">
          { months.map(month => (
            <div 
              key={month} 
              className= "dropdown-item"
              onClick={() => {
                setSelectedMonth(month);
                setIsOpen(false);
              }}
            >
              {month}
            </div>
          )) }
        </div>
      )}      
    </>
  );
}

export default ExpensesDateSelector;