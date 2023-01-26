  /**
* @swagger
* components:
*  schemas:
*    FieldExample:
*      type: object
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        name:
*          type: string
*          description: Name of the Field Example
*        description:
*          type: string
*          description: The description of the Field Example
*        visualisation: 
*          type: image
*          description: will be updated later
*      example:
*        name: Field Example
*        description: The Field Example Description
*        visualisation: Image 
*/


/**
 * @swagger
 * tags:
 *  name: FieldExample
 *  description: The Field Example Api
 */

/**
* @swagger
* /fieldExample:
*  get:
*    description: Returns all fieldExamples in a json format `getAll`
*    summary: Use to get all fieldExamples
*    tags: [FieldExample]
*    responses:
*      200:
*        description: A successful response, the list of `all fieldExamples`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/FieldExample"
* 
* 
*/

/**
 * @swagger
 * /fieldExample/{fieldExampleId}:
 *  get:
 *    description: Returns the fieldExample with given id in a json format `getById`
 *    summary: Use to request a specific fieldExample
 *    tags: [FieldExample]
 *    parameters: 
 *      - in: path
 *        name: fieldExampleId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the fieldExample
 *    responses:
 *      200:
 *        description: A successful response, a fieldExample
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/FieldExample"
 *      400:
 *        description: The fieldExample is not found
 * 
 */

/**
 * @swagger
 * /fieldExample:
 *  post:
 *    description: Creates a new fieldExample with given data `addfieldExample`
 *    summary: Use to create a new fieldExample
 *    tags: [FieldExample]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/FieldExample"
 *    responses:
 *      200:
 *        description: fieldExample is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/FieldExample"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /fieldExample/{fieldExampleId}:
 *  patch:
 *    description: Updates the new fieldExample `updatefieldExampleById`
 *    summary: Use to update fieldExample
 *    tags: [FieldExample]
 *    parameters:
 *      - in: path
 *        name: fieldExampleId
 *        schema:
 *          type: string
 *        required: true
 *        description: The fieldExample Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/FieldExample"
 *    responses:
 *      200:
 *        description: fieldExample is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/FieldExample"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The fieldExample cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /fieldExample/{fieldExampleId}:
 *  delete:
 *    description: Deletes the fieldExample with the given Id `deletefieldExampleById`
 *    summary: Use to delete a fieldExample
 *    tags: [FieldExample]
 *    parameters: 
 *      - in: path
 *        name: fieldExampleId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the fieldExample
 *    responses:
 *      200:
 *        description: The fieldExample is successfully deleted
 *      400:
 *        description: The fieldExample was not found
 */
