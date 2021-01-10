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
    var item = {
      title: data.title ,  
      content: data.content ,
    };
    var dbFile = LibConst.get_config().DbFileName
    const db = await open(
      {filename: dbFile , driver: sqlite3.Database}
    );
    const result = await db.run(
      'UPDATE tasks SET title = ?, content =? WHERE id = ?',
      data.title,
      data.content,
      id
    )    
//console.log(id);
    var ret ={
      item: item
    }
    res.json(ret);
  } catch (err) {
      console.log(err);
      res.status(500).send();    
  }   
};