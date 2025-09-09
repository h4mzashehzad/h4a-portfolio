#!/usr/bin/env node

/**
 * Script to update sitemap.xml with current timestamp
 * Run this script during build process to keep lastmod dates fresh
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const currentDate = new Date().toISOString();

try {
  let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  // Update all lastmod entries with current timestamp
  sitemapContent = sitemapContent.replace(
    /<lastmod>.*?<\/lastmod>/g,
    `<lastmod>${currentDate}</lastmod>`
  );
  
  fs.writeFileSync(sitemapPath, sitemapContent);
  console.log('✅ Sitemap updated with current timestamp:', currentDate);
} catch (error) {
  console.error('❌ Error updating sitemap:', error.message);
  process.exit(1);
}