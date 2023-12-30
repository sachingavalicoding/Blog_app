/* eslint-disable no-useless-catch */
import conf from "../conf/conf";
import { Client, ID, Databases, Query, Storage } from "appwrite";


export class DBService {
    client = new Client();
    databases;
    buket;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        // asign an Data base and Storeage for specific user 
        // constructor used for asign DB and Buket for user create 
        this.databases = new Databases();
        this.buket = new Storage();
    }

    // create method for crate an post 
    async createPost({ title, slug, content, image, status, userId }) {
        try {
            // check on offical documentaion fist is DB id sec Collection id third is Doc - Id use as slug value also use ID.unique() 
            return await this.databases.createDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                    userId,
                });
        } catch (error) {
            console.log(" Create Post :: ", error)
        }
    }

    async updatePost(slug, { title, content, image, status }) {
        try {

            return await this.databases.updateDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
                {
                    title,
                    content,
                    image,
                    status,
                },
            )
        } catch (error) {
            console.log("Update Post :: ", error)
        }
    }

    async deletePost(slug) {
        try {

            await this.databases.deleteDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
            )
            // if delete post it return an true 
            return true
        } catch (error) {
            console.log("Delete Post :: ", error)
            // if any error ocurre 
            return false;
        }
    }
    async getPost(slug) {
        try {

            await this.databases.getDocument(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                slug,
            )


        } catch (error) {
            console.log("Get One Post :: ", error)

        }
    }

    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {

            await this.databases.listDocuments(
                conf.appWriteDatabaseId,
                conf.appWriteCollectionId,
                queries,
                // pagenation add 
            )


        } catch (error) {
            console.log("Get One Post :: ", error)

        }
    }

    // file upload 
    // pass file pointer not a file name 
    async uploadFile(file) {
        try {
            return await this.buket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(" File Uploaded ::", error)
        }
    }
    async deleteFile(fileId) {
        try {
            await this.buket.deleteFile(
                conf.appWriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log(" File Uploaded ::", error)
            return false;
        }
    }
    previewFile(fileId) {
        this.buket.getFilePreview(
            conf.appWriteBucketId,
            fileId,
        )
    }

}

const DBservice = new DBService();
export default DBservice;