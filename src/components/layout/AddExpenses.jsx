import { useState, useRef } from "react";
import { categories } from '../../../public/constants';

const AddExpenses= ()=>{    
    const [selectedCategory, setSelectedCategory] = useState(null);
    const scrollRef = useRef(null);

    return(
        <div id="add-expenses">
            <div className="input-box">
                <div className="input-group text-input">
                    <p>Amount:</p>
                    <input type="text" />
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
                                        className={`category-item ${selectedCategory === cat.name ? 'selected' : ''}`}
                                        onClick={()=>setSelectedCategory(cat.name)}
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
                    <input/>
                </div>                       
            </div>
            <button>Add</button>
        </div>
    )
}

export default AddExpenses