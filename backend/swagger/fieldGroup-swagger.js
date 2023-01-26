  /**
* @swagger
* components:
*  schemas:
*    FieldGroup:
*      type: object
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        title:
*          type: string
*          description: Title of the Field Group
*        description:
*          type: string
*          description: The description of the Field Group
*        fields: 
*          type: array
*          description: The ids for the Field Group
*      example:
*        title: Field Group Title
*        description: The Field Group Description
*        fields: ["1978347943872"]
*/


/**
 * @swagger
 * tags:
 *  name: FieldGroup
 *  description: The Field Group Api
 */

/**
* @swagger
* /fieldGroup:
*  get:
*    description: Returns all Field Group in a json format `getAll`
*    summary: Use to get all Field Group
*    tags: [FieldGroup]
*    responses:
*      200:
*        description: A successful response, the list of `all Field Group`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/FieldGroup"
* 
* 
*/

/**
 * @swagger
 * /fieldGroup/{fieldGroupId}:
 *  get:
 *    description: Returns the fieldGroup with given id in a json format `getById`
 *    summary: Use to request a specific fieldGroup
 *    tags: [FieldGroup]
 *    parameters: 
 *      - in: path
 *        name: fieldGroupId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the fieldGroup
 *    responses:
 *      200:
 *        description: A successful response, a fieldGroup
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/FieldGroup"
 *      400:
 *        description: The fieldGroup is not found
 * 
 */

/**
 * @swagger
 * /fieldGroup:
 *  post:
 *    description: Creates a new fieldGroup with given data `addfieldGroup`
 *    summary: Use to create a new fieldGroup
 *    tags: [FieldGroup]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/FieldGroup"
 *    responses:
 *      200:
 *        description: fieldGroup is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/FieldGroup"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /fieldGroup/{fieldGroupId}:
 *  patch:
 *    description: Updates the new fieldGroup `updatefieldGroupById`
 *    summary: Use to update fieldGroup
 *    tags: [FieldGroup]
 *    parameters:
 *      - in: path
 *        name: fieldGroupId
 *        schema:
 *          type: string
 *        required: true
 *        description: The fieldGroup Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/FieldGroup"
 *    responses:
 *      200:
 *        description: fieldGroup is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/FieldGroup"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The fieldGroup cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /fieldGroup/{fieldGroupId}:
 *  delete:
 *    description: Deletes the fieldGroup with the given Id `deletefieldGroupById`
 *    summary: Use to delete a fieldGroup
 *    tags: [FieldGroup]
 *    parameters: 
 *      - in: path
 *        name: fieldGroupId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the fieldGroup
 *    responses:
 *      200:
 *        description: The fieldGroup is successfully deleted
 *      400:
 *        description: The fieldGroup was not found
 */
