/**
 * Canvas Configuration - Canvas Bar and Context Menu
 *
 * @see https://img.ly/docs/cesdk/js/user-interface/customization/canvas-632c8e/
 */

import type CreativeEditorSDK from '@cesdk/cesdk-js';

/**
 * Configure the canvas bar and context menu.
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 */
export function setupCanvas(cesdk: CreativeEditorSDK): void {
  // #region Canvas Bar
  cesdk.ui.setComponentOrder({ in: 'ly.img.canvas.bar', at: 'bottom' }, [
    'ly.img.settings.canvasBar',
    'ly.img.spacer',
    'ly.img.page.add.canvasBar',
    'ly.img.spacer'
  ]);
  // #endregion

  // #region Canvas Menu - Transform Mode
  cesdk.ui.setComponentOrder(
    { in: 'ly.img.canvas.menu', when: { editMode: 'Transform' } },
    [
      'ly.img.group.enter.canvasMenu',
      'ly.img.group.select.canvasMenu',
      'ly.img.page.moveUp.canvasMenu',
      'ly.img.page.moveDown.canvasMenu',
      'ly.img.separator',
      'ly.img.text.edit.canvasMenu',
      'ly.img.replace.canvasMenu',
      'ly.img.separator',
      'ly.img.bringForward.canvasMenu',
      'ly.img.sendBackward.canvasMenu',
      'ly.img.separator',
      'ly.img.duplicate.canvasMenu',
      'ly.img.delete.canvasMenu',
      'ly.img.separator',
      'ly.img.options.canvasMenu'
    ]
  );
  // #endregion

  // #region Canvas Menu - Vector Mode
  cesdk.ui.setComponentOrder(
    { in: 'ly.img.canvas.menu', when: { editMode: 'Vector' } },
    []
  );
  // #endregion

  // #region Canvas Menu - Text Mode
  cesdk.ui.setComponentOrder(
    { in: 'ly.img.canvas.menu', when: { editMode: 'Text' } },
    [
      'ly.img.selection.canvasMenu',
      'ly.img.separator',
      'ly.img.text.color.canvasMenu',
      'ly.img.separator',
      'ly.img.text.bold.canvasMenu',
      'ly.img.text.italic.canvasMenu',
      'ly.img.text.underline.canvasMenu',
      'ly.img.text.strikethrough.canvasMenu',
      'ly.img.separator',
      'ly.img.text.list.unordered.canvasMenu',
      'ly.img.text.list.ordered.canvasMenu',
      'ly.img.separator',
      'ly.img.text.variables.canvasMenu'
    ]
  );
  // #endregion
}
