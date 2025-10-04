import { Router } from 'express';
import {
  publishListing,
  getListings,
  getListingById,
  updateListingStatus,
} from '../controllers/listingController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

// All listing routes require authentication
router.use(authenticateToken);

// Listing operations
router.post('/publish', publishListing);
router.get('/', getListings);
router.get('/:id', getListingById);
router.patch('/:id/status', updateListingStatus);

export default router;