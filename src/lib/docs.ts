import fs from 'fs';
import path from 'path';

// Base path for documentation files
const docsDirectory = path.join(process.cwd(), 'src/content/docs');

// Get the content of a markdown file
export async function getDocContent(slug?: string): Promise<string> {
  try {
    const targetSlug = slug || 'introduction';
    const fullPath = path.join(docsDirectory, `${targetSlug}.md`);
    
    if (fs.existsSync(fullPath)) {
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      return fileContents;
    } else {
      console.warn(`Documentation file not found: ${fullPath}`);
      return '# 404 - Document Not Found\n\nSorry, the requested document could not be found.';
    }
  } catch (error) {
    console.error('Error reading document:', error);
    return '# Error\n\nThere was an error loading this document.';
  }
}

// Get all available documentation pages
export function getAllDocs(): string[] {
  try {
    const fileNames = fs.readdirSync(docsDirectory);
    return fileNames
      .filter(filename => filename.endsWith('.md'))
      .map(filename => filename.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading docs directory:', error);
    return [];
  }
} 