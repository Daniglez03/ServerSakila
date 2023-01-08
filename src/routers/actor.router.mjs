import { Router } from 'express'
import actorController from '../controllers/actor.controller.mjs'

const router = Router()

//router.route('/actors').get(actorController.getAllActors)

//router.route('/actors/:id').get(actorController.getActorById)

//router.route('/actors').post(actorController.addNewActor)

//router.route('/actors/:id').put(actorController.updateActor)

//router.route('/actors/:id').delete(actorController.deleteActorById)

router.route('/actors').get(actorController.searchActor)

export default router