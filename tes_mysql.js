var mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'setiawan',
    password: 'wan1',
    database: 'ecommerce'
})

db.connect(()=>{
    console.log('database connect to mysql')
});

//utk get data
// var perintah = `select * from produk_mainan where harga < ? and stok < ?`;
// db.query(perintah, [100000, 50], (error, hasil)=>{
//     if(error) throw error;
//     console.log(hasil);
// })

//=====================
router.get('/data/:id', (req,res)=>{
    var perintah = `select * from produk_mainan where id = ?`
    db.query(perintah, 5, (error, hasil)=>{
        if(error) throw error;
        console.log(hasil);
    })    
})

//kirim data ke mysql
// var data = {
//     id: 10,
//     nama: 'Teddy Bear',
//     harga: 350000,
//     berat:1.5,
//     stok: 5
// }
// var perintah = `insert into produk_mainan set ?`
// db.query(perintah, data, (error, hasil)=>{
//     if(error) throw error;
//     console.log(hasil);
// })
db.end();
