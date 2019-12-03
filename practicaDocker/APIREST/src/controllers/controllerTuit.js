const mysqlConnection = require('../configurations/db');

const get = (req,res) => {

  mysqlConnection.query('SELECT * FROM municipio', (err,rows,fields) => {

    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }
  });

  return mysqlConnection;
}

const insert  = (req ,res) => {
const { id,nombre } = req.body;
const query = `CALL muniAddOrEdit(?,?)`;
mysqlConnection.query(query, [id,nombre], (err,rows,fields) =>{

if(!err){
  console.log(id)
  res.json({ Status: 'Municipio saved! '});

}else{
  console.log(err);
}

});

}


const getOne = (req,res) => {
  const { id } = req.params;
  mysqlConnection.query('SELECT * FROM municipio WHERE id_municipio = ?',[id],(err,rows,fields) =>{

    if(!err){
      res.json(rows);
    }else{
      console.log(err);
    }

  });

}





module.exports = {

get: get,
insert: insert,
getOne: getOne

}
