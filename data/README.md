# Data Management

Th```typescript
// Import specific data
import { projects, publications, funProjects, experiences } from '@/data';

// Import helper functions
import { getFeaturedProjects, getFeaturedPublications, getFeaturedExperiences } from '@/data';

// Import types
import type { Project, Publication, FunProject, Experience } from '@/data';

// Import configuration
import { siteConfig } from '@/data';

```contains all the centralized data for your digital resume portfolio. This approach provides a single source of truth for all your content, making it easy to maintain and update.

## Structure

```

data/
├── config.ts # Site configuration and settings
├── projects.ts # Main portfolio projects
├── publications.ts # Academic publications and research
├── fun-projects.ts # Fun/personal projects (for /fun route)
├── experiences.ts # Professional work experience
├── index.ts # Central exports
└── README.md # This file

````

## Usage

### Importing Data

```typescript
// Import specific data
import { projects, publications, funProjects } from "@/data";

// Import helper functions
import { getFeaturedProjects, getFeaturedPublications } from "@/data";

// Import types
import type { Project, Publication, FunProject } from "@/data";

// Import configuration
import { siteConfig } from "@/data";
````

### Adding New Projects

1. **Main Projects** (`projects.ts`):

   - Add to the `projects` array
   - Set `featured: true` for homepage display
   - Include all required fields: `id`, `title`, `description`, etc.

2. **Publications** (`publications.ts`):

   - Add to the `publications` array
   - Set `featured: true` for homepage display
   - Include DOI, authors array, and proper status

3. **Fun Projects** (`fun-projects.ts`):

   - Add to the `funProjects` array
   - Include `technos` array for technology logos
   - Use HTML in descriptions for formatting

4. **Experiences** (`experiences.ts`):
   - Add to the `experiences` array
   - Set `featured: true` for homepage display
   - Include achievements, technologies, and location

### Configuration

Update `config.ts` to:

- Change site metadata and branding
- Update social links and contact information
- Toggle features on/off
- Control how many items are displayed

### Helper Functions

Each data file includes helper functions:

- `getFeatured*()` - Get only featured items
- `get*ByCategory()` - Filter by category
- `get*ById()` - Find specific item

## Examples

### Adding a New Project

```typescript
// In projects.ts
{
  id: 'my-new-project',
  title: 'My New Project',
  description: 'A brief description of what this project does.',
  longDescription: 'A longer, more detailed description...',
  technologies: ['React', 'TypeScript', 'Next.js'],
  githubUrl: 'https://github.com/username/project',
  liveUrl: 'https://project-demo.com',
  featured: true,
  category: 'web',
  startDate: '2024-01-01',
  endDate: '2024-06-01',
  status: 'completed'
}
```

### Adding a New Publication

```typescript
// In publications.ts
{
  id: 'my-research-paper',
  title: 'My Research Paper Title',
  authors: ['Your Name', 'Co-author Name'],
  journal: 'Journal Name',
  year: '2024',
  type: 'journal',
  status: 'published',
  abstract: 'Brief abstract of the research...',
  doi: '10.1000/example',
  keywords: ['keyword1', 'keyword2'],
  featured: true
}
```

### Adding a New Experience

```typescript
// In experiences.ts
{
  id: 'my-new-job',
  company: 'Amazing Company Inc.',
  logo: '/company-logo.png',
  title: 'Senior Data Scientist',
  location: 'Remote',
  startDate: 'Jan 2024',
  endDate: 'Present',
  description: 'Led data science initiatives and machine learning projects...',
  achievements: [
    'Increased model accuracy by 25%',
    'Led team of 3 data scientists',
    'Implemented MLOps best practices'
  ],
  technologies: ['Python', 'TensorFlow', 'AWS', 'Docker'],
  type: 'full-time',
  featured: true
}
```

## Benefits of This Approach

1. **Single Source of Truth**: All content is centralized and consistent
2. **Type Safety**: TypeScript interfaces ensure data consistency
3. **Easy Maintenance**: Update content in one place
4. **Reusability**: Same data can be used across multiple components
5. **Scalability**: Easy to add new data types or fields
6. **Configuration**: Global settings in one place

## File Updates Required

When adding new content, these components will automatically update:

- `/components/projects.tsx` (uses `getFeaturedProjects()`)
- `/components/publications.tsx` (uses `publications`)
- `/app/fun/page.tsx` (uses `funProjects`)

No component code changes needed - just update the data files!
