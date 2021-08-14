import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
export const Note = new Schema(
  {
    body: { type: String, required: true },
    creatorId: { type: ObjectId, ref: 'Account', required: true },
    bugId: { type: ObjectId, ref: 'Bug', required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Note.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})

Note.virtual('bug', {
  localField: 'bugId',
  ref: 'Bug',
  foreignField: '_id',
  justOne: true
})
