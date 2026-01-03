const CategoryBreakdown = () => {
    const categories = [
        { 
            name: "Food", 
            amount: 520, 
            color: "rgba(244, 214, 200, 0.85)",
            // Position from the right side
            style: { right: '45%', bottom: '30%' }
        },
        { 
            name: "Shopping", 
            amount: 340, 
            color: "rgba(232, 196, 212, 0.85)",
            style: { right: '15%', top: '10%' }
        },
        { 
            name: "Transport", 
            amount: 258, 
            color: "rgba(212, 232, 212, 0.85)",
            style: { right: '5%', top: '30%' }
        },
        { 
            name: "Others", 
            amount: 130, 
            color: "rgba(232, 228, 216, 0.85)",
            style: { right: '30%', bottom: '10%' }
        },
    ];

    const total = categories.reduce((sum, cat) => sum + cat.amount, 0);
    const maxAmount = Math.max(...categories.map(cat => cat.amount));

    // Different sizing for mobile vs desktop
    const getCircleSize = (amount, isMobile = false) => {    
        // Desktop: 90px - 180px
        let baseSize = 90;
        let maxSize = 180;

        if (isMobile) {
            // Mobile: 60px - 120px
            baseSize = 60;
            maxSize = 120;
        } 

        const ratio = Math.sqrt(amount / maxAmount); // Square root makes differences less extreme
        return baseSize + (ratio * (maxSize - baseSize));
    };

    return (
        <>
            <div id="category-breakdown">
                {categories.map((cat, index) => {
                    const percentage = ((cat.amount / total) * 100).toFixed(0);

                    return (
                        <div
                            key={index}
                            className="category-circle-dynamic"
                            style={{ 
                                backgroundColor: cat.color,
                                '--size-mobile': `${getCircleSize(cat.amount, true)}px`,
                                '--size-desktop': `${getCircleSize(cat.amount, false)}px`,
                                ...cat.style
                            }}
                        >
                            <p className="circle-amount">
                                ${cat.amount}
                            </p>
                            <p className="circle-name">
                                {cat.name}
                            </p>
                            <p className="circle-percentage">
                                {percentage}%
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default CategoryBreakdown;