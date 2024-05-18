import { getConnection, sql, queries } from "../database/index.js";

export const getCategories = async (req, res) => {
    try {
        const pool = await  getConnection();
        const result = await pool
        .request()
        .query(queries('Categories').getAll);
        console.log(result.recordsets[0])
        res.json(result.recordsets[0])
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
};

export const getCategoryById = async (req, res) => {
    const {id} = req.params

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .query(queries('Categories').getById);

        res.send(result.recordset[0])
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const getTotalCategories = async (req, res) => {
    try{
        const pool = await getConnection();
        const result = await pool.request()
        .query(queries('Categories').getTotal);

        res.json(result.recordset[0][''])
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const addNewCategory = async (req, res) => {
    const {name} = req.body

    if(name == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('name', sql.VarChar, name)
        .query(queries().addNewCategory);

        res.json(`Category ${name} successfully added.`)
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const updateCategory = async (req, res) => {
    const {name} = req.body
    const {id} = req.params

    if(name == null || id == null) {
        return res.status(400).json({msg: 'Bad Request. Please fill all fields'})
    }

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .input('name', sql.VarChar, name)
        .query(queries().updateCategory);

        res.json('Category successfully updated.')
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}

export const deleteCategory = async (req, res) => {
    const {id} = req.params

    try{
        const pool = await getConnection();
        const result = await pool.request()
        .input('id', sql.Int, id)
        .query(queries('Categories').delete);

        res.json('Category successfully deleted.')
    } catch (error){
        res.status(500)
        res.send(error.message)
    }
}