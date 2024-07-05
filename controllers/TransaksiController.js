import Transaksi from "../models/TransaksiModel.js";

export const getTransaksis = async(req, res) => {
  try {
    const response = await Transaksi.findAll();
    res.status(200).json(response) 
  } catch (err) {
    console.log(err.message)
  }
  
}

export const getTransaksiById = async(req, res) => {
  try {
      const response = await Transaksi.findOne({
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

export const createTransaksi = async(req, res) => {
  try {
    const orders = req.body;
    await Promise.all(orders.map(order => Transaksi.create(order)));
    res.status(201).json({msg: "Transaksi Succesfully Created"}) 
  } catch (err) {
    console.log(err.message)
  }
}

export const updateTransaksi = async(req, res) => {
  try {
      // edit by id, jd menambahkan parameter kedua setelah req.body
      await Transaksi.update(req.body, {
          where:{
              // id diambil dari parameter
              id: req.params.id
          }
      });
      // res status itu bisa bebas?
      res.status(200).json({msg: "Transaction Succesfully Updated"}) 
  } catch (err) {
      console.log(err.message)
  }
}

export const deleteTransaksi = async(req, res) => {
  try {
      // delete by id, jd menambahkan parameter kedua setelah req.body
      // req.body dihapus karena delete tidak membutuhkan data
      await Transaksi.destroy({
          where:{
              // id diambil dari parameter
              id: req.params.id
          }
      });
      res.status(200).json({msg: "Transactions Succesfully Deleted"}) 
  } catch (err) {
      console.log(err.message)
  }
}