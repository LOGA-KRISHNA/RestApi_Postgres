import db from '../createDB.js';

export const getProducts = async(req, res) => {
    try{
        const result=await db.query("SELECT * FROM amazondb");
        if (result.rows.length > 0) {
            res.json(result.rows);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
     }
     catch(err){
         res.json({err});
     }
}

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
