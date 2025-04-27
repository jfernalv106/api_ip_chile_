import { Request, Response } from 'express';
import UsuarioModel, { Usuario } from '../models/usuario';




export const getUsuario = async (req: Request, res: Response) => {
    const { nombre } = req.params;
    try {
        const usuarios: Usuario[] = await UsuarioModel.find({ nombre: nombre });
        res.json({ usuarios });

    } catch (error) {
        res.json([]);
    }
}
export const getUsuarios = async (req: Request, res: Response) => {

    const usuarios = await UsuarioModel.find();
    res.json({
        usuarios
    });

}
export const postUsuario = async (req: Request, res: Response) => {
    const { body } = req;
    const apunte: Usuario = body;
    console.log(apunte);
    const apunteModel = new UsuarioModel(apunte);

    console.log(apunteModel);
    try {

        await apunteModel.save();
        res.json({
            ok: true,
            token: '',
            mensaje: "se ha guardado el Usuario",
        });
    } catch (error) {

        res.status(500).json({
            ok: false,
            token: '',
            mensaje: "ha ocurrido un error"
        });

    }

}
export const putUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { _id, ...resto } = req.params;

    try {
        const apunte = await UsuarioModel.findByIdAndUpdate(id, resto);
        if (!apunte) {
            return res.status(404).json({
                ok: false,
                token: '',
                mensaje: 'el Usuario no existe' + id,

            });
        }


    } catch (error) {
        res.status(500).json({
            ok: false,
            token: '',
            mensaje: 'Hable con el administrador'
        })
    }


}
export const deleteUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;


    const apunte = await UsuarioModel.findByIdAndDelete(id);
    if (!apunte) {
        return res.json({
            ok: false,
            token: '',
            mensaje: 'No existe el Usuario  ' + id
        });
    }
    res.json({
        ok: true,
        token: '',
        mensaje: "se ha borrado el Usuario",
    });
}