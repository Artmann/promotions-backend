import { PrismaClient, Promotion } from '@prisma/client'
import express, { Request, Response } from 'express'
import moment from 'moment'

const prisma = new PrismaClient()

const app = express()
const port = Number(process.env.PORT || '3000')

app
    .use(express.json())

app.get('/', (request: Request, response: Response) => {
    response.send('Hello World')
})

app.get('/games/:gameId/promotions', async (request: Request, response: Response) => {
    const { gameId } = request.params

    const promotions = await prisma.promotion.findMany({
        where: {
            gameId
        }
    })

    response.json({
        promotions: promotions.map(transformPromotion)
    })
})

app.post('/games/:gameId/promotions', async (request: Request, response: Response) => {
    const { gameId,  } = request.params
    const { title, startsAt, endsAt } = request.body

    if (!title) {
        return response.status(400).json({ error: 'title is required.' })
    }

    if (!startsAt) {
        return response.status(400).json({ error: 'startsAt is required.' })
    }

    if (!endsAt) {
        return response.status(400).json({ error: 'endsAt is required.' })
    }

    const promotion = await prisma.promotion.create({
        data: {
            gameId,
            endsAt: moment(endsAt).toDate(),
            startsAt: moment(startsAt).toDate(),
            title
        }
    })

    response.json({
        promotion: transformPromotion(promotion)
    })
})

type PromotionDto = {
    id: number
    gameId: string
    title: string
    startsAt: string
    endsAt: string
}

function transformPromotion(promotion: Promotion): PromotionDto {
    return {
        id: promotion.id,
        gameId: promotion.gameId,
        title: promotion.title,
        startsAt: promotion.startsAt.toISOString(),
        endsAt: promotion.endsAt.toISOString()
    }
}

app.listen(port, () => {
    console.log(`The server is listening at port ${port}. 🚀`)
})