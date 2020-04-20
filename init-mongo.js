db.createUser(
    {
        user: 'admin',
        pwd: 'passwd',
        roles: [
            {
                role: "readWrite",
                db: "datab"
            }
        ]
    }
)