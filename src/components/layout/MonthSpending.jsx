import PercentageBar from "../features/PercentageBar"

const MonthSpending= ()=>{
    return(
        <div id="month-spending">
            <div className="title">This Month's Spending</div>
            <div className="amount">$1,248<span className="total">/$1,500</span></div>
            <PercentageBar/>
            <div className="information">
                <p>You have used 72%</p>
                <img className="icon" src="images/icon-tulips.png"/>
                <p>and have 5 days left.</p>   
            </div>         
        </div>
    )
}

export default MonthSpending