
export const queries = {
    getAll: 'SELECT * FROM @table',
    getById: 'SELECT * FROM @table WHERE Id = @Id',
    getTotal: 'SELECT COUNT(*) FROM @table',
    delete: 'DELETE FROM [webstore].[dbo].[@table] WHERE Id = @Id',
    addNewProduct: 'INSERT INTO Products (name, description, quantity) VALUES (@name, @description, @quantity)',

    updateProductById: 'UPDATE Products SET Name = @name, Description = @description, Quantity = @quantity WHERE Id = @Id'
};