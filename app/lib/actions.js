"use server";

import { revalidatePath } from "next/cache";
import {
  Product,
  User,
  Employee,
  Client,
  Contract,
  Project,
  Person,
} from "./models";
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
          textAlign: "center",
          color: "#6f6af8",
          padding: "10px",
          borderRadius: "5px",
          fontSize: "13px",
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
  const { nombre, apellido, telefono, correo, direccion, edad, cargo } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newEmployee = new Employee({
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      edad,
      cargo,
    });

    await newEmployee.save();
  } catch (err) {
    throw new Error("failed to creat new lupe");
  }

  revalidatePath("/dashboard/employees"); //
  redirect("/dashboard/employees");
};

export const updateEmployee = async (formData) => {
  const { id, nombre, apellido, telefono, correo, direccion, edad, cargo } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      edad,
      cargo,
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

//----------------------clientes ------------------------------

export const deleteClient = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Client.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("failed to delete new client");
  }

  revalidatePath("/dashboard/clients");
};

export const addClient = async (formData) => {
  const { nombre, apellido, telefono, correo, direccion, edad } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newClient = new Client({
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      edad,
    });

    await newClient.save();
  } catch (err) {
    throw new Error("failed to creat new cliente");
  }

  revalidatePath("/dashboard/clients"); //
  redirect("/dashboard/clients");
};

export const updateClient = async (formData) => {
  const { id, nombre, apellido, telefono, correo, direccion, edad } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      edad,
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
//----------------------clientes ------------------------------

export const deletePerson = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Person.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("failed to delete new persona");
  }

  revalidatePath("/dashboard/persons");
};

export const addPerson = async (formData) => {
  const { nombre, apellido, telefono, correo, direccion, edad } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newClient = new Person({
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      edad,
    });

    await newClient.save();
  } catch (err) {
    throw new Error("failed to creat new cliente");
  }

  revalidatePath("/dashboard/persons"); //
  redirect("/dashboard/persons");
};

export const updatePerson = async (formData) => {
  const { id, nombre, apellido, telefono, correo, direccion, edad } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      nombre,
      apellido,
      telefono,
      correo,
      direccion,
      edad,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Person.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to editar client!");
  }

  revalidatePath("/dashboard/persons");
  redirect("/dashboard/persons");
};

//----------------------contratos ------------------------------

export const deleteContract = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Contract.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("failed to delete new contract");
  }

  revalidatePath("/dashboard/contracts");
};

export const addContract = async (formData) => {
  const {
    titulo,
    fechainicio,
    projectNombre,
    fechafin,
    estado,
    tipo,
    empleadoNombre,
    clienteNombre,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const newContract = new Contract({
      titulo,
      fechainicio,
      fechafin,
      estado,
      tipo,
      empleadoNombre,
      clienteNombre,
      projectNombre,
    });

    await newContract.save();
  } catch (err) {
    console.log(err);
    throw new Error("failed to creat new contract");
  }

  revalidatePath("/dashboard/contracts"); //
  redirect("/dashboard/contracts");
};

export const updateContract = async (formData) => {
  const {
    id,
    titulo,
    fechainicio,
    fechafin,
    estado,
    tipo,
    empleadoNombre,
    clienteNombre,
    projectNombre,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      titulo,
      fechainicio,
      fechafin,
      clienteNombre,
      estado,
      tipo,
      empleadoNombre,
      projectNombre,
      clienteNombre,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Contract.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to editar client!");
  }

  revalidatePath("/dashboard/contracts");
  redirect("/dashboard/contracts");
};

//----------------------proyectos ------------------------------

export const deleteProject = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Project.findByIdAndDelete(id);
  } catch (err) {
    throw new Error("failed to delete new Project");
  }

  revalidatePath("/dashboard/projects");
};

export const addProject = async (formData) => {
  const { nombre, fechainicio, fechafin, estado } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProject = new Project({
      nombre,
      fechainicio,
      fechafin,
      estado,
    });

    await newProject.save();
  } catch (err) {
    throw new Error("failed to creat new newProject");
  }

  revalidatePath("/dashboard/projects"); //
  redirect("/dashboard/projects");
};

export const updateProject = async (formData) => {
  const { id, nombre, fechainicio, fechafin, estado } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      nombre,
      fechainicio,
      fechafin,
      estado,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Project.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    throw new Error("Failed to editar projects!");
  }

  revalidatePath("/dashboard/projects");
  redirect("/dashboard/projects");
};
