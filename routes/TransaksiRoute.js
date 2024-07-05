import express from "express";

import {
    getTransaksis,
    getTransaksiById,
    createTransaksi,
    updateTransaksi,
    deleteTransaksi,
    // searchTransaksis,
} from "../controllers/TransaksiController.js";

const router = express.Router();

router.get('/transaksis', getTransaksis);
router.get('/transaksis/:id', getTransaksiById); 
router.post('/transaksis', createTransaksi);
router.patch('/transaksis/:id', updateTransaksi);
router.delete('/transaksis/:id', deleteTransaksi);
// router.get('/transaksis/search', searchTransaksis);


export default router;