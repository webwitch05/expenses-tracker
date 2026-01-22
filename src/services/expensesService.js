import { supabase } from './supabaseClient';

const fetchExpense = async (month) => {
    const startDate = `${month}-01`;
    const endDate = `${month}-31`; // or calculate last day of month
    
    const { data, error } = await supabase
        .from("expenses")
        .select("*")
        .gte("date", startDate) // Greater than or equal
        .lte("date", endDate)   // Less than or equal
        .order("date", { ascending: false });

    if (error) {
        console.error("Error fetching:", error);
        return [];
    }

    return data || [];
}

const addExpenses = async (expense) => {
    const { data: lastExpense, error: fetchError } = await supabase
        .from("expenses")
        .select("expenseid")
        .eq("date", expense.date) // Format: YYYY-MM-DD
        .order("expenseid", { ascending: false })
        .limit(1)
        .single(); //returns an object, not an array

    if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 = no rows found
        console.error("Error fetching last expense:", fetchError);
        return;
    }

    const { _, error } = await supabase
        .from("expenses")
        .insert([
            {
                expenseid: (lastExpense?.expenseid ?? 0) + 1,
                date: expense.date,
                amount: expense.amount,                 
                category: expense.category,              
                description: expense.description ?? "",
            }
        ]);

    if (error) {
        console.error("Error inserting expense:", error);
        return;
    }

    return;
};

const deleteExpenses = async (expense) => {
    const { data, error } = await supabase
        .from("expenses")
        .delete()
        .eq("date", expense.date)
        .eq("expenseid", expense.expenseid);

    if (error) {
        console.error("Error deleting expense:", error);
        return { success: false, error };
    }

    return { success: true, data };
};

export{
    fetchExpense,
    addExpenses,
    deleteExpenses,
}