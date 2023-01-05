  /**
* @swagger
* components:
*  schemas:
*    SupportMethod:
*      type: object
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        title:
*          type: string
*          description: Title of the support method
*        description:
*          type: string
*          description: The description of the support method
*        goal: 
*          type: string
*          description: The goal for the support method
*        steps: 
*          type: string
*          description: The steps for the support method
*        example:
*          type: string
*          description: The examples for the support method
*        inputConditions:
*          type: string
*          description: The input conditions for the support method
*        field:
*          type: string
*          description: The fields for the support method
*      example:
*        title: support method Title
*        description: The support method Description
*        goal: 
*        steps:
*        example:
*        inputConditions:
*        field:
*/


/**
 * @swagger
 * tags:
 *  name: SupportMethod
 *  description: The Support Method Api
 */

/**
* @swagger
* /supportMethod:
*  get:
*    description: Returns all supportMethods in a json format `getAll`
*    summary: Use to get all supportMethods
*    tags: [SupportMethod]
*    responses:
*      200:
*        description: A successful response, the list of `all supportMethods`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/SupportMethod"
* 
* 
*/

/**
 * @swagger
 * /supportMethod/{supportMethodId}:
 *  get:
 *    description: Returns the supportMethod with given id in a json format `getById`
 *    summary: Use to request a specific supportMethod
 *    tags: [SupportMethod]
 *    parameters: 
 *      - in: path
 *        name: supportMethodId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the supportMethod
 *    responses:
 *      200:
 *        description: A successful response, a supportMethod
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/SupportMethod"
 *      400:
 *        description: The supportMethod is not found
 * 
 */

/**
 * @swagger
 * /supportMethod:
 *  post:
 *    description: Creates a new supportMethod with given data `addsupportMethod`
 *    summary: Use to create a new supportMethod
 *    tags: [SupportMethod]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/SupportMethod"
 *    responses:
 *      200:
 *        description: supportMethod is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/SupportMethod"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /supportMethod/{supportMethodId}:
 *  patch:
 *    description: Updates the new supportMethod `updatesupportMethodById`
 *    summary: Use to update supportMethod
 *    tags: [SupportMethod]
 *    parameters:
 *      - in: path
 *        name: supportMethodId
 *        schema:
 *          type: string
 *        required: true
 *        description: The supportMethod Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/SupportMethod"
 *    responses:
 *      200:
 *        description: supportMethod is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/SupportMethod"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The supportMethod cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /supportMethod/{supportMethodId}:
 *  delete:
 *    description: Deletes the supportMethod with the given Id `deletesupportMethodById`
 *    summary: Use to delete a supportMethod
 *    tags: [SupportMethod]
 *    parameters: 
 *      - in: path
 *        name: supportMethodId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the supportMethod
 *    responses:
 *      200:
 *        description: The supportMethod is successfully deleted
 *      400:
 *        description: The supportMethod was not found
 */