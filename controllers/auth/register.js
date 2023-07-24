import User from '../../models/User.js'

export default async( req, res, next ) => {
    try{

        //Traer los datos del formulario/Postman
        const one = await User.create(req.body)

        //Devolver una respuesta exitosa
        return res.status(201).json({ response: one, success: true , message: 'User created successfully'})
    }
    catch(error){
        next(error)
    }
}