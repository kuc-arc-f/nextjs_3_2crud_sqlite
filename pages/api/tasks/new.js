const sqlite = require('sqlite');
const sqlite3= require('sqlite3');
import {open} from 'sqlite';

import LibConst from "../../../libs/LibConst"
//
export default async function (req, res){
  try{
//console.log(req.body);
    var data = req.body
    var dbFile = LibConst.get_config().DbFileName
    const db = await open(
      {filename: dbFile , driver: sqlite3.Database}
    );
    const result = await db.run(
      'INSERT INTO tasks (title, content) VALUES (?,?)',
      data.title,
      data.content
    )    
    var ret ={
      item: data
    }
    res.json(ret);
  } catch (err) {
      console.log(err);
      res.status(500).send();    
  }   
};