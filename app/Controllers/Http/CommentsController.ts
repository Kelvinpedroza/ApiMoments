import Comment from 'App/Models/Comment'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Moment from 'App/Models/Moment'
export default class CommentsController {
    public async store({request,params,response}:HttpContextContract){
        const body = request.body()
        const momendId = params.momentId

        await Moment.findOrFail(momendId)
        body.momentId = momendId
        const comment = await Comment.create(body)

        response.status(201)
        return{
            message:'Comentario adicionado com sucesso!',
            data:comment
        }
    }
}
