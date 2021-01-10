const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';

import LibConst from "../../../libs/LibConst"

//
export default async function (req, res){
  try{
console.log(req.body);
    var data = req.body
    var id = data.id
    var dbFile = LibConst.get_config().DbFileName
    const db = await open(
      {filename: dbFile , driver: sqlite3.Database}
    );
    const result = await db.run(
      'delete from tasks WHERE id = ?',
      id
    )     
    var ret ={
      id: id
    }
    res.json(ret);
  } catch (err) {
      console.log(err);
      res.status(500).send();    
  }   
};