import { MongoClient, Db } from 'mongodb';
import config from 'config';

export class Mongo {

  private _db: Db | undefined;
  private url: string = config.get('mongo.url');
  private dbname: string = config.get('mongo.dbname');

  async db() {
    if(!this.db) {
      const client = await MongoClient.connect(this.url);
      this._db = client.db(this.dbname);
    }
    return this._db;
  }

  async health() {
    return true;
  }

}