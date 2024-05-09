import fs from 'fs';
import path from 'path';
import swagger from 'swagger-ui-express';
import {Application} from 'express';

export function configureSwagger(app: Application) {
  const specPath = path.resolve('./dist/assets/spec.json');
  const file = fs.readFileSync(specPath, 'utf-8');
  const spec = JSON.parse(file);

  app.use('/swagger', swagger.serve, swagger.setup(spec));
}