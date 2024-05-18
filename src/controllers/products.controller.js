import { getConnection, sql, queries } from "../database/index.js";

export const getProducts = async (req, res) => {
    try {
        const pool = await  getConnection();
        const result = await pool
        .request()
        .query(queries('Products').getAll);
        console.log(result.recordsets[0])
        res.json(result.recordsets[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getProductById = async (req, res) => {
    const {id} = req.params

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .query(queries('Products').getById);

        res.send(result.recordset[0])
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const getTotalProducts = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries('Products').getTotal);

        res.json(result.recordset[0][''])
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const addNewProduct = async (req, res) => {
    const {name, description, price, image, categoryid} = req.body

    if(name == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('name', sql.VarChar, name)
        .input('description', sql.Text, description)
        .input('price', sql.Int, price)
        .input('image', sql.VarChar, image)
        .input('categoryid', sql.Int, categoryid)
        .query(queries().addNewProduct);

        res.json(`Product ${name} successfully added.`)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const updateProduct = async (req, res) => {
    const {name, description, price, image, categoryid} = req.body
    const {id} = req.params

    if(id == null || name == null || description == null || price == null || image == null || categoryid == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .input('name', sql.VarChar, name)
        .input('description', sql.Text, description)
        .input('price', sql.Int, price)
        .input('image', sql.VarChar, image)
        .input('categoryid', sql.Int, categoryid)
        .query(queries().updateProduct);

        res.json('Product successfully updated.')
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .query(queries('Products').delete);

        res.json('Product successfully deleted.')
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}