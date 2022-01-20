import { NextFunction, Request, Response } from 'express';
import JWT from 'jsonwebtoken';
import ForbiddenError from '../models/errors/forbidden.error.model';
import userRepository from '../repositories/user.repository';


const jwtAuthenticationMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            throw new ForbiddenError('Credencial não encontrda' );
        }

        const [authorizationType, jwtToken] = authorizationHeader.split(' ');

        if (authorizationType !== 'Bearer') {
            throw new ForbiddenError('Tipo de autorização inválida' );
        }

        if (!jwtToken) {
            throw new ForbiddenError('Token inválido' );
        }

        try {
            const tokenPayload = JWT.verify(jwtToken, 'teste');
            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Token inválido' );
            }

            const user = await userRepository.findById(tokenPayload.sub);
            req.user = user;
            return next();
        } catch (error) {
            throw new ForbiddenError('Token inválido' );
        }
    } catch (error) {
        return next(error);
    }
}

export default jwtAuthenticationMiddleware;