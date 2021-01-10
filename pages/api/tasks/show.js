const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';

import LibConst from "../../../libs/LibConst"

//
export default async function (req, res){
  try{
    var id = req.query.id    
    var dbFile = LibConst.get_config().DbFileName
    const db = await open(
      {filename: dbFile , driver: sqlite3.Database}
    );
    var sql ="select * from tasks where id=" + id
    const items = await db.all(sql);    
//    console.log(items[0]);
    var item = items[0]
    var ret ={
      item: item
    }
    res.json(ret);
  } catch (err) {
      console.log(err);
      res.status(500).send();    
  }   
};