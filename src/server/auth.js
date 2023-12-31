/* eslint-disable no-useless-catch */
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";


//   create an class for asign auth all method then all the method are used by creating an object of class 
// AuthSerivce is creted an object authSerive and export default it then we can use direact object and access it all the methods in components 

export class AuthSerivce {
    client = new Client();
    account;

    // constructor is called when object is created means user can login then constructor is called automatically 
    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.account = new Account(this.client)

    }

    // createAccount method get an object and passing value for create and account 
    async createAccount({ email, password, name }) {
        // use try catch block for check ac create or not 
        try {
            const userAccount = this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                // use another method 
                // when user can register automatically login in application 
                // passing login method with email and password 
                this.login({ email, password });
            }
            else {
                return userAccount
            }
        } catch (error) {
            throw error;
        }


    }

    async login({ email, password }) {
        try {
            // createEmailSession use for login data get
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error
        }
    }

    // method for get current user using account data member of class  
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(" GET USER ERROR  ::  Auth ", error)
        }

        // if user not found then return null value 
        // eslint-disable-next-line no-unreachable
        return null;
    }
    // delete user account 
    // delete multiple seasons for use deleteSeassions()
    async logout() {
        try {
            // deleteSeassions is used to delete user all season that his created 
            return await this.account.deleteSessions();
        } catch (error) {
            throw error
        }

        // if user not found then return null value 
        // eslint-disable-next-line no-unreachable
        return null;
    }
}


const authSerivce = new AuthSerivce();

export default authSerivce