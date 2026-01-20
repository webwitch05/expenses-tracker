import { RxCross1 } from "react-icons/rx";
import { categories } from "../../../public/constants";
import { useExpensesContext } from "../../contexts/ExpensesContext";
import { deleteExpenses } from '../../services/expensesService';

const ExpensesHistory= ()=>{
    const { expensesData, refetchExpenses } = useExpensesContext(); 

    const handleDelete= async (expense)=>{
        await deleteExpenses(expense); // Wait for delete to complete
        refetchExpenses();
    }

    return(
        <>
            {expensesData.map((expense, index) => {
                const catIcon = categories.find((cat) => cat.name === expense.category);
                
                return (
                    <div key={index} id="data-group">
                        {/* Show date header only once per date */}
                        {(index === 0 || expensesData[index - 1].date !== expense.date) && (
                            <p className="date-header">{expense.date}</p>
                        )}
                        
                        <div className="expense-card">
                            <RxCross1 
                                className="delete-btn" 
                                onClick={() => handleDelete(expense)}
                            />
                            <div className="expense-data">
                                <img src={catIcon?.image} alt={expense.category}/>
                                <div className="info-group">
                                    <p className="description-text">{expense.description}</p>
                                    <p className="category-text">{expense.category}</p>
                                </div>
                                <div className="amount-group">
                                    <p className="amount-text">${expense.amount}</p>
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