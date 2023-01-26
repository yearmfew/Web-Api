  /**
* @swagger
* components:
*  schemas:
*    ResearchStrategy:
*      type: object
*      required:
*        - name
*        - description
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        name:
*          type: string
*          description: the name of the research strategy
*        description:
*          type: string
*          description: the description of the research strategy
*        visualisation:
*          type: string
*          description: It will be changed to image later. For now it is only a string
*      example:
*        name: research strategy muster
*        description: research strategy muster desc
*        visualisation: IMAGE
*/

/**
 * @swagger
 * tags:
 *  name: ResearchStrategy
 *  description: The Research Strategy Api
 */

/**
* @swagger
* /researchStrategy:
*  get:
*    description: Returns all Students in a json format `getAll`
*    summary: Use to get all students
*    tags: [ResearchStrategy]
*    responses:
*      200:
*        description: A successful response, the list of `all students`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/ResearchStrategy"
* 
* 
*/

/**
 * @swagger
 * /researchStrategy/{researchStrategyId}:
 *  get:
 *    description: Returns the student with given id in a json format `getById`
 *    summary: Use to request a specific student
 *    tags: [ResearchStrategy]
 *    parameters: 
 *      - in: path
 *        name: researchStrategyId
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
 *                $ref: "#/components/schemas/ResearchStrategy"
 *      400:
 *        description: The student is not found
 * 
 */

/**
 * @swagger
 * /researchStrategy:
 *  post:
 *    description: Creates a new student with given data `addstudent`
 *    summary: Use to create a new student
 *    tags: [ResearchStrategy]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/ResearchStrategy"
 *    responses:
 *      200:
 *        description: student is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchStrategy"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /researchStrategy/{researchStrategyId}:
 *  patch:
 *    description: Updates the new student `updatestudentById`
 *    summary: Use to update student
 *    tags: [ResearchStrategy]
 *    parameters:
 *      - in: path
 *        name: researchStrategyId
 *        schema:
 *          type: string
 *        required: true
 *        description: The student Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/ResearchStrategy"
 *    responses:
 *      200:
 *        description: student is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchStrategy"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The student cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /researchStrategy/{researchStrategyId}:
 *  delete:
 *    description: Deletes the student with the given Id `deletestudentById`
 *    summary: Use to delete a student
 *    tags: [ResearchStrategy]
 *    parameters: 
 *      - in: path
 *        name: researchStrategyId
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
