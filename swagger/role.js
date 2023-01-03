  /**
* @swagger
* components:
*  schemas:
*    Role:
*      type: object
*      required:
*        - firstname
*        - lastname
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        roleName:
*          type: string
*          description: the first name of the student
*        roleCode:
*          type: string
*          description: the code of the role
*        description: 
*          type: string
*          description: The title of the student like Prof, Dr ..
*      example:
*        roleName: Student
*        roleCode: 11111
*        description: Student Role
*/

/**
 * @swagger
 * tags:
 *  name: Role
 *  description: The Roles Api
 */

/**
* @swagger
* /role:
*  get:
*    description: Returns all Students in a json format `getAll`
*    summary: Use to get all students
*    tags: [Role]
*    responses:
*      200:
*        description: A successful response, the list of `all students`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/Role"
* 
* 
*/

/**
 * @swagger
 * /role/{studentId}:
 *  get:
 *    description: Returns the student with given id in a json format `getById`
 *    summary: Use to request a specific student
 *    tags: [Role]
 *    parameters: 
 *      - in: path
 *        name: studentId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the student
 *    responses:
 *      200:
 *        description: A successful response, a student
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Role"
 *      400:
 *        description: The student is not found
 * 
 */

/**
 * @swagger
 * /role:
 *  post:
 *    description: Creates a new student with given data `addstudent`
 *    summary: Use to create a new student
 *    tags: [Role]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Role"
 *    responses:
 *      200:
 *        description: student is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Role"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /role/{studentId}:
 *  patch:
 *    description: Updates the new student `updatestudentById`
 *    summary: Use to update student
 *    tags: [Role]
 *    parameters:
 *      - in: path
 *        name: studentId
 *        schema:
 *          type: string
 *        required: true
 *        description: The student Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/Role"
 *    responses:
 *      200:
 *        description: student is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Role"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The student cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /role/{studentId}:
 *  delete:
 *    description: Deletes the student with the given Id `deletestudentById`
 *    summary: Use to delete a student
 *    tags: [Role]
 *    parameters: 
 *      - in: path
 *        name: studentId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the student
 *    responses:
 *      200:
 *        description: The student is successfully deleted
 *      400:
 *        description: The student was not found
 */
