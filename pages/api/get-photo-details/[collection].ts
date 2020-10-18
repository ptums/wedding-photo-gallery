import { NextApiRequest, NextApiResponse } from 'next'
import nextConnect from 'next-connect'
import middleware from '../../../middlewares/middleware'


const handler = nextConnect<NextApiRequest, NextApiResponse>()

handler.use(middleware)

handler.get(async (req, res) => {
  try {
    const {
      query: { collection }
    } = req

    const slides = await req.db.collection('photos')
      .find({collection})
      .sort({ createdAt: -1 })
      .toArray()

    res.status(200).json({ status: 200, collection, slides })
  } catch(error) {
    console.error(error);
    res.status(500).json(error);
  }
})

export default handler
