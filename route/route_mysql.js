var router = require('express').Router();
var mysql = require('mysql');
var bodyParser = require('body-parser');
router.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'ecommerce'
})

db.connect(()=>{
    console.log('database connect to mysql')
});
//=======================
//post
router.post('/data/all', (req, res)=>{
    var data = {
        id: req.body.id, nama: req.body.nama,
        harga: req.body.harga, berat: req.body.berat,
        stok: req.body.stok
    }
    var perintah = 'insert into produk_mainan set ?'
    db.query(perintah, data, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil)
    })
})
//==================
//put
router.put('/data/:id', (req, res)=>{
    var data = {
        id: req.body.id, nama: req.body.nama,
        harga: req.body.harga, berat: req.body.berat,
        stok: req.body.stok
    }
    var perintah = 'update produk_mainan set ? where id=?'
    db.query(perintah, [data, req.params.id], (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil)
    })
})
//=======================
// delete data id tertentu
router.delete('/data/:id', (req, res)=>{
    var perintah = 
    'delete from produk_mainan where id = ?'
    db.query(perintah, req.params.id, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil)
    })
})
//=======================
//get '/data'
router.get('/data', (req, res)=>{
    res.send('data dari mysql')
})
//=====get all data ============
router.get('/data/all', (req,res)=>{
    var perintah = `select * from produk_mainan`
    db.query(perintah, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil);
    })    
})
//====== get data by id =============
router.get('/data/:id', (req,res)=>{
    var perintah = `select * from produk_mainan where id = ?`
    db.query(perintah, req.params.id, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
        res.send(hasil);
    })    
})
//===================
//get test
router.get('/profil', (req, res)=>{
    res.send('data profil dari mysql');
})
router.post('/profil', (req, res)=>{
    res.send('data profil terkirim ke mysql')
})
//==============

module.exports = router;