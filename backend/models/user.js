"use strict";


const db = require("../db");
const bcrypt = require("bcrypt")
const { 
        BadRequestError,
        NotFoundError,
        UnauthorizedError
        } = require("../expressError");

const { BCRYPT_WORK_FACTOR }  = require("../config");
const { sqlForPartialUpdate } = require("../helpers/sql");

class User {

    /** authenticate user with username, password.
   *
   * Returns { username, email, image_profile}
   *
   * Throws UnauthorizedError is user not found or wrong password.
   **/
    static async authenticate(username, password) {
        // try to find the user first
        const result = await db.query(
                `SELECT username,
                        password,
                        email,
                        image_profile
                FROM users
                WHERE username = $1`,
            [username],
        );

        const user = result.rows[0];

        if (user) {
            // compare hashed password to a new hash from password
            const isValid = await bcrypt.compare(password, user.password);
            if (isValid === true) {
                delete user.password;
                return user;
            }
        }

        throw new UnauthorizedError("Invalid username/password")

    }




    /** Register user with data.
   *
   * Returns { username, email, image_profile }
   *
   * Throws BadRequestError on duplicates.
   **/

    static async register(
        { username, password, email, image_profile }) {
        const duplicateCheck = await db.query(
            `SELECT username
             FROM users
             WHERE username = $1`,
        [username],
        )
        
        if (duplicateCheck.rows[0]) {
            throw new BadRequestError(`Duplicate username: ${username}`);
        }
        
        const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR)

        const result = await db.query(
                `INSERT INTO users
                (username,
                password,
                email,
                image_profile)
                VALUES ($1, $2, $3, $4)
                RETURNING username, password, email`,
            [ 
                username,
                hashedPassword,
                email,
                image_profile,
            ],
        )
                        
            const user = result.rows[0]
            
        return user

    }
    


    /** Find all users.
    *
    * Returns [{ username, email }, ...]
    **/
   static async findAll() {
    const result = await db.query(
        `SELECT username,
                email,
                image_profile
        FROM users
        ORDER BY username`,
    );
    
    return result.rows;
    
   }

   /** Given a username, return data about user.
   *
   * Returns { username, email, image_profile, comments }
   *
   * Throws NotFoundError if user not found.
   **/

   static async get(username) {
    const userRes = await db.query(
            `SELECT username,
                    email,
                    image_profile
            FROM users
            WHERE username = $1`,
        [username],
    );
    
    const user = userRes.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);

    return user;


   }

   /** Update user data with `data`.
   *
   * This is a "partial update" --- it's fine if data doesn't contain
   * all the fields; this only changes provided ones.
   *
   * Data can include:
   *   { password, email, image_profile }
   *
   * Returns { username, email, image_profile }
   *
   * Throws NotFoundError if not found.
   *
   */
   static async update(username, data) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, BCRYPT_WORK_FACTOR);
    }

    const { setCols, values } = sqlForPartialUpdate(
        data,
        {
          email: "email",
          image_profile: "image_profile",
        });

    const usernameVarIdx = "$" + (values.length + 1);

    const querySql = `UPDATE users 
                      SET ${setCols} 
                      WHERE username = ${usernameVarIdx} 
                      RETURNING username,
                                email,
                                image_profile`;
    
    // [...values, username] array is a way to concatenate the values array 
    // (containing the values to be inserted into the query) with the username parameter.                                 
    const result = await db.query(querySql, [...values, username]);
    const user = result.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);

    delete user.password;
    return user;
  }

  /** Delete given user from database; returns undefined. */
  static async remove(username) {
    let result = await db.query(
          `DELETE
           FROM users
           WHERE username = $1
           RETURNING username`,
        [username],
    );
    const user = result.rows[0];

    if (!user) throw new NotFoundError(`No user: ${username}`);
  }

}


module.exports = User