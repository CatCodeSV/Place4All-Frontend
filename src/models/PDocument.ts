import { ObjectId } from 'mongodb';

export interface PDocument {
  id: ObjectId;
  createdAt: Date;
  stringId: string;
}
