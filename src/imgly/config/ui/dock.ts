/**
 * Dock Configuration - Left Side Asset Panel
 *
 * @see https://img.ly/docs/cesdk/js/user-interface/customization/dock-cb916c/
 */

import type CreativeEditorSDK from '@cesdk/cesdk-js';

/**
 * Configure the dock panel layout.
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 */
export function setupDock(cesdk: CreativeEditorSDK): void {
  // #region Dock Appearance
  cesdk.engine.editor.setSetting('dock/hideLabels', false);
  cesdk.engine.editor.setSetting('dock/iconSize', 'large');
  // #endregion

  // #region Dock Order
  cesdk.ui.setComponentOrder({ in: 'ly.img.dock' }, [
    {
      id: 'ly.img.assetLibrary.dock',
      key: 'ly.img.templates',
      icon: '@imgly/Template',
      label: 'libraries.ly.img.templates.label',
      entries: ['ly.img.templates']
    },
    {
      id: 'ly.img.separator',
      key: 'ly.img.separator'
    },
    {
      id: 'ly.img.assetLibrary.dock',
      key: 'ly.img.elements',
      icon: '@imgly/Library',
      label: 'component.library.elements',
      entries: [
        'ly.img.image',
        'ly.img.text',
        'ly.img.vector.shape',
        'ly.img.sticker'
      ]
    },
    {
      id: 'ly.img.assetLibrary.dock',
      key: 'ly.img.upload',
      icon: '@imgly/Upload',
      label: 'libraries.ly.img.upload.label',
      entries: ['ly.img.upload']
    },
    {
      id: 'ly.img.assetLibrary.dock',
      key: 'ly.img.image',
      icon: '@imgly/Image',
      label: 'libraries.ly.img.image.label',
      entries: ['ly.img.image', 'ly.img.image.upload']
    },
    {
      id: 'ly.img.assetLibrary.dock',
      key: 'ly.img.text',
      icon: '@imgly/Text',
      label: 'libraries.ly.img.text.label',
      entries: ['ly.img.text']
    },
    {
      id: 'ly.img.assetLibrary.dock',
      key: 'ly.img.vector.shape',
      icon: '@imgly/Shapes',
      label: 'libraries.ly.img.vector.shape.label',
      entries: ['ly.img.vector.shape']
    },
    {
      id: 'ly.img.assetLibrary.dock',
      key: 'ly.img.sticker',
      icon: '@imgly/Sticker',
      label: 'libraries.ly.img.sticker.label',
      entries: ['ly.img.sticker']
    }
  ]);
  // #endregion
}
