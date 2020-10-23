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
      const photosByCategory: Array<PhotosInterface> = await Photos.find({
        category,
      }).sort([['createdAt', -1]])

      res.status(200).json({ status: 200, category, photos: photosByCategory })
    } catch (error) {
      console.error(error)
      res.status(500).json({ status: 500, error })
    }
  }
}
