import express, { urlencoded } from 'express';
import env from 'dotenv';
import product from './routes/product.js';
import order from './routes/order.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
env.config();
const PORT = process.env.PORT || 3000; // Ensuring the default port is set

app.use("/api/v1/", product);
app.use("/api/v1/", order);
/*
app.get("/", async (req, res) => {  // Corrected order of parameters
    try {
        const result = await db.query("SELECT * FROM amazondb");
        if (result.rows.length > 0) {
            res.json(result.rows);
        } else {
            res.json({ message: "No data found" });
        }
    } catch (err) {
        res.status(500).json({ error: err.message }); // Handling possible errors
    }
});*/

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
