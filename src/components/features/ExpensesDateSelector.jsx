import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { months } from '../../../public/constants';
import { useExpensesContext } from "../../contexts/ExpensesContext";

function ExpensesDateSelector() {
  const { expensesData, setExpensesMonth, loading } = useExpensesContext();

  const [isOpen, setIsOpen] = useState(false);

  const currentDate = new Date();
  const currentMonth= currentDate.toLocaleDateString('en-US', { month: 'long' });
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const totalAmount = expensesData.reduce((sum, expense) => {
    return sum + parseFloat(expense.amount || 0);
  }, 0);  

  const handleMonthChange = (month) => {
      // Convert "January" to "2026-01" format
      const monthIndex = months.indexOf(month) + 1;
      const year = new Date().getFullYear();
      const monthString = `${year}-${monthIndex.toString().padStart(2, '0')}`;
      setExpensesMonth(monthString);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <>      
      <div className="month-amount">
        ${totalAmount.toLocaleString()} <span className="words">this month</span>
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
                handleMonthChange(month)
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