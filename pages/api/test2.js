//
const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';

import LibConst from "../../libs/LibConst"

//var dbfileName = "./db1.sqlite"
//
export default async function (req,  res){
  try{
    var dbFile = LibConst.get_config().DbFileName
// console.log(d)
    const db = await open(
      {filename: dbFile ,
      driver: sqlite3.Database}
    );
    const items = await db.all('select * from tasks');
    res.json(items);    
//    db.close();    
  } catch (err) {
      console.log(err);
      res.status(500).send();    
  }  
};