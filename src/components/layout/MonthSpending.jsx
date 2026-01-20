import { useEffect, useState } from 'react';
import PercentageBar from "../features/PercentageBar"
import { useExpensesContext } from "../../contexts/ExpensesContext";

const MonthSpending= ()=>{
    const { totalAmount, loading } = useExpensesContext();
    const [daysLeft, setDaysLeft] = useState(null);
    const goal= 700

    useEffect(() => {
        const now= new Date();
        const day= now.getDate();
        const month= now.getMonth();
        const year= now.getFullYear();

        const numDays= new Date(year, month+1, 0).getDate()
        
        setDaysLeft(numDays-day)
    }, [])    

    const percentage= Math.round((totalAmount / goal) * 100);   

    if (loading) return <div>Loading...</div>;

    return(
        <div id="month-spending">
            <div className="title">This Month's Spending</div>
            <div className="amount">${ totalAmount }<span className="total">/${goal}</span></div>
            <PercentageBar
                width= {percentage}
            />
            <div className="information">
                <p>You have used {percentage}%</p>
                <img className="icon" src="images/icon-tulips.png"/>
                <p>and have {daysLeft} days left.</p>   
            </div>         
        </div>
    )
}

export default MonthSpending