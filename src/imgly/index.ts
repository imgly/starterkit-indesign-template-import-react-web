/**
 * CE.SDK InDesign Template Import Editor - Initialization Module
 *
 * This module provides the main entry point for initializing the InDesign template
 * import editor. Import and call `initInDesignTemplateImportEditor()` to configure
 * a CE.SDK instance for editing imported InDesign (IDML) templates.
 *
 * @see https://img.ly/docs/cesdk/js/features/
 */

import CreativeEditorSDK from '@cesdk/cesdk-js';

import {
  BlurAssetSource,
  ColorPaletteAssetSource,
  CropPresetsAssetSource,
  DemoAssetSources,
  EffectsAssetSource,
  FiltersAssetSource,
  PagePresetsAssetSource,
  StickerAssetSource,
  TextAssetSource,
  TextComponentAssetSource,
  TypefaceAssetSource,
  UploadAssetSources,
  VectorShapeAssetSource
} from '@cesdk/cesdk-js/plugins';

// Configuration plugin
import { InDesignTemplateImportConfig } from './config/plugin';

// Re-export for external use
export { InDesignTemplateImportConfig } from './config/plugin';

/**
 * Options for initializing the InDesign Template Import Editor.
 */
export interface InDesignTemplateImportEditorOptions {
  /**
   * Callback invoked when the back button is clicked.
   * Use this to close the editor or navigate back.
   */
  onBack?: () => void;
}

/**
 * Initialize the CE.SDK InDesign Template Import Editor.
 *
 * This function configures a CE.SDK instance with:
 * - Design editor UI configuration
 * - Asset source plugins (templates, images, shapes, text, etc.)
 * - Actions dropdown in navigation bar
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 * @param options - Optional configuration options
 */
export async function initInDesignTemplateImportEditor(
  cesdk: CreativeEditorSDK,
  options: InDesignTemplateImportEditorOptions = {}
) {
  // ============================================================================
  // Configuration Plugin
  // ============================================================================

  // Add the InDesign template import configuration plugin
  // This sets up the UI, features, settings, and i18n for design editing
  await cesdk.addPlugin(new InDesignTemplateImportConfig());

  // ============================================================================
  // Editor Settings
  // ============================================================================

  cesdk.engine.editor.setSetting('page/title/show', false);

  // ============================================================================
  // Asset Source Plugins
  // ============================================================================

  // Asset source plugins provide built-in asset libraries

  // Blur presets for blur effects
  await cesdk.addPlugin(new BlurAssetSource());

  // Color palettes for design
  await cesdk.addPlugin(new ColorPaletteAssetSource());

  // Crop presets (aspect ratios)
  await cesdk.addPlugin(new CropPresetsAssetSource());

  // Local upload sources (images)
  await cesdk.addPlugin(
    new UploadAssetSources({
      include: ['ly.img.image.upload']
    })
  );

  // Demo assets (templates, images)
  await cesdk.addPlugin(
    new DemoAssetSources({
      include: ['ly.img.image.*']
    })
  );

  // Visual effects (adjustments, vignette, etc.)
  await cesdk.addPlugin(new EffectsAssetSource());

  // Photo filters (LUT, duotone)
  await cesdk.addPlugin(new FiltersAssetSource());

  // Page format presets (A4, Letter, social media sizes)
  await cesdk.addPlugin(new PagePresetsAssetSource());

  // Sticker assets
  await cesdk.addPlugin(new StickerAssetSource());

  // Text presets (headlines, body text styles)
  await cesdk.addPlugin(new TextAssetSource());

  // Text components (pre-designed text layouts)
  await cesdk.addPlugin(new TextComponentAssetSource());

  // Typeface/font assets
  await cesdk.addPlugin(new TypefaceAssetSource());

  // Vector shapes (rectangles, circles, arrows, etc.)
  await cesdk.addPlugin(new VectorShapeAssetSource());

  // ============================================================================
  // Navigation Bar Actions
  // ============================================================================

  // Add back button at the start of the navigation bar
  if (options.onBack) {
    cesdk.ui.insertOrderComponent(
      { in: 'ly.img.navigation.bar', position: 'start' },
      {
        id: 'ly.img.back.navigationBar',
        onClick: options.onBack
      }
    );
  }

  // Configure the actions dropdown in the navigation bar
  cesdk.ui.insertOrderComponent(
    { in: 'ly.img.navigation.bar', position: 'end' },
    {
      id: 'ly.img.actions.navigationBar',
      children: [
        'ly.img.exportImage.navigationBar',
        'ly.img.exportPDF.navigationBar'
      ]
    }
  );

  // ============================================================================
  // Export Action
  // ============================================================================

  // Register export action for download
  cesdk.actions.register('exportDesign', async (exportOptions) => {
    const { blobs, options } = await cesdk.utils.export(exportOptions);
    await cesdk.utils.downloadFile(blobs[0], options.mimeType);
  });

  // ============================================================================
  // Upload Action
  // ============================================================================

  // Register upload action for local file uploads
  cesdk.actions.register('uploadFile', (file, onProgress, context) => {
    return cesdk.utils.localUpload(file, context);
  });
}
