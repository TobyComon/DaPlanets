import { Schema } from 'mongoose'

export const StarSchema = new Schema({
  Name: { type: String, required: true }
})

StarSchema.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
