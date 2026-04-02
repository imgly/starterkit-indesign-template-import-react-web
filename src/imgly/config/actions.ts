/**
 * Actions Configuration - Override Default Actions and Add Custom Actions
 *
 * This file shows how to override CE.SDK's default actions with your own
 * implementations for the Advanced Editor starterkit.
 *
 * @see https://img.ly/docs/cesdk/js/actions-6ch24x
 * @see https://img.ly/docs/cesdk/js/export/
 */

import type CreativeEditorSDK from '@cesdk/cesdk-js';

/**
 * Register actions and configure the navigation bar.
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 */
export function setupActions(cesdk: CreativeEditorSDK): void {
  // #region Save Scene Action
  cesdk.actions.register('saveScene', async () => {
    const scene = await cesdk.engine.scene.saveToString();
    await cesdk.utils.downloadFile(scene, 'text/plain;charset=UTF-8');
  });
  // #endregion

  // #region Export Design Action
  cesdk.actions.register('exportDesign', async (exportOptions) => {
    const { blobs, options } = await cesdk.utils.export(exportOptions);
    await cesdk.utils.downloadFile(blobs[0], options.mimeType);
  });
  // #endregion

  // #region Import Scene Action
  cesdk.actions.register('importScene', async ({ format = 'scene' }) => {
    if (format === 'scene') {
      const scene = await cesdk.utils.loadFile({
        accept: '.scene',
        returnType: 'text'
      });
      await cesdk.engine.scene.loadFromString(scene);
    } else {
      const blobURL = await cesdk.utils.loadFile({
        accept: '.zip',
        returnType: 'objectURL'
      });
      try {
        await cesdk.engine.scene.loadFromArchiveURL(blobURL);
      } finally {
        URL.revokeObjectURL(blobURL);
      }
    }

    await cesdk.actions.run('zoom.toPage', { page: 'first' });
  });
  // #endregion

  // #region Export Scene Action
  cesdk.actions.register('exportScene', async ({ format = 'scene' }) => {
    await cesdk.utils.downloadFile(
      format === 'archive'
        ? await cesdk.engine.scene.saveToArchive()
        : await cesdk.engine.scene.saveToString(),
      format === 'archive' ? 'application/zip' : 'text/plain;charset=UTF-8'
    );
  });
  // #endregion

  // #region Upload File Action
  cesdk.actions.register('uploadFile', (file, onProgress, context) => {
    return cesdk.utils.localUpload(file, context);
  });
  // #endregion

  // #region Export Image Action
  cesdk.actions.register('exportImage', async () => {
    const { blobs, options } = await cesdk.utils.export({
      mimeType: 'image/png',
      targetWidth: 1080,
      targetHeight: 1080
    });
    await cesdk.utils.downloadFile(blobs[0], options.mimeType);
  });
  // #endregion
}
