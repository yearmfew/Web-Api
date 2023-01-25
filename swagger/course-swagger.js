  /**
* @swagger
* components:
*  schemas:
*    Course:
*      type: object
*      required:
*        - firstname
*        - lastname
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        title:
*          type: string
*          description: Title of the course
*        description:
*          type: string
*          description: The description of the course
*        researchDesign: 
*          type: id
*          description: The research design for the course
*        researchStrategy: 
*          type: id
*          description: The research strategy for the course
*        researchMethodesAndTechniques:
*          type: id
*          description: The research methodes and techniques for the course
*      example:
*        title: Course Title
*        description: The Course Description
*        researchDesign: 
*        researchStrategy:
*        researchMethodesAndTechniques:
*/


/**
 * @swagger
 * tags:
 *  name: Course
 *  description: The Course Api
 */

/**
* @swagger
* /course:
*  get:
*    description: Returns all courses in a json format `getAll`
*    summary: Use to get all courses
*    tags: [Course]
*    responses:
*      200:
*        description: A successful response, the list of `all courses`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/Course"
* 
* 
*/

/**
 * @swagger
 * /course/{courseId}:
 *  get:
 *    description: Returns the course with given id in a json format `getById`
 *    summary: Use to request a specific course
 *    tags: [Course]
 *    parameters: 
 *      - in: path
 *        name: courseId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the course
 *    responses:
 *      200:
 *        description: A successful response, a course
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Course"
 *      400:
 *        description: The course is not found
 * 
 */

/**
 * @swagger
 * /course:
 *  post:
 *    description: Creates a new course with given data `addcourse`
 *    summary: Use to create a new course
 *    tags: [Course]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Course"
 *    responses:
 *      200:
 *        description: course is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Course"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /course/{courseId}:
 *  patch:
 *    description: Updates the new course `updatecourseById`
 *    summary: Use to update course
 *    tags: [Course]
 *    parameters:
 *      - in: path
 *        name: courseId
 *        schema:
 *          type: string
 *        required: true
 *        description: The course Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/Course"
 *    responses:
 *      200:
 *        description: course is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Course"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The course cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /course/{courseId}:
 *  delete:
 *    description: Deletes the course with the given Id `deletecourseById`
 *    summary: Use to delete a course
 *    tags: [Course]
 *    parameters: 
 *      - in: path
 *        name: courseId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the course
 *    responses:
 *      200:
 *        description: The course is successfully deleted
 *      400:
 *        description: The course was not found
 */
