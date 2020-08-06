import { Request, Response } from 'express';
import db from '../database/connection';

class ConnectionsController{
    
    async index(request: Request, response: Response){
        const totalConnections = await db('connections').count('* as total');
        const { total } = totalConnections[0];
        return response.json(total);
    }
    
    async create(request: Request, response: Response){
        const { user_id } = request.body;
        const user = await db('users').where('users.id', '=', user_id).select('id');
        if(!user[0]){
            return response.json({'Erro':'Esse usuário não existe'}).status(400);
        }
        await db('connections').insert({ user_id });
        return response.status(201).send();
    }
}

export default ConnectionsController;