const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';

import LibConst from "../../../libs/LibConst"
//
export default async function (req, res){
  try{
    var dbFile = LibConst.get_config().DbFileName
// console.log(d)
    const db = await open(
      {filename: dbFile , driver: sqlite3.Database}
    );
    const items = await db.all('select * from tasks order by id desc');
    var ret ={
      items: items
    }
    res.json(ret);
  } catch (err) {
      console.error(err);
      res.status(500).send();    
  }   
};