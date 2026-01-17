import { Link } from 'react-router-dom';
import { IoReturnDownBack } from "react-icons/io5";
import ExpensesHistory from '../components/layout/ExpensesHistory';
import ExpensesDateSelector from "../components/features/ExpensesDateSelector"

import '../styles/ExpensesPage.css';

const ExpensesPage= ()=>{
    return(
        <>
            <div className="page-container">

                <div>
                    <img id="rabbit-swing" src='images/rabbit-swing.png'/>
                    <div className="header">
                        Expenses History
                        <img className="header-icon" src='images/icon-flower.png'/>
                        <Link to="/" className="return-btn">
                            <IoReturnDownBack/>
                        </Link>                        
                    </div>
                </div>

                <div className="glass-card">
                    <ExpensesDateSelector/>
                    <div className="card-backdrop"></div>
                </div>

                <div id="expenses-history">
                    <div className="glass-card">
                        <ExpensesHistory/>
                        <div className="card-backdrop"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ExpensesPage