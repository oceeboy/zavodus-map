import { z } from "zod";
import { createProfileSchema } from "../validation/create-profile.schema";

export type CreateProfileSchema = z.infer<typeof createProfileSchema>;
