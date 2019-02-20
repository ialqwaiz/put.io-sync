module.exports = {
    /* Get the token by opening: https://api.put.io/v2/oauth2/authenticate?client_id=1159&response_type=code&redirect_uri=http://profanter.me/putio/node */
    oauth_token: process.env.OAUTH_TOKEN,
    // Add folders to this array which should be synced
    sync : [
        {
            // Path on the put.io filesystem
            remote_path : 'TV',
            // Folder on your local system. You need to escape backslashes.
            local_path : '/TV',
            // Set to 'true' to download all subfolders from put.io
            recursive : true,
            // Set to 'true' to delete downloads from put.io after successful download
            delete:true,
            // Set to 'true' to delete empty subfolders from put.io
            delete_subfolder: true
        },
        {
            // Path on the put.io filesystem
            remote_path: 'Movies',
            // Folder on your local system
            local_path : '/Movies',
            // Set to 'true' to download all subfolders from put.io
            recursive: true,
            // Set to 'true' to delete downloads from put.io after successful download
            delete: true,
            // Set to 'true' to delete empty subfolders from put.io
            delete_subfolder: true
        }
    ]
}
