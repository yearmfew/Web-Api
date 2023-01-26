  /**
* @swagger
* components:
*  schemas:
*    Teacher:
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
*          description: the first name of the teacher
*        lastname:
*          type: string
*          description: the last name of the teacher
*        title: 
*          type: string
*          description: The title of the teacher like Prof, Dr ..
*        course:
*          type: string
*          description: Course of teacher
*        role:
*          type: id
*          description: Id of the role
*      example:
*        firstname: TeacherMax
*        lastname: Mustermann
*        title: Teacher
*        course: Test
*        role: 11111
*/

/**
 * @swagger
 * tags:
 *  name: Teachers
 *  description: The Teachers Api
 */

/**
* @swagger
* /teacher:
*  get:
*    description: Returns all teachers in a json format `getAll`
*    summary: Use to get all teachers
*    tags: [Teachers]
*    responses:
*      200:
*        description: A successful response, the list of `all teachers`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/Teacher"
* 
* 
*/

/**
 * @swagger
 * /teacher/{teacherId}:
 *  get:
 *    description: Returns the teacher with given id in a json format `getById`
 *    summary: Use to request a specific teacher
 *    tags: [Teachers]
 *    parameters: 
 *      - in: path
 *        name: teacherId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the teacher
 *    responses:
 *      200:
 *        description: A successful response, a teacher
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Teacher"
 *      400:
 *        description: The teacher is not found
 * 
 */

/**
 * @swagger
 * /teacher:
 *  post:
 *    description: Creates a new teacher with given data `addteacher`
 *    summary: Use to create a new teacher
 *    tags: [Teachers]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Teacher"
 *    responses:
 *      200:
 *        description: teacher is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Teacher"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /teacher/{teacherId}:
 *  patch:
 *    description: Updates the new teacher `updateteacherById`
 *    summary: Use to update teacher
 *    tags: [Teachers]
 *    parameters:
 *      - in: path
 *        name: teacherId
 *        schema:
 *          type: string
 *        required: true
 *        description: The teacher Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/Teacher"
 *    responses:
 *      200:
 *        description: teacher is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Teacher"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The teacher cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /teacher/{teacherId}:
 *  delete:
 *    description: Deletes the teacher with the given Id `deleteteacherById`
 *    summary: Use to delete a teacher
 *    tags: [Teachers]
 *    parameters: 
 *      - in: path
 *        name: teacherId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the teacher
 *    responses:
 *      200:
 *        description: The teacher is successfully deleted
 *      400:
 *        description: The teacher was not found
 */
