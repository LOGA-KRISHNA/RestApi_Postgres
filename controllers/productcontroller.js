import db from '../createDB.js';

export const getProducts = async (req, res) => {
    const { name, category } = req.query;

    try {
        // Build the base query
        let query = 'SELECT * FROM amazondb WHERE 1=1';
        let queryParams = [];

        // Add conditions based on the provided query parameters
        if (name) {
           // name=name.toLowerCase();
            queryParams.push(`%${name}%`);
            query += ` AND name ILIKE $${queryParams.length}`;
           // console.log('Select * from amazon where 1=1 and name ilike %$${1}%');
        }
        if (category) {
            queryParams.push(category);
            query += ` AND category = $${queryParams.length}`;
        }
        const result = await db.query(query, queryParams);

        if (result.rows.length > 0) {
            res.json({ "products": result.rows });
        } else {
            res.status(404).json({ message: 'Products not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


export const getSingleProducts = async(req, res) => {
    const {id}=req.params;
    try{
        const result=await db.query("SELECT * FROM amazondb WHERE id=$1",[id]);
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    }
    catch(err){
        res.json(err);
    }
}
