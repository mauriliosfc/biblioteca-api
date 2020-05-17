module.exports = (sequelize, DataTypes) => {

    const livros = sequelize.define('livros', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        edicao: {
            type: DataTypes.STRING
        },
        autor: {
            type: DataTypes.STRING
        },
        titulo: {
            type: DataTypes.STRING
        }
    }, {
        tableName: 'livros'
    });
    return livros
}