import { Request, Response } from "express";
import pool from "../db";

export const deleteTodo = async (req: Request, res: Response) => {
    try{
        const { id } = req.params;

        await pool.query(
            "DELETE FROM todo WHERE id = $1",
            [id]
        );

        res.status(200).json({ msg: "Todo has been deleted." });
    }catch(err){
        if(err instanceof Error) return res.status(409).json({ msg: err });
    }
}