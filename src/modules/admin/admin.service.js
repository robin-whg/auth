import { functions } from '@/firebase'

export const getUserByEmail = functions.httpsCallable('admin-getUserByEmail')
export const getUserByPhoneNumber = functions.httpsCallable('admin-getUserByPhoneNumber')
export const getUsers = functions.httpsCallable('admin-getUsers')
export const createUser = functions.httpsCallable('admin-createUser')
export const updateUser = functions.httpsCallable('admin-updateUser')
export const deleteUser = functions.httpsCallable('admin-deleteUser')
export const deleteUsers = functions.httpsCallable('admin-deleteUsers')
export const listUsers = functions.httpsCallable('admin-listUsers')
export const setCustomUserClaims = functions.httpsCallable('admin-setCustomUserClaims')
