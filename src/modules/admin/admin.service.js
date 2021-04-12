import { functions } from '@/firebase'

export const listUsers = functions.httpsCallable('admin-listUsers')

/**
 * t1/admin-getUser).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-getUserByEmail).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-getUserByPhoneNumber).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-getUsers).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-createUser).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-updateUser).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-deleteUser).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-deleteUsers).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-listUsers).
11:35:41I
functions
http function initialized (http://localhost:5001/auth-87f60/europe-west1/admin-setCustomUserClaims).
 */