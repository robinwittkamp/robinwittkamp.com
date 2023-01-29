import { definePreview } from 'next-sanity/preview';

import { dataset, projectId } from './client';

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`);
}
const usePreview = definePreview({ projectId, dataset, onPublicAccessOnly });

export default usePreview;
