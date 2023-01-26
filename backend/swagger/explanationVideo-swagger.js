  /**
* @swagger
* components:
*  schemas:
*    ExplanationVideo:
*      type: object
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        video:
*          type: string
*          description: video
*      example:
*        video: Video
*/


/**
 * @swagger
 * tags:
 *  name: ExplanationVideo
 *  description: The Explanation Video Api
 */

/**
* @swagger
* /explanationVideo:
*  get:
*    description: Returns all explanationVideos in a json format `getAll`
*    summary: Use to get all explanationVideos
*    tags: [ExplanationVideo]
*    responses:
*      200:
*        description: A successful response, the list of `all explanationVideos`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/ExplanationVideo"
* 
* 
*/

/**
 * @swagger
 * /explanationVideo/{explanationVideoId}:
 *  get:
 *    description: Returns the explanationVideo with given id in a json format `getById`
 *    summary: Use to request a specific explanationVideo
 *    tags: [ExplanationVideo]
 *    parameters: 
 *      - in: path
 *        name: explanationVideoId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the explanationVideo
 *    responses:
 *      200:
 *        description: A successful response, a explanationVideo
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ExplanationVideo"
 *      400:
 *        description: The explanationVideo is not found
 * 
 */

/**
 * @swagger
 * /explanationVideo:
 *  post:
 *    description: Creates a new explanationVideo with given data `addexplanationVideo`
 *    summary: Use to create a new explanationVideo
 *    tags: [ExplanationVideo]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/ExplanationVideo"
 *    responses:
 *      200:
 *        description: explanationVideo is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ExplanationVideo"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /explanationVideo/{explanationVideoId}:
 *  patch:
 *    description: Updates the new explanationVideo `updateexplanationVideoById`
 *    summary: Use to update explanationVideo
 *    tags: [ExplanationVideo]
 *    parameters:
 *      - in: path
 *        name: explanationVideoId
 *        schema:
 *          type: string
 *        required: true
 *        description: The explanationVideo Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/ExplanationVideo"
 *    responses:
 *      200:
 *        description: explanationVideo is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ExplanationVideo"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The explanationVideo cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /explanationVideo/{explanationVideoId}:
 *  delete:
 *    description: Deletes the explanationVideo with the given Id `deleteexplanationVideoById`
 *    summary: Use to delete a explanationVideo
 *    tags: [ExplanationVideo]
 *    parameters: 
 *      - in: path
 *        name: explanationVideoId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the explanationVideo
 *    responses:
 *      200:
 *        description: The explanationVideo is successfully deleted
 *      400:
 *        description: The explanationVideo was not found
 */
