/**
 * Navigation Bar Configuration - Top Bar with Actions and Controls
 *
 * @see https://img.ly/docs/cesdk/js/user-interface/customization/navigation-bar-4e5d39/
 */

import type CreativeEditorSDK from '@cesdk/cesdk-js';

/**
 * Configure the navigation bar layout and behavior.
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 */
export function setupNavigationBar(cesdk: CreativeEditorSDK): void {
  // #region Navigation Bar Order
  cesdk.ui.setComponentOrder({ in: 'ly.img.navigation.bar' }, [
    'ly.img.documentSettings.navigationBar',
    'ly.img.undoRedo.navigationBar',
    'ly.img.spacer',
    'ly.img.title.navigationBar',
    'ly.img.spacer',
    'ly.img.zoom.navigationBar',
    'ly.img.preview.navigationBar'
  ]);
  // #endregion
}
