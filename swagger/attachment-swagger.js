  /**
* @swagger
* components:
*  schemas:
*    Attachment:
*      type: object
*      required:
*        - url
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        notes:
*          type: string
*          description: notes for this attachment
*        url:
*          type: string
*          description: the url of the attachment
*        type: 
*          type: string
*          description: it will be changed. Then this note will be updated
*      example:
*        notes: 'Some notes about attachment'
*        url: 'path_of_the_attachemnt.com'
*        type: 'How will we save the image!'
*/

/**
 * @swagger
 * tags:
 *  name: Attachment
 *  description: The Attachment Api
 */

/**
* @swagger
* /attachment:
*  get:
*    description: Returns all Attachments in a json format `getAll`
*    summary: Use to get all attachments
*    tags: [Attachment]
*    responses:
*      200:
*        description: A successful response, the list of `all attachments`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/Attachment"
* 
* 
*/

/**
 * @swagger
 * /attachment/{attachmentId}:
 *  get:
 *    description: Returns the attachment with given id in a json format `getById`
 *    summary: Use to request a specific attachment
 *    tags: [Attachment]
 *    parameters: 
 *      - in: path
 *        name: attachmentId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the attachment
 *    responses:
 *      200:
 *        description: A successful response, a attachment
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Attachment"
 *      400:
 *        description: The attachment is not found
 * 
 */

/**
 * @swagger
 * /attachment:
 *  post:
 *    description: Creates a new attachment with given data `addattachment`
 *    summary: Use to create a new attachment
 *    tags: [Attachment]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/Attachment"
 *    responses:
 *      200:
 *        description: attachment is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Attachment"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /attachment/{attachmentId}:
 *  patch:
 *    description: Updates the new attachment `updateattachmentById`
 *    summary: Use to update attachment
 *    tags: [Attachment]
 *    parameters:
 *      - in: path
 *        name: attachmentId
 *        schema:
 *          type: string
 *        required: true
 *        description: The attachment Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/Attachment"
 *    responses:
 *      200:
 *        description: attachment is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/Attachment"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The attachment cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /attachment/{attachmentId}:
 *  delete:
 *    description: Deletes the attachment with the given Id `deleteattachmentById`
 *    summary: Use to delete a attachment
 *    tags: [Attachment]
 *    parameters: 
 *      - in: path
 *        name: attachmentId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the attachment
 *    responses:
 *      200:
 *        description: The attachment is successfully deleted
 *      400:
 *        description: The attachment was not found
 */
