import { createContext, useContext, useState, useEffect } from 'react';
import { fetchExpense } from '../services/expensesService';

const ExpensesContext= createContext()

export const ExpensesTracker= ({children})=>{
    const currentMonth = new Date().toISOString().slice(0, 7); // "2026-01"

    const [expensesMonth, setExpensesMonth]= useState(currentMonth)
    const [expensesData, setExpensesData] = useState([]);

    const [totalAmount, setTotalAmount]= useState(0)

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadExpenses= async()=>{
        try{
            setLoading(true);
            const data= await fetchExpense(expensesMonth)
            setExpensesData(data || []);

            if (expensesMonth === currentMonth) {

                const total = data.reduce((sum, expense) => {
                return sum + parseFloat(expense.amount || 0);
                }, 0);    
                setTotalAmount(total.toFixed(2))             
            }            
        }
        catch (err){
            setError(err)
            console.log("Error loading expenses:", err);
        } finally{
            setLoading(false)
        }
    };

    useEffect(()=>{
        loadExpenses();
    }, [expensesMonth])

    const refetchExpenses = () => {
        loadExpenses();
    };    

    return (
        <ExpensesContext.Provider value={{ expensesData, expensesMonth, totalAmount, setExpensesMonth, refetchExpenses, loading, error }}>
            {children}
        </ExpensesContext.Provider>
    );
};

export const useExpensesContext= ()=> useContext(ExpensesContext)