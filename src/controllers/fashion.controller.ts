import { Request, Response } from "express";
import Fashion from "../models/fashion.model";

// *INFO: Exercise 128
export async function list(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    // TODO: Update filter later
    const fashion = await Fashion.find();
    return response.status(200).json(fashion);
  } catch (error) {
    return response.status(500).json(error);
  }
}

// *INFO: Exercise 129
export async function detail(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const { id } = request.params;
    const fashion = await Fashion.findById(id);
    return response.status(200).json(fashion);
  } catch (error) {
    return response.status(500).json(error);
  }
}

// *INFO: Exercise 130
export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newFashion = request.body;
    const fashion = await Fashion.create(newFashion);
    return response.status(204).json(fashion);
  } catch (error) {
    return response.status(500).json(error);
  }
}

// *INFO: Exercise 131
export async function update(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const { id } = request.params;
    const newFashion = request.body;
    await Fashion.findByIdAndUpdate(id, newFashion);
    response.status(204).end();
  } catch (error) {
    response.status(500).json(error);
  }
}

// *INFO: Exercise 132
export async function remove(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const { id } = request.params;
    await Fashion.findByIdAndDelete(id);
    response.status(204).end();
  } catch (error) {
    response.status(500).json(error);
  }
}
