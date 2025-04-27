import { Schema, Model, Document, model } from 'mongoose';

export interface Usuario extends Document {
  nombre: string;
  apellidos: string;
  direccion: string;
  email: string;
  fono: string;

};

const usuarioSchema = new Schema<Usuario>({
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  fono: {
    type: String,
    required: true,
  },

});








const UsuarioModel = model<Usuario>('usuarios', usuarioSchema);


usuarioSchema.methods.toJSON = function () {
  const punto = this.toObject();
  return punto;
}

export default UsuarioModel;
