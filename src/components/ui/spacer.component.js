import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native';
import spaces from '../../utils/theme/spaces.json';
export const Spacer = ({children, orientation = '', style = null}) => {
  const styles = useMemo(() => {
    if (!orientation) {
      return [];
    }

    const classes = orientation
      .split(' ')
      .map(fakeClass => {
        const fakeClassNoSpaces = fakeClass.trim();
        // remove empty string and test the pattern
        if (
          fakeClassNoSpaces &&
          /(p|m)(t|b|l|r)?-(xs|sm|md|lg|xl)/g.test(fakeClassNoSpaces)
        ) {
          const [property, value] = fakeClassNoSpaces.split('-');
          //if it's a single property
          let propertyName = '';
          if (property.length === 1) {
            if (property === 'p') {
              propertyName = 'padding';
            } else if (property === 'm') {
              propertyName = 'margin';
            } else {
              return null; //fallback
            }
          } else {
            if (property.substr(0, 1) === 'p') {
              propertyName = 'padding';
            } else if (property.substr(0, 1) === 'm') {
              propertyName = 'margin';
            } else {
              return null;
            }

            switch (property.substr(1, 1)) {
              case 't':
                propertyName = `${propertyName}Top`;
                break;
              case 'b':
                propertyName = `${propertyName}Bottom`;
                break;
              case 'l':
                propertyName = `${propertyName}Left`;
                break;
              case 'r':
                propertyName = `${propertyName}Right`;
                break;
              default:
                return null;
            }
          }

          return {
            [propertyName]: spaces[value],
          };
        }

        return null;
      })
      .filter(c => !!c)
      .reduce((acum, curr) => {
        return {
          ...acum,
          ...curr,
        };
      }, {});

    return classes;
  }, [orientation]);

  return (
    <SafeAreaView style={[styles, ...(Array.isArray(style) ? style : [style])]}>
      {children}
    </SafeAreaView>
  );
};
