const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const mysql = require("mysql");
const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    password: "root",
    database: "testDB"
   });
   

const bodyParser = require("body-parser")
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get("/register", (req,res) => {
    const sqlGet = "SELECT * FROM Account";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    }
)
});

// app.get("/", (req,res) => {
// //     const insertSql = "INSERT INTO Account(iD, email, password) VALUES ('JDCdncskjcf', 'isitworking@email.com', 'cdjkjdsbks7sdu')";
// //     db.query(insertSql, (error, result) => {
// //         console.log("error", error);
// //         console.log("result", result);
// //         res.send("Hello Express");
// //     //     if(err){
// //     //     res.status(400).json(err);
// //     //     }else{
// //     //     res.status(200).json(result);
// //     //     }
     
// //     // res.send("Hello Express");
// // })
// });

app.post('/register', async (req,res) => {
    const {iD, email, password} = req.body;
    const hashedP = await bcrypt.hash(password,10);
    // const values = {iD: iD, email: email, password: hashedP};
    const entry = "INSERT INTO Account(iD, email, password) VALUES (?, ?, ?)";
    await db.query(entry , [iD, email, hashedP]), (error, result) => {
      if(error){
      res.status(400).console.log(error);
      }else{
      res.status(200).json(result);
      }
    }
    });

    app.put('/update', async (req,res) => {
      const salty = await bcrypt.genSalt(10);
      const updateP = 'GrassIsGr33n';
      const hashedUP = await bcrypt.hash(updateP,salty);
      console.log(updateP);
      console.log(hashedUP);
      // const values = {iD: iD, email: email, password: hashedP};
      const upSql = "Update VoucherNo SET Voucher = ?";
      await db.query(upSql, [hashedUP]), (error, result) => {
        if(error){
        res.status(400).console.log(error);
        }else{
        res.status(200).json(result);
        }
      }
      });

    app.post('/voucher', async (req,res) => {
      const vouchSQL = "SELECT `Voucher` FROM VoucherNo;";
      await  db.query(vouchSQL, async (error, result) => {
        if (result){
          let vouchHash = (result);
          let voucherInput = JSON.stringify(req.body.voucherInput);
          // const stringVI = JSON.stringify(voucherInput[0].voucherInput);
          let vString = JSON.stringify(vouchHash[0].Voucher);
          // const hashedVInput = bcrypt.hash(stringVI,10);
          // console.log(hashedVInput);
          // const hashCheckVI = await bcrypt.hash(voucherInput,10);
          // console.log(hashCheckVI)
          // bcrypt.compare("GrassIsGr33n", "$2b$10$pYugjW/EOrIQGxhchXS96.S8HnhrWHOIJkhd4DHroxuitGS/7bKk.", (error, matched) => {
         await bcrypt.compare(voucherInput, vString, (error, matched) => {
            console.log(voucherInput, vString, matched)
              if(matched){
              res.status(200);
              console.log("passwords match");
              res.redirect('/register')
              }else if (!matched){
                res.status(400);
                res.send("Passwords did not match.");
              }else{
              res.status(400).send("Something is wrong here.");
              console.log(error);
              }
            
            
            })
          }else{
            res.send(error);
          }
      });
    });

      // JSON.stringify(password_hash), function(err, doesMatch){
      //   if (doesMatch){
      //     console.log("Passwords Match")
      //     req.session.email = rows[0].email;
      //     var templateVars = {
      //       emale: req.session.email
      //     }
      //     res.render('/dashboard', templateVars)
      //   } else {
      //     console.log("THIS IS THE ERROR", err);
      //     res.send("I DONT KNOW YOU. SIGN UP FIRSt.")
      
 

// app.post('/users', (req,res) => {
//     //Grab data sent by client
//     //Add data to userList
//     //Return mute list
//     const {iD, fName, lName, age} = req.body;
   
//     db.query("INSERT INTO users (iD, fName, lName, age) VALUES (?,?,?,?);", [iD, fName, lName, age], (err, result) => {
//       if(err){
//       res.status(400).json(err);
//       }else{
//       res.status(200).json(result);
//       }
//     });
//  })
  
  app.put('/jhlkjhi8987', (req,res) => {
    //Grab the new name
    //Loop through list and update the name
    //Return the new list
    const voucherNo = "GrassIsGreen";
    const hashedV = bcrypt.hash(voucherNo,10);
    const updateV = "UPDATE VoucherNo SET Voucher = (?) Where VID = 'ytr65';";
    db.query(updateV , hashedV), (error, result) => {
      if(error){
      res.status(400).console.log(error);
      }else{
      res.status(200).json(result);
      }
    }
    });
  
    app.delete('/api/remove:iD', (req,res) => {
    //Get the id
    //Delete user with ID
    //Return list
    const {iD} = req.params;
    const sqlRemove = "DELETE FROM testDB WHERE iD = ?";
    db.query(sqlRemove , iD, (error, result) => {
      if(error){
      console.log(error);
      }
    })
    });
 



app.listen(5000, () => {
    console.log('running')
})