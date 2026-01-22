import CategoryBreakdown from "../components/features/CategoryBreakdown"
import AddExpenses from "../components/layout/AddExpenses"
import MonthSpending from "../components/layout/MonthSpending"

import '../styles/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage= ()=>{
    return(
        <>
            <div className="page-container">

                <div>
                    {/*<img id="rabbit-swing" src='images/rabbit-swing.png'/>*/}
                    <div className="header">
                        <img className="header-icon" src='images/icon-chicken.png'/> 
                        Hello WebWitch
                        <img className="header-icon" src='images/icon-flower.png'/>
                    </div>
                    <p className="sub-header">Control your money, not the other way around.</p>
                </div>

                <div className="glass-card">
                    <div className="card-backdrop"></div>
                    <MonthSpending/>
                </div>

                <div className="glass-card">
                    <div className="card-backdrop"></div>

                    <div className="title">
                        <div>Add Expenses</div>
                        <img className="header-icon" src="images/icon-ribbon.png"/>
                    </div>
                    <div className="frosted-card">
                        <AddExpenses/>
                    </div>

                    {/*
                    <div className="title">
                        <div>Category Breakdown</div>
                        <img className="header-icon" src="images/icon-flower.png"/>
                    </div>
                    */}
                </div>    
                <div id="breakdown-btn">
                    { /*<CategoryBreakdown/>*/ }
                    <Link to="/ExpensesPage" className="view-all-btn">
                        View all expenses ›
                    </Link>
                </div>                
            </div>
            {/*<img id="rabbit-snow" src='images/rabbit-snow.png'/>*/}
        </>
    )
}

export default HomePage