import { Request, Response } from "express";
import Style from "../models/style.model";

export async function list(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const styles = await Style.find();
    return response.status(200).json(styles);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newStyle = request.body;
    const style = await Style.create(newStyle);
    return response.status(204).json(style);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function update(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const { id } = request.params;
    const newStyle = request.body;
    await Style.findByIdAndUpdate(id, newStyle);
    response.status(204).end();
  } catch (error) {
    response.status(500).json(error);
  }
}
