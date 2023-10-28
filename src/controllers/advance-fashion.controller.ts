import { Request, Response } from "express";
import AdvanceFashion from "../models/advance-fashion.model";
import Style from "../models/style.model";

export async function adminList(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const advanceFashions = await AdvanceFashion.find().populate("style");
    return response.status(200).json(advanceFashions);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function clientList(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const style = request.query.style;
    const advanceFashionsGroupByStyle = await Style.find({
      name: { $regex: new RegExp((style as string) ?? "", "i") },
    }).populate({ path: "fashions", options: { sort: { createdAt: -1 } } });
    return response.status(200).json(advanceFashionsGroupByStyle);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function detail(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const { id } = request.params;
    const advanceFashion = await AdvanceFashion.findById(id).populate("style");
    return response.status(200).json(advanceFashion);
  } catch (error) {
    return response.status(500).json(error);
  }
}

export async function create(
  request: Request,
  response: Response
): Promise<Response> {
  try {
    const newAdvanceFashion = request.body;
    const advanceFashion = await AdvanceFashion.create(newAdvanceFashion);
    return response.status(204).json(advanceFashion);
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
    const newAdvanceFashion = request.body;
    await AdvanceFashion.findByIdAndUpdate(id, newAdvanceFashion);
    response.status(204).end();
  } catch (error) {
    response.status(500).json(error);
  }
}

export async function remove(
  request: Request,
  response: Response
): Promise<void> {
  try {
    const { id } = request.params;
    await AdvanceFashion.findByIdAndDelete(id);
    response.status(204).end();
  } catch (error) {
    response.status(500).json(error);
  }
}
