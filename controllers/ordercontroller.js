export const getOrder=async(res,req)=>{
    console.log(req.body);
   /* const { name, description, ratings, images, category, seller, stock, price } = req.body;

    try {
        const result = await db.query(
            'INSERT INTO orders (name, description, ratings, images, category, seller, stock, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [name, description, ratings, images, category, seller, stock, price]
        );
        const up=Integer.parseInt(stock)-1;
        db.query("UPDATE amazondb SET id=$1 WHERE stock=$2",[id,up]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }*/
};

