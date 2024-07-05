import Product from "../models/ProductModel.js";

export const getProducts = async(req, res) => {
    try {
        const response = await Product.findAll();
        res.status(200).json(response) 
    } catch (err) {
        console.log(err.message)
    }
}

// mengambil data single
export const getProductById = async(req, res) => {
    try {
        const response = await Product.findOne({
            // mencari data berdasarkan id (where:{id:...})
            where:{
                id: req.params.id,
            }
        });
        res.status(200).json(response) 
    } catch (err) {
        console.log(err.message)
    }
}

export const createProduct = async(req, res) => {
    try {
        await Product.create(req.body);
        res.status(201).json({msg: "Product Succesfully Created"}) 
    } catch (err) {
        console.log(err.message)
    }
}

export const updateProduct = async(req, res) => {
    try {
        // edit by id, jd menambahkan parameter kedua setelah req.body
        await Product.update(req.body, {
            where:{
                // id diambil dari parameter
                id: req.params.id
            }
        });
        // res status itu bisa bebas?
        res.status(200).json({msg: "Product Succesfully Updated"}) 
    } catch (err) {
        console.log(err.message)
    }
}

export const deleteProduct = async(req, res) => {
    try {
        // delete by id, jd menambahkan parameter kedua setelah req.body
        // req.body dihapus karena delete tidak membutuhkan data
        await Product.destroy({
            where:{
                // id diambil dari parameter
                id: req.params.id
            }
        });
        res.status(200).json({msg: "Product Succesfully Deleted"}) 
    } catch (err) {
        console.log(err.message)
    }
}

