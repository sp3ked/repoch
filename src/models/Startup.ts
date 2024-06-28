// src/models/Startup.ts
//easter egg, if you are in here, why not add a comment to the file?

import mongoose, { Schema, Document } from "mongoose";

export interface IStartup extends Document {
  name: string;
  description: string;
  website: string;
  keywords: string[];
  foundedYear?: number;
  industry?: string;
  seoScore?: number;
  githubUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const StartupSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    website: { type: String, required: true, unique: true },
    keywords: { type: [String], default: [] },
    foundedYear: { type: Number },
    industry: { type: String },
    seoScore: { type: Number },
    githubUrl: { type: String },
  },
  { timestamps: true },
);

export default mongoose.model<IStartup>("Startup", StartupSchema);
