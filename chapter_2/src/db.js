import {DatabaseSync} from 'node:sqlite'
const db = new DatabaseSync(':memory:')

db.exec(`
    create table users (
    `)