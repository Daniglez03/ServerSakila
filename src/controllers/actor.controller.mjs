import actorService from '../services/actor.service.mjs'
import httpCodes from '../errors/httpCodes.mjs'

const getAllActors = async (req, res) => {
    try {
        const data = await actorService.getAllActors()
        res.send({
            statusCode: httpCodes.OK,
            statusMessage: 'OK',
            message: 
                !data || data.lenght === 0
                ? 'Actores table is empty'
                : 'Sucesfully retrieved all actors',
            data
        })
    } catch (err) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: 'Internal Server Error',
                message: null,
                data: null
            })
    }
}

const getActorById = async (req, res) => {
    const { id } = req.params

    if (!id) {
        res.status(httpCodes.BAD_REQUEST).send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage: 'Param id is required',
            message: 'Actor Id is needed',
            data: null
        })
    }

    try {
        const data = await actorService.getActorById(id)
        res.send({
            statusCode: !data || data.lenght === 0 ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 'OK',
            message: 
                !data || data.lenght === 0
                ? 'Actores is not found'
                : 'Sucesfully retrieved actor data',
            data
        })
    } catch (error) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: 'Internal Server Error',
                message: null,
                data: null
            })
    }
}

const addNewActor = async (req, res) => {

    const {first_name, last_name} = req.body

    try {
        const data = await actorService.addNewActor(first_name, last_name)
        res.send({
            statusCode: !data || data.lenght === 0 ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 'OK',
            message: 
                !data || data.lenght === 0
                ? 'Actores is not found'
                : 'Sucesfully retrieved actor data',
            data
        })
    } catch (error) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: 'Internal Server Error',
                message: null,
                data: null
            })
    }
}

const updateActor = async (req, res) => {

    const { id } = req.params
    const {first_name, last_name} = req.body

    if (!id) {
        res.status(httpCodes.BAD_REQUEST).send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage: 'Param id is required',
            message: 'Actor Id is needed',
            data: null
        })
    }

    try {
        const data = await actorService.updateActor(first_name, last_name, id)
        res.send({
            statusCode: !data || data.lenght === 0 ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 'OK',
            message: 
                !data || data.lenght === 0
                ? 'Actores is not found'
                : 'Sucesfully retrieved actor data',
            data
        })
    } catch (error) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: 'Internal Server Error',
                message: null,
                data: null
            })
    }
}

const deleteActorById = async (req, res) => {

    const { id } = req.params

    if (!id) {
        res.status(httpCodes.BAD_REQUEST).send({
            statusCode: httpCodes.BAD_REQUEST,
            statusMessage: 'Param id is required',
            message: 'Actor Id is needed',
            data: null
        })
    }

    try {
        const data = await actorService.deleteActorById(id)
        res.send({
            statusCode: !data || data.lenght === 0 ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 'OK',
            message: 
                !data || data.lenght === 0
                ? 'Actores is not found'
                : 'Sucesfully retrieved actor data',
            data
        })
    } catch (error) {
        console.log(error);
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: 'Internal Server Error',
                message: null,
                data: null
            })
    }
}

const searchActor = async (req, res) => {

    const condition = req.query.name

    try {
        const data = await actorService.searchActor(condition)
        res.send({
            statusCode: !data || data.lenght === 0 ? httpCodes.NOT_FOUND : httpCodes.OK,
            statusMessage: 'OK',
            message: 
                !data || data.lenght === 0
                ? 'Actores is not found'
                : 'Sucesfully retrieved actor data',
            data
        })
    } catch (error) {
        res.status(httpCodes.INTERNAL_SERVER_ERROR)
            .send({
                statusCode: httpCodes.INTERNAL_SERVER_ERROR,
                statusMessage: 'Internal Server Error',
                message: null,
                data: null
            })
    }
}


export default {
    getAllActors,
    getActorById,
    addNewActor,
    updateActor,
    deleteActorById,
    searchActor
}