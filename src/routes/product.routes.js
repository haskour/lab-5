// src/routes/product.routes.js
import { Router } from 'express';
import { productController } from '../controllers/product.controller.js';
import {
  validateId,
  validateProduct,
  validateProductPatch
} from '../middlewares/validator.middleware.js';

const router = Router();

// GET : Lister tous les produits
router.get(
  '/',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Lister tous les produits'
     #swagger.responses[200] = {
       description: 'Liste des produits'
     }
  */
  productController.getAll
);

// GET : Obtenir un produit par ID
router.get(
  '/:id',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Obtenir un produit par ID'
     #swagger.parameters['id'] = {
       in: 'path',
       required: true,
       schema: { type: 'integer', minimum: 1 }
     }
     #swagger.responses[200] = {
       description: 'Produit trouvé'
     }
     #swagger.responses[400] = {
       description: 'Identifiant invalide'
     }
     #swagger.responses[404] = {
       description: 'Produit non trouvé'
     }
  */
  validateId,
  productController.getById
);

// POST : Créer un produit
router.post(
  '/',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Créer un produit'
     #swagger.requestBody = {
       required: true,
       content: {
         'application/json': {
           schema: {
             $ref: '#/components/schemas/ProductInput'
           }
         }
       }
     }
     #swagger.responses[201] = {
       description: 'Produit créé'
     }
     #swagger.responses[400] = {
       description: 'Données invalides'
     }
  */
  validateProduct,
  productController.create
);

// PUT : Mettre à jour entièrement un produit
router.put(
  '/:id',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Mettre à jour un produit'
     #swagger.requestBody = {
       required: true,
       content: {
         'application/json': {
           schema: {
             $ref: '#/components/schemas/ProductInput'
           }
         }
       }
     }
     #swagger.responses[200] = {
       description: 'Produit mis à jour'
     }
     #swagger.responses[400] = {
       description: 'Données invalides'
     }
     #swagger.responses[404] = {
       description: 'Produit non trouvé'
     }
  */
  validateId,
  validateProduct,
  productController.update
);

// PATCH : Modifier partiellement un produit
router.patch(
  '/:id',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Modifier partiellement un produit'
     #swagger.requestBody = {
       required: true,
       content: {
         'application/json': {
           schema: {
             $ref: '#/components/schemas/ProductPatch'
           }
         }
       }
     }
     #swagger.responses[200] = {
       description: 'Produit modifié'
     }
     #swagger.responses[400] = {
       description: 'Données invalides'
     }
     #swagger.responses[404] = {
       description: 'Produit non trouvé'
     }
  */
  validateId,
  validateProductPatch,
  productController.patch
);

// DELETE : Supprimer un produit
router.delete(
  '/:id',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Supprimer un produit'
     #swagger.responses[204] = {
       description: 'Produit supprimé'
     }
     #swagger.responses[400] = {
       description: 'Identifiant invalide'
     }
     #swagger.responses[404] = {
       description: 'Produit non trouvé'
     }
  */
  validateId,
  productController.remove
);

export default router;
