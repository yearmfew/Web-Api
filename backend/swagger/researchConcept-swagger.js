  /**
* @swagger
* components:
*  schemas:
*    ResearchConcept:
*      type: object
*      properties:
*        id:
*          type: string
*          description: The auto generated id from database
*        title:
*          type: string
*          description: Title of the research concept
*        description:
*          type: string
*          description: The description of the research concept
*        dateCreated: 
*          type: date
*          description: The creation date of the research concept
*        dateLastModified: 
*          type: date
*          description: The last modification date of the research concept
*        changelog:
*          type: id
*          description: The changelog of the research concept
*        attachmentVisibility:
*          type: boolean
*          description: The attachment visibility of the research concept
*        attachment:
*          type: array
*          description: The ids of the attachments
*      example:
*        title: research concept Title
*        description: The research concept Description
*        dateCreated: "01.01.2023"
*        dateLastModified: "01.01.2023"
*        changelog: changelog
*        attachmentVisibility: False
*        attachment: ["3182764876312498"]
*/


/**
 * @swagger
 * tags:
 *  name: ResearchConcept
 *  description: The Research Concept Api
 */

/**
* @swagger
* /researchConcept:
*  get:
*    description: Returns all research concepts in a json format `getAll`
*    summary: Use to get all research concepts
*    tags: [ResearchConcept]
*    responses:
*      200:
*        description: A successful response, the list of `all research concepts`
*        content: 
*          application/json:
*            schema: 
*              type: array
*              items:
*                $ref: "#/components/schemas/ResearchConcept"
* 
* 
*/

/**
 * @swagger
 * /researchConcept/{research conceptId}:
 *  get:
 *    description: Returns the research concept with given id in a json format `getById`
 *    summary: Use to request a specific research concept
 *    tags: [ResearchConcept]
 *    parameters: 
 *      - in: path
 *        name: research conceptId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the research concept
 *    responses:
 *      200:
 *        description: A successful response, a research concept
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchConcept"
 *      400:
 *        description: The research concept is not found
 * 
 */

/**
 * @swagger
 * /researchConcept:
 *  post:
 *    description: Creates a new research concept with given data `addresearch concept`
 *    summary: Use to create a new research concept
 *    tags: [ResearchConcept]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#/components/schemas/ResearchConcept"
 *    responses:
 *      200:
 *        description: research concept is successfully created
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchConcept"
 *      400: 
 *        description: Validation Error
 *      500:
 *        description: Some server error
 * 
 */

/**
 * @swagger
 * /researchConcept/{research conceptId}:
 *  patch:
 *    description: Updates the new research concept `updateresearch conceptById`
 *    summary: Use to update research concept
 *    tags: [ResearchConcept]
 *    parameters:
 *      - in: path
 *        name: research conceptId
 *        schema:
 *          type: string
 *        required: true
 *        description: The research concept Id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: "#components/schemas/ResearchConcept"
 *    responses:
 *      200:
 *        description: research concept is successfully updated
 *        content: 
 *          application/json:
 *            schema: 
 *              type: array
 *              items:
 *                $ref: "#/components/schemas/ResearchConcept"
 *      400: 
 *        description: Validation Error
 *      404: 
 *        description: The research concept cannot be found
 *      500:
 *        description: Some server error
 */

/**
 * @swagger
 * /researchConcept/{research conceptId}:
 *  delete:
 *    description: Deletes the research concept with the given Id `deleteresearch conceptById`
 *    summary: Use to delete a research concept
 *    tags: [ResearchConcept]
 *    parameters: 
 *      - in: path
 *        name: research conceptId
 *        schema:
 *          type: string
 *        required: true
 *        description: The id of the research concept
 *    responses:
 *      200:
 *        description: The research concept is successfully deleted
 *      400:
 *        description: The research concept was not found
 */
