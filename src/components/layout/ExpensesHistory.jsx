import { useMemo } from 'react';
import { expensesData, categories } from "../../../public/constants";

const ExpensesHistory= ()=>{
    const sortedExpenses = useMemo(() => {
        return [...expensesData].sort((a, b) => {
            const [dayA, monthA] = a.date.split('/');
            const [dayB, monthB] = b.date.split('/');
            
            if (monthA !== monthB) {
            return parseInt(monthB) - parseInt(monthA);
            }
            return parseInt(dayB) - parseInt(dayA);
        });
    }, [expensesData]);   

    return(
        <>
            {sortedExpenses.map((expense, index) => {
                const catIcon = categories.find((cat) => cat.name === expense.category);
                
                return (
                    <div key={index} id="data-group">
                        {/* Show date header only once per date */}
                        {(index === 0 || expensesData[index - 1].date !== expense.date) && (
                            <p className="date-header">{expense.date}</p>
                        )}
                        
                        <div className="expense-card">
                            <div className="expense-data">
                                <img src={catIcon?.image} alt={expense.category}/>
                                <div className="info-group">
                                    <p className="description-text">{expense.description}</p>
                                    <p className="category-text">{expense.category}</p>
                                </div>
                                <div className="amount-group">
                                    <p className="amount-text">{expense.amount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    )    
}

export default ExpensesHistory