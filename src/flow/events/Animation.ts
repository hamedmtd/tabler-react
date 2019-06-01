/**
 * interface definitions for Animation EventHandling
 */

export interface Animation {
  /**
   * Handle Animation Start
   */
  onAnimationStart?: (event: React.AnimationEvent) => any;
  /**
   * Handle Animation End
   */
  onAnimationEnd?: (event: React.AnimationEvent) => any;
  /**
   * Handle Animation Interation
   */
  onAnimationIteration?: (event: React.AnimationEvent) => any;
}
