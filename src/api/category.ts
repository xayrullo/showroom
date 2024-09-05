import { categories } from "@/data/category";
import { ICategory } from "@/types";

export default class CategoryApi {
  getAll(): Promise<ICategory[]> {
    return new Promise((resolve) => {
      resolve([]);
      return;
    });
  }

  getById(id: string): Promise<ICategory> {
    return new Promise((resolve, reject) => {
      const res = categories.find((el) => el._id === id);
      if (res) resolve({} as ICategory);
      else reject();
      return;
    });
  }
}
