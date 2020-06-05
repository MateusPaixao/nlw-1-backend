import express from 'express'

import PointsController from './controller/PointsController'
import ItemsController from './controller/ItemsController'

const pointsController = new PointsController()
const itemsController = new ItemsController()

const routes = express.Router()

routes.get('/items', itemsController.index)

routes.post('/points', pointsController.create)
routes.get('/points/:id', pointsController.show)
routes.get('/points', pointsController.index)

export default routes

// Repository patern (Data mapper)
// Service patern