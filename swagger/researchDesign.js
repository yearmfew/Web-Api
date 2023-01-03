  /**
* @swagger
* components:
*  schemas:
*    ResearchDesign:
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
*          description: the name of the research design
*        description:
*          type: string
*          description: the description of the research design
*        visualisation:
*          type: string
*          description: It will be changed to image later. For now it is only a string
*      example:
*        name: research design muster
*        description: research design muster desc
*        visualisation: IMAGE
*/

/**
 * @swagger
 * tags:
 *  name: ResearchDesign
 *  description: The ResearchDesign Api
 */

/**
* @swagger
* /researchDesign:
*  get:
*    description: Returns all ResearchDesign in a json format `getAll`
*    summary: Use to get all ResearchDesign
*    tags: [ResearchDesign]
*    responses:
*      200:
*        description: A successful response, the list of `all ResearchDesign`
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
 * /researchDesign/{researchDesignId}:
 *  get:
 *    description: Returns the research design with given id in a json format `getById`
 *    summary: Use to request a specific research design
 *    tags: [ResearchDesign]
 *    parameters: 
 *      - in: path
 *        name: researchDesignId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the research design
 *    responses:
 *      200:
 *        description: A successful response, a research design
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchStrategy"
 *      400:
 *        description: The research design is not found
 * 
 */

/**
 * @swagger
 * /researchDesign:
 *  post:
 *    description: Creates a new research design with given data `addresearch design`
 *    summary: Use to create a new research design
 *    tags: [ResearchDesign]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/ResearchStrategy"
 *    responses:
 *      200:
 *        description: research design is successfully created
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
 * /researchDesign/{researchDesignId}:
 *  patch:
 *    description: Updates the new research design `updateresearch designById`
 *    summary: Use to update research design
 *    tags: [ResearchDesign]
 *    parameters:
 *      - in: path
 *        name: researchDesignId
 *        schema:
 *          type: string
 *        required: true
 *        description: The research design Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/ResearchStrategy"
 *    responses:
 *      200:
 *        description: research design is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchStrategy"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The research design cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /researchDesign/{researchDesignId}:
 *  delete:
 *    description: Deletes the research design with the given Id `deleteEesearchDesignById`
 *    summary: Use to delete a research design
 *    tags: [ResearchDesign]
 *    parameters: 
 *      - in: path
 *        name: researchDesignId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the research design
 *    responses:
 *      200:
 *        description: The research design is successfully deleted
 *      400:
 *        description: The research design was not found
 */
