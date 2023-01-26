  /**
* @swagger
* components:
*  schemas:
*    GuidingQuestion:
*      type: object
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        question:
*          type: string
*          description: Text of the Question
*      example:
*        question: "Wer hört alles und sagt nie etwas?"
*/


/**
 * @swagger
 * tags:
 *  name: GuidingQuestion
 *  description: The Guiding Question Api
 */

/**
* @swagger
* /guidingQuestion:
*  get:
*    description: Returns all guidingQuestions in a json format `getAll`
*    summary: Use to get all guidingQuestions
*    tags: [GuidingQuestion]
*    responses:
*      200:
*        description: A successful response, the list of `all guidingQuestions`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/GuidingQuestion"
* 
* 
*/

/**
 * @swagger
 * /guidingQuestion/{guidingQuestionId}:
 *  get:
 *    description: Returns the guidingQuestion with given id in a json format `getById`
 *    summary: Use to request a specific guidingQuestion
 *    tags: [GuidingQuestion]
 *    parameters: 
 *      - in: path
 *        name: guidingQuestionId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the guidingQuestion
 *    responses:
 *      200:
 *        description: A successful response, a guidingQuestion
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/GuidingQuestion"
 *      400:
 *        description: The guidingQuestion is not found
 * 
 */

/**
 * @swagger
 * /guidingQuestion:
 *  post:
 *    description: Creates a new guidingQuestion with given data `addguidingQuestion`
 *    summary: Use to create a new guidingQuestion
 *    tags: [GuidingQuestion]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/GuidingQuestion"
 *    responses:
 *      200:
 *        description: guidingQuestion is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/GuidingQuestion"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /guidingQuestion/{guidingQuestionId}:
 *  patch:
 *    description: Updates the new guidingQuestion `updateguidingQuestionById`
 *    summary: Use to update guidingQuestion
 *    tags: [GuidingQuestion]
 *    parameters:
 *      - in: path
 *        name: guidingQuestionId
 *        schema:
 *          type: string
 *        required: true
 *        description: The guidingQuestion Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/GuidingQuestion"
 *    responses:
 *      200:
 *        description: guidingQuestion is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/GuidingQuestion"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The guidingQuestion cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /guidingQuestion/{guidingQuestionId}:
 *  delete:
 *    description: Deletes the guidingQuestion with the given Id `deleteguidingQuestionById`
 *    summary: Use to delete a guidingQuestion
 *    tags: [GuidingQuestion]
 *    parameters: 
 *      - in: path
 *        name: guidingQuestionId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the guidingQuestion
 *    responses:
 *      200:
 *        description: The guidingQuestion is successfully deleted
 *      400:
 *        description: The guidingQuestion was not found
 */
