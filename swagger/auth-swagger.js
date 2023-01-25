  /**
* @swagger
* components:
*  schemas:
*    Auth:
*      type: object
*      required:
*        - userId
*        - email
*        - password
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        userId:
*          type: string
*          description: the id of the user which owns this email and password
*        email:
*          type: string
*          description: the email of the user
*        password: 
*          type: string
*          description: The password of the user
*      example:
*        userId: '243786432875648239'
*        email: 'max@mustermann'
*        password: 'user password'
*/

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: The Auth Api
 */

/**
* @swagger
* /auth:
*  get:
*    description: Returns all Auth Data `getAll` // It can be removed. It seems unnecessary
*    summary: Use to get all Auth Data
*    tags: [Auth]
*    responses:
*      200:
*        description: A successful response, the list of `all auth`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/Auth"
* 
* 
*/

/**
 * @swagger
 * /auth/{authId}:
 *  get:
 *    description: Returns the auth data with given id in a json format `getById`
 *    summary: Use to request a specific auth data
 *    tags: [Auth]
 *    parameters: 
 *      - in: path
 *        name: authId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the auth data
 *    responses:
 *      200:
 *        description: A successful response, a auth data
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Auth"
 *      400:
 *        description: The auth data is not found
 * 
 */

/**
 * @swagger
 * /auth:
 *  post:
 *    description: Creates a new auth data with given data `add auth data`
 *    summary: Use to create a new auth data
 *    tags: [Auth]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Auth"
 *    responses:
 *      200:
 *        description: auth data is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Auth"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /auth/{authId}:
 *  patch:
 *    description: Updates the new auth data `updateauth dataById`
 *    summary: Use to update auth data
 *    tags: [Auth]
 *    parameters:
 *      - in: path
 *        name: authId
 *        schema:
 *          type: string
 *        required: true
 *        description: The auth data Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/auth"
 *    responses:
 *      200:
 *        description: auth data is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Auth"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The auth data cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /auth/{authId}:
 *  delete:
 *    description: Deletes the auth data with the given Id `deleteauth dataById`
 *    summary: Use to delete a auth data
 *    tags: [Auth]
 *    parameters: 
 *      - in: path
 *        name: authId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the auth data
 *    responses:
 *      200:
 *        description: The auth data is successfully deleted
 *      400:
 *        description: The auth data was not found
 */
