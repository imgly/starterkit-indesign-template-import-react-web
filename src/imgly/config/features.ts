/**
 * Feature Configuration - Enable/Disable Editor Capabilities
 *
 * This file configures which features are available in the advanced editor.
 * Features control the visibility and availability of UI elements and functionality.
 *
 * ## Feature System Overview
 *
 * - `cesdk.feature.enable(features)` - Enable features with default predicates
 * - `cesdk.feature.disable(features)` - Disable features completely
 * - `cesdk.feature.set(feature, predicate)` - Set custom predicate for conditional availability
 *
 * ## Glob Pattern Support
 *
 * Use glob patterns to enable/disable entire feature groups:
 * - `'ly.img.text.*'` - All text features
 * - `'ly.img.crop.*'` - All crop features
 * - `'ly.img.video.*'` - All video features
 *
 * @see https://img.ly/docs/cesdk/js/user-interface/customization/disable-or-enable-f058e2/
 */

import type CreativeEditorSDK from '@cesdk/cesdk-js';

/**
 * Configure which features are enabled in the advanced editor.
 *
 * Features are organized by category for easy customization.
 * Uncomment or add features as needed for your use case.
 *
 * @param cesdk - The CreativeEditorSDK instance to configure
 */
export function setupFeatures(cesdk: CreativeEditorSDK): void {
  cesdk.feature.enable([
    // ============================================================================
    // NAVIGATION FEATURES
    // Configure the top navigation bar visibility and controls
    // ============================================================================

    // #region Navigation Features
    'ly.img.navigation' /* All navigation features */,
    // #endregion

    // ============================================================================
    // TEXT FEATURES
    // Configure text editing capabilities
    // ============================================================================

    // #region Text Features
    'ly.img.text' /* All text features */,
    // #endregion

    // ============================================================================
    // CROP FEATURES
    // Configure image and block cropping capabilities
    // ============================================================================

    // #region Crop Features
    'ly.img.crop' /* All crop features */,
    // #endregion

    // ============================================================================
    // TRANSFORM FEATURES
    // Configure block position, size, and rotation controls
    // ============================================================================

    // #region Transform Features
    'ly.img.transform' /* All transform features */,
    // #endregion

    // ============================================================================
    // EFFECTS FEATURES
    // Configure visual effects and adjustments
    // ============================================================================

    // #region Effects Features
    'ly.img.filter' /* Filter button */,
    'ly.img.adjustment' /* Adjustments button */,
    'ly.img.effect' /* Effect button */,
    'ly.img.blur' /* Blur button */,
    'ly.img.shadow' /* Shadow button */,
    'ly.img.cutout' /* Cutout controls */,
    // #endregion

    // ============================================================================
    // CANVAS FEATURES
    // Configure the canvas area and context menu
    // ============================================================================

    // #region Canvas Features
    'ly.img.canvas' /* All canvas features */,
    // #endregion

    // ============================================================================
    // INSPECTOR FEATURES
    // Configure the inspector panel and toolbar
    // ============================================================================

    // #region Inspector Features
    'ly.img.inspector' /* All inspector features */,
    // #endregion

    // ============================================================================
    // GENERAL EDITING FEATURES
    // Configure common editing operations
    // ============================================================================

    // #region General Editing Features
    'ly.img.delete' /* Delete button and keyboard shortcut */,
    'ly.img.duplicate' /* Duplicate button and copy/paste */,
    'ly.img.group' /* Group and Ungroup buttons */,
    'ly.img.replace' /* Replace button and all replace features */,
    // #endregion

    // ============================================================================
    // PAGE FEATURES
    // Configure multi-page functionality
    // ============================================================================

    // #region Page Features
    'ly.img.page' /* All page features */,
    // #endregion

    // ============================================================================
    // STYLING FEATURES
    // Configure block appearance options
    // ============================================================================

    // #region Styling Features
    // 'ly.img.fill' /* Fill button and Fill Panel */,  // Use specific children instead
    'ly.img.fill.color' /* Solid and gradient fill controls */,
    'ly.img.fill.image' /* Image fill controls and crop */,
    // 'ly.img.fill.video', /* Video fill - DISABLED for design editors */
    'ly.img.stroke' /* Stroke controls (Color, Width) */,
    'ly.img.opacity' /* Opacity controls */,
    'ly.img.blendMode' /* Blend mode controls */,
    'ly.img.shape.options' /* Shape Options dropdown */,
    'ly.img.combine' /* Combine dropdown (shapes/cutouts) */,
    'ly.img.position' /* Position dropdown */,
    'ly.img.trim' /* Trim button (video mode) */,
    // #endregion

    // ============================================================================
    // NOTIFICATION FEATURES
    // Configure user feedback notifications
    // ============================================================================

    // #region Notification Features
    'ly.img.notifications' /* All notification features */,
    // #endregion

    // ============================================================================
    // DOCK AND LIBRARY FEATURES
    // Configure the asset dock and library panels
    // ============================================================================

    // #region Dock and Library Features
    'ly.img.dock' /* Dock visibility */,
    'ly.img.library' /* All library features */,
    // #endregion

    // ============================================================================
    // PLACEHOLDER FEATURES
    // Configure template placeholder functionality
    // ============================================================================

    // #region Placeholder Features
    'ly.img.placeholder' /* All placeholder features */,
    // #endregion

    // ============================================================================
    // ADVANCED FEATURES
    // Configure advanced editing capabilities
    // ============================================================================

    // #region Advanced Features
    'ly.img.rulers' /* Rulers visibility */,
    'ly.img.vectorEdit' /* Vector editing mode */,
    // #endregion

    // ============================================================================
    // VIDEO FEATURES
    // Uncomment to enable video editing functionality
    // ============================================================================

    // #region Video Features
    // 'ly.img.video', /* All video features */
    // 'ly.img.volume', /* Volume control (video mode) */
    // 'ly.img.playbackSpeed', /* Playback speed control */
    // 'ly.img.animations', /* Animations button (video mode) */
    // #endregion

    // ============================================================================
    // DEVELOPMENT FEATURES
    // Uncomment for development and debugging
    // ============================================================================

    // #region Development Features
    // 'ly.img.settings', /* Quick settings menu for development */
    // #endregion

    // ============================================================================
    // PREVIEW FEATURES
    // Configure preview functionality
    // ============================================================================

    // #region Preview Features
    'ly.img.preview' /* Preview button (Creator role only) */
    // #endregion
  ]);
}
