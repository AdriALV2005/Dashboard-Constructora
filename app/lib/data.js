import { Product, User, Employee, Client} from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 8;
  try {
    connectToDB();
    //sirve para contar cuantos usuarios hay
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    throw new Error("Failed to fetch users!");
  }
};

//sirve para buscar usuarios en la base de datos por su id
export const fetchUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id)
    return user;
  } catch (err) {

    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 8;
  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {

    throw new Error("Failed to fetch Product!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id)
    return product;
  } catch (err) {

    throw new Error("Failed to fetch product!");
  }
};



//----------------------trabajadores ------------------------------

export const fetchEmployees = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 8;
  try {
    connectToDB();
    const count = await Employee.find({ nombre: { $regex: regex } }).count();
    const employees = await Employee.find({ nombre: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, employees };
  } catch (err) {
    console.log(err);
    throw new Error("error trabajadores ...!");
  }
};
export const fetchEmployee= async (id) => {
  try {
    connectToDB();
    const employee = await Employee.findById(id)
    return employee;
  } catch (err) {

    throw new Error("Failed to fetch employee!");
  }
};

//----------------------clientes ------------------------------


export const fetchClients = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 8;
  try {
    connectToDB();
    const count = await Client.find({ nombre: { $regex: regex } }).count();
    const clients = await Client.find({ nombre: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, clients };
  } catch (err) {
    console.log(err);
    throw new Error("error clientes ...!");
  }
};


export const fetchClient= async (id) => {
  try {
    connectToDB();
    const client = await Client.findById(id)
    return client;
  } catch (err) {

    throw new Error("Failed to fetch cliente haaaaaa!");
  }
};