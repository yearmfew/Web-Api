  /**
* @swagger
* components:
*  schemas:
*    ResearchMethodsAndTechniques:
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
*          description: the name of the ResearchMethodsAndTechniques
*        description:
*          type: string
*          description: the description of the ResearchMethodsAndTechniques
*        visualisation:
*          type: string
*          description: It will be changed to image later. For now it is only a string
*      example:
*        name: ResearchMethodsAndTechniques muster
*        description: ResearchMethodsAndTechniques muster desc
*        visualisation: IMAGE
*/

/**
 * @swagger
 * tags:
 *  name: ResearchMethodsAndTechniques
 *  description: The Research Methods And Techniques Api
 */

/**
* @swagger
* /researchMethodsAndTechniques:
*  get:
*    description: Returns all researchMethodsAndTechniquess in a json format `getAll`
*    summary: Use to get all researchMethodsAndTechniquess
*    tags: [ResearchMethodsAndTechniques]
*    responses:
*      200:
*        description: A successful response, the list of `all researchMethodsAndTechniquess`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/ResearchMethodsAndTechniques"
* 
* 
*/

/**
 * @swagger
 * /researchMethodsAndTechniques/{researchMethodsAndTechniquesId}:
 *  get:
 *    description: Returns the researchMethodsAndTechniques with given id in a json format `getById`
 *    summary: Use to request a specific researchMethodsAndTechniques
 *    tags: [ResearchMethodsAndTechniques]
 *    parameters: 
 *      - in: path
 *        name: researchMethodsAndTechniquesId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the researchMethodsAndTechniques
 *    responses:
 *      200:
 *        description: A successful response, a researchMethodsAndTechniques
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchMethodsAndTechniques"
 *      400:
 *        description: The researchMethodsAndTechniques is not found
 * 
 */

/**
 * @swagger
 * /researchMethodsAndTechniques:
 *  post:
 *    description: Creates a new researchMethodsAndTechniques with given data `addresearchMethodsAndTechniques`
 *    summary: Use to create a new researchMethodsAndTechniques
 *    tags: [ResearchMethodsAndTechniques]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/ResearchMethodsAndTechniques"
 *    responses:
 *      200:
 *        description: researchMethodsAndTechniques is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchMethodsAndTechniques"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /researchMethodsAndTechniques/{researchMethodsAndTechniquesId}:
 *  patch:
 *    description: Updates the new researchMethodsAndTechniques `updateresearchMethodsAndTechniquesById`
 *    summary: Use to update researchMethodsAndTechniques
 *    tags: [ResearchMethodsAndTechniques]
 *    parameters:
 *      - in: path
 *        name: researchMethodsAndTechniquesId
 *        schema:
 *          type: string
 *        required: true
 *        description: The researchMethodsAndTechniques Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/ResearchMethodsAndTechniques"
 *    responses:
 *      200:
 *        description: researchMethodsAndTechniques is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchMethodsAndTechniques"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The researchMethodsAndTechniques cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /researchMethodsAndTechniques/{researchMethodsAndTechniquesId}:
 *  delete:
 *    description: Deletes the researchMethodsAndTechniques with the given Id `deleteresearchMethodsAndTechniquesById`
 *    summary: Use to delete a researchMethodsAndTechniques
 *    tags: [ResearchMethodsAndTechniques]
 *    parameters: 
 *      - in: path
 *        name: researchMethodsAndTechniquesId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the researchMethodsAndTechniques
 *    responses:
 *      200:
 *        description: The researchMethodsAndTechniques is successfully deleted
 *      400:
 *        description: The researchMethodsAndTechniques was not found
 */
