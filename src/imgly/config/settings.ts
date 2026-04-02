/**
 * Engine Settings Configuration - Customize Editor Behavior and Appearance
 *
 * This file configures low-level engine settings that control how the editor
 * behaves and appears. Settings are applied via `engine.editor.setSetting()`.
 *
 * @see https://img.ly/docs/cesdk/js/settings-970c98/
 */

import type { CreativeEngine } from '@cesdk/cesdk-js';

/**
 * Configure engine settings for the advanced editor.
 *
 * Settings control the underlying behavior of the engine, including:
 * - How users interact with blocks (handles, gestures, clicks)
 * - Visual appearance (colors, overlays, guides)
 * - Performance optimizations
 *
 * @param engine - The CreativeEngine instance to configure
 */
export function setupSettings(engine: CreativeEngine): void {
  // #region Interaction Settings
  engine.editor.setSetting('doubleClickToCropEnabled', true);
  engine.editor.setSetting('doubleClickSelectionMode', 'Hierarchical');
  // #endregion

  // #region Page Settings
  engine.editor.setSetting('page/allowCropInteraction', true);
  engine.editor.setSetting('page/dimOutOfPageAreas', true);
  engine.editor.setSetting('page/moveChildrenWhenCroppingFill', false);
  engine.editor.setSetting('page/selectWhenNoBlocksSelected', false);
  // #endregion

  // #region Page Title Settings
  engine.editor.setSetting('page/title/show', true);
  engine.editor.setSetting('page/title/showOnSinglePage', true);
  engine.editor.setSetting('page/title/showPageTitleTemplate', true);
  engine.editor.setSetting('page/title/appendPageName', true);
  engine.editor.setSetting('page/title/separator', '-');
  // Allow editing page titles (requires CE.SDK 1.44+)
  // engine.editor.setSetting('page/title/canEdit', true);
  // #endregion

  // ============================================================================
  // GRID SETTINGS
  // Configure grid overlay and snap-to-grid
  // ============================================================================

  // #region Grid Settings
  // Enable background grid and snap-to-grid for precise alignment
  // engine.editor.setSettingBool('grid/enabled', true);
  // engine.editor.setSettingBool('grid/snapEnabled', true);
  // #endregion

  // #region Placeholder Settings
  engine.editor.setSetting('placeholderControls/showOverlay', true);
  engine.editor.setSetting('placeholderControls/showButton', true);
  // #endregion

  // #region Color Picker Settings
  engine.editor.setSetting('colorPicker/colorMode', 'Any');
  // #endregion
}
