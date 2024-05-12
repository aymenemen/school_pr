import mongoose from 'mongoose'

const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb://localhost:27017/dbE", {
			useUnifiedTopology: true,
			useNewUrlParser: true,
			useCreateIndex: true,
		})

		console.log(`MongoDB Connect: ${conn.connection.host}`)
	}
	catch (error) {
		console.error(`Error: ${error.message}`)
		process.exit(1)
	}
}

export default connectDB;