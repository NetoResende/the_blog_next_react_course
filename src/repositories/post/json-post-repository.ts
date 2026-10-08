import { PostModel } from "@/models/post/post-model";
import { PostRepository } from "./post-repository";
import { resolve } from "path";

const ROOT_DIR = process.cwd();
const JSON_POST_FILE_PATH = resolve(ROOT_DIR, 'src','db','seed','posts.json');

export class JsonPostRepository implements PostRepository{
  private async readFromDisk(){}

  async finfAll(): Promise<PostModel[]> {}
}

export const postRepository = new JsonPostRepository();


console.log(JSON_POST_FILE_PATH)



