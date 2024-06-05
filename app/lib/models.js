import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
     
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
     
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);


const employeeSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      minlength: 3,
     
      maxlength: 20,
    },
    apellido: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    telefono: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    correo: {
      type: String,

    },
    direccion: {
      type: String,
    },
    edad: {
      type: Number,
      min: 0, // Se asume que la edad no puede ser negativa
    },
    cargo: {
      type: String,
    },
  },
  { timestamps: true }
);
//------clientes----------------
const clientSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    apellido: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    telefono: {
      type: String,
      minlength: 3,
      maxlength: 20,
    },
    correo: {
      type: String,

    },
    direccion: {
      type: String,
    },
    edad: {
      type: Number,
      min: 0,
    },
  },
  {timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
     
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const contractSchema = new mongoose.Schema(
  {
    titulo: {
      type: String,
      required: true,
     
    },
    fechainicio: {
      type: Date,
      required: true,
    },
    fechafin: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
    },
    tipo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const projectSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
     
    },
    fechainicio: {
      type: Date,
      required: true,
    },
    fechafin: {
      type: Date,
      required: true,
    },
    estado: {
      type: String,
    },
  },
  { timestamps: true }
);



export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
export const Employee = mongoose.models.Employee || mongoose.model("Employee", employeeSchema);
export const Client = mongoose.models.Client || mongoose.model("Client", clientSchema);
export const Contract = mongoose.models.Contract || mongoose.model("Contract", contractSchema);
export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);