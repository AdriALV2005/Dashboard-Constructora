"use server";

import { revalidatePath } from "next/cache";
import { Product, User, Employee, Client } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "@/app/auth";


//sirve para buscar usuarios en la base de datos por su nombre 
export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });
    await newUser.save();
  } catch (err) {
    throw new Error("failed to creat new user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });
    await newProduct.save();
  } catch (err) {
    throw new Error("failed to creat new product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Product.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("failed to delete new product");
  }

  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await User.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("failed to delete new user");
  }

  revalidatePath("/dashboard/users");
};

export const authenticate = async (preveState, formData) => {
  //
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return (
      <div
        style={{
          textAlign: 'center',
          color: "#6f6af8",
          padding: "10px",
          borderRadius: "5px",
          fontSize: '13px'
        }}
      >
        ¡Credenciales incorrectas!
      </div>
    );
  }
};

//----------------------trabajadores ------------------------------


export const deleteEmployee = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Employee.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("failed to delete new employee");
  }

  revalidatePath("/dashboard/employees");
};



export const addEmployee = async (formData) => {
  const { nombre,apellido,telefono,correo,direccion,edad, cargo } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newEmployee = new Employee({
      nombre,apellido,telefono,correo,direccion,edad, cargo 
    });
    console.log(newEmployee)
    await newEmployee.save();
  } catch (err) {
    console.log(err)
    throw new Error("failed to creat new lupe");
  }

  revalidatePath("/dashboard/employees");//
  redirect("/dashboard/employees");
};

export const updateEmployee= async (formData) => {
  const { id, nombre,apellido,telefono,correo,direccion,edad, cargo} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      nombre,apellido,telefono,correo,direccion,edad, cargo
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Employee.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to editar employee!");
  }

  revalidatePath("/dashboard/employees");
  redirect("/dashboard/employees");
};



//----------------------clinetes ------------------------------

export const deleteClient = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Client.findByIdAndDelete(id);
  } catch (err) {
    console.log(err)
    throw new Error("failed to delete new client");
  }

  revalidatePath("/dashboard/clients");
};



export const addClient = async (formData) => {
  const { nombre,apellido,telefono,correo,direccion,edad } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newClient = new Client({
      nombre,apellido,telefono,correo,direccion,edad 
    });
    console.log(newClient)
    await newClient.save();
  } catch (err) {
    console.log(err)
    throw new Error("failed to creat new cliente");
  }

  revalidatePath("/dashboard/clients");//
  redirect("/dashboard/clients");
};

export const updateClient= async (formData) => {
  const { id, nombre,apellido,telefono,correo,direccion,edad} =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      nombre,apellido,telefono,correo,direccion,edad
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Client.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to editar client!");
  }

  revalidatePath("/dashboard/clients");
  redirect("/dashboard/clients");
};