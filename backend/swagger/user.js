  /**
* @swagger
* components:
*  schemas:
*    User:
*      type: object
*      required:
*        - firstname
*        - lastname
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        firstname:
*          type: string
*          description: the first name of the user
*        lastname:
*          type: string
*          description: the last name of the user
*        title: 
*          type: string
*          description: The title of the user like Prof, Dr ..
*      example:
*        firstname: Max
*        lastname: Mustermann
*        title: Student
*/

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: The Users Api
 */

/**
* @swagger
* /user:
*  get:
*    description: Returns all users in a json format `getAll`
*    summary: Use to get all users
*    tags: [Users]
*    responses:
*      200:
*        description: A successful response, the list of `all users`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/User"
* 
* 
*/

/**
 * @swagger
 * /user/{userId}:
 *  get:
 *    description: Returns the user with given id in a json format `getById`
 *    summary: Use to request a specific user
 *    tags: [Users]
 *    parameters: 
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the user
 *    responses:
 *      200:
 *        description: A successful response, a user
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/User"
 *      400:
 *        description: The user is not found
 * 
 */

/**
 * @swagger
 * /user:
 *  post:
 *    description: Creates a new user with given data `addUser`
 *    summary: Use to create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/User"
 *    responses:
 *      200:
 *        description: User is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/User"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /user/{userId}:
 *  patch:
 *    description: Updates the new user `updateUserById`
 *    summary: Use to update user
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *        description: The user Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/User"
 *    responses:
 *      200:
 *        description: User is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/User"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The user cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /user/{userId}:
 *  delete:
 *    description: Deletes the user with the given Id `deleteUserById`
 *    summary: Use to delete a user
 *    tags: [Users]
 *    parameters: 
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the user
 *    responses:
 *      200:
 *        description: The user is successfully deleted
 *      400:
 *        description: The user was not found
 */
