const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const categories= [
    { name: "Clothes", image: "/images/category-clothes2.png" },
    { name: "Food", image: "/images/category-food2.png" },
    { name: "Transport", image: "/images/category-transport2.png" },
    { name: "Necessity", image: "/images/category-necessity2.png" },
    { name: "Others", image: "/images/category-others2.png" },           
] 

const expensesData = [
    { amount: "$45", category: "Food", date: "15/01" },
    { amount: "$120", category: "Clothes", description: "CNY clothes", date: "12/01" },
    { amount: "$8", category: "Transport", description: "Grab to office", date: "14/01" },
    { amount: "$25", category: "Necessity", description: "", date: "13/01" },
    { amount: "$68", category: "Food", description: "Grocery shopping at NTUC", date: "11/01" },
    { amount: "$15", category: "Transport", description: "MRT top-up", date: "10/01" },
    { amount: "$200", category: "Clothes", description: "New shoes", date: "09/01" },
    { amount: "$32", category: "Food", description: "Bubble tea and snacks", date: "16/01" },
    { amount: "$50", category: "Others", description: "Birthday gift for friend", date: "08/01" },
    { amount: "$18", category: "Necessity", description: "Laundry detergent", date: "07/01" }
];

export {
    months,
    categories,
    expensesData
};