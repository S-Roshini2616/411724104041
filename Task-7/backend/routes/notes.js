const express = require("express");
const router = express.Router();

const db = require("../db");


// Get All Notes

router.get("/", (req,res)=>{

    db.query("SELECT * FROM notes",(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(result);

    });

});


// Get One Note

router.get("/:id",(req,res)=>{

    db.query("SELECT * FROM notes WHERE id=?",[req.params.id],(err,result)=>{

        if(err){
            return res.status(500).json(err);
        }

        res.json(result[0]);

    });

});


// Add Note

router.post("/",(req,res)=>{

    const {title,content}=req.body;

    db.query(
        "INSERT INTO notes(title,content) VALUES(?,?)",
        [title,content],
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message:"Note Added"
            });

        }
    );

});


// Update Note

router.put("/:id",(req,res)=>{

    const {title,content}=req.body;

    db.query(
        "UPDATE notes SET title=?,content=? WHERE id=?",
        [title,content,req.params.id],
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message:"Note Updated"
            });

        }
    );

});


// Delete Note

router.delete("/:id",(req,res)=>{

    db.query(
        "DELETE FROM notes WHERE id=?",
        [req.params.id],
        (err,result)=>{

            if(err){
                return res.status(500).json(err);
            }

            res.json({
                message:"Note Deleted"
            });

        }
    );

});

module.exports = router;