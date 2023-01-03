  /**
* @swagger
* components:
*  schemas:
*    Student:
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
*          description: the first name of the student
*        lastname:
*          type: string
*          description: the last name of the student
*        title: 
*          type: string
*          description: The title of the student like Prof, Dr ..
*        course:
*          type: string
*          description: Course of student
*      example:
*        firstname: StudentMax
*        lastname: Mustermann
*        title: Student
*        course: Test
*/

/**
 * @swagger
 * tags:
 *  name: Students
 *  description: The Students Api
 */

/**
* @swagger
* /student:
*  get:
*    description: Returns all Students in a json format `getAll`
*    summary: Use to get all students
*    tags: [Students]
*    responses:
*      200:
*        description: A successful response, the list of `all students`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/Student"
* 
* 
*/

/**
 * @swagger
 * /student/{studentId}:
 *  get:
 *    description: Returns the student with given id in a json format `getById`
 *    summary: Use to request a specific student
 *    tags: [Students]
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
 *                $ref: "#/components/schemas/Student"
 *      400:
 *        description: The student is not found
 * 
 */

/**
 * @swagger
 * /student:
 *  post:
 *    description: Creates a new student with given data `addstudent`
 *    summary: Use to create a new student
 *    tags: [Students]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Student"
 *    responses:
 *      200:
 *        description: student is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Student"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /student/{studentId}:
 *  patch:
 *    description: Updates the new student `updatestudentById`
 *    summary: Use to update student
 *    tags: [Students]
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
 *            $ref: "#components/schemas/Student"
 *    responses:
 *      200:
 *        description: student is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Student"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The student cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /student/{studentId}:
 *  delete:
 *    description: Deletes the student with the given Id `deletestudentById`
 *    summary: Use to delete a student
 *    tags: [Students]
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
