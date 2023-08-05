import { Request, Response } from "express"
import pool from "../db";

export const addTodo = async (req: Request, res: Response) => {
    try{
        const { title, description } = req.body;

        const addedTodo = await pool.query(
            "INSERT INTO todo (name, description, status) VALUES ($1, $2, false)",
            [title, description]
        );

        res.status(201).json(addedTodo);
    }catch(err){
        if(err instanceof Error) return res.status(500).json({ msg: err });
    }
}