import CategoryBreakdown from "../components/features/CategoryBreakdown"
import AddExpenses from "../components/layout/AddExpenses"
import MonthSpending from "../components/layout/MonthSpending"

const HomePage= ()=>{
    return(
        <>
            <div className="page-container">

                <div>
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

                    <div className="title">
                        <div>Category Breakdown</div>
                        <img className="header-icon" src="images/icon-flower.png"/>
                    </div>

                    <div id="breakdown-btn">
                        <CategoryBreakdown/>
                        <button className="view-all-btn">
                            View all expenses ›
                        </button>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default HomePage