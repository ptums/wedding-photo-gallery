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
      const {
        query: { collection },
      } = req

      const slides: Array<PhotosInterface> = await Photos.find({
        collection,
      }).sort([['created_at', -1]])

      res.status(200).json({ status: 200, collection, slides })
    } catch (error) {
      console.error(error)
      res.status(500).json(error)
    }
  }
}
