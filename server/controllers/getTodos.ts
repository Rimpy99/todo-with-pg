import { Request, Response } from "express";
import pool from "../db";

export const getTodos = async (req: Request, res: Response) => {
    try{
        const todos = await pool.query("SELECT * FROM todo");
        
        res.status(200).json(todos);
    }catch(err){
        if(err instanceof Error) return res.status(400).json({ msg: err })
    }
}