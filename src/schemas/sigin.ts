import {z} from "zod";

export const SigInSchema = z.object({
  username: z.string().nonempty().toUpperCase(),
  password: z.string().nonempty().toUpperCase(),
});
