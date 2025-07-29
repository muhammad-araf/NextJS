const username = process.env.myusername
const password = process.env.mypassword
if(!username || !password){
    throw new Error("Missing Mongo DB");
}
export const connectionString = `mongodb+srv://${username}:${password}@cluster0.lkwigxk.mongodb.net/employee?retryWrites=true&w=majority&appName=Cluster0`;