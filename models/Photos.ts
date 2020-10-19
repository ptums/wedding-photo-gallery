import mongoose, { Schema, Document } from 'mongoose'

const PhotosSchema: Schema = new Schema({
  image: { type: String, required: true },
  altText: { type: String, required: true },
  options: { type: String, required: true },
  category: { type: String, required: true },
  createdAt: { type: Date, required: true, default: Date.now },
})

export interface PhotosInterface extends Document {
  image: string
  altText: string
  options: string
  category: string
  createdAt: Date
}

export default mongoose.models.Coins ||
  mongoose.model<PhotosInterface>('Photos', PhotosSchema)
