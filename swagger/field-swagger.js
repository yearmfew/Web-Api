  /**
* @swagger
* components:
*  schemas:
*    Field:
*      type: object
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        title:
*          type: string
*          description: Title of the field
*        description:
*          type: string
*          description: The description of the field
*        checklist: 
*          type: id
*          description: The checklist for field
*        guidingQuestions: 
*          type: array
*          description: The ids of the quiding questions
*        explanationVideos:
*          type: array
*          description: Ids of the explanation videos
*        fieldExamples:
*          type: array
*          description: Ids of the field Examples
*        attachments:
*          type: array
*          description: Ids of the attachments
*        supportMethods:
*          type: array
*          description: Ids of the support methods
*        subfields:
*          type: array
*          description: Ids of the subfields
*      example:
*        title: Field Title
*        description: The Field Description
*        checklist:  
*        guidingQuestions: ["12367281628137"]
*        explanationVideos: ["12367281628137"]
*        fieldExamples: ["12367281628137"]
*        attachments: ["12367281628137"]
*        supportMethods: ["12367281628137"]
*        subfields: ["12367281628137"]
*/


/**
 * @swagger
 * tags:
 *  name: Field
 *  description: The Field Api
 */

/**
* @swagger
* /field:
*  get:
*    description: Returns all fields in a json format `getAll`
*    summary: Use to get all fields
*    tags: [Field]
*    responses:
*      200:
*        description: A successful response, the list of `all fields`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/Field"
* 
* 
*/

/**
 * @swagger
 * /field/{fieldId}:
 *  get:
 *    description: Returns the field with given id in a json format `getById`
 *    summary: Use to request a specific field
 *    tags: [Field]
 *    parameters: 
 *      - in: path
 *        name: fieldId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the field
 *    responses:
 *      200:
 *        description: A successful response, a field
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Field"
 *      400:
 *        description: The field is not found
 * 
 */

/**
 * @swagger
 * /field:
 *  post:
 *    description: Creates a new field with given data `addfield`
 *    summary: Use to create a new field
 *    tags: [Field]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Field"
 *    responses:
 *      200:
 *        description: field is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Field"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /field/{fieldId}:
 *  patch:
 *    description: Updates the new field `updatefieldById`
 *    summary: Use to update field
 *    tags: [Field]
 *    parameters:
 *      - in: path
 *        name: fieldId
 *        schema:
 *          type: string
 *        required: true
 *        description: The field Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/Field"
 *    responses:
 *      200:
 *        description: field is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Field"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The field cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /field/{fieldId}:
 *  delete:
 *    description: Deletes the field with the given Id `deletefieldById`
 *    summary: Use to delete a field
 *    tags: [Field]
 *    parameters: 
 *      - in: path
 *        name: fieldId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the field
 *    responses:
 *      200:
 *        description: The field is successfully deleted
 *      400:
 *        description: The field was not found
 */
