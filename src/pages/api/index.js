import { getProducts } from "./products";
import { getCategories } from "./categories";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      if (req.url === "/api/products") {
        return await getProducts(req, res);
      }
      if (req.url === "/api/categories") {
        return await getCategories(req, res);
      }
      res.status(404).json({ message: "Api Not Found" });
      break;
    case "POST":
      res.status(404).json({ message: "Api Not Found" });
      break;
    default:
      res.status(404).json({ message: "Api Not Found" });
  }
}
