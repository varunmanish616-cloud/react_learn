import {Client,Account, ID} from 'appwrite'

export class AuthService{
    client=new Client()
    account
    constructor(){
        this.client
        .setEndpoint('https://nyc.cloud.appwrite.io/v1')
        .setProject('69943a49001087e34bf5')
        this.account=new Account(this.client)
    }
    async createAccount({email,password,name}) {
         try {
           const userAccount= await this.account.create(ID.unique(),email,password,name)
           if(userAccount){
            console.log(userAccount)
            return this.login({email,password})
           }
           else{
            return userAccount
           }
         } catch (error) {
            alert(error.message)
         }
        
    }

    async login({email,password}){
        try {
            return await this.account.createEmailPasswordSession(email,password)
        } catch (error) {
            alert(error.message)
        }
    }
    
}

 const authService=new AuthService()
export default authService
