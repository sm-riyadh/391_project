import mongoose from 'mongoose'

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/events', { useNewUrlParser: true })

export default mongoose
