import knex from '../database/connection';
import { Response, Request} from 'express'

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serilizedItems = items.map(item => {
     return {
         id: item.id,
         title: item.title,
         image_url: `http://192.168.0.102:3333/uploads/${item.image}`,
     };
    });

    return response.json(serilizedItems);
  }
}

export default ItemsController;