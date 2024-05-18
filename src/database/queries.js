export function queries(tableName) {
    const queries = {
        // Generic queries
        getAll: `SELECT * FROM ${tableName}`,
        getById: `SELECT * FROM ${tableName} WHERE Id = @Id`,
        getTotal: `SELECT COUNT(*) FROM  ${tableName}`,
        delete: `DELETE FROM [webstore].[dbo].[${tableName}] WHERE Id = @Id`, 
        // Categories special queries
        addNewCategory: 'INSERT INTO Categories (name) VALUES (@name)',
        updateCategory: 'UPDATE Categories SET Name = @name WHERE Id = @Id',
        // Products special queries
        addNewProduct: 'INSERT INTO Products (name, description, price, image, categoryid) VALUES (@name, @description, @price, @image, @categoryid)',
        updateProduct: 'UPDATE Products SET Name = @name, Description = @description, Price = @price, Image = @image, CategoryID = @categoryid WHERE Id = @Id',
    };
    return queries;
}
