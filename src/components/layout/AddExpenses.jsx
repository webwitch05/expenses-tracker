import { useState, useRef, useEffect } from "react";
import { categories } from '../../../public/constants';
import { addExpenses } from '../../services/expensesService';
import { useExpensesContext } from "../../contexts/ExpensesContext";

const AddExpenses= ()=>{  
    const { setExpensesMonth, refetchExpenses } = useExpensesContext();

    const [amount, setAmount]= useState("")
    const [category, setCategory] = useState(null);
    const [description, setDescription]= useState("");

    const scrollRef = useRef(null);

    useEffect(() => {
        const currentMonth = new Date().toISOString().slice(0, 7);
        setExpensesMonth(currentMonth);
    }, [])

    const handleAddBtn = async() => {
        const expenses = {
            amount,           // Shorthand when variable name matches property name
            category,         
            description: description || "",  // Can also use || instead of ??          
        };
        
        await addExpenses(expenses);
        await refetchExpenses();

        setAmount("");
        setCategory(null);
        setDescription("");
    };

    return(
        <div id="add-expenses">
            <div className="input-box">
                <div className="input-group text-input">
                    <p>Amount:</p>
                    <input 
                        type="number"
                        value={amount}
                        onChange={(e)=>setAmount(e.target.value)}
                        placeholder="0.00"
                    />
                </div>
                <div className="input-group category-input">
                    <p>Categories:</p>

                    <div className="categories-wrapper">
                        <div className="categories-grid" ref={scrollRef}>
                            {categories.map((cat, index) => {
                                const catIcon= cat.image
                                return(
                                    <div 
                                        key={index}
                                        className={`category-item ${category === cat.name ? 'selected' : ''}`}
                                        onClick={()=>setCategory(cat.name)}
                                    >
                                        <img src={catIcon} alt={cat.name} />
                                        <p>{cat.name}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="input-group text-input">
                    <p>Description:</p>
                    <input
                        type="text"
                        value={description}
                        onChange={(e)=> setDescription(e.target.value)}
                        placeholder="Enter description"
                    />
                </div>                       
            </div>
            <button onClick={handleAddBtn}>Add</button>
        </div>
    )
}

export default AddExpenses