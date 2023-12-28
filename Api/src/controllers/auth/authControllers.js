import { compare, encrypt } from "../../helpers/handleBcrypt.js"
import { User } from "../../db.js"

export const registerUserController = async (req, res)=>{
    try {
        const {userName , password, lastName, name, premiun, photo, email} = req.body
        console.log({
           "controller": req.body
        })
        let hashedPassword = await encrypt(password);
       console.log(password)
       const [newUser, created] = await User.findOrCreate({
           where:{email},
           defaults:{
               userName,
               name,
               lastName,
               password:hashedPassword,
               premiun, 
               photo
           }
       })
       if (created) {
           return res.status(200).send(newUser)
         } else {
           throw new Error('User with this email already exists')
         }  
   } catch (error) {
      return res.status(400).send(error.message)
   }
}


export const loginController = async (req, res) => {
    try {
      const user = req.body;
      const { email, password } = user;
      const getUser = await User.findOne({ where: { email } });
  
      if (!getUser) {
        throw new Error('User not found');
      }
  
      const isPasswordValid = await compare(password, getUser.password);
  
      if (isPasswordValid) {
        return res.status(200).send(getUser);
      } else {
        throw new Error('Invalid password');
      }
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

