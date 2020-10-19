import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../utils/db-connect'
import Photos from '../../../models/Photos'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect()

  if (req.method === 'GET') {
    try {
      const {
        query: { category },
      } = req

      const photos = await Photos.find({
        category,
      })
        .sort([['createdAt', -1]])
        .exec()

      res.status(200).json({ status: 200, category, photos })
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }
}