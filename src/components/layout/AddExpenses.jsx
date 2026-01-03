import { useState, useRef } from "react";

const AddExpenses= ()=>{

    const categories= [
        { name: "Clothes", image: "/images/category-clothes2.png" },
        { name: "Food", image: "/images/category-food2.png" },
        { name: "Transport", image: "/images/category-transport2.png" },
        { name: "Necessity", image: "/images/category-necessity2.png" },
        { name: "Others", image: "/images/category-others2.png" },           
    ] 
    
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
                            {categories.map((cat, index) => (
                                <div 
                                    key={index}
                                    className={`category-item ${selectedCategory === cat.name ? 'selected' : ''}`}
                                    onClick={()=>setSelectedCategory(cat.name)}
                                >
                                    <img src={cat.image} alt={cat.name} />
                                    <p>{cat.name}</p>
                                </div>
                            ))}
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