import * as React from 'react';
import { mergeClasses } from '@fluentui/react-make-styles';
import {
  firstMarkClassName,
  lastMarkClassName,
  markClassName,
  markContainerClassName,
  markLabelClassName,
} from '../components/Slider/useSliderStyles';

/**
 * Renders the marks
 *
 * @param markValues The marks percentage position relative to their individual positions.
 * @param marks The provided marks prop from the Slider component.
 */
export const renderMarks = (
  markValues: number[],
  marks: boolean | (number | { value: number; label?: string | JSX.Element; mark?: JSX.Element })[],
) =>
  markValues.map((value, i) => {
    const marksItem = typeof marks === 'boolean' ? undefined : marks[i];

    return (
      <div className={markContainerClassName} key={`markItemContainer-${i}`}>
        {marksItem !== undefined && typeof marksItem === 'object' && marksItem.mark ? (
          marksItem.mark
        ) : (
          <div
            className={mergeClasses(
              markClassName,
              markValues[i] === 0 && firstMarkClassName,
              markValues[i] === 100 && lastMarkClassName,
            )}
            key={`mark-${i}`}
          />
        )}
        {marksItem !== undefined && typeof marksItem === 'object' && marksItem.label && (
          <div className={markLabelClassName} key={`markLabel-${i}`}>
            {marksItem.label}
          </div>
        )}
      </div>
    );
  });
