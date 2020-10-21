import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/db-connect'
import Photos, { PhotosInterface } from '../../../models/Photos'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  if (req.method === 'GET') {
    try {
      const category = req.query.category.toString()

      const photos: Array<PhotosInterface> = await Photos.find({
        category,
      })
        .sort([['createdAt', -1]])
        .exec()

      console.warn('process.env.MONGODB_URI')
      console.warn(process.env.MONGODB_URI)
      console.warn('photos response')
      console.warn(photos)
      res.status(200).json({ status: 200, category, photos })
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }
}
