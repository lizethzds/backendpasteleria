const { producto, categoria } = require('../models')
const { Op } = require('sequelize');
let self = {}


self.getAll = async function (req, res) {
    try {
        const { s } = req.query;
        const filters = {};

        if (s) {
            filters.nombre = {
                [Op.like]: `%${s}%`
            };
        }

        console.log("Filters:", filters);

        let data = await producto.findAll({
            where: filters,
            attributes: [['id', 'productoid'], 'nombre', 'precio', 'descripcion'],
            include: {
                model: categoria,
                attributes: [['id', 'categoriaid'], 'nombre', 'protegida']
            }
        });

        console.log("Data:", data);

        return res.status(200).json(data);
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ error: error.message });
    }
};



self.get = async function (req, res) {
    // try{
    let id = req.params.id;
    // let data = await producto.findByPk(id, {
    //     attributes: [['id', 'productoid'], 'nombre', 'precio', 'descripcion'],
    //     include: {
    //     model: categoria,
    //     as: 'categoria',
    //     attributes:[['id', 'categoriaid'],'nombre', 'protegida'],
    //     through: { attributes: []}
    // }
    let data = await producto.findByPk(id, {
        attributes: [['id', 'productoid'], 'nombre', 'precio', 'descripcion'],
        include: {
            model: categoria,
            attributes: [['id', 'categoriaid'], 'nombre', 'protegida']
        }
    });
    if (data)
        return res.status(200).json(data)
    else
        return res.status(404).send()

    // }catch(error){
    //     return res.status(500).json(error)
    // }

}

self.create = async function (req, res) {
    try {
        let data = await producto.create({
            nombre: req.body.nombre,
            precio: req.body.precio,
            descripcion: req.body.descripcion,
            categoriaid: req.body.categoriaid

        })
        return res.status(201).json(data)

    } catch (error) {
        return res.status(500).json(error)
    }


}

self.update = async function (req, res) {
    try {
        let id = req.params.id;
        let body = req.body
        let data = await producto.update(body, { where: { id: id } })
        if (data[0] === 0)
            return res.status(404).send()
        else
            return res.status(204).send()
    } catch (error) {
        return res.status(500).json(error)
    }

}

self.delete = async function (req, res) {
    try {
        let id = req.params.id;
        let data = await producto.findByPk(id)
        if (!data)
            return res.status(404).send()
        if (data.protegida)
            return res.status(400).send()

        data = await producto.destroy({ where: { id: id } });
        if (data === 1)
            return res.status(204).send()
        else
            return res.status(404).send()

    } catch (error) {
        return res.status(500).json(error)
    }

}

module.exports = self;