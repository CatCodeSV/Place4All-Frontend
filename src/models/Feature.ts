import { ObjectId } from 'mongodb';

export interface Feature {
  name: string;
  description: string;
  id: ObjectId;
  createdAt: string;
}
