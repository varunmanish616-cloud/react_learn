const conf={
    appwriteURL:String(import.meta.env.
        VITE_APPWRITE_URL),
    PROJECT_ID:String(import.meta.env.
        VITE_REACT_APP_PROJECT_ID),
    URLAPPWRITE_DATABASE_ID:String(import.meta.env.
        VITE_DATABASE_ID),
    BUCKET_ID:String(import.meta.env.
        VITE_APPWRITE_BUCKET_ID),
    CollectionID:String(import.meta.env.
        VITE_APPWRITE_COLLECTION_ID)
}
 

export default conf;