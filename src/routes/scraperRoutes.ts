import express from 'express';
import { initiateScrapingTask } from '../controllers/scraperController';

const router = express.Router();

router.post('/scrape', initiateScrapingTask);

export default router;